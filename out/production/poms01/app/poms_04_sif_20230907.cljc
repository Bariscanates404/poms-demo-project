(ns app.poms-04-sif-20230907
  #?(:cljs (:require-macros [app.poms-03-crfp-20230906 :refer [with-reagent]]))
  (:require contrib.str
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui]
            [clojure.string :as str]
            #?(:clj [datomic.client.api :as d])
            #?(:cljs ["react" :as react])
            #?(:cljs ["slate" :refer [createEditor]])
            #?(:cljs ["slate-react" :refer [Slate Editable withReact]])
            #?(:cljs [reagent.core :as r])
            #?(:cljs [reagent.dom :as rdom])
            #?(:cljs ["react-dom/client" :as ReactDom])
            #?(:cljs ["react-data-table-component$default" :as DataTable])
            )
  )

;;- BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE ;;
#?(:cljs (defn create-root
           "See https://reactjs.org/docs/react-dom-client.html#createroot"
           ([node] (create-root node (str (gensym))))
           ([node id-prefix]
            (ReactDom/createRoot node #js {:identifierPrefix id-prefix}))))
#?(:cljs (defn render [root & args]
           (.render root (r/as-element (into [:f>] args)))))
(defmacro with-reagent [& args]
  `(dom/div
     (let [root# (create-root dom/node)]
       (render root# ~@args)
       (e/on-unmount #(.unmount root#)))))
;; - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE  ;;



(defn data [db]
  (vec (map (fn [[id title company user]]
              {:id      id
               :title   title
               :company company
               :user    user})
            (vec (->>
                   (d/q
                     '[:find ?pr-id ?pr-t ?pr-c ?pr-u
                       :where
                       [?id :project/id ?pr-id]
                       [?id :project/project-title ?pr-t]
                       [?id :project/client-company-id ?pr-c-i]
                       [?pr-c-i :company/brand-name ?pr-c]
                       [?id :project/client-user-id ?pr-u-i]
                       [?pr-u-i :user/name ?pr-u]

                       ]
                     db)
                   (sort-by first)
                   )))))

#?(:cljs (defn MyComponent [data] [:> DataTable {:columns #js[#js {:name "project-id", :selector (fn [row] (.-id row)), :sortable true}
                                                              #js {:name "title", :selector (fn [row] (.-title row)), :sortable true}
                                                              #js {:name "company", :selector (fn [row] (.-company row)), :sortable true}
                                                              #js {:name "user", :selector (fn [row] (.-user row)), :sortable true}
                                                              ], :data data :direction "auto"
                                                 :pagination "true"
                                                 }]))


;; bu kısımda zorunlu
(e/def conn)
(e/def db)
;; bu kısımda zorunlu


(e/defn sif-page []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (d/db conn)]
              ;bind etmek zorundayız dbyi calıstırmak için.
              (e/client
                (dom/element "style" (dom/text "
                  ul{list-style-type: none; margin: 0; padding: 0; background-color: black; overflow: auto; }
                  li {float: left;}
                  li a {color: white; padding: 15px 25px; display: inline-block; text-align: center; text-decoration: none;}
                  .home {background-color: darkred;}
                  li a:hover {
                  background-color: #405d27;
                  }"))
                (dom/ul (dom/props {:class "ul"})
                        (dom/li
                          (dom/a (dom/props {:class "home" :href "http://localhost:8080/"})
                                 (dom/text "Home")))
                        (dom/li
                          (dom/a (dom/props {:href "http://localhost:8080/(app.poms-00-signup-20230831!signup-page)"})
                                 (dom/text "Sign Up")))
                        (dom/li
                          (dom/a (dom/props {:href "http://localhost:8080/(app.poms-01-login-20230828!login-page)"})
                                 (dom/text "Log In")))
                        (dom/li
                          (dom/a (dom/props {:href "http://localhost:8080/(app.poms-02-cp-20230830!create-project)"})
                                 (dom/text "Create Project")))
                        (dom/li
                          (dom/a (dom/props {:href "http://localhost:8080/(app.poms-03-crfp-20230906!create-rfp)"})
                                 (dom/text "Create Rfp")))
                        (dom/li
                          (dom/a (dom/props {:href "http://localhost:8080/(app.poms-04-sif-20230907!sif-page)"})
                                 (dom/text "Supplier Information Screen")))
                        (dom/li
                          (dom/a (dom/props {:href "http://localhost:8080/(app.poms-05-addcompany-20230907!add-company)"})
                                 (dom/text "Add New Company")))
                        (dom/li
                          (dom/a (dom/props {:href "http://localhost:8080/(app.poms-06-ph-20230915!ph-page)"})
                                 (dom/text "Project Highlights")))
                        (dom/li
                          (dom/a (dom/props {:href "http://localhost:8080/(app.poms-07-app-20230915!app-page)"})
                                 (dom/text "Add New Proposal")))
                        (dom/li
                          (dom/a (dom/props {:href "http://localhost:8080/(app.poms-08-ap-20230918!approve-proposal)"})
                                 (dom/text "Approve Proposal")))
                        (dom/li
                          (dom/a (dom/props {:href "http://localhost:8080/(app.poms-09-ot-20230920!operation-track-page)"})
                                 (dom/text "Operation Track")))
                        )

                (dom/div
                  (dom/form
                    (dom/props {:il       "FORM"
                                :onSubmit "false"

                                })
                    (dom/fieldset
                      (dom/props {:name "FORM"
                                  })
                      (dom/legend
                        (dom/text "SUPPLIER INFORMATION SCREEN")
                        (dom/props {:style {:text-align "center"}}))



                      (dom/p (dom/props {:style {:padding-bottom "20px" :margin-top "0" :margin-left "55px"}}) (dom/text " Kayıtlı tedarikçiler listesi, (A'dan Z'ye) "))
                      (dom/div (dom/props {:style {:position "relative" :top "50%" :left "5%"}})
                               (dom/table
                                 (dom/tr
                                   (dom/th (dom/text "Tedarikçi Firma"))
                                   (dom/th (dom/text "Category"))
                                   (dom/th (dom/text "Phone Number"))
                                   )
                                 (e/for [[brand-name category phonenumber] (e/server (->>
                                                                                       (d/q
                                                                                         '[:find ?bn ?ctg ?pn
                                                                                           :where
                                                                                           [?id :company/id _]
                                                                                           [?id :company/brand-name ?bn]
                                                                                           [?id :company/category ?pr]
                                                                                           [?pr :db/ident ?ctg]
                                                                                           [?id :company/phonenumber ?pn]
                                                                                           ]
                                                                                         db)
                                                                                       (sort-by str)
                                                                                       )
                                                                                     )]
                                        (dom/tr
                                          (dom/td (dom/text brand-name))
                                          (dom/td (dom/text (case category
                                                              :service/bilgisayar  "Bilgisayar"
                                                              :service/seyahat "Seyahat"
                                                              :service/konaklama "Konaklama"
                                                              )))
                                          (dom/td (dom/text phonenumber))
                                          )

                                        )
                                 )
                               )

                      (dom/div (dom/props {:style {:float "left" :margin "auto" :padding-top "20px" :position "relative" :left "0%"}})
                               (dom/button
                                 (dom/on "click" #(set! js/window.location.href "http://localhost:8080/(app.poms-06-ph-20230915!ph-page)"))
                                 (dom/text "Proje Önizleme")
                                 (dom/props {:type  "button"
                                             :class "button1"
                                             :name  "login-button"
                                             :style {:text-align "center" :margin-left "0"}
                                             })
                                 )

                               (dom/button
                                 (dom/on "click" #(set! js/window.location.href "http://localhost:8080/(app.poms-05-addcompany-20230907!add-company)"))
                                 (dom/text "Tedarikci Ekle")
                                 (dom/props {:type  "button"
                                             :class "button1"
                                             :name  "login-button"
                                             :style {:text-align "center" :margin-left "50px" :padding-left "45px" :padding-right "45px"}
                                             })
                                 )
                               )
                      )
                    )
                  )
                )
              )
            )
          )
        )
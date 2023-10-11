(ns app.poms-00-signup-20230831
  (:require contrib.str
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.electric-ui4 :as ui]
            [clojure.string :as str]
            #?(:clj [datomic.client.api :as d])
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

(defn get-text [editor] (.-text (get (.-children (get (.-children editor) 0)) 0)))
(defn block [data on-change]
  #?(:cljs
     (let [[editor] (react/useState (fn [] (withReact (createEditor))))]
       [:> Slate
        {:editor       editor
         :initialValue [{:children
                         [{:text (:value data)}],
                         :type "paragraph"}]
         ;; :onChange on-change also works
         :onChange     (fn [value]
                         (println "onChange:" (-> value (get 0) (.-children) (get 0) (.-text)) ".  Not a plain function")
                         (on-change value))}
        [:> Editable
         {:onKeyDown (fn [e]

                       (when (= (.-key e) "Enter")
                         (println "onKeyDown: Enter, A plain function. ")

                         )

                       )}]])))
;; - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE - BOILER PLATE  ;;


(defn data [db]
  (vec (map (fn [[?bn ?ctg ?pn]]
              {:brandname     ?bn
               :category       (case ?ctg
                                 :service/bilgisayar  "Bilgisayar"
                                 :service/seyahat "Seyahat"
                                 :service/konaklama "Konaklama"
                                 )
               :contactnumber ?pn
               })
            (vec (->>
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
                   )))))

#?(:cljs (defn MyComponent [data] [:> DataTable {:columns #js[#js {:name "brand-name", :selector (fn [row] (.-brandname row)), :sortable true}
                                                              #js {:name "category", :selector (fn [row] (.-category row)), :sortable true}
                                                              #js {:name "contact-number", :selector (fn [row] (.-contactnumber row)), :sortable true}
                                                              ], :data data :direction "auto"
                                                 :pagination "true"
                                                 }]))


;; bu kısımda zorunlu
(e/def conn)
(e/def db)
;; bu kısımda zorunlu
(e/defn signup-page []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (d/db conn)]
              ;bind etmek zorundayız dbyi calıstırmak için.
              (e/client
                (let [!state (atom {
                                    :dt             (js/Date.) ;datepicker
                                    :dt2            (js/Date.) ;datepicker
                                    :username       ""
                                    :password       ""
                                    :formal-name    ""
                                    :formal-surname ""
                                    :brand-name     ""
                                    :email          ""
                                    :phonenumber    ""
                                    :category       "asd"
                                    })
                      dt (get (e/watch !state) :dt)
                      dt2 (get (e/watch !state) :dt2)
                      category (get (e/watch !state) :category)
                      username (get (e/watch !state) :username)
                      password (get (e/watch !state) :password)
                      formal-name (get (e/watch !state) :formal-name)
                      formal-surname (get (e/watch !state) :formal-surname)
                      brand-name (get (e/watch !state) :brand-name)
                      email (get (e/watch !state) :email)
                      phonenumber (get (e/watch !state) :phonenumber)
                      ]
                  (dom/element "style" (dom/text "
                  ul{list-style-type: none; margin: 0; padding: 0; background-color: black; overflow: auto; }
                  li {float: left;}
                  li a {color: white; padding: 15px 25px; display: inline-block; text-align: center; text-decoration: none;}
                  .home {background-color: darkred;}
                  li a:hover {
                  background-color: #405d27;
                  legend {font-size: 25px; font-style: italic;} p {margin-bottom: 0}
                  }
                  .error { color: red;display: none;}
                  input:invalid+.error, input:invalid:out-of-range+.error {display: block;}
                  input:valid+.error {display: none;}
                  input:valid {border: 2px solid green;}
                  input:focus:invalid {border: 2px solid red;}
                  "))
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


                  )
                )
              )
            )
          )
        )


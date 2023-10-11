(ns app.poms-06-ph-20230915
  (:require contrib.str
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
    ;datomic require'ı asagıdaki
            #?(:clj [datomic.client.api :as d])
            [hyperfiddle.electric-ui4 :as ui]
            ))

;; bu kısımda zorunlu
(e/def conn)
(e/def db)
;; bu kısımda zorunlu

#?(:clj (defn get-user-id-by-name [str-name db]
          (ffirst (d/q
                    '[:find ?id
                      :in $ ?name
                      :where
                      [?e :user/name ?name]
                      [?e :user/id ?id]
                      ]
                    db str-name)
                  )
          )
   )

(e/defn ph-page []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (d/db conn)]
              ;bind etmek zorundayız dbyi calıstırmak için.
              (e/client
                (let [!state (atom {
                                    :btn1-is-clicked false
                                    :username ""
                                    })
                      username (get (e/watch !state) :username)
                      ]
                  (dom/element "style" (dom/text "
                  ul{list-style-type: none; margin: 0; padding: 0; background-color: black; overflow: auto; }
                  li {float: left;}
                  li a {color: white; padding: 15px 25px; display: inline-block; text-align: center; text-decoration: none;}
                  .home {background-color: darkred;}
                  li a:hover {
                  background-color: #405d27; }
                  table, th, td {border: 0.2px solid;}
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

                  (dom/div (dom/props {:style {:float "left" :overflow "auto"}})
                           (dom/form
                             (dom/props {:il       "FORM"
                                         :onSubmit "false"

                                         })
                             (dom/fieldset
                               (dom/props {:name "FORM"
                                           })
                               (dom/legend
                                 (dom/text "Project Highlights")
                                 (dom/props {:style {:text-align "center"}}))
                               (dom/p (dom/props {:style {:padding-bottom "20px" :margin-top "0" :margin-left "35%"}}) (dom/text " Proje ve rfp önizleme ekranı: "))
                               (dom/p (dom/text "username:" (dom/props {:class "text"
                                                                        }))
                                      (ui/input username
                                                (e/fn [v] (swap! !state assoc :username v))
                                                (dom/props {:style {:name "username"}})
                                                )
                                      )
                               (dom/div (dom/props {:style {:position "relative" :top "50%" :left "0%" :overflow "auto" :height "600px"}})
                                        (dom/table
                                          (dom/tr
                                            (dom/th (dom/text "General Information for"))
                                            (dom/th (dom/text "Attributes"))
                                            (dom/th (dom/text "Detailed Informations"))
                                            )
                                          (e/for [[prj-id prj-client-user-name prj-client-company-name prj-title prj-sd prj-fd rfp-id rfp-name rfp-item-amount rfp-category rfp-explanation]
                                                  (e/server
                                                    (binding [conn @(requiring-resolve 'user/datomic-conn)]
                                                      (binding [db (d/db conn)]
                                                        (d/q
                                                          '[:find ?pi ?un ?cn ?pt ?psd ?pfd ?rfp-id ?rfp-name ?rfp-item-amount ?rfp-category ?rfpexplanation
                                                            :in $ ?user ?user-raw
                                                            :where
                                                            ;find data by user-id
                                                            [?e :project/client-user-id ?user]
                                                            [?e :project/id ?pi]
                                                            ;get user-name
                                                            [?ueid :user/id ?user-raw]
                                                            [?ueid :user/name ?un]
                                                            ;get client company name by using relations
                                                            [?e :project/client-company-id ?pceid]
                                                            [?pceid :company/id ?cid]
                                                            [?ceid :company/id ?cid]
                                                            [?ceid :company/brand-name ?cn]
                                                            ;get project information data by entitiy id of ?user entry ---> [?e :project/client-user-id ?user]
                                                            [?e :project/client-user-id ?user]
                                                            [?e :project/project-title ?pt]
                                                            [?e :project/project-sd ?psd]
                                                            [?e :project/project-fd ?pfd]
                                                            ;get rfp data by entity id of current project (rfp table's :project/id reference ---> ([?rfpe :rfp/project-id ?e]) )
                                                            [?rfpe :rfp/project-id ?e]
                                                            [?rfpe :rfp/id ?rfp-id]
                                                            [?rfpe :rfp/name ?rfp-name]
                                                            [?rfpe :rfp/item-amount ?rfp-item-amount]
                                                            [?rfpe :rfp/category ?dbie]
                                                            [?dbie :db/ident ?rfp-category]
                                                            [?rfpe :rfp/explanation ?rfpexplanation]

                                                            ]
                                                          db [:user/id (get-user-id-by-name username db)] (get-user-id-by-name username db))
                                                        )
                                                      )
                                                    )
                                                  ]

                                                 (dom/tr
                                                   (dom/td (dom/props {:rowspan 5}) (dom/text "Project: "))
                                                   (dom/td (dom/text "Project Client User"))
                                                   (dom/td (dom/text prj-client-user-name))
                                                   )
                                                 (dom/tr
                                                   (dom/td (dom/text "Project Client Company"))
                                                   (dom/td (dom/text prj-client-company-name))
                                                   )
                                                 (dom/tr
                                                   (dom/td (dom/text "Project Title"))
                                                   (dom/td (dom/text prj-title))
                                                   )
                                                 (dom/tr
                                                   (dom/td (dom/text "Project Starting Date"))
                                                   (dom/td (dom/text prj-sd))
                                                   )
                                                 (dom/tr
                                                   (dom/td (dom/text "Client Conctact Info"))
                                                   (dom/td (dom/text prj-fd))
                                                   )
                                                 (dom/tr
                                                   (dom/td (dom/props {:rowspan 5}) (dom/text "Rfp: "))
                                                   (dom/td (dom/text "RFP Id"))
                                                   (dom/td (dom/text rfp-id))
                                                   )
                                                 (dom/tr
                                                   (dom/td (dom/text "Name"))
                                                   (dom/td (dom/text rfp-name))
                                                   )
                                                 (dom/tr
                                                   (dom/td (dom/text "Item Amount"))
                                                   (dom/td (dom/text rfp-item-amount))
                                                   )
                                                 (dom/tr
                                                   (dom/td (dom/text "Category"))
                                                   (dom/td (dom/text rfp-category))
                                                   )
                                                 (dom/tr
                                                   (dom/td (dom/text "Details"))
                                                   (dom/td (dom/text rfp-explanation))
                                                   )
                                                 )
                                          )

                                        )

                               (dom/div (dom/props {:style {:float "left" :margin "auto" :padding-top "20px" :position "relative" :left "25%"}})
                                        (dom/button
                                          (dom/on "click" #(.alert js/window "Project Successfully Created!!"))
                                          (dom/text "Proje Baslat")
                                          (dom/props {:type  "button"
                                                      :class "button1"
                                                      :name  "login-button"
                                                      :style {:text-align "center" :margin-left "0"}
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
        )
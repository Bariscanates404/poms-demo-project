(ns app.poms-09-ot-20230920
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

(e/defn operation-track-page []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (d/db conn)]
              ;bind etmek zorundayız dbyi calıstırmak için.
              (e/client
                (let [!state (atom {
                                    :username        ""
                                    :btn1-is-clicked false
                                    })
                      username (get (e/watch !state) :username)
                      ]
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
                          (dom/text "Operation Track Screen")
                          (dom/props {:style {:text-align "center"}}))

                        (dom/div
                          (dom/p (dom/text "Username:" (dom/props {:class "text"
                                                                   }))
                                 (ui/input username
                                           (e/fn [v] (swap! !state assoc :username v))
                                           (dom/props {:style {:name "username"}})
                                           )
                                 )
                          )

                        (dom/p (dom/props {:style {:padding-bottom "10px" :margin-top "0" :margin-left "115px"}}) (dom/text "Active Proposals"))
                        (dom/div (dom/props {:style {:position "relative" :top "50%" :left "5%" :overflow "auto" :height "200px"}})
                                 (dom/table
                                   (dom/tr
                                     (dom/th (dom/text "Company"))
                                     (dom/th (dom/text "User "))
                                     (dom/th (dom/text "Item Amount"))
                                     (dom/th (dom/text "Proposal Status"))
                                     )
                                   (e/for [[company user item-amount order-status] (e/server
                                                                                     (e/server
                                                                                       (binding [conn @(requiring-resolve 'user/datomic-conn)]
                                                                                         (d/q
                                                                                                                                                 '[:find ?cc ?un ?pia ?pos
                                                                                                                                                   :in $ ?id
                                                                                                                                                   :where
                                                                                                                                                   [?cux :user/id ?id]
                                                                                                                                                   [?e :proposal/client-person ?cux]
                                                                                                                                                   [?cux :user/name ?un]
                                                                                                                                                   [?e :proposal/client-company ?ccx]
                                                                                                                                                   [?ccx :company/brand-name ?cc]
                                                                                                                                                   [?e :proposal/item-amount ?pia]
                                                                                                                                                   [?e :proposal/order-status ?posx]
                                                                                                                                                   [?posx :db/ident ?pos]
                                                                                                                                                   ]
                                                                                                                                                 db (get-user-id-by-name username db))))

                                                                                     )]
                                          (dom/tr
                                            (dom/td (dom/text company))
                                            (dom/td (dom/text user))
                                            (dom/td (dom/text item-amount))
                                            (dom/td (dom/text order-status))
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
          )
        )
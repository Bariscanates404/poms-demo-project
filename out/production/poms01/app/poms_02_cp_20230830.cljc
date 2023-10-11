(ns app.poms-02-cp-20230830
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



#?(:clj (defn get-free-project-id [db]
          (if (empty? (d/q
                        '[:find ?e
                          :where
                          [_ :project/id ?e]]
                        db)
                      )
            1
            (+ 1 (ffirst (take 1 (reverse (->> (d/q
                                                 '[:find ?e
                                                   :where
                                                   [_ :project/id ?e]]
                                                 db)
                                               (sort-by last)
                                               )
                                          )
                               )
                         )
               )
            )
          )
   )

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



#?(:clj (defn get-company-id-by-name [str-name db]
          (ffirst (d/q
                    '[:find ?id
                      :in $ ?name
                      :where
                      [?e :company/brand-name ?name]
                      [?e :company/id ?id]
                      ]
                    db str-name)
                  )
          )
   )




(e/defn create-project []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (d/db conn)]

              ;bind etmek zorundayız dbyi calıstırmak için.
              (e/client

                (let [!state (atom {
                                    :username        ""
                                    :company         ""
                                    :phone-number    ""
                                    :project-title   ""
                                    :start-date      (js/Date.)
                                    :finish-date     ""
                                    :docs            ""
                                    :btn1-is-clicked false
                                    :login-info      "Welcome! Colabio makes life easier..."
                                    })
                      btn-state (get (e/watch !state) :btn1-is-clicked)
                      login-info (get (e/watch !state) :login-info)
                      username (get (e/watch !state) :username)
                      company (get (e/watch !state) :company)
                      phone-number (get (e/watch !state) :phone-number)
                      project-title (get (e/watch !state) :project-title)
                      start-date (get (e/watch !state) :start-date)
                      finish-date (get (e/watch !state) :finish-date)
                      docs (get (e/watch !state) :docs)
                      project-id (e/server (get-free-project-id db))

                      ]
                  (dom/element "style" (dom/text "
                  ul{list-style-type: none; margin: 0; padding: 0; background-color: black; overflow: auto; }
                  li {float: left;}
                  li a {color: white; padding: 15px 25px; display: inline-block; text-align: center; text-decoration: none;}
                  .home {background-color: darkred;}
                  li a:hover {
                  background-color: #405d27;
                  }


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

                  (dom/div
                    (dom/form
                      (dom/props {:class "form"
                                  :il    "FORM"
                                  })
                      (dom/fieldset
                        (dom/props {:name "FORM"
                                    })
                        (dom/legend
                          (dom/text "Create Project")
                          (dom/props {:style {:text-align "center"}}))
                        (dom/p (dom/text "username:" (dom/props {:class "text"
                                                                 }))
                               (ui/input username
                                         (e/fn [v] (swap! !state assoc :username v))
                                         (dom/props {:style {:name "username"}})
                                         )
                               )
                        (dom/p (dom/text "contact number:" (dom/props {:class "text"
                                                                       }))
                               (ui/input phone-number
                                         (e/fn [v] (swap! !state assoc :phone-number v))
                                         (dom/props {:style {:name "formal-name"}})
                                         ))
                        (dom/p (dom/text "project title:" (dom/props {:class "text"
                                                                      }))
                               (ui/input project-title
                                         (e/fn [v] (swap! !state assoc :project-title v))
                                         (dom/props {:style {:name "formal-surname"}})
                                         ))
                        (dom/p (dom/text "start date:" (dom/props {:class "text"
                                                                   }))
                               (ui/date
                                 (subs (.toISOString start-date) 0 10) (swap! !state assoc :start-date v))
                               )
                        (dom/p (dom/text "finish date:" (dom/props {:class "text"
                                                                    }))
                               (ui/date
                                 (subs (.toISOString finish-date) 0 10) (swap! !state assoc :finish-date v))
                               )
                        (dom/p (dom/text "documents:" (dom/props {:class "text"
                                                                  }))
                               (ui/input docs
                                         (e/fn [v] (swap! !state assoc :docs v))
                                         (dom/props {:style {:name "phonenumber"}})
                                         ))

                        (swap! !state assoc :company (e/server (ffirst (d/q
                                                                         '[:find ?ucbn
                                                                           :in $ ?name
                                                                           :where
                                                                           [?cux :user/name ?name]
                                                                           [?cux :user/company-id ?ucidx]
                                                                           [?ucidx :company/brand-name ?ucbn]
                                                                           ]
                                                                         db username))))
                        (ui/button
                          (e/fn []
                                (e/server (d/transact conn {:tx-data [{:project/id                (e/server (get-free-project-id db))
                                                                       :project/client-user-id    [:user/id (e/server (get-user-id-by-name username db))]
                                                                       :project/client-company-id [:company/id (e/server (get-company-id-by-name company db))]
                                                                       :project/phonenumber       (str phone-number)
                                                                       :project/project-title     (str project-title)
                                                                       :project/project-sd        (str start-date)
                                                                       :project/project-fd        (str finish-date)
                                                                       :project/documents         (str docs)
                                                                       }
                                                                      ]})
                                          )
                                )
                          (dom/on "click" (fn [] (swap! !state assoc :btn1-is-clicked true)))
                          (dom/text "Create")
                          (dom/props {:type  "button"
                                      :class "create-project"
                                      :name  "signup-button"
                                      :style {:text-align "center"}
                                      }))


                        (if btn-state
                          (case (clojure.string/blank? (e/server
                                                         (binding [conn @(requiring-resolve 'user/datomic-conn)]
                                                           (binding [db (d/db conn)]
                                                             (ffirst (d/q
                                                                       '[:find ?e
                                                                         :in $ ?id
                                                                         :where
                                                                         [?e :project/id ?id]]
                                                                       db project-id))
                                                             )
                                                           )
                                                         ))
                            false ((.setTimeout js/window #(set! js/window.location.href "http://localhost:8080/(app.poms-03-crfp-20230906!create-rfp)") 2000)
                                   (swap! !state assoc :login-info "Project created, redirecting...")
                                   (swap! !state assoc :btn1-is-clicked false))
                            true ((swap! !state assoc :login-info "Wrong information!!")
                                  (swap! !state assoc :btn1-is-clicked false))
                            )
                          )

                        (dom/p (dom/text login-info
                                         (dom/props {:class      "login-info"
                                                     :name       "login-text"
                                                     :text-align "center"
                                                     })))

                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
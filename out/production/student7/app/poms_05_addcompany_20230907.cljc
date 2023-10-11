(ns app.poms-05-addcompany-20230907
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


#?(:clj (defn get-free-company-id [db] (if (empty? (d/q
                                                     '[:find ?e
                                                       :where
                                                       [_ :company/id ?e]]
                                                     db)
                                                   )
                                         1
                                         (+ 1 (ffirst (take 1 (reverse (->> (d/q
                                                                              '[:find ?e
                                                                                :where
                                                                                [_ :company/id ?e]]
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


(e/defn add-company []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (d/db conn)]
              ;bind etmek zorundayız dbyi calıstırmak için.
              (e/client
                (let [!state (atom {
                                    :brand-name      ""
                                    :email           ""
                                    :phonenumber     ""
                                    :category        ""
                                    :btn1-is-clicked false
                                    :login-info      "Welcome! Colabio makes life easier..."
                                    :free-comp-id    (e/server
                                                       (binding [conn @(requiring-resolve 'user/datomic-conn)]
                                                         (binding [db (d/db conn)]
                                                           (get-free-company-id db)
                                                           )
                                                         )
                                                       )
                                    })
                      btn-state (get (e/watch !state) :btn1-is-clicked)
                      login-info (get (e/watch !state) :login-info)
                      category (get (e/watch !state) :category)
                      brand-name (get (e/watch !state) :brand-name)
                      email (get (e/watch !state) :email)
                      phonenumber (get (e/watch !state) :phonenumber)
                      company-id (get (e/watch !state) :free-comp-id)
                      ]
                  (dom/element "style" (dom/text "
                  ul{list-style-type: none; margin: 0; padding: 0; background-color: black; overflow: auto; }
                  li {float: left;}
                  li a {color: white; padding: 15px 25px; display: inline-block; text-align: center; text-decoration: none;}
                  .home {background-color: darkred;}
                  li a:hover {
                  background-color: #405d27;
                  label {font-size: 16px; margin-right: 10px;}
                  select {font-size: 14px;padding: 5px;border: 1px solid #ccc;border-radius: 4px;}
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
                          (dom/text "Add New Company")
                          (dom/props {:style {:text-align "center"}}))

                        (dom/label (dom/props {:for "dropdown"}) (dom/text "lutfen şirket categorisini seçin:" (dom/props {:style {:font-style "none"}})))
                        (dom/select (dom/props {:id "dropdown"})
                                    (dom/option (dom/props {:disabled "true" :selected "false"})
                                                (dom/text ""))
                                    (dom/option (dom/props {:value "bilgisayar"})
                                                (dom/text "Bilgisayar"))
                                    (dom/option (dom/props {:value "seyahat"})
                                                (dom/text "Seyahat"))
                                    (dom/option (dom/props {:value "konaklama"})
                                                (dom/text "Konaklama"))
                                    (dom/on "change" (fn [] (swap! !state assoc :category (keyword "service" (str (.-value dom/node))))))
                                    )

                        (dom/p (dom/text "Brand Name:" (dom/props {:class "text"
                                                                   }))
                               (ui/input brand-name
                                         (e/fn [v] (swap! !state assoc :brand-name v))
                                         (dom/props {:style {:name "brand-name"}})
                                         ))
                        (dom/p (dom/text "Email:" (dom/props {:class "text"
                                                              }))
                               (ui/input email
                                         (e/fn [v] (swap! !state assoc :email v))
                                         (dom/props {:style {:name "email"}})
                                         ))
                        (dom/p (dom/text "Contact No:" (dom/props {:class "text"
                                                                   }))
                               (ui/input phonenumber
                                         (e/fn [v] (swap! !state assoc :phonenumber v))
                                         (dom/props {:style {:name "Contact No:"}})
                                         ))



                        (ui/button
                          (e/fn []
                                (e/server (d/transact conn {:tx-data [{:company/id          (e/server
                                                                                              (binding [conn @(requiring-resolve 'user/datomic-conn)]
                                                                                                (binding [db (d/db conn)]
                                                                                                  (get-free-company-id db)
                                                                                                  )
                                                                                                )
                                                                                              )
                                                                       :company/brand-name  brand-name
                                                                       :company/email       email
                                                                       :company/phonenumber phonenumber
                                                                       :company/category    [category]
                                                                       }
                                                                      ]})
                                          )

                                )
                          (dom/on "click" (fn [] (swap! !state assoc :btn1-is-clicked true)))
                          (dom/text "Add Comp")
                          (dom/props {:type  "button"
                                      :class "create-project"
                                      :name  "signup-button"
                                      :style {:text-align "center" :margin-left "50px"}
                                      })
                          )

                        (if btn-state
                          (case (clojure.string/blank? (e/server
                                                         (binding [conn @(requiring-resolve 'user/datomic-conn)]
                                                           (binding [db (d/db conn)]
                                                             (ffirst (d/q
                                                                       '[:find ?e
                                                                         :in $ ?id
                                                                         :where
                                                                         [?e :company/id ?id]]
                                                                       db company-id))
                                                             )
                                                           )
                                                         )
                                                       )
                            false (
                                   (swap! !state assoc :free-comp-id (e/server
                                                                       (binding [conn @(requiring-resolve 'user/datomic-conn)]
                                                                         (binding [db (d/db conn)]
                                                                           (get-free-company-id db)
                                                                           )
                                                                         )
                                                                       )
                                          )
                                   (swap! !state assoc :login-info "Company is adding...")
                                   (swap! !state assoc :btn1-is-clicked false)
                                   (.setTimeout js/window #(swap! !state assoc :login-info "New Supplier Company Added!") 1000)
                                   (swap! !state assoc :brand-name "")
                                   (swap! !state assoc :email "")
                                   (swap! !state assoc :phonenumber "")
                                   )
                            true ((swap! !state assoc :login-info "Something Went Wrong!!")
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


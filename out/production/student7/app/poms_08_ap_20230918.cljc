(ns app.poms-08-ap-20230918
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

(defn unit-price [total-price unit-amount]
  (long (/ total-price unit-amount))
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


#?(:clj (defn get-entity-id-by-enum [enum db]
          (ffirst (d/q
                    '[:find ?e
                      :in $ ?enum
                      :where
                      [?e :db/ident ?enum]
                      ]
                    db enum)
                  )
          )
   )
(e/defn approve-proposal []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (d/db conn)]
              ;bind etmek zorundayız dbyi calıstırmak için.
              (e/client
                (let [!state (atom {
                                    :category        ""
                                    :rfp-id          ""
                                    :proposal-id     ""
                                    :btn1-is-clicked false
                                    :login-info      "Welcome! Colabio makes life easier..."
                                    })
                      category (get (e/watch !state) :category)
                      rfp-id (get (e/watch !state) :rfp-id)
                      proposal-id (get (e/watch !state) :proposal-id)
                      login-info (get (e/watch !state) :login-info)
                      btn-state (get (e/watch !state) :btn1-is-clicked)
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
                                 (dom/text "Add New Proposal")
                                 (dom/props {:style {:text-align "center"}}))
                               (dom/p (dom/props {:style {:padding-bottom "10px" :margin-top "0" :margin-left "40%"}}) (dom/text " Aktif RFPler: "))
                               (dom/label (dom/props {:for "dropdown"}) (dom/text "Categoriye göre filtrelemek için seçiniz..." (dom/props {:style {:font-style "none"}})))
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

                               (dom/div (dom/props {:style {:position "relative" :top "50%" :left "0%" :overflow "auto" :height "200px"}})
                                        (dom/table
                                          (dom/tr
                                            (dom/th (dom/text "General Information for"))
                                            (dom/th (dom/text "Attributes"))
                                            (dom/th (dom/text "Detailed Informations"))
                                            )
                                          (e/for [[rfp-id rfp-name rfp-item-amount rfp-category rfp-explanation]
                                                  (e/server
                                                    (binding [conn @(requiring-resolve 'user/datomic-conn)]
                                                      (binding [db (d/db conn)]
                                                        (d/q
                                                          '[:find ?id ?name ?item-amount ?rfp-category ?prj-title
                                                            :in $ ?ctg
                                                            :where
                                                            [?rfpe :rfp/category ?ctg]
                                                            [?rfpe :rfp/id ?id]
                                                            [?rfpe :rfp/name ?name]
                                                            [?rfpe :rfp/category ?ctgeid]
                                                            [?ctgeid :db/ident ?rfp-category]
                                                            [?rfpe :rfp/item-amount ?item-amount]
                                                            [?rfpe :rfp/project-id ?project-id]
                                                            [?project-id :project/project-title ?prj-title]
                                                            ]
                                                          db (get-entity-id-by-enum category db))
                                                        )
                                                      )
                                                    )
                                                  ]

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

                               (dom/div
                                 (dom/p (dom/text "RFP id:" (dom/props {:class "text"
                                                                        }))
                                        (ui/input rfp-id
                                                  (e/fn [v] (swap! !state assoc :rfp-id v))
                                                  (dom/props {:style {:name "rfp-id"}})
                                                  )
                                        )
                                 )

                               (dom/div (dom/props {:style {:position "relative" :top "50%" :left "0%" :overflow "auto" :height "200px"}})
                                        (dom/p (dom/props {:style {:padding-bottom "10px" :margin-top "0" :margin-left "40%"}}) (dom/text " Aktif Proposallar: "))
                                        (dom/table
                                          (dom/tr
                                            (dom/th (dom/text "General Information for"))
                                            (dom/th (dom/text "Attributes"))
                                            (dom/th (dom/text "Detailed Informations"))
                                            )
                                          (e/for [[prop-id supplier-company proposal-item-amount proposal-amount proposal-unit-price]
                                                  (e/server
                                                    (binding [conn @(requiring-resolve 'user/datomic-conn)]
                                                      (binding [db (d/db conn)]
                                                        (->>
                                                          (d/q
                                                            '[:find ?pr-id ?sup-comp ?pr-iam ?pr-am ?pr-uprice
                                                              :in $ ?rfp-id
                                                              :where
                                                              [?rfpe :rfp/id ?rfp-id]
                                                              [?rfpe :rfp/project-id ?prj-id]
                                                              [?pr-eid :proposal/project-id ?prj-id]
                                                              [?pr-eid :proposal/id ?pr-id]
                                                              [?pr-eid :proposal/supplier-id ?pr-sc-id]
                                                              [?pr-sc-id :company/brand-name ?sup-comp]
                                                              [?pr-eid :proposal/item-amount ?pr-iam]
                                                              [?pr-eid :proposal/amount ?pr-am]
                                                              [(app.poms-08-ap-20230918/unit-price ?pr-am ?pr-iam) ?pr-uprice]
                                                              ]
                                                            db (read-string rfp-id))
                                                          (sort-by last)
                                                          )
                                                        )
                                                      )
                                                    )
                                                  ]

                                                 (dom/tr
                                                   (dom/td (dom/props {:rowspan 5}) (dom/text "Proposal: "))
                                                   (dom/td (dom/text "Proposal Id"))
                                                   (dom/td (dom/text prop-id))
                                                   )
                                                 (dom/tr
                                                   (dom/td (dom/text "Company"))
                                                   (dom/td (dom/text supplier-company))
                                                   )
                                                 (dom/tr
                                                   (dom/td (dom/text "Item Amount"))
                                                   (dom/td (dom/text proposal-item-amount))
                                                   )
                                                 (dom/tr
                                                   (dom/td (dom/text "Amount"))
                                                   (dom/td (dom/text proposal-amount))
                                                   )
                                                 (dom/tr
                                                   (dom/td (dom/text "Unit Price"))
                                                   (dom/td (dom/text proposal-unit-price))
                                                   )
                                                 )

                                          )
                                        )

                               (dom/div (dom/props {:style {:overflow "auto" :height "200px"}})
                                        (dom/label (dom/props {:for "dropdown"}) (dom/text "Onaylamak istediğiniz proposal'ın id sini giriniz..." (dom/props {:style {:font-style "none"}})))
                                        (dom/p (dom/text "Proposal id:" (dom/props {:class "text"
                                                                                    }))
                                               (ui/input proposal-id
                                                         (e/fn [v] (swap! !state assoc :proposal-id v))
                                                         (dom/props {:style {:name "rfp-id"}})
                                                         )
                                               )
                                        (ui/button
                                          (e/fn []
                                                (e/server
                                                  (binding [conn @(requiring-resolve 'user/datomic-conn)]
                                                    (binding [db (d/db conn)]
                                                      (let [[id supplier-id amount project-id item-amount order-status client-company client-person]
                                                            (first (d/q
                                                                     '[:find ?pr-id ?pr-si ?pa ?pr-i ?pr-ia ?pr-os ?pr-cc ?pr-cp
                                                                       :in $ ?pr-id
                                                                       :where
                                                                       [?e :proposal/id ?pr-id]
                                                                       [?e :proposal/supplier-id ?sid]
                                                                       [?sid :company/id ?pr-si]
                                                                       [?e :proposal/amount ?pa]
                                                                       [?e :proposal/project-id ?pid]
                                                                       [?pid :project/id ?pr-i]
                                                                       [?e :proposal/item-amount ?pr-ia]
                                                                       [?e :proposal/order-status ?pr-os]
                                                                       [?e :proposal/client-company ?pcc]
                                                                       [?pcc :company/id ?pr-cc]
                                                                       [?e :proposal/client-person ?pcp]
                                                                       [?pcp :user/id ?pr-cp]
                                                                       ]
                                                                     db (read-string proposal-id)))
                                                            ]
                                                        (d/transact conn {:tx-data [{:proposal/id             id
                                                                                     :proposal/supplier-id    [:company/id supplier-id]
                                                                                     :proposal/amount         amount
                                                                                     :proposal/project-id     [:project/id project-id]
                                                                                     :proposal/item-amount    item-amount
                                                                                     :proposal/order-status   :proposal-status/ongoing
                                                                                     :proposal/client-company [:company/id client-company]
                                                                                     :proposal/client-person  [:user/id client-person]
                                                                                     }
                                                                                    ]}))))))
                                          (dom/on "click" (fn [] (swap! !state assoc :btn1-is-clicked true)))
                                          (dom/text "Approve")
                                          (dom/props {:type  "button"
                                                      :class "create-project"
                                                      :name  "signup-button"
                                                      :style {:text-align "center" :margin-left "125px"}
                                                      })
                                          )
                                        (dom/p (dom/text login-info
                                                         (dom/props {:class      "login-info"
                                                                     :name       "login-text"
                                                                     :text-align "center"
                                                                     })))


                                        (if btn-state
                                          (case (= :proposal-status/ongoing (e/server
                                                                              (binding [conn @(requiring-resolve 'user/datomic-conn)]
                                                                                (binding [db (d/db conn)]
                                                                                  (ffirst (d/q
                                                                                            '[:find ?pos
                                                                                              :in $ ?id
                                                                                              :where
                                                                                              [?e :proposal/id ?id]
                                                                                              [?e :proposal/order-status ?pose]
                                                                                              [?pose :db/ident ?pos]
                                                                                              ]
                                                                                            db (read-string proposal-id)))
                                                                                  )
                                                                                )
                                                                              ))
                                            true ((swap! !state assoc :login-info "Proposal approved...")
                                                  (swap! !state assoc :btn1-is-clicked false)
                                                  (.setTimeout js/window #(swap! !state assoc :rfp-id "") 500)
                                                  (.setTimeout js/window #(swap! !state assoc :proposal-id "") 500)
                                                  (.setTimeout js/window #(swap! !state assoc :login-info "Welcome! Colabio makes life easier...") 500)
                                                  )
                                            false ((swap! !state assoc :login-info "Something went wrong!!")
                                                   (swap! !state assoc :btn1-is-clicked false))
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


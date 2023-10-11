(ns app.poms-07-app-20230915
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

#?(:clj (defn get-free-proposal-id [db] (if (empty? (d/q
                                                      '[:find ?e
                                                        :where
                                                        [_ :proposal/id ?e]]
                                                      db)
                                                    )
                                          1
                                          (+ 1 (ffirst (take 1 (reverse (->> (d/q
                                                                               '[:find ?e
                                                                                 :where
                                                                                 [_ :proposal/id ?e]]
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
(e/defn app-page []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (d/db conn)]
              ;bind etmek zorundayız dbyi calıstırmak için.
              (e/client
                (let [!state (atom {
                                    :category        ""
                                    :rfp-id          ""
                                    :supplier-id     ""
                                    :amount          ""
                                    :project-id      ""
                                    :item-amount     ""
                                    :btn1-is-clicked false
                                    :login-info      "Welcome! Colabio makes life easier..."
                                    })
                      category (get (e/watch !state) :category)
                      rfp-id (get (e/watch !state) :rfp-id)
                      supplier-id (get (e/watch !state) :supplier-id)
                      amount (get (e/watch !state) :amount)
                      item-amount (get (e/watch !state) :item-amount)
                      proposal-id (e/server (get-free-proposal-id db))
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
                               (dom/p (dom/props {:style {:padding-bottom "20px" :margin-top "0" :margin-left "40%"}}) (dom/text " Aktif RFPler: "))
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
                               (dom/div (dom/props {:style {:position "relative" :top "50%" :left "0%" :overflow "auto" :height "300px"}})
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
                                                   (dom/td (dom/text (case rfp-category
                                                                       :service/bilgisayar  "Bilgisayar"
                                                                       :service/seyahat "Seyahat"
                                                                       :service/konaklama "Konaklama"
                                                                       )))
                                                   )
                                                 (dom/tr
                                                   (dom/td (dom/text "Details"))
                                                   (dom/td (dom/text rfp-explanation))
                                                   )
                                                 )
                                          )
                                        )

                               (dom/div (dom/props {:style {:overflow "auto" :height "300px"}})
                                        (dom/p (dom/text "RFP id:" (dom/props {:class "text"
                                                                               }))
                                               (ui/input rfp-id
                                                         (e/fn [v] (swap! !state assoc :rfp-id v))
                                                         (dom/props {:style {:name "rfp-id"}})
                                                         )
                                               )
                                        (dom/p (dom/text "Supplier company name:" (dom/props {:class "text"
                                                                                              }))
                                               (ui/input supplier-id
                                                         (e/fn [v] (swap! !state assoc :supplier-id v))
                                                         (dom/props {:style {:name "supplier-id"}})
                                                         ))
                                        (dom/p (dom/text "amount:" (dom/props {:class "text"
                                                                               }))
                                               (ui/input amount
                                                         (e/fn [v] (swap! !state assoc :amount v))
                                                         (dom/props {:style {:name "amount"}})
                                                         ))
                                        (dom/p (dom/text "Item amount:" (dom/props {:class "text"
                                                                                    }))
                                               (ui/input item-amount
                                                         (e/fn [v] (swap! !state assoc :item-amount v))
                                                         (dom/props {:style {:name "Item amount"}})
                                                         ))
                                        )


                               (dom/div (dom/props {:style {:margin-left "20%"}})
                                        (ui/button
                                          (e/fn []
                                                (e/server
                                                  (let [[project-id client-company client-person _]

                                                        (first (d/q
                                                                 '[:find ?pid ?cid ?uid ?rfpia
                                                                   :in $ ?rfpid
                                                                   :where
                                                                   [?e :rfp/id ?rfpid]
                                                                   [?e :rfp/item-amount ?rfpia]
                                                                   [?e :rfp/project-id ?peid]
                                                                   [?peid :project/id ?pid]
                                                                   [?peid :project/client-company-id ?ccid]
                                                                   [?ccid :company/id ?cid]
                                                                   [?peid :project/client-user-id ?cuid]
                                                                   [?cuid :user/id ?uid]
                                                                   ]
                                                                 db (read-string rfp-id)))
                                                        ]
                                                    (d/transact conn {:tx-data [{:proposal/id             (e/server
                                                                                                            (binding [conn @(requiring-resolve 'user/datomic-conn)]
                                                                                                              (binding [db (d/db conn)]
                                                                                                                (get-free-proposal-id db)
                                                                                                                )
                                                                                                              )
                                                                                                            )
                                                                                 :proposal/supplier-id    [:company/id (get-company-id-by-name supplier-id db)]
                                                                                 :proposal/amount         (read-string amount)
                                                                                 :proposal/project-id     [:project/id project-id]
                                                                                 :proposal/item-amount    (read-string item-amount)
                                                                                 :proposal/order-status   :proposal-status/waiting
                                                                                 :proposal/client-company [:company/id client-company]
                                                                                 :proposal/client-person  [:user/id client-person]
                                                                                 }
                                                                                ]})
                                                    ))
                                                )
                                          (dom/on "click" (fn [_] (swap! !state assoc :btn1-is-clicked true)))
                                          (dom/text "Add Proposal")
                                          (dom/props {:type  "button"
                                                      :class "button1"
                                                      :name  "login-button"
                                                      :style {:text-align "center" :margin-left "50px" :padding-left "45px" :padding-right "45px"}
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
                                                                                         [?e :proposal/id ?id]]
                                                                                       db proposal-id))
                                                                             )
                                                                           )
                                                                         ))
                                            false ((swap! !state assoc :login-info "Proposal created...")
                                                   (swap! !state assoc :btn1-is-clicked false)
                                                   (swap! !state assoc :rfp-id "")
                                                   (swap! !state assoc :supplier-id "")
                                                   (swap! !state assoc :item-amount "")
                                                   (swap! !state assoc :amount "")
                                                   (.setTimeout js/window #(swap! !state assoc :login-info "Welcome! Colabio makes life easier..." ) 1000))
                                            true ((swap! !state assoc :login-info "Check given parameters!!")
                                                  (swap! !state assoc :btn1-is-clicked false))
                                            )
                                          )

                                        (dom/p (dom/text (get (e/watch !state) :login-info)
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
        )

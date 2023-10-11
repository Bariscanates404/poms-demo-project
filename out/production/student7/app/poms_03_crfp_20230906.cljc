(ns app.poms-03-crfp-20230906
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

#?(:clj (defn add-rfp [map conn]
          (d/transact conn {:tx-data [{:rfp/id          (get map :id)
                                       :rfp/category    (get map :category)
                                       :rfp/name        (get map :name)
                                       :rfp/item-amount (get map :item-amount)
                                       :rfp/explanation (get map :explanation)
                                       :rfp/project-id  (get map :project-id)
                                       }
                                      ]})
          )
   )

#?(:clj (defn get-free-rfp-id [db] (if (empty? (d/q
                                                 '[:find ?e
                                                   :where
                                                   [_ :rfp/id ?e]]
                                                 db)
                                               )
                                     1
                                     (+ 1 (ffirst (take 1 (reverse (->> (d/q
                                                                          '[:find ?e
                                                                            :where
                                                                            [_ :rfp/id ?e]]
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



;;TODO rfp name attributunun ismini değiştirelim daha iyi bir isim bulalım
(e/defn create-rfp []
        (e/server
          (binding [conn @(requiring-resolve 'user/datomic-conn)]
            (binding [db (d/db conn)]
              ;bind etmek zorundayız dbyi calıstırmak için.
              (e/client
                (let [!state (atom {
                                    :category        ""
                                    :name            ""
                                    :item-amount     ""
                                    :explanation     ""
                                    :project-id      ""
                                    :btn1-is-clicked false
                                    :login-info      "Welcome! Colabio makes life easier..."
                                    })
                      login-info (get (e/watch !state) :login-info)
                      project-id (get (e/watch !state) :project-id)
                      btn-state (get (e/watch !state) :btn1-is-clicked)
                      category (get (e/watch !state) :category)
                      name (get (e/watch !state) :name)
                      item-amount (get (e/watch !state) :item-amount)
                      explanation (get (e/watch !state) :explanation)
                      rfp-id (e/server (get-free-rfp-id db))
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
                  table, th, td { border: 1px solid black; border-collapse: collapse; }
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

                  (dom/div (dom/props {:style {:position "relative" :top "50%" :left "0%" :overflow "auto" :height "300px"}})
                           (dom/p (dom/props {:style {:padding-bottom "10px" :padding-top "10px" :margin-top "10px" :margin-left "10%"}}) (dom/text " Aktif Projeler: "))
                           (dom/table
                             (dom/tr
                               (dom/th (dom/text "Project Id"))
                               (dom/th (dom/text "Title"))
                               (dom/th (dom/text "Owner Company"))
                               (dom/th (dom/text "Owner User"))
                               )
                             (e/for [[project-id brand-name category phonenumber] (e/server (->>
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
                                                                                              )
                                                                                            )]
                                    (dom/tr
                                      (dom/td (dom/text project-id))
                                      (dom/td (dom/text brand-name))
                                      (dom/td (dom/text category))
                                      (dom/td (dom/text phonenumber))
                                      )

                                    )
                             )
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
                          (dom/text "Create RFP")
                          (dom/props {:style {:text-align "center"}}))
                        (dom/label (dom/props {:for "dropdown"}) (dom/text "lutfen rfp categorinizi seçin:" (dom/props {:style {:font-style "none"}})))
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

                        (dom/p (dom/text "rfp title:" (dom/props {:class "text"
                                                                  }))
                               (ui/input name
                                         (e/fn [v] (swap! !state assoc :name v))
                                         (dom/props {:style {:name "name"}})
                                         ))
                        (dom/p (dom/text "item amount:" (dom/props {:class "text"
                                                                    }))
                               (ui/input item-amount
                                         (e/fn [v] (swap! !state assoc :item-amount v))
                                         (dom/props {:style {:name "item-amount"}})
                                         ))
                        (dom/p (dom/text "explanation:" (dom/props {:class "text"
                                                                    }))
                               (ui/input explanation
                                         (e/fn [v] (swap! !state assoc :explanation v))
                                         (dom/props {:style {:name "explanation"}})
                                         ))
                        (dom/p (dom/text "Releated Project Id:" (dom/props {:class "text"
                                                                            }))
                               (ui/input project-id
                                         (e/fn [v] (swap! !state assoc :project-id v))
                                         (dom/props {:style {:name "project-id"}})
                                         ))

                        (ui/button
                          (e/fn []
                                (e/server (d/transact conn {:tx-data [{:rfp/id          (e/server (get-free-rfp-id db))
                                                                       :rfp/category    [category]
                                                                       :rfp/name        (str name)
                                                                       :rfp/item-amount (read-string item-amount)
                                                                       :rfp/explanation (str explanation)
                                                                       :rfp/project-id  [:project/id (read-string project-id)]
                                                                       }
                                                                      ]})
                                          )
                                )
                          (dom/on "click" (fn [_] (swap! !state assoc :btn1-is-clicked true)))
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
                                                                         [?e :rfp/id ?id]]
                                                                       db rfp-id))
                                                             )
                                                           )
                                                         ))
                            false ((.setTimeout js/window #(set! js/window.location.href "http://localhost:8080/(app.poms-04-sif-20230907!sif-page)") 2000)
                                   (swap! !state assoc :login-info "RFP created, redirecting...")
                                   (swap! !state assoc :btn1-is-clicked false)
                                   (swap! !state assoc :name "")
                                   (swap! !state assoc :item-amount "")
                                   (swap! !state assoc :explanation "")
                                   (swap! !state assoc :project-id ""))
                            true ((swap! !state assoc :login-info "Something went wrong!!")
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


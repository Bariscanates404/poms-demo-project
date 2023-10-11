(ns app.database

  (:require contrib.str
            [hyperfiddle.electric :as e]
    ;datomic require'ı asagıdaki
            [datomic.client.api :as d]
    ;router icin hyperfiddle.history'i kullanıyoruz

            ))

;; bu kısımda zorunlu
(e/def conn)
(e/def db)
;; bu kısımda zorunlu




(def client (d/client {:server-type :dev-local
                       :storage-dir "/Users/bariscanates/prj/baris/Student-Registration-Electric/student7/poms-db"
                       :system      "di"}))
(d/create-database client {:db-name "poms-db"})
(def conn (d/connect client {:db-name "poms-db"}))
(def db (d/db conn))                                        ;;refresh database

(d/transact
  conn
  {:tx-data [{:db/ident :service/seyahat}
             {:db/ident :service/konaklama}
             {:db/ident :service/lojistik}
             {:db/ident :service/bilgisayar}
             {:db/ident :service/kalem}
             {:db/ident :service/mobilya}]})
(def db (d/db conn))                                        ;;refresh database

(d/transact
  conn
  {:tx-data [{:db/ident :customer/supplier}
             {:db/ident :customer/client}
             ]})
(def db (d/db conn))                                        ;;refresh database

(d/transact
  conn
  {:tx-data [
             {:db/ident :proposal-status/waiting}
             {:db/ident :proposal-status/declined}
             {:db/ident :proposal-status/ongoing}
             ]})
(def db (d/db conn))


;create user schema
(def user-schema
  [{:db/ident       :user/id
    :db/valueType   :db.type/long
    :db/unique      :db.unique/identity
    :db/cardinality :db.cardinality/one}
   {:db/ident       :user/name
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/many}
   {:db/ident       :user/password
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :user/formal-name
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :user/formal-surname
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :user/company-id
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}])
(d/transact conn {:tx-data user-schema})
(def db (d/db conn))                                        ;;refresh database


(defn add-new-user [map]
  (d/transact conn {:tx-data [{:user/id             (get map :id)
                               :user/name           (get map :username)
                               :user/password       (get map :password)
                               :user/formal-name    (get map :formal-name)
                               :user/formal-surname (get map :formal-surname)
                               :user/company-id     (get map :company)}
                              ]})
  (def db (d/db conn))
  )


;create supplier schema
(def company-schema
  [{:db/ident       :company/id
    :db/valueType   :db.type/long
    :db/unique      :db.unique/identity
    :db/cardinality :db.cardinality/one}
   {:db/ident       :company/brand-name
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :company/name
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :company/email
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :company/phonenumber
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/many}
   {:db/ident       :company/category
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/many}])
(d/transact conn {:tx-data company-schema})
(def db (d/db conn))                                        ;;refresh database


(defn add-company [map]
  (d/transact conn {:tx-data [{:company/id          (get map :id)
                               :company/brand-name  (get map :brand-name)
                               :company/email       (get map :email)
                               :company/phonenumber (get map :phonenumber)
                               :company/category    (get map :category)
                               }
                              ]})
  (def db (d/db conn))
  )



;project general informations schema
(def project-schema
  [{:db/ident       :project/id
    :db/valueType   :db.type/long
    :db/unique      :db.unique/identity
    :db/cardinality :db.cardinality/one}
   {:db/ident       :project/client-user-id
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident       :project/client-company-id
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident       :project/phonenumber
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :project/project-title
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :project/project-sd
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :project/project-fd
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :project/documents
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/many}
   ])
(d/transact conn {:tx-data project-schema})
(def db (d/db conn))

(defn add-project [map]
  (d/transact conn {:tx-data [{:project/id                (get map :id)
                               :project/client-user-id    (get map :client-user-id)
                               :project/client-company-id (get map :client-company-id)
                               :project/phonenumber       (get map :clientphonenumber)
                               :project/project-title     (get map :project-title)
                               :project/project-sd        (get map :projectstartingdate)
                               :project/project-fd        (get map :projectfinishingdate)
                               :project/documents         (get map :documents)
                               }
                              ]})
  (def db (d/db conn))
  )

;order informations schema
(def rfp-schema
  [{:db/ident       :rfp/id
    :db/valueType   :db.type/long
    :db/unique      :db.unique/identity
    :db/cardinality :db.cardinality/one}
   {:db/ident       :rfp/category
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/many}
   {:db/ident       :rfp/name
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :rfp/item-amount
    :db/valueType   :db.type/long
    :db/cardinality :db.cardinality/one}
   {:db/ident       :rfp/explanation
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :rfp/project-id
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}
   ])
(d/transact conn {:tx-data rfp-schema})
(def db (d/db conn))

(defn add-rfp [map]
  (d/transact conn {:tx-data [{:rfp/id          (get map :id)
                               :rfp/category    (get map :category)
                               :rfp/name        (get map :name)
                               :rfp/item-amount (get map :item-amount)
                               :rfp/explanation (get map :explanation)
                               :rfp/project-id  (get map :project-id)
                               }
                              ]})
  (def db (d/db conn))
  )



;order informations schema
(def proposal-schema
  [{:db/ident       :proposal/id
    :db/valueType   :db.type/long
    :db/unique      :db.unique/identity
    :db/cardinality :db.cardinality/one}
   {:db/ident       :proposal/supplier-id
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident       :proposal/amount
    :db/valueType   :db.type/long
    :db/cardinality :db.cardinality/one}
   {:db/ident       :proposal/project-id
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident       :proposal/item-amount
    :db/valueType   :db.type/long
    :db/cardinality :db.cardinality/one}
   {:db/ident       :proposal/order-status
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident       :proposal/client-company
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}
   {:db/ident       :proposal/client-person
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one}
   ])
(d/transact conn {:tx-data proposal-schema})
(def db (d/db conn))

(defn add-proposal [map]
  (d/transact conn {:tx-data [{:proposal/id             (get map :id)
                               :proposal/supplier-id    (get map :supplier-id)
                               :proposal/amount         (get map :amount)
                               :proposal/project-id     (get map :project-id)
                               :proposal/item-amount    (get map :item-amount)
                               :proposal/order-status   (get map :order-status)
                               :proposal/client-company (get map :client-company)
                               :proposal/client-person  (get map :client-person)
                               }
                              ]})
  (def db (d/db conn))
  )




(defn unit-price [total-price unit-amount]
  (long (/ total-price unit-amount))
  )
;[(UC01c_20230815/unit-price ?p ?ia) ?up]


(defn get-user-entity-id-by-id [id]
  (ffirst (d/q
            '[:find ?e
              :in $ ?id
              :where
              [?e :user/id ?id]
              ]
            db id)
          ))




(defn get-company-entity-id-by-id [id]
  (ffirst (d/q
            '[:find ?e
              :in $ ?id
              :where
              [?e :company/id ?id]
              ]
            db id)
          ))


(defn get-entity-id-by-enum [enum]
  (ffirst (d/q
            '[:find ?e
              :in $ ?enum
              :where
              [?e :db/ident ?enum]
              ]
            db enum)
          ))


(defn proposal-by-user-id [user-id]
  (->> (d/q
         '[:find ?bn ?ia ?os ?am
           :in $ ?userid
           :where
           [?e :proposal/id _]
           [?e :proposal/client-person ?userid]
           [?e :proposal/supplier-id ?si]
           [?e :proposal/item-amount ?ia]
           [?e :proposal/amount ?am]
           [?e :proposal/order-status ?ps]
           [?si :company/brand-name ?bn]
           [?ps :db/ident ?os]
           ]
         db (get-user-entity-id-by-id user-id))
       (sort-by last)
       )
  )

(defn proposal-by-company-id [company-id]
  (->> (d/q
         '[:find ?bn ?ia ?os ?am
           :in $ ?cid
           :where
           [?e :proposal/id _]
           [?e :proposal/client-company ?cid]
           [?e :proposal/supplier-id ?si]
           [?e :proposal/item-amount ?ia]
           [?e :proposal/amount ?am]
           [?e :proposal/order-status ?ps]
           [?si :company/brand-name ?bn]
           [?ps :db/ident ?os]
           ]
         db (get-company-entity-id-by-id company-id))
       (sort-by last)
       )
  )

(defn proposal-by-companyid-and-status [company-id order-status]
  (->> (d/q
         '[:find ?bn ?ia ?os ?p
           :in $ ?cid ?os
           :where
           [?e :proposal/id _]
           [?e :proposal/client-company ?cid]
           [?e :proposal/order-status ?os]
           [?e :proposal/supplier-id ?si]
           [?e :proposal/item-amount ?ia]
           [?e :proposal/amount ?p]
           [?si :company/brand-name ?bn]
           [?ps :db/ident ?os]
           ]
         db (get-company-entity-id-by-id company-id) order-status)
       (sort-by last)
       )
  )

(defn proposal-by-userid-and-status [user-id order-status]
  (->> (d/q
         '[:find ?bn ?ia ?os ?p
           :in $ ?cid ?os
           :where
           [?e :proposal/id _]
           [?e :proposal/client-person ?cid]
           [?e :proposal/order-status ?os]
           [?e :proposal/supplier-id ?si]
           [?e :proposal/item-amount ?ia]
           [?e :proposal/amount ?p]
           [?si :company/brand-name ?bn]
           [?ps :db/ident ?os]
           ]
         db (get-user-entity-id-by-id user-id) order-status)
       (sort-by last)
       )
  )




(add-company {:id 1 :brand-name "TEI" :email "info.tei@tei.com" :phonenumber "1234567890" :category [:service/konaklama]})
(add-company {:id 2 :brand-name "HILTON" :email "info.ibm@ibm.com" :phonenumber "1234567890" :category [:service/konaklama]})
(add-company {:id 3 :brand-name "PEGASUS" :email "info.hp@hp.com" :phonenumber "1234567890" :category [:service/seyahat]})
(add-company {:id 4 :brand-name "APPLE" :email "apple@company.com" :phonenumber "1234567890" :category [:service/bilgisayar]})



(add-new-user {:id 1 :username "user1" :password "123456" :formal-name "Beyza" :formal-surname "Polatlı" :company [:company/id 1]})
(add-new-user {:id 2 :username "user2" :password "123456" :formal-name "Barış" :formal-surname "Can" :company [:company/id 2]})
(add-new-user {:id 3 :username "user3" :password "123456" :formal-name "Elif" :formal-surname "Iğdırlı" :company [:company/id 3]})
(add-new-user {:id 4 :username "user4" :password "123456" :formal-name "kerem" :formal-surname "kalafat" :company [:company/id 4]})
;1. Satın alma uzmanı, kullanıcı adı ve şifresiyle sisteme giriş yapar.
;2. Sistem, bilgileri doğrular ve profili sunar.
;3. Satın alma uzmanı, "proje oluştur" butonuna tıklar.
;4. Sistem, proje hakkında girilmesi gereken "genel bilgiler" ekranını sunar.
;5. Satın alma uzmanı, genel bilgilerini doldurur: - Satın alma uzmanı ismi
;- Müşteri şirket ismi
;- Müşteri şirket telefon numarası
;- Proje ismi
;- Proje başlangıç tarihi - Proje bitiş tarihi
;- Belgeler
;6. Sistem, genel bilgileri veri tabanına kaydeder ve sonraki aşamaya (sipariş bilgileri formu) geçer.

(add-project {:id 1 :client-user-id [:user/id 1] :client-company-id [:company/id 1] :clientphonenumber "1234567890" :project-title "bilgisayar satın alma projesi" :projectstartingdate "10.06.2023" :projectfinishingdate "10.07.2023" :documents "docs"})
(add-project {:id 2 :client-user-id [:user/id 4] :client-company-id [:company/id 4] :clientphonenumber "1234567890" :project-title "ipad 10 adet" :projectstartingdate "10.06.2023" :projectfinishingdate "10.07.2023" :documents "docs"})
(add-project {:id 3 :client-user-id [:user/id 4] :client-company-id [:company/id 4] :clientphonenumber "1234567890" :project-title "iasdasdt" :projectstartingdate "10.06.2023" :projectfinishingdate "10.07.2023" :documents "docs"})
;6. Sistem, genel bilgileri veri tabanına kaydeder ve sonraki aşamaya (sipariş bilgileri formu) geçer.
;7. Satın alma uzmanı, sipariş bilgileri formunu doldurur:
;- Sipariş numarası
;- Sipariş kategorisi
;- Sipariş ismi
;- Sipariş açıklaması

(add-rfp {:id 1 :category [:service/bilgisayar] :name "notebook" :item-amount 20 :explanation "20 adet, gri renk" :project-id [:project/id 1]})
(add-rfp {:id 2 :category [:service/bilgisayar] :name "tablet" :item-amount 15 :explanation "15 adet, uzay gri renk" :project-id [:project/id 2]})
(add-rfp {:id 3 :category [:service/konaklama] :name "asd" :item-amount 15 :explanation "qwr" :project-id [:project/id 2]})
(add-rfp {:id 4 :category [:service/seyahat] :name "wer" :item-amount 15 :explanation "qwesdf" :project-id [:project/id 2]})
;8. Sistem, sipariş bilgilerini veri tabanına kaydeder, sonraki aşamaya (tedarikçi bilgileri formu)
;geçer ve kayıtlı tüm tedarikçileri isme göre sıralar. (A’dan Z’ye doğru)

(->>
  (d/q
    '[:find ?e
      :where
      [_ :company/brand-name ?e]]
    db)
  (sort-by str)
  )
;=> (["APPLE"] ["HP"] ["IBM"] ["TEI"])

;9. Satın alma uzmanı, fiyat isteyeceği tedarikçileri kayıtlı tedarikçi listesinden seçer
;10. Satın alma uzmanının ekleyeceği diğer tedarikçi, kayıtlı tedarikçi listesinde bulunmamaktadır.
;Satın alma uzmanı, "tedarikçi ekle" talimatını verir
(add-company {:id 5 :brand-name "ZYCCELL" :email "ZYCCELL@company.com" :phonenumber "1234567890" :category [:service/bilgisayar]})
;11. Sistem, yeni bir tablo sunar ve satın alma uzmanı bilgileri girer, sistem veri tabanına kaydeder
;12. Sistem, seçilen tedarikçileri veri tabanına kaydeder ve uzmana "ön izleme ekranında" gösterir

(->>
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

(vec (map (fn [[?bn ?ctg ?pn]]
            {:brand-name     ?bn
             :category       ?ctg
             :contact-number ?pn
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
                 ))))




;veri tabanına kayıt edilen bütün tedarikçileri gösterir
(d/q
  '[:find ?e
    :where
    [_ :company/brand-name ?e]]
  db)
;=> [["APPLE"] ["IBM"] ["TEI"] ["HP"] ["ZYCCELL"]]


;13. Satın alma uzmanı, ön izleme ekranında bilgileri kontrol eder ve "proje başlat" talimatını verir.
;15. Sistem, tedarikçileri "teklif giriş ekranına" yönlendirir ve tedarikçiler, "teklif gir" talimatını
;verir, tekliflerini girerler.


(add-proposal {:id 1 :supplier-id [:company/id 2] :amount 139000 :project-id [:project/id 1] :item-amount 11 :order-status :proposal-status/waiting :client-company [:company/id 1] :client-person [:user/id 1]})
(add-proposal {:id 2 :supplier-id [:company/id 3] :amount 124000 :project-id [:project/id 1] :item-amount 12 :order-status :proposal-status/waiting :client-company [:company/id 1] :client-person [:user/id 1]})
(add-proposal {:id 3 :supplier-id [:company/id 4] :amount 135000 :project-id [:project/id 1] :item-amount 13 :order-status :proposal-status/waiting :client-company [:company/id 1] :client-person [:user/id 1]})
(add-proposal {:id 4 :supplier-id [:company/id 4] :amount 135000 :project-id [:project/id 2] :item-amount 14 :order-status :proposal-status/waiting :client-company [:company/id 1] :client-person [:user/id 1]})
(add-proposal {:id 5 :supplier-id [:company/id 4] :amount 135000 :project-id [:project/id 2] :item-amount 15 :order-status :proposal-status/waiting :client-company [:company/id 1] :client-person [:user/id 1]})
(add-proposal {:id 6 :supplier-id [:company/id 4] :amount 135000 :project-id [:project/id 3] :item-amount 16 :order-status :proposal-status/waiting :client-company [:company/id 1] :client-person [:user/id 1]})

;16. Sistem, tedarikçilerin girdiği teklifleri veri tabanına kaydeder, satın alma uzmanına [bildirim
;gönderir].
;17. Satın alma uzmanı projeye girdiğinde, sistem "teklif kıyaslama ekranında" tedarikçilerin
;tekliflerini en iyi tekliften en kötü teklife doğru gösterir.


(->> (d/q
       '[:find ?si ?ia ?os ?p ?up
         :where
         [?e :proposal/id _]
         [?e :proposal/supplier-id ?s]
         [?e :proposal/item-amount ?ia]
         [?e :proposal/amount ?p]
         [?e :proposal/order-status ?ps]
         [?s :company/brand-name ?si]
         [?ps :db/ident ?os]
         [(app.database/unit-price ?p ?ia) ?up]
         ]
       db)
     (sort-by last)
     )


;=>
;(["HP" 20 :order-status/waiting 124000 6200]
; ["APPLE" 20 :order-status/waiting 135000 6750]
; ["IBM" 20 :order-status/waiting 139000 6950])


;18. Satın alma uzmanı, teklif kıyaslama ekranında uygun bulduğu tedarikçileri onaylar, sistem
;tedarikçilere [bildirim gönderir] ve proje sonlanır.
(add-proposal {:id 1 :supplier-id [:company/id 2] :amount 139000 :project-id [:project/id 1] :item-amount 20 :order-status :proposal-status/ongoing :client-company [:company/id 1] :client-person [:user/id 1]})

(->> (d/q
       '[:find ?si ?ia ?p ?up
         :where
         [?e :proposal/id _]
         [?e :proposal/supplier-id ?s]
         [?e :proposal/item-amount ?ia]
         [?e :proposal/amount ?p]
         [?s :company/brand-name ?si]
         [(app.database/unit-price ?p ?ia) ?up]
         ]
       db)
     (sort-by last)
     )
;=> (["IBM" 20 139000 6950])

;19. Sistem, tüm paydaşlara tedarikçilerin hazırladığı siparişlerin durumlarını takip etmesi için
;"sipariş ekranı" sunar ve [bildirim gönderir]. Gerçekleşen her bir güncelleme, siparişler teslim
;edilene kadar ekranda gösterilir.



#_(ui/button
    (e/fn []
          #_(e/server (add-project {:id                   (e/server (get-free-project-id db))
                                    :client-user-id       [:user/id (e/server (get-user-id-by-name (e/client (get (e/watch !state) :username)) db))]
                                    :client-company-id    [:company/id (e/server (get-company-id-by-name (e/client (get (e/watch !state) :username)) db))]
                                    :clientphonenumber    (str (get (e/watch !state) :phone-number))
                                    :project-title        (str (get (e/watch !state) :project-title))
                                    :projectstartingdate  (str (get (e/watch !state) :start-date))
                                    :projectfinishingdate (str (get (e/watch !state) :finish-date))
                                    :documents            (str (get (e/watch !state) :docs))} db conn)
                      )
          )
    (dom/text "Create")
    (dom/props {:class "create-project"
                :name  "signup-button"
                :style {:text-align "center"}
                }))





;  ;;router kullanım örnek syntaxı ---->
;                  (router/link [`app.poms-01-login-20230828/login-page] (dom/text "login sayfası"))


#_(ui/button
    (e/fn []
          (e/server (add-project {
                                  :id                   5
                                  :client-user-id       [:user/id 1]
                                  :client-company-id    [:company/id 1]
                                  :clientphonenumber    "1234567890"
                                  :project-title        "merhabalar"
                                  :projectstartingdate  "120230906"
                                  :projectfinishingdate "20230916"
                                  :documents            "doc"
                                  } db conn)
                    )
          )
    (dom/text "Create")
    (dom/props {:class "create-project"
                :name  "signup-button"
                :style {:text-align "center"}
                }))




#_(if (get (e/watch !state) :btn1-is-clicked)
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
      false ((.setTimeout js/window #(set! js/window.location.href "http://localhost:8080/(app.poms-02-cp-20230830!create-project)") 3000)
             (swap! !state assoc :login-info "Login succesfull, redirecting...")
             (swap! !state assoc :btn1-is-clicked false))
      nil ((swap! !state assoc :login-info "Wrong information!")
           (swap! !state assoc :btn1-is-clicked false))
      )
    )

(def db (d/db conn))

(ffirst (d/q
          '[:find ?e
            :in $ ?id
            :where
            [?e :rfp/id ?id]]
          db 3))



(read-string "33")


#_(if (get (e/watch !state) :btn1-is-clicked)
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
                                   ))
      false ((.setTimeout js/window #(set! js/window.location.href "http://localhost:8080/(app.poms-04-sif-20230907!sif-page)") 2000)
             (swap! !state assoc :login-info "Company created, redirecting...")
             (swap! !state assoc :btn1-is-clicked false))
      true ((swap! !state assoc :login-info "Something went wrong!!")
            (swap! !state assoc :btn1-is-clicked false))
      )
    )

#_(dom/p (dom/text (get (e/watch !state) :login-info)
                   (dom/props {:class      "login-info"
                               :name       "login-text"
                               :text-align "center"
                               })))

#_(ui/button
    (e/fn []
          (e/server (add-company {:id          (e/server (get-free-company-id db))
                                  :brand-name  (e/client (get (e/watch !state) :brand-name))
                                  :email       (e/client (str (get (e/watch !state) :email)))
                                  :phonenumber (e/client (long (get (e/watch !state) :phonenumber)))
                                  :category    [(e/client (str (get (e/watch !state) :category)))]
                                  } conn)
                    )
          )
    (dom/on "click" (fn [_] (swap! !state assoc :btn1-is-clicked true)))
    (dom/text "Create")
    (dom/props {:type  "button"
                :class "create-project"
                :name  "signup-button"
                :style {:text-align "center"}
                }))


#_(e/fn []
        (e/server (add-company {:id          (e/server (get-free-company-id db))
                                :brand-name  (e/client (str (get (e/watch !state) :brand-name)))
                                :email       (e/client (str (get (e/watch !state) :email)))
                                :phonenumber (e/client (long (get (e/watch !state) :phonenumber)))
                                :category    [(e/client (get (e/watch !state) :category))]
                                } conn)
                  )
        )

;; (.alert js/window "Hello from CLJS")
; "Password is missing a special character."





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


(d/q
  '[:find ?pceid
    :in $ ?user ?userraw
    :where
    [?e :project/client-user-id ?user]
    [?e :project/id ?pi]

    [?ueid :user/id ?userraw]
    [?ueid :user/name ?un]

    [?e :project/client-company-id ?pceid]
    [?pceid :company/id ?cid]
    [?ceid :company/id ?cid]
    [?ceid :company/brand-name ?cn]

    ]
  db [:user/id 1] 1)

(d/q
  '[:find ?pi ?un ?cn ?pt ?psd ?pfd ?rfp-id ?rfp-name ?rfp-item-amount ?rfp-category ?rfpexplanation
    :in $ ?user ?user-raw
    :where
    [?e :project/client-user-id ?user]
    [?e :project/id ?pi]

    [?ueid :user/id ?user-raw]
    [?ueid :user/name ?un]

    [?e :project/client-company-id ?pceid]
    [?pceid :company/id ?cid]
    [?ceid :company/id ?cid]
    [?ceid :company/brand-name ?cn]

    [?e :project/client-user-id ?user]
    [?e :project/project-title ?pt]
    [?e :project/project-sd ?psd]
    [?e :project/project-fd ?pfd]

    [?rfpe :rfp/project-id ?e]
    [?rfpe :rfp/id ?rfp-id]
    [?rfpe :rfp/name ?rfp-name]
    [?rfpe :rfp/item-amount ?rfp-item-amount]
    [?rfpe :rfp/category ?rfp-category]
    [?rfpe :rfp/explanation ?rfpexplanation]

    ]
  db [:user/id 1] 1)

(d/q
  '[:find (pull ?e [*])
    :where
    [?e :rfp/id 1]]
  db)

(d/q
  '[:find (pull ?e [*])
    :where
    [87960930222195 :project/id ?e]]
  db)
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
  db [:user/id 1] 1)

(d/q
  '[:find ?name
    :in $ ?ctg
    :where
    ;get rfp data by entity id of current project (rfp table's :project/id reference ---> ([?rfpe :rfp/project-id ?e]) )
    [?rfpe :rfp/category ?ctg]
    [?rfpe :rfp/name ?name]

    ]
  db (get-entity-id-by-enum :service/bilgisayar))

(if (empty? (d/q
              '[:find ?e
                :where
                [_ :proposal/id ?e]]
              db)
            )
  0
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




(defn get-free-proposal-id [db] (+ 1 (ffirst (take 1 (reverse (->> (d/q
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

(d/q
  '[:find ?pid ?cid ?uid
    :in $ ?rfpid
    :where
    ;get rfp data by entity id of current project (rfp table's :project/id reference ---> ([?rfpe :rfp/project-id ?e]) )
    [?e :rfp/id ?rfpid]
    [?e :rfp/project-id ?peid]
    [?peid :project/id ?pid]
    [?peid :project/client-company-id ?ccid]
    [?ccid :company/id ?cid]
    [?peid :project/client-user-id ?cuid]
    [?cuid :user/id ?uid]
    ]
  db 1)

(defn item-amount-check [rfp-id item-amount db]
  (let [[rfp-item-amount]
        (first (d/q
                 '[:find ?ria
                   :in $ ?rfp-id
                   :where
                   ;get rfp data by entity id of current project (rfp table's :project/id reference ---> ([?rfpe :rfp/project-id ?e]) )
                   [?e :rfp/id ?rfp-id]
                   [?e :rfp/item-amount ?ria]
                   ]
                 db rfp-id))
        ]
    (if (<= item-amount rfp-item-amount)
      item-amount
      (throw (Exception. "istenenden fazla ürün giremezsiniz"))
      )
    )
  )




(if (empty? (d/q
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


(ffirst (d/q
          '[:find ?e
            :in $ ?name
            :where
            [?e :company/brand-name ?name]
            ]
          db "IBM")
        )

(ffirst (d/q
          '[:find ?id
            :in $ ?name
            :where
            [?e :company/brand-name ?name]
            [?e :company/id ?id]
            ]
          db "IBM")
        )




(comment

  (dom/div (dom/props {:style {:margin-left "20%"}})

           (ui/button
             (e/fn []
                   (let [[project-id client-company client-person rfp-item-amount]
                         (e/server
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
                                    db (Long/parseLong rfp-id))))
                         ]
                     (e/server
                       (d/transact conn {:tx-data [{:proposal/id             (get-free-proposal-id db)
                                                    :proposal/supplier-id    [:company/id (get-company-id-by-name (e/client (str (get (e/watch !state) :supplier-id))) db)]
                                                    :proposal/amount         (Long/parseLong (e/client (get (e/watch !state) :amount)))
                                                    :proposal/project-id     [:project/id project-id]
                                                    :proposal/item-amount    (e/client (get (e/watch !state) :item-amount))
                                                    :proposal/order-status   :proposal-status/waiting
                                                    :proposal/client-company [:company/id client-company]
                                                    :proposal/client-person  [:user/id client-person]
                                                    }
                                                   ]}))
                     ))
             (dom/on "click" (fn [_] (swap! !state assoc :btn1-is-clicked true)))
             (dom/text "Add Proposal")
             (dom/props {:type  "button"
                         :class "button1"
                         :name  "login-button"
                         :style {:text-align "center" :margin-left "50px" :padding-left "45px" :padding-right "45px"}
                         })
             )


           (if (get (e/watch !state) :btn1-is-clicked)
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
                      (swap! !state assoc :btn1-is-clicked false))
               true ((swap! !state assoc :login-info "Check given parameters!!")
                     (swap! !state assoc :btn1-is-clicked false))
               )
             )

           (dom/p (dom/text (get (e/watch !state) :login-info)
                            (dom/props {:class      "login-info"
                                        :name       "login-text"
                                        :text-align "center"
                                        })))
           ))

#_(dom/text
    "rfp-id   " rfp-id
    ":proposal/id   " (e/server (get-free-proposal-id db))
    ":proposal/supplier-id   " [:company/id (e/server (get-company-id-by-name (e/client (str (get (e/watch !state) :supplier-id))) db))]
    ":proposal/amount   " (e/server (read-string (e/client (get (e/watch !state) :amount))))
    ":proposal/project-id   " [:project/id 1]
    ":proposal/item-amount   " (e/server (read-string (e/client (get (e/watch !state) :item-amount))))
    ":proposal/order-status  " :proposal-status/waiting
    ":proposal/client-company  " [:company/id 1]
    ":proposal/client-person  " [:user/id 1]
    )

(defn password-check [password]
  (let [missing-conditions
        (cond-> []
                (not (re-matches #".*[0-9].*" password))
                (conj "a digit")
                (not (re-matches #".*[A-Za-z].*" password))
                (conj "a letter")
                (not (re-matches #".*[^0-9A-Za-z].*" password))
                (conj "a special character")
                (not (<= 5 (count password) 12))
                (conj "must be between 5-12 characters"))]
    (if (empty? missing-conditions)
      "Password is strong."
      (str "Password is missing " (clojure.string/join " and " missing-conditions) "."))))



(defn sort-table-by-column [table column]
  (let [rows (js->clj (.getElementsByTagName table "tr") :keywordize-keys true)
        get-cell-text (fn [row]
                        (-> row
                            (.getElementsByTagName "td")
                            (aget column)
                            (.textContent)
                            (.trim)))]
    (sort-by #(get-cell-text %) (rest rows))))

(defn sort-table [table column]
  (let [sorted-rows (sort-table-by-column table column)
        tbody (js->clj (.querySelector table "tbody") :keywordize-keys true)]
    (doseq [row sorted-rows]
      (.appendChild tbody row))))


(def table-data
  [{:id 1 :name "John" :age 25}
   {:id 2 :name "Alice" :age 30}
   {:id 3 :name "Bob" :age 22}])

(defn sort-table-by-column [data column-key]
  (sort-by #(get % column-key) data))

(defn main []
  (let [sorted-data (sort-table-by-column table-data :name)]
    (doseq [row sorted-data]
      (println (str "ID: " (:id row) ", Name: " (:name row) ", Age: " (:age row))))))

(main)




















(let [[project-id client-company client-person rfp-item-amount]
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
               db (read-string "1")))
      ]
  (type project-id)
  (type client-company)
  (type client-person)
  (type rfp-item-amount)

  )

(ffirst (d/q
          '[:find ?id
            :in $ ?name
            :where
            [?e :user/name ?name]
            [?e :user/id ?id]
            ]
          db "user1")
        )

(ffirst (d/q
          '[:find ?e
            :in $ ?ent
            :where
            [?ent :user/id ?e]
            ]
          db (ffirst (d/q
                       '[:find ?e
                         :in $ ?name
                         :where
                         [?e :user/name ?name]
                         ]
                       db "user1")
                     ))
        )

(if (empty? (d/q
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


(d/q
  '[:find ?peid
    :in $ ?category
    :where
    [?rfp-cat :db/ident ?category]
    [?e :rfp/category ?rfp-cat]
    [?e :rfp/project-id ?rfp-p-id]
    [?peid :proposal/project-id ?rfp-p-id]

    ]
  db :service/bilgisayar)

;=>
;[[{:proposal/id 1,
;   :proposal/supplier-id #:db{:id 101155069755500},
;   :proposal/item-amount 20,
;   :proposal/project-id #:db{:id 96757023244403},
;   :proposal/amount 139000,
;   :proposal/client-company #:db{:id 79164837199979},
;   :db/id 79164837199992,
;   :proposal/order-status #:db{:id 87960930222163, :ident :proposal-status/ongoing},
;   :proposal/client-person #:db{:id 101155069755503}}]
; [{:proposal/id 2,
;   :proposal/supplier-id #:db{:id 92358976733293},
;   :proposal/item-amount 20,
;   :proposal/project-id #:db{:id 96757023244403},
;   :proposal/amount 124000,
;   :proposal/client-company #:db{:id 79164837199979},
;   :db/id 87960930222201,
;   :proposal/order-status #:db{:id 87960930222161, :ident :proposal-status/waiting},
;   :proposal/client-person #:db{:id 101155069755503}}]
; [{:proposal/id 3,
;   :proposal/supplier-id #:db{:id 87960930222190},
;   :proposal/item-amount 20,
;   :proposal/project-id #:db{:id 96757023244403},
;   :proposal/amount 135000,
;   :proposal/client-company #:db{:id 79164837199979},
;   :db/id 92358976733306,
;   :proposal/order-status #:db{:id 87960930222161, :ident :proposal-status/waiting},
;   :proposal/client-person #:db{:id 101155069755503}}]]

(d/q
  '[:find ?peid
    :in $ ?category
    :where
    [?rfp-cat :db/ident ?category]
    [?e :rfp/category ?rfp-cat]
    [?e :rfp/project-id ?rfp-p-id]
    [?peid :proposal/project-id ?rfp-p-id]

    ]
  db :service/bilgisayar)

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
  db 87960930222156)

;=>
;[[2 "wer" 15 :service/seyahat "ipad 10 adet"]
; [1 "notebook" 20 :service/bilgisayar "bilgisayar satın alma projesi"]
; [2 "wer" 15 :service/konaklama "ipad 10 adet"]
; [2 "wer" 15 :service/bilgisayar "ipad 10 adet"]]

(d/q
  '[:find ?prop-id ?supp-comp-bn ?prop-iam ?prop-am ?prop-up
    :in $ ?category
    :where
    [?rfp-cat :db/ident ?category]
    [?e :rfp/category ?rfp-cat]
    [?e :rfp/project-id ?rfp-p-id]
    [?peid :proposal/project-id ?rfp-p-id]
    [?peid :proposal/id ?prop-id]
    [?peid :proposal/supplier-id ?prop-supp-id]
    [?prop-supp-id :company/brand-name ?supp-comp-bn]
    [?peid :proposal/item-amount ?prop-iam]
    [?peid :proposal/amount ?prop-am]
    [(app.database/unit-price ?prop-am ?prop-iam) ?prop-up]
    ]
  db :service/bilgisayar                                    ;bunu dropdown ile alacağız.
  )

;=> [[2 "HP" 20 124000 6200] [3 "APPLE" 20 135000 6750] [1 "IBM" 20 139000 6950]]


(->> (d/q
       '[:find ?prop-id ?supp-comp-bn ?prop-iam ?prop-am ?prop-up
         :in $ ?category
         :where
         [?rfp-cat :db/ident ?category]
         [?e :rfp/category ?rfp-cat]
         [?e :rfp/project-id ?rfp-p-id]
         [?peid :proposal/project-id ?rfp-p-id]
         [?peid :proposal/id ?prop-id]
         [?peid :proposal/supplier-id ?prop-supp-id]
         [?prop-supp-id :company/brand-name ?supp-comp-bn]
         [?peid :proposal/item-amount ?prop-iam]
         [?peid :proposal/amount ?prop-am]
         [(app.poms-08-ap-20230918/unit-price ?prop-am ?prop-iam) ?prop-up]
         ]
       db :service/bilgisayar)
     (sort-by last)
     )


(comment
  (e/for [[proposal-id supplier-company item-amount amount unit-price]
          (e/server
            (binding [conn @(requiring-resolve 'user/datomic-conn)]
              (binding [db (d/db conn)]
                (->> (d/q
                       '[:find ?prop-id ?supp-comp-bn ?prop-iam ?prop-am ?prop-up
                         :in $ ?category
                         :where
                         [?rfp-cat :db/ident ?category]
                         [?e :rfp/category ?rfp-cat]
                         [?e :rfp/project-id ?rfp-p-id]
                         [?peid :proposal/project-id ?rfp-p-id]
                         [?peid :proposal/id ?prop-id]
                         [?peid :proposal/supplier-id ?prop-supp-id]
                         [?prop-supp-id :company/brand-name ?supp-comp-bn]
                         [?peid :proposal/item-amount ?prop-iam]
                         [?peid :proposal/amount ?prop-am]
                         [(app.poms-08-ap-20230918/unit-price ?prop-am ?prop-iam) ?prop-up]
                         ]
                       db category)
                     (sort-by last)
                     )
                )
              )
            )
          ]

         (dom/tr
           (dom/td (dom/props {:rowspan 5}) (dom/text "Proposal: "))
           (dom/td (dom/text "Proposal Id"))
           (dom/td (dom/text proposal-id))
           )
         (dom/tr
           (dom/td (dom/text "Offered Company"))
           (dom/td (dom/text supplier-company))
           )
         (dom/tr
           (dom/td (dom/text "Item Amount"))
           (dom/td (dom/text item-amount))
           )
         (dom/tr
           (dom/td (dom/text "Amount"))
           (dom/td (dom/text amount))
           )
         (dom/tr
           (dom/td (dom/text "Piece/Price"))
           (dom/td (dom/text unit-price))
           )
         )
  )

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
      [(app.database/unit-price ?pr-am ?pr-iam) ?pr-uprice]
      ]
    db 1)
  (sort-by last)
  )

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
      [(app.database/unit-price ?pr-am ?pr-iam) ?pr-uprice]
      ]
    db 1)
  (sort-by last)
  )

(->>
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
    [(app.database/unit-price ?pr-am ?pr-iam) ?pr-uprice]
    ]
  db 2)




(d/q
  '[:find (pull ?e [*])
    :where
    [?e :proposal/id 1]
    ]
  db)

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
               db 1))
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
                              ]})
  )
(def db (d/db conn))                                        ;;refresh database

(d/q
  '[:find (pull ?e [*])
    :where
    [?e :proposal/id 1]
    ]
  db)



(= :proposal-status/ongoing
   (ffirst (d/q
             '[:find ?pos
               :in $ ?id
               :where
               [?e :proposal/id ?id]
               [?e :proposal/order-status ?pose]
               [?pose :db/ident ?pos]
               ]
             db 1))
   )

(d/q
  '[:find ?cc ?un ?pia ?pos
    :in $ ?id
    :where
    [?x :user/id ?id]
    [?e :proposal/client-person ?cux]
    [?cux :user/name ?un]
    [?e :proposal/client-company ?ccx]
    [?ccz :company/brand-name ?cc]
    [?e :proposal/item-amount ?pia]
    [?e :proposal/order-status ?posx]
    [?posx :db/ident ?pos]

    ]
  db 1)




(<= 23 20)

(= :proposal-status/ongoing
   (ffirst (d/q
             '[:find ?pos
               :in $ ?id
               :where
               [?e :proposal/id ?id]
               [?e :proposal/order-status ?pose]
               [?pose :db/ident ?pos]
               ]
             db 1))
   )


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
               db 1))
      ]
  (d/transact conn {:tx-data [{:proposal/id             id
                               :proposal/supplier-id    [:company/id supplier-id]
                               :proposal/amount         amount
                               :proposal/project-id     [:project/id project-id]
                               :proposal/item-amount    item-amount
                               :proposal/order-status   :proposal-status/waiting
                               :proposal/client-company [:company/id client-company]
                               :proposal/client-person  [:user/id client-person]
                               }
                              ]})
  )


(d/q
  '[:find ?cc ?un ?pia ?pos
    :in $ ?id
    :where
    [?cux :user/id ?id]
    [?e :proposal/client-person ?cux]
    [?cux :user/name ?un]
    [?e :proposal/client-company ?ccx]
    [?ccz :company/brand-name ?cc]
    [?e :proposal/item-amount ?pia]
    [?e :proposal/order-status ?posx]
    [?posx :db/ident ?pos]
    ]
  db 4)


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
  db 1)

(first (d/q
         '[:find ?ucbn
           :in $ ?name
           :where
           [?cux :user/name ?name]
           [?cux :user/company-id ?ucidx]
           [?ucidx :company/brand-name ?ucbn]
           ]
         db "user1"))


(d/q
  '[:find ?pcn ?pun ?pia ?pos
    :in $ ?id
    :where
    [?cueid :user/id ?id]
    [?e :proposal/client-person ?cueid]
    [?e :proposal/supplier-id ?psid]
    [?e :proposal/item-amount ?pia]
    [?e :proposal/order-status ?posx]
    [?posx :db/ident ?pos]
    [?psid :company/brand-name ?pcn]
    [?pueid :user/company-id ?psid]
    [?pueid :user/name ?pun]
    ]
  db 1)

(d/q
  '[:find ?cc ?un ?pia ?pos
    :in $ ?id
    :where
    [?cux :user/id ?id]
    [?e :proposal/client-person ?cux]
    [?e :proposal/client-company ?ccx]
    [?e :proposal/item-amount ?pia]
    [?e :proposal/order-status ?posx]
    [?posx :db/ident ?pos]
    [?cux :user/name ?un]
    [?ccx :company/brand-name ?cc]
    ]
  db 1)

(d/q
  '[:find ?e ?username ?pia
    :in $ ?id
    :where
    [?cux :user/id ?id]
    [?e :proposal/client-person ?cux]
    [?e :proposal/supplier-id ?sux]
    [?sux :company/brand-name ?username]
    [?e :proposal/item-amount ?pia]

    ]
  db 1)

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
  db 1)


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
    db 2)
  (sort-by last)
  )


(d/q
  '[:find ?e ?p ?pid
    :in $ ?rfp-id
    :where
    [?e :rfp/id ?rfp-id]
    [?e :rfp/project-id ?p]
    [?p :project/id ?pid]
    ]
  db 1)

(ffirst (d/q
          '[:find ?pid
            :in $ ?rfp-id
            :where
            [?e :rfp/id ?rfp-id]
            [?e :rfp/project-id ?p]
            [?p :project/id ?pid]
            ]
          db 1))


(d/q
  '[:find ?dx ?dx ?pia ?pos
    :in $ ?id
    :where
    [?cux :user/id ?id]
    [?e :proposal/client-person ?cux]
    [?e :proposal/item-amount ?pia]
    [?e :proposal/order-status ?posx]
    [?posx :db/ident ?pos]
    [?e :proposal/supplier-id ?dd]
    [?dd :company/brand-name ?dx]
    ]
  db 1)

(macroexpand '(-> dt .toISOString (subs 0 10)))

(ns user-main
  (:require contrib.ednish
            [hyperfiddle.api :as hf]
            [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as history]

            app.demo-index
            app.poms-01-login-20230828
            app.poms-00-signup-20230831
            app.poms-02-cp-20230830
            app.poms-03-crfp-20230906
            app.poms-04-sif-20230907
            app.poms-05-addcompany-20230907
            app.poms-06-ph-20230915
            app.poms-07-app-20230915
            app.poms-08-ap-20230918
            app.poms-09-ot-20230920
            ))



(e/defn NotFoundPage []
        (e/client (dom/h1 (dom/text "Page not found!"))))


(e/defn Pages [page]
        (e/server
          (case page
            `app.demo-index/Demos app.demo-index/Demos
            `app.poms-02-cp-20230830/create-project app.poms-02-cp-20230830/create-project
            `app.poms-01-login-20230828/login-page app.poms-01-login-20230828/login-page
            `app.poms-00-signup-20230831/signup-page app.poms-00-signup-20230831/signup-page
            `app.poms-03-crfp-20230906/create-rfp app.poms-03-crfp-20230906/create-rfp
            `app.poms-04-sif-20230907/sif-page app.poms-04-sif-20230907/sif-page
            `app.poms-05-addcompany-20230907/add-company app.poms-05-addcompany-20230907/add-company
            `app.poms-06-ph-20230915/ph-page app.poms-06-ph-20230915/ph-page
            `app.poms-07-app-20230915/app-page app.poms-07-app-20230915/app-page
            `app.poms-08-ap-20230918/approve-proposal app.poms-08-ap-20230918/approve-proposal
            `app.poms-09-ot-20230920/operation-track-page app.poms-09-ot-20230920/operation-track-page

            NotFoundPage)))

(e/defn Main []
        (binding [history/encode contrib.ednish/encode-uri
                  history/decode #(or (contrib.ednish/decode-path % hf/read-edn-str)
                                      [`app.demo-index/Demos])]
          (history/router (history/HTML5-History.)
                          (set! (.-title js/document) (str (clojure.string/capitalize (name (first history/route))) " - Hyperfiddle"))
                          (binding [dom/node js/document.body])
                          (dom/pre (dom/text (contrib.str/pprint-str history/route)))
                          (let [[page & args] history/route]
                            (e/server (new (Pages. page #_args)))))))
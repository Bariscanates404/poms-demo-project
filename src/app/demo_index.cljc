(ns                                                         ;^:dev/always
  app.demo-index
  (:require [hyperfiddle.electric :as e]
            [hyperfiddle.electric-dom2 :as dom]
            [hyperfiddle.history :as router]
            ))


#_(def pages
    [`app.poms-01-login-20230828/login-page
     `app.poms-00-signup-20230831/signup-page
     `app.poms-02-cp-20230830/create-project
     ])

#_(e/for [k pages]
         (dom/div (router/link [k] (dom/text (name k)))))


(e/defn Demos []
        (e/server
          (e/client
            (dom/element "style" (dom/text "
                  ul{list-style-type: none; margin: 0; padding: 0; background-color: black; overflow: auto; }
                  li {float: left;}
                  li a {color: white; padding: 15px 25px; display: inline-block; text-align: center; text-decoration: none;}
                  .home {background-color: darkred;}
                  li a:hover {
                  background-color: #405d27;
                  legend {font-size: 25px; font-style: italic;} p {margin-bottom: 0}
                  }
                  #container {position:absolute;  left: 40%;  top: 50%; margin-left: -50px;  margin-top: -50px; font-style: italic;}"
                                           )
                         )
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

            (dom/div (dom/props {:id "container"})
                     (dom/p (dom/props {:style {:font-size "25px"}})
                            (dom/text "Welcome! Colabio makes life easier...")
                            )
                     )
            )
          )
        )









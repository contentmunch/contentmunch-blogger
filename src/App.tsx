import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './assets/App.scss';
import {HelmetProvider} from "react-helmet-async";
import {ArticleHome, ArticleNotFound, ArticleViewer, Footer, Header} from "@contentmunch/contentmunch-blog";

export const ARTICLE_ROUTE = "/articles";
export const App: React.FC = () => {
    return (
        <HelmetProvider>
            <Router hashType="noslash">


                <Header/>
                <Switch>

                    <Route exact path="/">
                        <ArticleHome/>
                    </Route>
                    <Route path="/:id">
                        <ArticleViewer/>
                    </Route>
                    <Route path="*">
                        <ArticleNotFound/>
                    </Route>
                </Switch>
                <Footer/>

            </Router>
        </HelmetProvider>
    );
};

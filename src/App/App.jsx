import React from 'react';
import { Router,Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../helpers';
import { LocalizeProvider } from 'react-localize-redux';
import './App.css'
import { lazy, Suspense } from "react";
import { Loading } from '../components/common';
import "antd/dist/antd.css";

const LazyHomeComponent = lazy(() => import('../containers/home/HomePage'));

function WaitingComponent(Component) {
    return props => (
      <Suspense fallback={<Loading text="Loading"/>}>
        <Component {...props} />
      </Suspense>
    );
  }

class App extends React.Component {
    
    constructor(props){
        super(props);
    }   
    
    render() {
        return (            
            <div style={{height:'100%'}}>                                         
                <LocalizeProvider>
                    <Router history={history}>                    
                        <div style={{height:'100%'}}>                         
                                <Route path="/home" exact component={WaitingComponent(LazyHomeComponent)} />
                                <Route exact path="/">
                                    <Redirect to="/home" />
                                </Route>                                
                        </div>                    
                    </Router>                
                </LocalizeProvider>
            </div>
        );
    }
}

const connectedApp = connect(null)(App);
export  { connectedApp as App }; 

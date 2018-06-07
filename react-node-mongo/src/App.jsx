/**
 * Created by 30113 on 2018/5/5.
 */
import React from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import reducers from './reducer'
import './app.css'
import {Login} from './pages/login'
import {Register} from './pages/register'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

class App extends React.Component {
    render() {
        return (
            (<Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={Login} exact />
                        <Route path="/register" component={Register} exact />
                        <Route component={Login}/>
                    </Switch>
                </BrowserRouter>
            </Provider>)
        )
    }
}

export default App
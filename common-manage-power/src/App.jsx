/**
 * Created by 30113 on 2018/5/5.
 */
import React from 'react'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import reducers from './reducer'
import {Login} from './pages/login'
import {Register} from './pages/register'
import {Home} from './pages/home'
import AuthRoute from './components/authroute/authroute'

import './App.scss'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))
class App extends React.Component {
    render() {
        return (
            (<Provider store={store}>
                <BrowserRouter>
                    <div>
                        <AuthRoute/>
                        <Switch>
                            <Route path="/login" component={Login}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/home" component={Home}/>
                            <Route component={Home}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>)
        )
    }
}

export default App
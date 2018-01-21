/**
 * Created by sudarshan on 21/1/18.
 */

/**
 * Created by sudarshan on 16/11/17.
 */
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from '../home/Home';
import Contact from '../contactUs/Contact';
import About from '../about/AboutUs';
import Login from '../login/login';


export default class StateProvider extends Component {

    render(){
        return (
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route path="/contactUs" component={Contact}></Route>
                <Route path="/aboutUs" component={About}></Route>
                <Route path="/login" component={Login}></Route>
            </div>
        )
    }

}
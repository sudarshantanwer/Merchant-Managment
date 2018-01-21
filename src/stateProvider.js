/**
 * Created by sudarshan on 21/1/18.
 */

/**
 * Created by sudarshan on 16/11/17.
 */
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import App from './App';
import Bids from './components/bids';


export default class StateProvider extends Component {

    render(){
        return (
            <div>
                <Route path="/bids" component={Bids}></Route>
            </div>
        )
    }

}
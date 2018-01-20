import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Header from './components/header';
import Table from './components/table';
import EditForm from './components/edit';
import {Provider} from 'react-redux';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {showTable : true, showForm : false};
    }

    editHandler(id){
    this.setState({showTable : false, showForm : true});
    }
  render() {
    return (
        <div className="App">
        <div className="App-header">
            {/*<Header/>*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h2>Hii</h2>*/}
        </div>
            {

                this.state.showForm &&
                <a className="back-btn" href="#" onClick={() => {
                    this.setState({showTable: true, showForm: false})
                }}>Go back to Merchant Listing</a>
            }
            {
               this.state.showTable && <Table onEdit={this.editHandler.bind(this)}/>
            }
            {
                this.state.showForm && <EditForm/>

            }
      </div>
    );
  }
}

export default App;

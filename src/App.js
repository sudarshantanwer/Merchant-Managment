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
        this.state = {showTable : true, showForm : false, selectedId : ''};
    }

    editHandler(id){
        this.setState({showTable : false, showForm : true, selectedId : id});
    }

  render() {
    return (
        <div className="App">
        <div className="App-header">
            {/*<Header/>*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h2>Hii</h2>*/}
        </div>
            <div className="content">
            {

                this.state.showForm &&
                <a className="back-btn" href="#" onClick={() => {
                    this.setState({showTable: true, showForm: false})
                }}> &lt;---- back</a>
            }
            {
               this.state.showTable && <Table onEdit={this.editHandler.bind(this)}/>
            }
            {
                this.state.showForm && <EditForm selectedId={this.state.selectedId}/>

            }
            </div>
      </div>
    );
  }
}

export default App;

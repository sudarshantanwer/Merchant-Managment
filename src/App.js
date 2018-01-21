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
        this.state = {showTable : true, showForm : false, selectedId : '', title:'Merchant List'};
    }

    editHandler(id){
        this.setState({showTable : false, showForm : true, selectedId : id, title:'Update Merchant'});
    }

    backToList(){
        this.setState({showTable: true, showForm: false})

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
                <header>
                    {
                        this.state.showForm && <a className="back-btn" href="#" onClick={() => { this.backToList() }}> &lt;---- back</a>
                    }
                    {
                        <h2 className="title">{this.state.title}</h2>
                    }
                    <input type="button" value="+ Add Merchant" className="btn-add"/>
                </header>
                <div className="container">
                {
                    this.state.showTable && <Table onEdit={this.editHandler.bind(this)}/>
                }

                {
                    this.state.showForm && <EditForm selectedId={this.state.selectedId} backToList={() => { this.backToList() }}/>

                }
                </div>
            </div>
      </div>
    );
  }
}

export default App;

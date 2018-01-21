import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Header from './components/header';
import Table from './components/table';
import EditForm from './components/edit';
import AddForm from './components/add';
import Bids from './components/bids';
import {Provider} from 'react-redux';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {showTable : true, showEditForm : false, showAddForm :false, selectedId : '', title:'Merchant List'};
    }

    editHandler(id){
        this.setState({showTable : false, showEditForm : true, showAddForm :false, selectedId : id, title:'Update Merchant'});
    }

    backToList(){
        this.setState({showTable : true, showEditForm : false, showAddForm :false, selectedId : '', title:'Merchant List'})

    }

    addButtonClicked(){
        this.setState({showTable: false, showEditForm: false, showAddForm :true, title:'Add New Merchant'});
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
                        (this.state.showEditForm || this.state.showAddForm)  && <a className="back-btn" href="#" onClick={() => { this.backToList() }}> &lt;--- back</a>
                    }
                    {
                        <h2 className="title">{this.state.title}</h2>
                    }
                    <input type="button" value="+ Add Merchant" className={`btn-add ${this.state.showAddForm && 'hide'}`} onClick={()=>{this.addButtonClicked()}}/>
                </header>

                <div className="container">
                {
                    this.state.showTable && <Table onEdit={this.editHandler.bind(this)}/>
                }

                {
                    this.state.showEditForm && <EditForm selectedId={this.state.selectedId} backToList={() => { this.backToList() }}/>

                }

                    {
                        this.state.showAddForm && <AddForm backToList={() => { this.backToList() }}/>

                    }
                    <Bids/>
                </div>
            </div>
      </div>
    );
  }
}

export default App;

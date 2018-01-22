/**
 * Created by sudarshan on 17/1/18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getMerchantList, deleteMerchant, getTotalCount } from '../actions';



class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedId : '', pageSize : 5, pageIndex : 0};
    }

    componentDidMount(){
        this.props.getMerchantList(this.state.pageSize, this.state.pageIndex);
        this.props.getTotalCount();
        debugger
        setTimeout(()=>{
            if(this.props.count){
                this.pageInfo();
            }
        })
        // this.forceUpdate();

    }


    pageInfo(){
        this.pages = 0;
        if(this.props.count % this.state.pageSize){
           this.pages = parseInt(this.props.count / this.state.pageSize) + 1;
        } else {
            this.pages = parseInt(this.props.count / this.state.pageSize);
        }

        debugger
        this.pageArray = [];
        for(var i=0;i<this.pages;i++){
            this.pageArray.push(i);
        }

        this.setState({pageArray : this.pageArray});

    }

    deleteMerchant(id) {
        if(window.confirm('Do you want to delete this merchant ?')){
            this.props.deleteMerchant(id);
            this.setState();
        }

    }

    pageClickHandler(pageIndex){
        this.setState({pageIndex : pageIndex});
        this.props.getMerchantList(this.state.pageSize, this.state.pageIndex);
        setTimeout(()=>{
            if(this.props.count){
                this.pageInfo();
            }
        })

    }

    render() {
        const {list} = this.props;
        return (
            <div className="table">
                    <ul className="table-header">
                    <li >First Name</li>
                    <li >Last Name</li>
                    <li >Email</li>
                    <li >Phone</li>
                    <li >Has Premium</li>
                    <li >Actions</li>
                </ul>
                <ul className="table-body">

                    {
                        list && list.length > 0 && list.map((obj,index)=>

                            <li  key={obj.id} >
                                <ul className="table-row">
                                    <li>{obj.firstname}</li>
                                    <li>{obj.lastname}</li>
                                    <li>{obj.email}</li>
                                    <li>{obj.phone}</li>
                                    <li>{obj.hasPremium + ''}</li>
                                    <li>
                                        <a href="#" onClick={()=>{this.props.onEdit(obj.id)}}>Edit</a>  |
                                        <a href="#" onClick={()=> { this.deleteMerchant(obj.id) }}>  Delete</a>  |
                                        <a href="#" onClick={()=>{this.props.bidListingHandler(obj.id)}} >  Bids</a>
                                    </li>
                                </ul>
                            </li>
                        )}

                </ul>
                {
                 false && <footer>
                        <span>Showing {this.state.pageSize} rows...</span>
                        {
                            this.state.pageArray && this.state.pageArray.length > 0 && this.state.pageArray.map((obj, index) =>
                                <span onClick={() => {
                                    this.pageClickHandler(index)
                                }} className={`paging ${this.state.pageIndex === index && 'selectedPage'}`}
                                      key={index}>{index}</span>
                            )}
                    </footer>
                }
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
     list: state.merchantReducer.list,
     count: state.merchantReducer.count
 }
};

const mapDispatchToProps = dispatch => ({
    getMerchantList: bindActionCreators(getMerchantList, dispatch),
    deleteMerchant: bindActionCreators(deleteMerchant, dispatch),
    getTotalCount: bindActionCreators(getTotalCount, dispatch)

});


export default connect(mapStateToProps, mapDispatchToProps)(Table);
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Table));

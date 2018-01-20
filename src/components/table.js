/**
 * Created by sudarshan on 17/1/18.
 */
import React, { Component } from 'react';
// import { withRouter,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getMerchantList, deleteMerchant} from '../actions';


class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {source:""}
    }

    componentDidMount(){
        this.props.getMerchantList();
    }

    deleteMerchant(id) {
        this.props.deleteMerchant(id);
        this.setState();
    }

    editHandler(){

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
                        list && list.map((obj,index)=>
                            <li  key={obj.id} >
                                <ul className="table-row">
                                    <li>{obj.firstname}</li>
                                    <li>{obj.lastname}</li>
                                    <li>{obj.email}</li>
                                    <li>{obj.phone}</li>
                                    <li>{obj.hasPremium}</li>
                                    <li>
                                        <a href="#" onClick={()=>{this.props.onEdit(obj.id)}}>Edit</a> |
                                        <a href="#" onClick={()=> { this.deleteMerchant(obj.id) }}>Delete</a>
                                    </li>
                                </ul>
                            </li>
                        )}


                    <li>
                        <ul className="table-row">

                        </ul>
                    </li>

                </ul>
            </div>
        );
    }
}


const mapStateToProps = state => {
    debugger
    return {
     list: state.merchantReducer.list
 }
};

const mapDispatchToProps = dispatch => ({
    getMerchantList: bindActionCreators(getMerchantList, dispatch),
    deleteMerchant: bindActionCreators(deleteMerchant, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Table);
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Table));

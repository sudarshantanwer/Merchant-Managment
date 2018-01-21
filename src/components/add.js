/**
 * Created by sudarshan on 18/1/18.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getMerchantInfo, addMerchant} from '../actions';

class AddForm extends Component {

    constructor(props){
        super(props);
        this.detail = {hasPremium : false};
    }

    addMerchant(){
        if(!this.ifSomethingChanged){
            alert('You have not updated anything');
        } else {
            if(!this.detail.firstname || !this.detail.email){
                alert('Please validate the form');
                return;
            }
            this.props.addMerchant(this.detail);
            alert('Merchant created Successfully.');
            this.props.backToList();
        }

    }

    changeHandler(e, prop){
        this.detail[prop] = e.target.value;
        this.ifSomethingChanged = true;
        //this.setState();
        this.forceUpdate();//setState();

    }

    radioChangeHandler(e, prop){
        this.detail[prop] = e.target.value == 'true' ? true : false ;
        this.ifSomethingChanged = true;
        this.forceUpdate();
    }

    render() {

        const {detail} = this.props;

        return (
            <div>

                <div className="edit-form">
                    <div className="form-row">
                        <span>First Name<span className="asterik">*</span></span><input type="text" className={`${!this.detail.firstname && 'danger' }`}
                                                      onChange={(e)=>{this.changeHandler(e, 'firstname')}} />
                    </div>
                    <div className="form-row">
                        <span>Last Name</span><input type="text"
                                                     onChange={(e)=>{this.changeHandler(e, 'lastname')}}/>
                    </div>
                    <div className="form-row">
                        <span>Email<span className="asterik">*</span></span><input type="text" className={`${!this.detail.email && 'danger' }`}
                                                 onChange={(e)=>{this.changeHandler(e, 'email')}}/>
                    </div>
                    <div className="form-row">
                    <span>Phone</span><input type="text"
                                             onChange={(e)=>{this.changeHandler(e, 'phone')}}/>
                    </div>
                    <div className="form-row">
                    <span>Avtar URL</span><input type="text"
                                                 onChange={(e)=>{this.changeHandler(e, 'avatarUrl')}}/>
                    </div>
                    <div className="form-row">
                        <span>Has Premium</span>
                        <div className="radio-block">
                        <label>Yes </label><input type="radio" value={true} name="premium" checked={this.detail.hasPremium === true}
                                                  onChange={(e)=>{this.radioChangeHandler(e, 'hasPremium')}} />
                            <label>No </label><input type="radio" value={false} checked={this.detail.hasPremium === false} name="premium"
                                                     onChange={(e)=>{this.radioChangeHandler(e, 'hasPremium')}} />
                        </div>
                    </div>
                    <div className="form-row">
                        <span></span><input className="btn-submit" type="button" value="Create Merchant"
                                            onClick={()=>{this.addMerchant()}} />
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => ({
    getMerchantInfo: bindActionCreators(getMerchantInfo, dispatch),
    addMerchant: bindActionCreators(addMerchant, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(AddForm);


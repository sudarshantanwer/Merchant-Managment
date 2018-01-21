/**
 * Created by sudarshan on 18/1/18.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getMerchantInfo, updateDetails} from '../actions';

class EditForm extends Component {

    componentDidMount(){
        const {getMerchantInfo, selectedId} = this.props;
        getMerchantInfo(selectedId);
        this.ifSomethingChanged = false;
    }

    onUpdate(){
        if(!this.ifSomethingChanged){
            alert('You have not updated anything');
        } else {
            if(!this.props.detail.firstname || !this.props.detail.email){
                alert('Please validate the form');
                return;
            }
            this.props.updateDetails(this.props.detail);
            alert('Information Updated Successfully.');
            this.props.backToList();
        }


    }

    changeHandler(e, prop){
        this.props.detail[prop] = e.target.value;
        this.ifSomethingChanged = true;
        this.forceUpdate();
    }

    radioChangeHandler(e, prop){
        this.props.detail[prop] = e.target.value == 'true' ? true : false ;
        this.ifSomethingChanged = true;
        this.forceUpdate();
    }

    render() {

        const {detail} = this.props;

        return (
            <div>{

                detail && Object.keys(detail).length > 0 &&
                <div className="edit-form">
                    <div className="form-row">
                        <span>First Name<span className="asterik">*</span></span><input type="text" value={detail.firstname} className={`${!detail.firstname && 'danger' }`}
                                                      onChange={(e)=>{this.changeHandler(e, 'firstname')}} />
                    </div>
                    <div className="form-row">
                        <span>Last Name</span><input type="text" value={detail.lastname}
                                                     onChange={(e)=>{this.changeHandler(e, 'lastname')}}/>
                    </div>
                    <div className="form-row">
                        <span>Email<span className="asterik">*</span></span><input type="text" value={detail.email} className={`${!detail.email && 'danger' }`}
                                                 onChange={(e)=>{this.changeHandler(e, 'email')}}/>
                    </div>
                    <div className="form-row">
                    <span>Phone</span><input type="text" value={detail.phone}
                                             onChange={(e)=>{this.changeHandler(e, 'phone')}}/>
                    </div>
                    <div className="form-row">
                    <span>Avtar URL</span><input type="text" value={detail.avatarUrl}
                                                 onChange={(e)=>{this.changeHandler(e, 'avatarUrl')}}/>
                    </div>
                    <div className="form-row">
                        <span>Has Premium</span>
                        <div className="radio-block">
                            <label>Yes </label><input value={true} type="radio" onChange={(e)=>{this.radioChangeHandler(e, 'hasPremium')}}
                                                      checked={detail.hasPremium === true} />
                            <label>No </label><input value={false} type="radio" onChange={(e)=>{this.radioChangeHandler(e, 'hasPremium')}}
                                                     checked={detail.hasPremium === false} />
                        </div>
                    </div>
                    <div className="form-row">
                        <span></span><input className="btn-submit" type="button" value="Update" onClick={()=>{this.onUpdate()}} />
                    </div>
                </div>
                }
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        detail: state.merchantReducer.detail
    }
};

const mapDispatchToProps = dispatch => ({
    getMerchantInfo: bindActionCreators(getMerchantInfo, dispatch),
    updateDetails: bindActionCreators(updateDetails, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(EditForm);


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
    }

    onUpdate(){
        this.props.updateDetails(this.props.detail);
        getMerchantInfo(this.props.selectedId);

    }

    changeHandler(e, prop){
        debugger
        this.props.detail[prop] = e.target.value;
        this.setState();
    }

    render() {

        const {detail} = this.props;
        //this.setState({detail : detail});

        return (
            <div>{

                detail && Object.keys(detail).length > 0 &&
                <div className="edit-form">
                    <div className="form-row">
                        <span>First Name</span><input type="text" value={detail.firstname}
                                                      onChange={(e)=>{this.changeHandler(e, 'firstname')}} />
                    </div>
                    <div className="form-row">
                        <span>Last Name</span><input type="text" value={detail.lastname} />
                    </div>
                    <div className="form-row">
                        <span>Email</span><input type="text" value={detail.email} />
                    </div>
                    <div className="form-row">
                    <span>Phone</span><input type="text" value={detail.phone} />
                    </div>
                    <div className="form-row">
                    <span>Avtar URL</span><input type="text" value={detail.avatarUrl} />
                    </div>
                    <div className="form-row">
                        <span>Has Premium</span>
                        <div className="radio-block">
                        <label>Yes </label><input type="radio" /> <label>No </label><input type="radio" />
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
    debugger
    return {
        detail: state.merchantReducer.detail
    }
};

const mapDispatchToProps = dispatch => ({
    getMerchantInfo: bindActionCreators(getMerchantInfo, dispatch),
    updateDetails: bindActionCreators(updateDetails, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(EditForm);


/**
 * Created by sudarshan on 18/1/18.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getMerchantInfo} from '../actions';

class EditForm extends Component {

    componentDidMount(){
        const {getMerchantInfo, selectedId} = this.props;
        getMerchantInfo(selectedId);
    }

    render() {

        const {detail} = this.props;

        return (
            <div>{

                detail && Object.keys(detail).length > 0 &&
                <div className="edit-form">
                    <div className="form-row">
                        <span>First Name</span><input type="text" value={detail.firstname} />
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
                        <span></span><input className="btn-submit" type="button" value="Update" />
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
    getMerchantInfo: bindActionCreators(getMerchantInfo, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(EditForm);


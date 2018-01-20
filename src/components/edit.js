/**
 * Created by sudarshan on 18/1/18.
 */

import React, { Component } from 'react';

class EditForm extends Component {
    render() {
        return (
            <div>
                <div className="edit-form">
                    <div className="form-row">
                        <span>First Name</span><input type="text" />
                    </div>
                    <div className="form-row">
                        <span>Last Name</span><input type="text" />
                    </div>
                    <div className="form-row">
                        <span>Email</span><input type="text" />
                    </div>
                    <div className="form-row">
                    <span>Phone</span><input type="text" />
                    </div>
                    <div className="form-row">
                    <span>Avtar URL</span><input type="text" />
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
            </div>
        );
    }
}

export default EditForm;


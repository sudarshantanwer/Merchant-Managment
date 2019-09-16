/**
 * Created by sudarshan on 21/1/18.
 */

/**
 * Created by sudarshan on 17/1/18.
 */
import React, { Component } from 'react';
// import { withRouter,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBids} from '../actions';


class Bids extends Component {
    constructor(props) {
        super(props);
        // this.state = {selectedId : ''};
    }

    componentDidMount(){
        debugger
        this.props.getBids(this.props.selectedId);
    }

    render() {
        const {bids} = this.props;
        return (
            <div className="table">

                <ul className="table-header">
                    <li >Id</li>
                    <li >Car Title</li>
                    <li >Amount</li>
                    <li >Created</li>
                </ul>
                <ul className="table-body">

                    {
                        bids && bids.length > 0 && bids.map((obj,index)=>

                            <li  key={obj.id} >
                                <ul className="table-row">
                                    <li>{obj.id}</li>
                                    <li>{obj.carTitle}</li>
                                    <li>{obj.amount}</li>
                                    <li>{obj.created}</li>
                                </ul>
                            </li>
                        )}
                    {
                        bids && !bids.length && <span className="no-bids">No Bids for this merchant. </span>
                    }

                </ul>
            </div>
        );
    }
}


const mapStateToProps = state => {
    debugger
    return {
        bids: state.merchantReducer.bids
    }
};

const mapDispatchToProps = dispatch => ({
    getBids: bindActionCreators(getBids, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Bids);
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Table));

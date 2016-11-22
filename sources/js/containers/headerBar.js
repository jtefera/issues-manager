import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import {showAddIssueForm, showLoginForm} from '../actions/';
import {connect} from 'react-redux';


let HeaderBar = ({
    dispatch,
}) => (
    <AppBar
        title="Issue Tracker"
        iconElementLeft={<div></div>}
        iconElementRight={
            <div>
                <FlatButton label="Add Issue" onTouchTap={() => {
                    dispatch(showAddIssueForm());
                }}/>
                <FlatButton label="Login" onTouchTap={() => {
                    dispatch(showLoginForm());
                }}/>
            </div>
        }
    />
);

HeaderBar = connect()(HeaderBar);

export default HeaderBar;

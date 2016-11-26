import React from 'react';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import {
    showAddIssueForm,
    showLoginForm,
    logOut,
} from '../actions/';
import {
    amber300,
} from 'material-ui/styles/colors';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';


let HeaderBar = ({
    showLoginForm,
    showAddIssueForm,
    logOut,
    logged,
    username,
    connected,
}) => {
    const logButton = (logged) ?
                        <FlatButton label="Log out" onTouchTap={() => {
                            logOut();
                        }}/>
                        : <FlatButton label="Login" onTouchTap={() => {
                            showLoginForm();
                        }}/>;
    const connectionState = (connected) ?
                                null
                                : <IconButton
                                    iconClassName='material-icons'
                                    iconStyle={{
                                        color: amber300,
                                    }}
                                    tooltip='No connection'
                                >
                                    warning
                                </IconButton>;
    return (
        <AppBar
            title="Issue Tracker"
            showMenuIconButton={false}
            iconElementRight={
                <div>
                    {connectionState}
                    <FlatButton label="Add Issue" onTouchTap={() => {
                        showAddIssueForm();
                    }}/>
                    {logButton}
                </div>
            }
        />
    );
};

const mapStateToProps = (state) => ({
    logged: state.loginInfo.logged,
    username: state.loginInfo.username,
    connected: state.connected.connected,
});

const mapDispatchToProps = (dispatch) => ({
    showLoginForm: () => dispatch(showLoginForm()),
    showAddIssueForm: () => dispatch(showAddIssueForm()),
    logOut: () => dispatch(logOut()),
});
HeaderBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderBar);

export default HeaderBar;

import React from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {hideLoginForm, sendLoginInfo} from '../actions/';
import {red500} from 'material-ui/styles/colors';

let LoginForm = ({
    onSubmitHandle,
    onCancelHandle,
    showErrorMessage,
    errorMessage,
}) => {
    const actions = [
        <FlatButton label='Submit' form='loginForm' type='submit'/>,
        <FlatButton label='Cancel' onTouchTap={onCancelHandle}/>,
    ];
    let usernameInput;
    let passwordInput;
    const styleErrorMessage = {
        color: red500,
    }
    const errorMessageEl = (showErrorMessage) ?
                            <span style={styleErrorMessage}>
                                {errorMessage}
                            </span>
                            : null;
    return (
        <Dialog
            title='Login'
            modal={false}
            open={true}
            autoScrollBodyContent={true}
            actions={actions}
        >
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const usernameVal = usernameInput.getValue();
                    const passwordVal = passwordInput.getValue();
                    if(!usernameVal || !passwordVal) {
                        return null;
                    }
                    onSubmitHandle(usernameVal, passwordVal);
                }}
                id='loginForm'
            >
                {errorMessageEl}
                <TextField
                    defaultValue='hello@jtefera.com'
                    floatingLabelText="Username"
                    fullWidth={true}
                    hintText="your username"
                    ref={(node) => {
                        usernameInput = node;
                    }}
                />
                <TextField
                    defaultValue='hola'
                    floatingLabelText='Password'
                    fullWidth={true}
                    type="password"
                    hintText='your password'
                    ref={(node) => {
                        passwordInput = node;
                    }}
                />
            </form>
        </Dialog>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onSubmitHandle: (username, password) => {
        dispatch(sendLoginInfo(username, password));
    },
    onCancelHandle: () => dispatch(hideLoginForm()),
});

const mapStateToProps = (state) => ({
    showErrorMessage: state.loginInfo.loginError,
    errorMessage: state.loginInfo.errorMessage,
});

LoginForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

export default LoginForm;

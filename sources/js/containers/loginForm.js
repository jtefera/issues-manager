import React from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {hideLoginForm, sendLoginInfo} from '../actions/';
import {red500} from 'material-ui/styles/colors';
import FullWidth from '../presentationals/fullWidth';


const LoginFormForm = ({
    onSubmitHandle,
    onCancelHandle,
    showErrorMessage,
    errorMessage,
}) => {
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
    );
};

const LoginFormDesktop = (props) => {
    const actions = [
        <FlatButton label='Submit' form='loginForm' type='submit'/>,
        <FlatButton label='Cancel' onTouchTap={props.onCancelHandle}/>,
    ];
    return (
        <Dialog
            title='Login'
            modal={false}
            open={true}
            autoScrollBodyContent={true}
            actions={actions}
        >
            <LoginFormForm {...props} />
        </Dialog>
    );
};

const LoginFormMobile = (props) => {
    const actions = [
        <FlatButton label='Submit' form='loginForm' type='submit'/>,
        <FlatButton label='Cancel' onTouchTap={props.onCancelHandle}/>,
    ];
    return (
        <FullWidth>
            <LoginFormForm {...props} />
            {actions[0]} {actions[1]}
        </FullWidth>
    );
}

let LoginForm = (props) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if(isMobile) {
        return <LoginFormMobile {...props} />;
    } else {
        return <LoginFormDesktop {...props} />;
    }
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

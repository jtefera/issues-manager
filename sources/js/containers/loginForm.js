import React from 'react';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {hideLoginForm, sendLoginInfo} from '../actions/';
import {red500} from 'material-ui/styles/colors';
import FullWidth from '../presentationals/fullWidth';
import {FormattedMessage} from 'react-intl';

const actions = (onCancelHandle) => ([
    <FlatButton label={
        <FormattedMessage
            id='app.cancel.button.label'
            defaultMessage='Cancel'
            />
    } onTouchTap={onCancelHandle} />,
    <FlatButton label={
        <FormattedMessage
            id='app.submit.button.label'
            defaultMessage='Submit'
            />
    } form='loginForm' type='submit' />,
]);

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
                floatingLabelText={
                    <FormattedMessage
                        id='app.loginForm.username.label'
                        defaultMessage='Username'
                    />
                }
                fullWidth={true}
                hintText={
                    <FormattedMessage
                        id='app.loginForm.username.placeholder'
                        defaultMessage='your username'
                    />
                }
                ref={(node) => {
                    usernameInput = node;
                }}
            />
            <TextField
                defaultValue='hola'
                floatingLabelText={
                    <FormattedMessage
                        id='app.loginForm.password.label'
                        defaultMessage='Password'
                    />
                }
                fullWidth={true}
                type="password"
                hintText={
                    <FormattedMessage
                        id='app.loginForm.password.placeholder'
                        defaultMessage='your password'
                    />
                }
                ref={(node) => {
                    passwordInput = node;
                }}
            />
        </form>
    );
};

const LoginFormDesktop = (props) => {
    return (
        <Dialog
            title={
                <div>
                    <FormattedMessage
                        id='app.loginForm.form.title'
                        defaultMessage='Login'
                        />
                </div>
            }
            modal={false}
            open={true}
            autoScrollBodyContent={true}
            actions={actions(props.onCancelHandle)}
            >
            <LoginFormForm {...props} />
        </Dialog>
    );
};

const LoginFormMobile = (props) => {
    const actionsButtons = actions(props.onCancelHandle);
    return (
        <FullWidth>
            <LoginFormForm {...props} />
            {actionsButtons[0]} {actionsButtons[1]}
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

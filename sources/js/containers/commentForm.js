import React from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {submitComment} from '../actions/';
import {
    getMockName, getMockEmail, getMockText,
} from '../mock';
import {FormattedMessage} from 'react-intl';

let CommentForm = ({
    username,
    email,
    submitCommentHandler,
}) => {
    let nameInput;
    let emailInput;
    let commentInput;
    if(!username) {
        username = getMockName();
        email = getMockEmail();
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const comment = {
                name: nameInput.getValue(),
                email: emailInput.getValue(),
                comment: commentInput.getValue(),
                date: Date.now(),
            };
            submitCommentHandler(comment);
            nameInput.getInputNode().value = '';
            emailInput.getInputNode().value = '';
            commentInput.getInputNode().value = '';
        }}>
            <TextField
                defaultValue={username}
                floatingLabelText={
                    <FormattedMessage
                        id='app.comment.name.label'
                        defaultMessage='Name'
                    />
                }
                name="name"
                fullWidth={true}
                hintText={
                    <FormattedMessage
                        id='app.comment.name.placeholder'
                        defaultMessage='name'
                    />
                }
                ref={(node) => {
                    nameInput = node;
                }}
            /><br />
            <TextField
                defaultValue={email}
                floatingLabelText={
                    <FormattedMessage
                        id='app.comment.email.label'
                        defaultMessage='Email'
                    />
                }
                fullWidth={true}
                hintText={
                    <FormattedMessage
                        id='app.comment.email.placeholder'
                        defaultMessage='email'
                    />
                }
                ref={(node) => {
                    emailInput = node;
                }}
            /><br />
            <TextField
                defaultValue={getMockText()}
                floatingLabelText={
                    <FormattedMessage
                        id='app.comment.comment.label'
                        defaultMessage='Comment'
                    />
                }
                fullWidth={true}
                hintText={
                    <FormattedMessage
                        id='app.comment.comment.placeholder'
                        defaultMessage='comment'
                    />
                }
                ref={(node) => {
                    commentInput = node;
                }}
                multiLine={true}
                rows={4}
            />
            <FlatButton type="submit" label={
                    <FormattedMessage
                        id='app.comment.comment.button.label'
                        defaultMessage='Comment'
                    />
                } />
        </form>
    );
};

const mapStateToProps = (state) => ({
    username: (state.loginInfo.logged) ? state.loginInfo.username : null,
    email: (state.loginInfo.logged) ? state.loginInfo.username : null,
});

const mapDispatchToProps = (dispatch, {idIssue}) => ({
    submitCommentHandler: (commentObj) => {
        dispatch(submitComment(idIssue, commentObj));
    },
});
CommentForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentForm);

export default CommentForm;

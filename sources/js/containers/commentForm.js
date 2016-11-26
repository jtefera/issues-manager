import React from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {submitComment} from '../actions/';

let CommentForm = ({
    username,
    email,
    submitCommentHandler,
}) => {
    let nameInput;
    let emailInput;
    let commentInput;
    console.log(username);
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
                floatingLabelText="Name"
                name="name"
                fullWidth={true}
                hintText="name"
                ref={(node) => {
                    nameInput = node;
                }}
            /><br />
            <TextField
                defaultValue={email}
                floatingLabelText="Email"
                fullWidth={true}
                hintText="email"
                ref={(node) => {
                    emailInput = node;
                }}
            /><br />
            <TextField
                defaultValue='This is a comment'
                floatingLabelText="Comment"
                fullWidth={true}
                hintText="comment"
                ref={(node) => {
                    commentInput = node;
                }}
                multiLine={true}
                rows={4}
            />
            <FlatButton type="submit" label="Comment" />
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

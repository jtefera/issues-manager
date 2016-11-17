import React from 'react';
import {connect} from 'react-redux';
import IssueEditorPres from '../presentationals/issueEditor';
import {editIssue, cancelEditIssue} from '../actions/';

const mapDispatchToProps = (dispatch, {id}) => ({
    editIssue: (issue) => {
        dispatch(editIssue(id, issue));
    },
    cancelEditIssue: () => dispatch(cancelEditIssue(id)),
});

const IssueEditor = connect(
    null,
    mapDispatchToProps
)(IssueEditorPres);

export default IssueEditor;

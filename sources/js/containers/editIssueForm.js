import React from 'react';
import {connect} from 'react-redux';
import IssueForm from '../presentationals/issueForm';
import {editIssue, hideEditIssueForm} from '../actions/';

const mapDispatchToProps = (dispatch) =>({
    onSubmitHandle: (issue) => {        
        dispatch(hideEditIssueForm());
        dispatch(editIssue(issue.id, issue));
    },
    onCancelHandle: () => dispatch(hideEditIssueForm()),
});

const mapStateToProps = (state) =>{ 
    return ({
        isOpen: state.formsDisplay.showEditIssueForm,
        titleForm: 'Edit Issue',
        editingIssue: state.formsDisplay.editingIssue,
    });
};
const IssueEditor = connect(
    mapStateToProps,
    mapDispatchToProps
)(IssueForm);

export default IssueEditor;
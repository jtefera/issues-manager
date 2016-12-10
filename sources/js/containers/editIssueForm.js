import React from 'react';
import {connect} from 'react-redux';
import IssueForm from '../presentationals/issueForm';
import {editIssue, hideEditIssueForm} from '../actions/';
import {FormattedMessage} from 'react-intl';

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
        titleForm: <FormattedMessage
            id='app.editIssue.form.title'
            defaultMessage='Edit Issue'
        />,
        editingIssue: state.formsDisplay.editingIssue,
    });
};
const IssueEditor = connect(
    mapStateToProps,
    mapDispatchToProps
)(IssueForm);

export default IssueEditor;
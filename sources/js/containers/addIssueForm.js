import React from 'react';
import {connect} from 'react-redux';
import {
        addIssueToDB,
        hideAddIssueForm,
    } from '../actions';
import IssueForm from '../presentationals/issueForm';

const mapDispatchToProps = (dispatch) =>({
    onSubmitHandle: (issue) => {
        dispatch(hideAddIssueForm());
        dispatch(addIssueToDB(issue));
    },
    onCancelHandle: () => dispatch(hideAddIssueForm()),
});

const mapStateToProps = (state) => ({
    isOpen: state.formsDisplay.showAddIssueForm,
    titleForm: 'Add Issue',
});
const AddIssueForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(IssueForm);

export default AddIssueForm;

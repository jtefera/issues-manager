import React from 'react';
import {connect} from 'react-redux';
import {
        deleteIssue,
        showEditIssueForm,
        showIssueDescription,
        hideIssueDescription,
    } from '../actions';
import IssuePres from '../presentationals/Issue';

const mapDispatchToProps = (dispatch, {id}) => ({
   deleteIssue: () => dispatch(deleteIssue(id)),
   showEditIssueForm: () => dispatch(showEditIssueForm(id)),
   showIssueDescription: () => dispatch(showIssueDescription(id)),
   hideIssueDescription: () => dispatch(hideIssueDescription(id)),
});

const Issue = connect(
    null,
    mapDispatchToProps
)(IssuePres);

export default Issue;

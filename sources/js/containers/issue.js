import React from 'react';
import {connect} from 'react-redux';
import {deleteIssue, showEditIssueForm} from '../actions';
import IssuePres from '../presentationals/Issue';

const mapDispatchToProps = (dispatch, {id}) => ({
   deleteIssue: () => dispatch(deleteIssue(id)),
   showEditIssueForm: () => dispatch(showEditIssueForm(id)),
});

const Issue = connect(
    null,
    mapDispatchToProps
)(IssuePres);

export default Issue;

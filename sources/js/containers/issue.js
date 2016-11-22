import React from 'react';
import {connect} from 'react-redux';
import {
        deleteIssue,
        showEditIssueForm,
    } from '../actions';
import IssuePres from '../presentationals/issue';

const mapStateToProps = (state) => ({
    isLogged: state.loginInfo.logged,
});

const mapDispatchToProps = (dispatch, {id, issue}) => ({
   deleteIssue: () => dispatch(deleteIssue(id)),
   showEditIssueForm: () => dispatch(showEditIssueForm(id, issue)),
});

const Issue = connect(
    mapStateToProps,
    mapDispatchToProps
)(IssuePres);

export default Issue;

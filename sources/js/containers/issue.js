import React from 'react';
import {connect} from 'react-redux';
import {
        deleteIssue,
        showEditIssueForm,
    } from '../actions';
import IssuePres from '../presentationals/issue';
import {startListeningForCommentsOnIssue} from '../actions/';

const mapStateToProps = (state) => ({
    isLogged: state.loginInfo.logged,
    isConnected: state.connected.connected,
    lastConnection: state.connected.lastConnection,
});

const mapDispatchToProps = (dispatch, {id, issue}) => ({
   deleteIssue: () => dispatch(deleteIssue(id)),
   showEditIssueForm: () => dispatch(showEditIssueForm(id, issue)),
   listenForComments: () => dispatch(startListeningForCommentsOnIssue(id)),
});

const Issue = connect(
    mapStateToProps,
    mapDispatchToProps
)(IssuePres);

export default Issue;

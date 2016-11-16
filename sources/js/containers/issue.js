import React from 'react';
import {connect} from 'react-redux';
import {deleteIssue} from '../actions';
import IssuePres from '../presentationals/Issue';

const mapDispatchToProps = (dispatch, {id}) => ({
   deleteIssue: () => dispatch(deleteIssue(id)), 
});

const Issue = connect(
    null,
    mapDispatchToProps,
)(IssuePres);

export default Issue;

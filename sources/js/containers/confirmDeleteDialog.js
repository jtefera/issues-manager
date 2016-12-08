import React from 'react';
import {connect} from 'react-redux';
import {
    deleteIssue,
    hideConfirmDeleteDialog,
} from '../actions';
import ConfirmDialog from '../presentationals/confirmDialog';

const mapStateToProps = (state) => ({
    title: 'Delete Issue?',
    description: 'Are you sure you want to delete this issue?',
    confirmLabel: 'Delete',
    id: state.deleteIssueState.idBeingDeleted,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {id} = stateProps;
    const {dispatch} = dispatchProps;
    return {
        ...stateProps,
        ...ownProps,
        onConfirmHandler: () => {
            dispatch(deleteIssue(id));
            dispatch(hideConfirmDeleteDialog());
        },
        onCancelHandler: () => dispatch(hideConfirmDeleteDialog()),
    };
}
const ConfirmDeleteDialog = connect(
    mapStateToProps,
    null,
    mergeProps
)(ConfirmDialog);

export default ConfirmDeleteDialog;


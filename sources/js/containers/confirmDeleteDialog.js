import React from 'react';
import {connect} from 'react-redux';
import {
    deleteIssue,
    hideConfirmDeleteDialog,
} from '../actions';
import ConfirmDialog from '../presentationals/confirmDialog';
import {FormattedMessage} from 'react-intl';
const mapStateToProps = (state) => ({
    title: (
        <FormattedMessage
            id='app.confirmDelete.modal.title'
            defaultMessage='Delete Issue?'
        />
        ),
    description: (
        <FormattedMessage
            id='app.confirmDelete.modal.description'
            defaultMessage='Are you sure you want to delete this issue?'
        />
    ),
    confirmLabel: (
        <FormattedMessage
            id='app.confirmDelete.delete.button.label'
            defaultMessage='Delete'
        />
    ),
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


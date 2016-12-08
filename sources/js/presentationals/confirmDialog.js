import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


const ConfirmDialog = (props) => {
    console.log(props);
    const {
        onConfirmHandler,
        onCancelHandler,
        title,
        description,
        confirmLabel,
    } = props;
    const actions = [
        <FlatButton label='Cancel' onTouchTap={onCancelHandler} />,
        <FlatButton
            label={confirmLabel}
            onTouchTap={onConfirmHandler}
            secondary={true}
        />,
    ];
    return (
        <Dialog
            title={title}
            modal={false}
            open={true}
            autoScrollBodyContent={true}
            actions={actions}
        >
            {description}
        </Dialog>
    );
};

export default ConfirmDialog;

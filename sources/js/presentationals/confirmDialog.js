import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {FormattedMessage} from 'react-intl';


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
        <FlatButton label={
            <FormattedMessage
                id='app.cancel.button.label'
                defaultMessage='Cancel'
            />
        } onTouchTap={onCancelHandler} />,
        <FlatButton
            label={confirmLabel}
            onTouchTap={onConfirmHandler}
            secondary={true}
        />,
    ];
    return (
        <Dialog
            title={<div>{title}</div>}
            modal={false}
            open={true}
            autoScrollBodyContent={true}
            actions={actions}
        >
            {<div>{description}</div>}
        </Dialog>
    );
};

export default ConfirmDialog;

import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const Message = ({
    title,
    description,
    isError,
    hideMessageHandler,
}) => {
    const action = (<FlatButton label="Ok" onTouchTap={hideMessageHandler} />);
    return (
        <Dialog
            title={title}
            modal={false}
            open={true}
            autoScrollBodyContent={true}
            actions={action}
        >
            {description}
        </Dialog>
    );
};
export default Message;

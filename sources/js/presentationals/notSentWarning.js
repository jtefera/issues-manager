import React from 'react';
import IconButton from 'material-ui/IconButton';
import {amber300} from 'material-ui/styles/colors';

const NotSentWarning = () => (
    <IconButton
        iconClassName='material-icons'
        iconStyle={{
            color: amber300,
        }}
        tooltip='Waiting to be sent. No connection'
    >
        warning
    </IconButton>
);

export default NotSentWarning;

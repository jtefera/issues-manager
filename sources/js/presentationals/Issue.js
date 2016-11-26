import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ListComments from './listComments';
import {
    amber300,
} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';

const IssuePres = ({
    issue,
    deleteIssue,
    showDescription,
    showEditIssueForm,
    isLogged,
    listenForComments,
    isConnected,
    lastConnection,
}) => {
    const {
        id,
        title,
        name,
        email,
        description,
        date,
        deleting,
        comments,
        isListeningComments,
        received,
    } = issue;
    const sentState = (isConnected === false
                && received > lastConnection) ?
                    <IconButton
                        iconClassName='material-icons'
                        iconStyle={{
                            color: amber300,
                        }}
                        tooltip='Waiting to be sent. No connection'
                    >
                        warning
                    </IconButton>
                    :null;
    const actions = (isLogged) ?
                (<CardActions>
                    <FlatButton label="Delete" onTouchTap={deleteIssue}/>
                    <FlatButton label="Edit" onTouchTap={showEditIssueForm}/>
                </CardActions>)
                : null;
    if(deleting) {
        return null;
    }
    const listeningFunction = (isListeningComments) ? () => null : listenForComments;
    return (
        <li>
            <Card
                onExpandChange={listeningFunction}
            >
                <CardHeader
                    title={<div>
                        {title}
                        {sentState}
                    </div>}
                    subtitle={`${name} (${email})`}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    {date}<br />
                    {description}
                    <ListComments listComments={comments} idIssue={id}/>
                </CardText>
                {actions}
            </Card>
        </li>
    );
};

export default IssuePres;

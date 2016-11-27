import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ListComments from '../containers/listComments';
import {
    amber300,
} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import NotSentWarning from './notSentWarning';

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
                    <NotSentWarning />
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
    const listeningFunction = (isListeningComments) ?
                                () => null
                                : listenForComments;
    const dateOptions = {    
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    return (
        <li>
            <Card
                onExpandChange={listeningFunction}
            >
                <CardHeader
                    title={
                        <div>
                            {title}
                            {sentState}
                        </div>
                    }
                    subtitle={`${name} (${email})`}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    {(new Date(date))
                            .toLocaleDateString('en-US', dateOptions)}<br />
                    {description}
                    <ListComments listComments={comments} idIssue={id}/>
                </CardText>
                {actions}
            </Card>
        </li>
    );
};

export default IssuePres;

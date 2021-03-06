import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ListComments from '../containers/listComments';
import {
    amber300,
} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import NotSentWarning from './notSentWarning';
import {FormattedMessage, FormattedRelative} from 'react-intl';

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
                    <FlatButton label={
                        <FormattedMessage
                            id='app.issue.delete.button.label'
                            defaultMessage='Delete'
                        />
                    } secondary={true} onTouchTap={deleteIssue}/>
                    <FlatButton label={
                        <FormattedMessage
                            id='app.issue.edit.button.label'
                            defaultMessage='Edit'
                        />
                    } onTouchTap={showEditIssueForm}/>
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
                    subtitle={<div>
                        {name} ({email})<br />
                        <FormattedRelative
                            value={new Date(date)}
                        />
                    </div>}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    {description}
                    <ListComments listComments={comments} idIssue={id}/>
                </CardText>
                {actions}
            </Card>
        </li>
    );
};

export default IssuePres;

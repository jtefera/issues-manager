import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ListComments from './listComments';

const IssuePres = ({
    issue,
    deleteIssue,
    showDescription,
    showEditIssueForm,
    showIssueDescription,
    hideIssueDescription,
    isLogged,
    listenForComments,
}) => {
    const {
        id,
        title,
        name,
        email,
        description,
        date,
        deleting,
        isConnected,
        comments,
        isListeningComments,
    } = issue;
    const sentState = (isConnected === false) ? ' - Sending...' :'';
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
                    title={`${title}${sentState}`}
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

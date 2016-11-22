import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const IssuePres = ({
    issue,
    deleteIssue,
    showDescription,
    showEditIssueForm,
    showIssueDescription,
    hideIssueDescription,
    isLogged,
}) => {
    const {
        title,
        name,
        email,
        description,
        date,
        deleting,
        isConnected,
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

    return (
        <li>
            <Card>
                <CardHeader
                    title={`${title}${sentState}`}
                    subtitle={`${name} (${email})`}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    {date}<br />
                    {description}
                </CardText>
                {actions}
            </Card>
        </li>
    );
}

export default IssuePres;

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
}) => {
    const {
        title,
        name,
        email,
        description,
        date,
        deleting,
    } = issue;
    if(deleting) {
        return null;
    }
    return (
        <li>
            <Card>
                <CardHeader
                    title={title}
                    subtitle={name}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    {description}
                </CardText>
                <CardActions>
                    <FlatButton label="Delete" onTouchTap={deleteIssue}/>
                    <FlatButton label="Edit" onTouchTap={showEditIssueForm}/>
                </CardActions>
            </Card>
        </li>
    );
}

export default IssuePres;

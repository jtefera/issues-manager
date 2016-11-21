import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Description = ({text}) => (
    <div>
    Description: {text}
    </div>
);

const IssuePres = ({
    title,
    name,
    email,
    description,
    date,
    deleteIssue,
    deleting,
    showDescription,
    showEditIssueForm,
    showIssueDescription,
    hideIssueDescription,
}) => {
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

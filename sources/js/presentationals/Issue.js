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
    const mockComments = [
        {
            comment: 'Lists are used to present multiple items vertically as a single continuous element. They can be configured for many uses such as a contacts list, nested lists, etc.',
            author: 'Jonathan',
            date: 'Today',
        },
        {
            comment: 'This tutorial is the second of a three-part series on React by Brad Westfall.',
            author: 'Nahum',
            date: 'Yesterday',
        },
        {
            comment: 'In the first article, we created routes and views. In this tutorial, we’re going to explore a new concept in which components don’t create views, but rather facilitate the ones that do.',
            author: 'Jonathan',
            date: 'Monday, 2nd November',
        },
        {
            comment: 'We’ll also be introducing data to our application. If you’re familiar with with any sort of component-design or MVC patterns.',
            author: 'Jonathan',
            date: 'Sunday, 1st November',
        },
    ];

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
                    <ListComments listComments={mockComments} />
                </CardText>
                {actions}
            </Card>
        </li>
    );
};

export default IssuePres;

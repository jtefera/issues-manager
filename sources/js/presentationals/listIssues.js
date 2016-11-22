import React from 'react';
import Issue from '../containers/issue';
import {Card, CardText} from 'material-ui/Card';
import {
    red500,
    orange500,
    teal500,
} from 'material-ui/styles/colors';

const ListIssues = ({issues, priority}) => {
    const issuesEl = issues.map(
            (issue) => {
                return (<Issue key={issue.id} id={issue.id} issue={issue}/>);
            }
        );
    const title = `Priority ${priority}`;
    const style = {
        margin: '10px 20px',
    };
    const priorityColors = [red500, orange500, teal500];
    const styleHeader = {
        backgroundColor: priorityColors[parseInt(priority, 10) - 1],
        color: 'white',
    };
    return (
        <div style={style}>
            <Card zDepth={2} style={styleHeader}>
                <CardText>
                    {title}
                </CardText>
            </Card>
            {issuesEl}
        </div>
    );
};

export default ListIssues;

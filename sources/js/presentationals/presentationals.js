import React from 'react';
import Issue from '../containers/issue';


export const ListIssues = ({issues, priority}) => {
    const issuesEl = issues.map(
            (issue) => <Issue key={issue.id} id={issue.id} text={issue.text}/>
        );
    return (
        <div>
            {priority} Priority Issues: <br />
            <ul>
                {issuesEl}
            </ul>
        </div>
    );
};

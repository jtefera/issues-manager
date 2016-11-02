import React from 'react';

function Issue({text}) {
    return (
        <li>
            <div>
                Issue: {text}<br />
            </div>
        </li>
    );
}

export const ListIssues = ({issues, priority}) => {
    const issuesEl = issues.map(
            (issue) => <Issue key={issue.id} text={issue.text}/>
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

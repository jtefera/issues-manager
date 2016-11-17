import React from 'react';
import Issue from '../containers/issue';
import IssueEditor from '../containers/issueEditor';


export const ListIssues = ({issues, priority}) => {
    const issuesEl = issues.map(
            (issue) => {
                if(issue.editMode) {
                    return (
                        <IssueEditor
                            key={issue.id}
                            id={issue.id}
                            title={issue.title}
                            priority={issue.priority}/>
                    );
                }
                return (<Issue key={issue.id} id={issue.id} title={issue.title}/>);
            }
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

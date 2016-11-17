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
                            {...issue}/>
                    );
                }
                return (<Issue key={issue.id} {...issue}/>);
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

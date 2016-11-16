import React from 'react';

const IssuePres = ({text, deleteIssue, showEditIssueForm}) => (
    <li>
        <div>
            Issue: {text}<br />
            <a onClick={deleteIssue}>Delete </a> |
            <a onClick={showEditIssueForm}> Edit</a>
        </div>
    </li>
);

export default IssuePres;

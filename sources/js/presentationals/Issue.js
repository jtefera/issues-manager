import React from 'react';

const IssuePres = ({title, deleteIssue, showEditIssueForm}) => (
    <li>
        <div>
            Issue: {title}<br />
            <a onClick={deleteIssue}>Delete </a> |
            <a onClick={showEditIssueForm}> Edit</a>
        </div>
    </li>
);

export default IssuePres;

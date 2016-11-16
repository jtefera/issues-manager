import React from 'react';

const IssuePres = ({text, deleteIssue}) => (
    <li>
        <div>
            Issue: {text}<br />
            <a onClick={deleteIssue}>Delete</a>
        </div>
    </li>
);

export default IssuePres;

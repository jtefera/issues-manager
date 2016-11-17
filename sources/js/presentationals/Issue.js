import React from 'react';

const IssuePres = ({
    title,
    author,
    email,
    description,
    deleteIssue,
    date,
    showEditIssueForm,
}) => (
    <li>
        <div>
            Title: {title}<br />
            Author (Email): {author}({email}) <br />
            Date: {date} <br />
            Description: {description} <br />
            <a onClick={deleteIssue}>Delete </a> |
            <a onClick={showEditIssueForm}> Edit</a>
        </div>
    </li>
);

export default IssuePres;

import React from 'react';

const Description = ({text}) => (
    <div>
    Description: {text}
    </div>
);

const IssuePres = ({
    title,
    name,
    email,
    description,
    date,
    deleteIssue,
    showDescription,
    showEditIssueForm,
    showIssueDescription,
    hideIssueDescription,
}) => {
    const descriptionEl = (showDescription) ? 
                        <Description text={description} />
                        : null;
    const showHideLinkEl = (showDescription) ?
                        (<a onClick={hideIssueDescription}>
                            Hide Description
                        </a>)
                        : (<a onClick={showIssueDescription}>
                            Show Description
                        </a>);
    return (
        <li>
            <div>
                Title: {title}<br />
                Name (Email): {name}({email}) <br />
                Date: {date} <br />
                {descriptionEl}
                <a onClick={deleteIssue}>Delete </a> |
                <a onClick={showEditIssueForm}> Edit</a> |
                {" "}{showHideLinkEl}
            </div>
        </li>
    );
}

export default IssuePres;

import React from 'react';


const IssueEditor = ({
    title,
    priority,
    name,
    email,
    description,
    editIssue,
    cancelEditIssue,
}) => {
    let titleInput;
    let prioritySelect;
    let nameInput;
    let emailInput;
    let descriptionInput;
    return (
        <li>
            <form onSubmit={(e) => {
                const issue = {
                    title: titleInput.value,
                    priority: parseInt(prioritySelect.value, 10),
                    name: nameInput.value,
                    email: emailInput.value,
                    description: descriptionInput.value,
                }
                e.preventDefault();
                editIssue(issue);
            }}>
                Title: <input ref={(node) => {
                    titleInput = node;
                }} defaultValue={title} />
                <br />
                Priority: <select ref={(node) => {
                    prioritySelect = node;
                }} defaultValue={priority}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <br />
                Author: <input ref={(node) => {
                    nameInput = node;
                }} defaultValue={name} />
                <br />
                Email: <input ref={(node) => {
                    emailInput = node;
                }} defaultValue={email} />
                <br />
                Description: <br /> 
                <textarea rows="10" cols="50" ref={(node) => {
                    descriptionInput = node;
                }} defaultValue={description} />
                <br />
                <button type='submit'>Edit Issue </button> |
                <button onClick={(e) => {
                    e.preventDefault();
                    cancelEditIssue();
                }}>Cancel</button>
            </form>
        </li>
    );
};

export default IssueEditor;

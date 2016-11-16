import React from 'react';


const IssueEditor = ({text, priority, editIssue, cancelEditIssue}) => {
    let issueInput;
    let prioritySelect;
    return (
        <li>
            <form onSubmit={(e) => {
                e.preventDefault();
                editIssue(issueInput.value, prioritySelect.value);
            }}>
                Issue: <input ref={(node) => {
                    issueInput = node;
                }} defaultValue={text}/>
                <br />
                Priority: <select ref={(node) => {
                    prioritySelect = node;
                }} defaultValue={priority}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
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
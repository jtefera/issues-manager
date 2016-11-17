import React from 'react';
import {addIssue} from '../actions/';
import {connect} from 'react-redux';

let AddIssueForm = ({dispatch}) => {
    let titleInput;
    let prioritySelect;
    return (
        <form onSubmit={(e) => {
                const issue = {
                    title: titleInput.value,
                    priority: prioritySelect.value,
                };
                e.preventDefault();
                console.log(prioritySelect.value);
                if(!titleInput.value.trim()) {
                    return;
                }
                dispatch(addIssue(issue));
                titleInput.value = '';
            }
        }>
            Title: <input ref={(node) => {
                titleInput = node;
            }}/>
            <br />
            Priority: <select ref={(node) => {
                prioritySelect = node;
            }}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <br />
            <button type='submit'>Add Issue</button>
        </form>
    );
};

AddIssueForm = connect()(AddIssueForm);

export default AddIssueForm;

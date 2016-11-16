import React from 'react';
import {addIssue} from '../actions/';
import {connect} from 'react-redux';

let AddIssueForm = ({dispatch}) => {
    let textInput;
    let prioritySelect;
    return (
        <form onSubmit={(e) => {
                e.preventDefault();
                console.log(prioritySelect.value);
                if(!textInput.value.trim()) {
                    return;
                }
                dispatch(addIssue(textInput.value, prioritySelect.value));
                textInput.value = '';
                priorityInput.value = '';
            }
        }>
            Title: <input ref={(node) => {
                textInput = node;
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

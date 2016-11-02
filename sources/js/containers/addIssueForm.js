import React from 'react';
import {addIssue} from '../actions/';
import {connect} from 'react-redux';

let AddIssueForm = ({dispatch}) => {
    let textInput;
    let priorityInput;
    return (
        <form onSubmit={(e) => {
                e.preventDefault();
                if(!textInput.value.trim() || !priorityInput.value.trim()) {
                    return;
                }
                dispatch(addIssue(textInput.value, priorityInput.value));
                textInput.value = '';
                priorityInput.value = '';
            }
        }>
            Title: <input ref={(node) => {
                textInput = node;
            }}/>
            <br />
            Priority: <input type='text' ref={(node) => {
                priorityInput = node;
            }}/>
            <br />
            <button type='submit'>Add Issue</button>
        </form>
    );
};

AddIssueForm = connect()(AddIssueForm);

export default AddIssueForm;

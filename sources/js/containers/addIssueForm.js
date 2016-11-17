import React from 'react';
import {addIssue} from '../actions/';
import {connect} from 'react-redux';

let AddIssueForm = ({dispatch}) => {
    let titleInput;
    let prioritySelect;
    let authorInput;
    let emailInput;
    let descriptionInput;
    return (
        <form onSubmit={(e) => {
                const issue = {
                    title: titleInput.value,
                    priority: prioritySelect.value,
                    author: authorInput.value,
                    email: emailInput.value,
                    description: descriptionInput.value,
                    date: Date(),
                };
                e.preventDefault();
                console.log(issue);
                if(!titleInput.value.trim()) {
                    return;
                }
                dispatch(addIssue(issue));
            }
        }>
            Title: <input ref={(node) => {
                titleInput = node;
            }} defaultValue='Title Test'/>
            <br />
            Priority: <select ref={(node) => {
                prioritySelect = node;
            }}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <br />
            Author: <input ref={(node) => {
                authorInput = node;
            }} defaultValue='Author Test'/>
            <br />
            Email: <input ref={(node) => {
                emailInput = node;
            }} defaultValue='Email Test'/>
            <br />
            Description: <br /> 
            <textarea rows="10" cols="50" ref={(node) => {
                descriptionInput = node;
            }} defaultValue='Description Test'/>
            <br />
            <button type='submit'>Add Issue</button>
        </form>
    );
};

AddIssueForm = connect()(AddIssueForm);

export default AddIssueForm;

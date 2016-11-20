import React from 'react';
import {addIssueToDB} from '../actions/';
import {connect} from 'react-redux';

let AddIssueForm = ({dispatch}) => {
    let titleInput;
    let prioritySelect;
    let nameInput;
    let emailInput;
    let descriptionInput;
    return (
        <form onSubmit={(e) => {
                const issue = {
                    title: titleInput.value,
                    priority: prioritySelect.value,
                    name: nameInput.value,
                    email: emailInput.value,
                    description: descriptionInput.value,
                    date: Date(),
                };
                e.preventDefault();
                console.log(issue);
                if(!titleInput.value.trim()) {
                    return;
                }
                dispatch(addIssueToDB(issue));
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
            Name: <input ref={(node) => {
                nameInput = node;
            }} defaultValue='Name Test'/>
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

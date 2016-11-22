import React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

let IssueForm = ({
    titleForm,
    editingIssue,
    onSubmitHandle,
    onCancelHandle,
    isOpen,
}) => {
    let titleInput;
    let prioritySelect;
    let nameInput;
    let emailInput;
    let descriptionInput;
    let defaultTitle = 'Title';
    let defaultName = 'Jonathan';
    let defaultDescription = 'Description';
    let defaultPriority = 'Priority';
    let defaultEmail = 'Email';
    let defaultDate = 'Date';
    let defaultId = null;
    if(editingIssue) {
        defaultTitle = editingIssue.title;
        defaultName = editingIssue.name;
        defaultDescription = editingIssue.description;
        defaultPriority = editingIssue.priority;
        defaultEmail = editingIssue.email;
        defaultDate = editingIssue.date;
        defaultId = editingIssue.id;
    }
    const actions = [
        <FlatButton
                label='Cancel'
                form='issueForm'
                onTouchTap={onCancelHandle}
        />,
        <FlatButton
                label='Submit'
                form='issueForm'
                type='submit'
        />,
    ];
    return (
        <Dialog
          title={titleForm}
          modal={true}
          open={isOpen}
          autoScrollBodyContent={true}
          actions={actions}
        >
            <form
                id='issueForm'
                onSubmit={(e) => {
                    const issue = {
                        title: titleInput.getValue(),
                        priority: prioritySelect.value,
                        name: nameInput.getValue(),
                        email: emailInput.getValue(),
                        description: descriptionInput.getValue(),
                        date: defaultDate || Date(),
                        id: defaultId,
                    };
                    e.preventDefault();
                    console.log(issue);
                    if(!titleInput.getValue().trim()) {
                        return;
                    }
                    onSubmitHandle(issue);
                }
            }>
                <TextField
                    defaultValue={defaultTitle}
                    floatingLabelText="Title"
                    hintText="title of the issue"
                    ref={(node) => {
                        titleInput = node;
                    }}
                /><br />
                Priority: <select
                    ref={(node) => {
                        prioritySelect = node;
                    }}
                    defaultValue={defaultPriority}
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <br />
                <TextField
                    defaultValue={defaultName}
                    floatingLabelText="Your Name"
                    hintText="your name"
                    ref={(node) => {
                        nameInput = node;
                    }}
                /><br />
                <TextField
                    defaultValue={defaultEmail}
                    floatingLabelText="Your Email"
                    hintText="your email"
                    ref={(node) => {
                        emailInput = node;
                    }}
                /><br />
                <TextField
                    hintText="detailed description of the issue"
                    floatingLabelText="Description"
                    multiLine={true}
                    defaultValue={defaultDescription}
                    rows={3}
                    cols={50}
                    ref={(node) => {
                        descriptionInput = node;
                    }} 
                /><br />
            </form>
        </Dialog>
    );
};

export default IssueForm;

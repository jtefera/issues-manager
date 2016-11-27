import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {
    getMockTitle, getMockName,
    getMockEmail, getMockText,
} from '../mock';

class IssueForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            priorityVal: (props.editingIssue) ? 
                props.editingIssue.priority 
                : Math.ceil(Math.random()*3)
            };
    }
    handleChange = (event, index, value) => {
        this.setState({priorityVal: value});
    }
    render() {
        let {
            titleForm,
            editingIssue,
            onSubmitHandle,
            onCancelHandle,
            isOpen,            
        } = this.props;
        let titleInput;
        let prioritySelect;
        let nameInput;
        let emailInput;
        let descriptionInput;
        let defaultTitle = getMockTitle()
        let defaultName = getMockName();
        let defaultDescription = getMockText()
        let defaultPriority = 1;
        let defaultEmail = getMockEmail();
        let defaultDate;
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
            modal={false}
            open={isOpen}
            autoScrollBodyContent={true}
            actions={actions}
            >
                <form
                    id='issueForm'
                    onSubmit={(e) => {
                        const issue = {
                            title: titleInput.getValue(),
                            priority: this.state.priorityVal,
                            name: nameInput.getValue(),
                            email: emailInput.getValue(),
                            description: descriptionInput.getValue(),
                            date: defaultDate || Date.now(),
                            id: defaultId,
                        };
                        e.preventDefault();
                        if(!titleInput.getValue().trim()) {
                            return;
                        }
                        onSubmitHandle(issue);
                    }
                }>
                    <TextField
                        defaultValue={defaultTitle}
                        floatingLabelText="Title"
                        fullWidth={true}
                        hintText="title of the issue"
                        ref={(node) => {
                            titleInput = node;
                        }}
                    /><br />
                    <SelectField
                        floatingLabelText="Priority"
                        ref={(node) => {
                            prioritySelect = node;
                        }}
                        fullWidth={true}
                        value={this.state.priorityVal}
                        onChange={this.handleChange}
                    >
                        <MenuItem value={1} primaryText="1" />
                        <MenuItem value={2} primaryText="2" />
                        <MenuItem value={3} primaryText="3" />
                    </SelectField>
                    <TextField
                        defaultValue={defaultName}
                        fullWidth={true}
                        floatingLabelText="Your Name"
                        hintText="your name"
                        ref={(node) => {
                            nameInput = node;
                        }}
                    /><br />
                    <TextField
                        defaultValue={defaultEmail}
                        fullWidth={true}
                        floatingLabelText="Your Email"
                        hintText="your email"
                        ref={(node) => {
                            emailInput = node;
                        }}
                    /><br />
                    <TextField
                        hintText="detailed description of the issue"
                        floatingLabelText="Description"
                        fullWidth={true}
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
    }
};

export default IssueForm;

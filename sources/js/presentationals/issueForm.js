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
import FullWidth from './fullWidth';
import {FormattedMessage} from 'react-intl';
const actions = (onCancelHandle) => [
    <FlatButton
        label={
            <FormattedMessage
                id='app.cancel.button.label'
                defaultMessage='Cancel'
                />
        }
        form='issueForm'
        onTouchTap={onCancelHandle}
        />,
    <FlatButton
        label={
            <FormattedMessage
                id='app.submit.button.label'
                defaultMessage='Submit'
                />
        }
        form='issueForm'
        type='submit'
        />,
];

const IssueFormMobile = (props) => {
    const {
        titleForm
    } = props;
    const actionsButtons = actions(props.onCancelHandle);
    return (
        <FullWidth>
            <h3>{titleForm}</h3>
            <IssueFormInterior {...props} />
            {actionsButtons[0]} {actionsButtons[1]}
        </FullWidth>
    )
}


const IssueFormDesktop = (props) => {
    let {
        titleForm,
        editingIssue,
        onSubmitHandle,
        onCancelHandle,
        isOpen,            
    } = props;
    return (
        <Dialog
                title={<div>{titleForm}</div>}
                modal={false}
                open={isOpen}
                autoScrollBodyContent={true}
                actions={actions(onCancelHandle)}
                >
            <IssueFormInterior {...props} />
        </Dialog>
    )
}
class IssueFormInterior extends Component{
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
        return (
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
                    floatingLabelText={
                        <FormattedMessage
                            id='app.issueForm.title.label'
                            defaultMessage='Title'
                            />
                    }
                    fullWidth={true}
                    hintText={
                        <FormattedMessage
                            id='app.issueForm.title.placeholder'
                            defaultMessage='title of the issue'
                            />
                    }
                    ref={(node) => {
                        titleInput = node;
                    }}
                /><br />
                <SelectField
                    floatingLabelText={
                        <FormattedMessage
                            id='app.issueForm.priority.label'
                            defaultMessage='Priority'
                            />
                    }
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
                    floatingLabelText={
                        <FormattedMessage
                            id='app.issueForm.name.label'
                            defaultMessage='Your Name'
                            />
                    }
                    hintText={
                        <FormattedMessage
                            id='app.issueForm.name.placeholder'
                            defaultMessage='your name'
                            />
                    }
                    ref={(node) => {
                        nameInput = node;
                    }}
                /><br />
                <TextField
                    defaultValue={defaultEmail}
                    fullWidth={true}
                    floatingLabelText={
                        <FormattedMessage
                            id='app.issueForm.email.label'
                            defaultMessage='Your email'
                            />
                    }
                    hintText={
                        <FormattedMessage
                            id='app.issueForm.email.placeholder'
                            defaultMessage='your email'
                            />
                    }
                    ref={(node) => {
                        emailInput = node;
                    }}
                /><br />
                <TextField
                    hintText={
                        <FormattedMessage
                            id='app.issueForm.description.placeholder'
                            defaultMessage='detailed description of the issue'
                            />
                    }
                    floatingLabelText={
                        <FormattedMessage
                            id='app.issueForm.description.label'
                            defaultMessage='Description'
                            />
                    }
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
        );
    }
};

const IssueForm = (props) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        return (
            <IssueFormMobile {...props} />
        )
    } else {
        return (
            <IssueFormDesktop {...props} />
        )
    }
}
export default IssueForm;

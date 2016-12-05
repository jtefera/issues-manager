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

const IssueFormMobile = (props) => {
    const style = {
        boxSizing: 'border-box',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 1600,
        width: '100%',
        height: '100%',
        margin: 0,
        backgroundColor: 'white',
        padding: '0 24px 24px',
        overflowY: 'scroll',    
    }
    const actions = [
        <FlatButton
                label='Cancel'
                form='issueForm'
                onTouchTap={props.onCancelHandle}
        />,
        <FlatButton
                label='Submit'
                form='issueForm'
                type='submit'
        />,
    ];
    const {
        titleForm
    } = props;
    return (
        <div style={style}>
            <h3>{titleForm}</h3>
            <IssueFormInterior {...props} />
            {actions[0]} {actions[1]}
        </div>
    )
}


const IssueFormDesktop = (props) => {
    const actions = [
        <FlatButton
                label='Cancel'
                form='issueForm'
                onTouchTap={props.onCancelHandle}
        />,
        <FlatButton
                label='Submit'
                form='issueForm'
                type='submit'
        />,
    ];
    let {
        titleForm,
        editingIssue,
        onSubmitHandle,
        onCancelHandle,
        isOpen,            
    } = props;
    return (
        <Dialog
                title={titleForm}
                modal={false}
                open={isOpen}
                autoScrollBodyContent={true}
                actions={actions}
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
        );
    }
};

const IssueForm = (props) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log(isMobile);
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

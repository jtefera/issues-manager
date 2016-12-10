import React from 'react';
import AddIssueForm from './addIssueForm';
import IssueEditor from './editIssueForm';
import HeaderBar from './HeaderBar';
import Message from './message';
import LoginForm from './loginForm';
import ListIssuesOfPriority from './issuesOfPriority.js';
import ConfirmDeleteDialog from './confirmDeleteDialog';
import {connect} from 'react-redux';
import {addLocaleData, IntlProvider} from 'react-intl';
import es from 'react-intl/locale-data/es';
import esMessages from '../l10n/es';

addLocaleData([...es]);



let App = ({
    showAddIssueForm,
    showEditIssueForm,
    showLoginForm,
    showMessage,
    showDeleteConfirmDialog,
}) => {
    const addIssueForm = (showAddIssueForm) ? <AddIssueForm /> : null;
    const editIssueForm = (showEditIssueForm) ? <IssueEditor /> : null;
    const loginForm = (showLoginForm) ? <LoginForm /> : null;
    const message = (showMessage) ? <Message /> : null;
    const deleteConfirm = (showDeleteConfirmDialog) ? <ConfirmDeleteDialog /> : null;
    return (
        <IntlProvider
            locale='es'
            messages={esMessages}
        >
            <div>
                <HeaderBar />
                {addIssueForm}
                {editIssueForm}
                {loginForm}
                {message}
                {deleteConfirm}
                <ListIssuesOfPriority priority="1"/>
                <ListIssuesOfPriority priority="2"/>
                <ListIssuesOfPriority priority="3"/>
            </div>
        </IntlProvider>
    );
};

const mapStateToProps = (state) => ({
    showAddIssueForm: state.formsDisplay.showAddIssueForm,
    showEditIssueForm: state.formsDisplay.showEditIssueForm,
    showLoginForm: state.formsDisplay.showLoginForm,
    showMessage: state.messageDisplay.showMessage,
    showDeleteConfirmDialog: state.deleteIssueState.isIssueBeingDeleted,
});

App = connect(mapStateToProps)(App);

export default App;

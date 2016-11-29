import {combineReducers} from 'redux';

const asyncState = (state = {
    isFetching: false,
    didInvalidate: false,
    errorMessage: '',
}, action) => {
    switch (action.type) {
        case 'REQUEST_ISSUES':
            return {
                isFetching: true,
                didInvalidate: false,
            };
        case 'RECEIVE_SUCCESS':
            return {
                isFetching: false,
                didInvalidate: false,
            };
        case 'RECIEVE_FAILURE':
            return {
                isFetching: false,
                didInvalidate: true,
                errorMessage: action.errorMessage,
            };

        default:
            return state;
    }
};

const optimisticIssue = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ISSUE_OPTIMISTIC':
            return {
                ...action.issue,
                id: 'optimisitc',
            };
        case 'REMOVE_ADDED_OPTIMISTIC':
            return {};
        default:
            return state;
    }
};

const formsDisplay = (state = {
    showAddIssueForm: false,
    showLoginForm: false,
    showEditIssueForm: false,
    editingIssue: {},
}, action) => {
    switch (action.type) {
        case 'SHOW_ADD_ISSUE_FORM':
            return {
                ...state,
                showAddIssueForm: true,
            };
        case 'HIDE_ADD_ISSUE_FORM':
            return {
                ...state,
                showAddIssueForm: false,
            };
        case 'SHOW_EDIT_ISSUE_FORM':
            return {
                ...state,
                showEditIssueForm: true,
                editingIssue: action.issue,
            };
        case 'HIDE_EDIT_ISSUE_FORM':
            return {
                ...state,
                showEditIssueForm: false,
                editingIssue: {},
            };
        case 'SHOW_LOGIN_FORM':
            return {
                ...state,
                showLoginForm: true,
            };
        case 'HIDE_LOGIN_FORM':
            return {
                ...state,
                showLoginForm: false,
            };
        default:
            return state;
    }
};
const issues = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ISSUE':
            return {
                ...state,
                [action.issue.id]: {
                    id: action.issue.id,
                    ...action.issue,
                },
            };
        case 'DELETE_ISSUE':
            let newState = {
                ...state,
                [action.id]: null,
            };
            delete newState[action.id];
            return newState;
        case 'OPTIMISTIC_EDIT_ISSUE':
            return {
                ...state,
                [action.id]: {
                    prev: state[action.id],
                    ...state[action.id],
                    ...action.issue,
                }
            }
        case 'SET_ALL_ISSUES_AS_SENT':
            return Object.keys(state).reduce((newState, key) => {
                newState[key] = {
                    ...state[key],
                    isConnected: true,
                }
            }, {});
        case 'MARK_ISSUE_AS_DELETING':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    deleting: true,
                }
            };
        case 'LISTENING_TO_COMMENTS':
            return {
                ...state,
                [action.idIssue]: {
                    ...state[action.idIssue],
                    isListeningComments: true,
                }
            }
        case 'SHOW_COMMENT':
            let issue = {
                ...state[action.idIssue],
            };
            let newComments = (issue.comments) ? [...issue.comments] : [];
            newComments.push(action.comment);
            return {
                ...state,
                [action.idIssue]: {
                    ...state[action.idIssue],
                    comments: newComments,
                }
            };
        default:
            return state;
    }
};

const orderedIssuesId = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ISSUE':
            return [
                ...state,
                action.issue.id,
            ]
        case 'DELETE_ISSUE':
            return state.filter((id) => id !== action.id);
        default:
            return state;
    }
}

const messageDisplay = (state = {
    showMessage: false,
    title: '',
    description: '',
    isError: false,
}, action) => {
    switch (action.type) {
        case 'SHOW_MESSAGE':
            return {
                ...state,
                showMessage: true,
                title: action.title,
                description: action.description,
                isError: false,
            };
        case 'SHOW_ERROR_MESSAGE':
            return {
                ...state,
                showMessage: true,
                title: action.title,
                description: action.description,
                isError: true,
            };
        case 'HIDE_MESSAGE':
            return {
                ...state,
                showMessage: false,
            };
        default:
            return state;
    }
};

const connected = (state = {
    connected: false,
}, action) => {
    switch (action.type) {
        case 'SET_STATE_AS_CONNECTED':
            return {
                connected: true,
            };
        case 'SET_STATE_AS_DISCONNECTED':
            return {
                connected: false,
                lastConnection: action.lastConnection,
            };
        default:
            return state;
    }
};

const loginInfo = (state = {
    logged: false,
    username: '',
    loginError: false,
    errorMessage: '',
}, action) => {
    switch (action.type) {
        case 'SET_AS_LOGGED':
            return {
                logged: true,
                username: action.username,
                loginError: false,
                errorMessage: '',
            };
        case 'SET_AS_LOGGED_OUT':
            return {
                logged: false,
                username: '',
                loginError: false,
                errorMessage: '',
            };
        case 'SET_AS_LOGIN_ERROR':
            return {
                logged: false,
                username: '',
                loginError: true,
                errorMessage: action.errorMessage,
            };
        case 'HIDE_LOGIN_FORM':
            return {
                ...state,
                loginError: false,
                errorMessage: action.errorMessage,
            };
        default:
            return state;
    }
};

const issuesApp = combineReducers({
    asyncState,
    issues,
    optimisticIssue,
    formsDisplay,
    messageDisplay,
    connected,
    loginInfo,
    orderedIssuesId,
});
export default issuesApp;

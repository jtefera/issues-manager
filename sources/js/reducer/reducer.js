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
const issuesList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ISSUE':
            return state.concat({
               id: action.id,
               ...action.issue,
            });
        case 'DELETE_ISSUE':
            return state.filter((el) => el.id !== action.id);
        case 'OPTIMISTIC_EDIT_ISSUE':
            return state.map((el) => (el.id !== action.id)
                                        ? el : {
                                            prev: el,
                                            ...el,
                                            ...action.issue,
                                            editMode: false,
                                        }
            );
        case 'SET_ALL_ISSUES_AS_SENT':
            return state.map((el) => ({
                    ...el,
                    isConnected: true,
                })
            );
        case 'MARK_ISSUE_AS_DELETING':
            return state.map((el) => (el.id !== action.id)
                            ? el : {
                                ...el,
                                deleting: true,
                            }
            );
        case 'LISTENING_TO_COMMENTS':
            return state.map((el) => {
                return (el.id !== action.idIssue)
                            ? el : {
                                ...el,
                                isListeningComments: true,
                            };
            });
        case 'SHOW_COMMENT':
            return state.map((el) => {
                if(el.id === action.idIssue) {
                    let newComments = (el.comments) ? [...el.comments] : [];
                    newComments.push(action.comment);
                    return {
                        ...el,
                        comments: newComments,
                    };
                }
                return el;
            });
        default:
            return state;
    }
};

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
    issuesList,
    optimisticIssue,
    formsDisplay,
    messageDisplay,
    connected,
    loginInfo,
});
export default issuesApp;

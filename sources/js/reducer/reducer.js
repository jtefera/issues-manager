import {combineReducers} from 'redux';

const asyncState = (state = {
    isFetching: false,
    didInvalidate: false,
    errorMessage: "",
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
            }
    
        default:
            return state;
    }
}

const optimisticIssue = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ISSUE_OPTIMISTIC':
            return {
                ...action.issue,
                id: "optimisitc",
            };
        case 'REMOVE_ADDED_OPTIMISTIC':
            return {}
        default:
            return state;
    }
}
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
        case 'MARK_ISSUE_AS_DELETING': 
            return state.map((el) => (el.id !== action.id) 
                            ? el : {
                                ...el,
                                deleting: true,
                            }
            );
        case 'SHOW_EDIT_ISSUE_FORM':
            return state.map((el) => (el.id !== action.id) 
                                        ? el
                                        : {
                                            ...el,
                                            editMode: true,
                                        }
            );
        case 'CANCEL_EDIT_ISSUE': 
            return state.map((el) => (el.id !== action.id) 
                                        ? el
                                        : {
                                            ...el,
                                            editMode: false,
                                        }
                    );
        case 'SHOW_ISSUE_DESCRIPTION':
            return state.map((el) => (el.id !== action.id) 
                                        ? el
                                        : {
                                            ...el,
                                            showDescription: true,
                                        }
                    );
        case 'HIDE_ISSUE_DESCRIPTION':
            return state.map((el) => (el.id !== action.id) 
                                        ? el
                                        : {
                                            ...el,
                                            showDescription: false,
                                        }
                    );
        default:
            break;
    }
    return state;
}

const issuesApp = combineReducers({
    asyncState,
    issuesList,
    optimisticIssue,
});
export default issuesApp;
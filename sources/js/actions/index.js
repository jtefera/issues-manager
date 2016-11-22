import fetch from 'isomorphic-fetch';
import firebase from 'firebase';
import '../config/firebaseConfig';

const firebaseBase = firebase.database().ref("listTasks");

export const addIssue = (issue) => ({
    type: 'ADD_ISSUE',
    issue,
});

const markIssueAsDeleting = (id) => ({
    type: 'MARK_ISSUE_AS_DELETING',
    id,
})
export function deleteIssue(id) {
    return (dispatch) => {
        dispatch(markIssueAsDeleting(id));
        return firebaseBase.child(id).remove();
    }
};

export const showAddIssueForm = () => ({
    type: 'SHOW_ADD_ISSUE_FORM',
});

export const hideAddIssueForm = () => ({
    type: 'HIDE_ADD_ISSUE_FORM',
});

export const showLoginForm = () => ({
    type: 'SHOW_LOGIN_FORM',
});

export const hideLoginForm = () => ({
    type: 'HIDE_LOGIN_FORM',
});

export const showEditIssueForm = (id, issue) => ({
    type: 'SHOW_EDIT_ISSUE_FORM',
    id,
    issue,
});
export const hideEditIssueForm = (id) => ({
    type: 'HIDE_EDIT_ISSUE_FORM',
    id,
});

const optimisticEditIssue = (id, issue) => ({
    type: 'OPTIMISTIC_EDIT_ISSUE',
    id,
    issue,
});

export function editIssue(id, issue){
    return (dispatch) => {
        dispatch(optimisticEditIssue(id, issue));
        firebaseBase.child(id).update(
            issue
        );
    }   
};

export const cancelEditIssue = (issueId) => ({
    type: 'CANCEL_EDIT_ISSUE',
    id: issueId,
});

export const showIssueDescription = (issueId) => ({
    type: 'SHOW_ISSUE_DESCRIPTION',
    id: issueId,
});

export const hideIssueDescription = (issueId) => ({
    type: 'HIDE_ISSUE_DESCRIPTION',
    id: issueId,
});

export function addIssueToDB(issue) {
   return (dispatch) => {
       dispatch(addIssueOptimistic({
           ...issue,
           id: 'optimistic',
        }));
        return firebase.database().ref("listTasks").push(issue, (error) => {
            if (error) {
                dispatch(
                    showErrorMessage('Not able to add issue into db', error)
                );
            }
        }).then(() => {
            dispatch(removeAddedOptimistic());
        });
    };
};

const addIssueOptimistic = (issue) => ({
    type: 'ADD_ISSUE_OPTIMISTIC',
    issue,
})

const removeAddedOptimistic = () => ({
    type: 'REMOVE_ADDED_OPTIMISTIC',
});

const requestIssues = () => ({
    type: 'REQUEST_ISSUES',
});

const receiveIssues = () => ({
    type: 'RECEIVE_ISSUES',
});

export function fetchIssues () {
    return (dispatch, getState) => {
        dispatch(requestIssues());
        return firebaseBase.orderByKey()
            .on('child_added', function(issueFirebase) {
            const issue = {
                ...issueFirebase.val(),
                id: issueFirebase.key,
                isConnected: getState().connected,
            };
            dispatch(addIssue(issue));
        }); 
    };
};

// Messages
export const showMessage = (title, description) => ({
    type: 'SHOW_MESSAGE',
    title,
    description,
});

export const showErrorMessage = (title, description) => ({
    type: 'SHOW_ERROR_MESSAGE',
    title,
    description,
});

export const hideMessage = () => ({
    type: 'HIDE_MESSAGE',
});

export const setStateAsConnected = () => ({
    type: 'SET_STATE_AS_CONNECTED',
});

export const setStateAsNotConnected = () => ({
    type: 'SET_STATE_AS_DISCONNECTED',
});

export const setAllIssuesAsSent = () => ({
    type: 'SET_ALL_ISSUES_AS_SENT',
});

export const startConnectionCheck = () => {
    return (dispatch) => {
        const connectionRef = firebase.database().ref('.info/connected');
        return connectionRef.on('value', (snap) => {
            if(snap.val() === true) {
                dispatch(setStateAsConnected());
                dispatch(setAllIssuesAsSent());
            } else {
                dispatch(setStateAsNotConnected());
            }
        });
    };
}
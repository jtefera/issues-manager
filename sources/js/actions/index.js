import fetch from 'isomorphic-fetch';
import firebase from 'firebase';
import '../config/firebaseConfig';

const firebaseBase = firebase.database().ref("listTasks");

export const addIssue = (issue) => ({
    type: 'ADD_ISSUE',
    issue,
});

export const changeIssueDescriptionDisplay = (issueId) => ({
    type: 'CHANGE_ISSSUE_DESCRIPTION_DISPLAY',
    id: issueId,
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

export const showEditIssueForm = (id) => ({
    type: 'SHOW_EDIT_ISSUE_FORM',
    id,
});

const optimisticEditIssue = (id, issue) => ({
    type: 'OPTIMISTIC_EDIT_ISSUE',
    id,
    issue,
});

export function editIssue(issueId, issue){
    return (dispatch) => {
        dispatch(optimisticEditIssue(issueId, issue));
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
           id: "optimistic",
        }));
        return firebaseBase.push(issue).then(() => {
            dispatch(removeAddedOptimistic());
        });
   } 
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
    return (dispatch) => {
        dispatch(requestIssues());
        return firebaseBase.orderByKey()
            .on("child_added", function(issueFirebase) {
            const issue = {
                ...issueFirebase.val(),
                id: issueFirebase.key,
            };
            dispatch(addIssue(issue));
        }); 
    };
};

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

export const deleteIssue = (issueId) => ({
    type: 'DELETE_ISSUE',
    id: issueId,
});

export const showEditIssueForm = (issueId) => ({
    type: 'SHOW_EDIT_ISSUE_FORM',
    id: issueId,
});

export const editIssue = (issueId, issue) => ({
    type: 'EDIT_ISSUE',
    id: issueId,
    issue,
});

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
            dispatch(removeOptimistic());
        });
   } 
};

const addIssueOptimistic = (issue) => ({
    type: 'ADD_ISSUE_OPTIMISTIC',
    issue,
})

const removeOptimistic = () => ({
    type: 'REMOVE_OPTIMISTIC',
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

import fetch from 'isomorphic-fetch';
import firebase from 'firebase';
import '../config/firebaseConfig';

let nextId = 0;
export const addIssue = (issue) => ({
    type: 'ADD_ISSUE',
    id: nextId++,
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

export const addIssueToDB = (issue) => ({
    type: 'ADD_ISSUE_TO_DB',
    issue,
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
        return firebase.database().ref("listTasks")
        .orderByKey().on("child_added", function(issue) {
          // allTasksDisplayed[task.key] = task.val();
          // Gets also the comments for the task. If there are no comments list,
          // it creates one.
          dispatch(addIssue(issue.val()));
        }); 
    };
};

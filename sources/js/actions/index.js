let nextId = 0;
export const addIssue = (text) => ({
    type: 'ADD_TODO',
    id: nextId++,
    text,
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

export const editIssue = (issueId, text) => ({
    type: 'EDIT_ISSUE',
    text,
});
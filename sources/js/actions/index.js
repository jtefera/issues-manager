let nextId = 0;
export const addIssue = (text, priority) => ({
    type: 'ADD_ISSUE',
    id: nextId++,
    text,
    priority,
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

export const editIssue = (issueId, text, priority) => ({
    type: 'EDIT_ISSUE',
    id: issueId,
    text,
    priority,
});

export const cancelEditIssue = (issueId) => ({
    type: 'CANCEL_EDIT_ISSUE',
    id: issueId,
});
let nextId = 0;
export const addIssue = (issue) => ({
    type: 'ADD_ISSUE',
    id: nextId++,
    issue: issue
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

export const editIssue = (issueId, title, priority) => ({
    type: 'EDIT_ISSUE',
    id: issueId,
    title,
    priority,
});

export const cancelEditIssue = (issueId) => ({
    type: 'CANCEL_EDIT_ISSUE',
    id: issueId,
});
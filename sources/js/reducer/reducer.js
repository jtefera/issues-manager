const issuesApp = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ISSUE':
            return state.concat({
               id: action.id,
               text: action.text,
               priority: action.priority,
            });
        case 'DELETE_ISSUE':
            return state.filter((el) => el.id !== action.id);
        case 'EDIT_ISSUE':
            return state.map((el) => (el.id !== action.id) 
                                        ? el : {
                                            id: action.id,
                                            text: action.text,
                                            priority: action.priority,
                                            editMode: false,
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
        default:
            break;
    }
    return state;
}

export default issuesApp;
const issuesApp = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ISSUE':
            console.log(...action.issue);
            return state.concat({
               id: action.id,
               ...action.issue,
            });
        case 'DELETE_ISSUE':
            return state.filter((el) => el.id !== action.id);
        case 'EDIT_ISSUE':
            return state.map((el) => (el.id !== action.id) 
                                        ? el : {
                                            ...el,
                                            ...action.issue,
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
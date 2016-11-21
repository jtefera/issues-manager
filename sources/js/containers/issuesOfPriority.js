import {changeIssueDescriptionDisplay} from '../actions/';
import {connect} from 'react-redux';
import {ListIssues} from '../presentationals/presentationals';

const getIssuesWithThePriority = (issues, priority) => {
    const filteredIsues = issues.filter((issue) => (
        parseInt(issue.priority, 10) === parseInt(priority, 10)
    ));
    return filteredIsues;
};

const mapStateToProps = (state, {priority}) => {
    let allIssues = [...state.issuesList];
    if(state.optimisticIssueList) {
        allIssues.push(state.optimisticIssue);
    }
    return {
        issues: getIssuesWithThePriority(
            allIssues,
            priority
        ),
    };
};

const mapDispatchToProps = (dispatch) => ({
    onClick: (id) => dispatch(changeIssueDescriptionDisplay(id)),
});

const ListIssuesOfPriority = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListIssues);

export default ListIssuesOfPriority;

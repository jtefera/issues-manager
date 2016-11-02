import {changeIssueDescriptionDisplay} from '../actions/';
import {connect} from 'react-redux';
import {ListIssues} from '../presentationals/presentationals';

const getIssuesWithThePriority = (issues, priority) => {
    const filteredIsues = issues.filter((issue) => (
        parseInt(issue.priority, 10) === parseInt(priority, 10)
    ));
    return filteredIsues;
};

const mapStateToProps = (state, {priority}) => ({
    issues: getIssuesWithThePriority(state, priority),
});

const mapDispatchToProps = (dispatch) => ({
    onClick: (id) => dispatch(changeIssueDescriptionDisplay(id)),
});

const ListIssuesOfPriority = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListIssues);

export default ListIssuesOfPriority;

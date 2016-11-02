import {changeIssueDescriptionDisplay} from '../actions/';
import {connect} from 'react-redux';
import {ListIssues} from '../presentationals/presentationals';

const getIssuesWithThePriority = (issues, priority) => {
    return issues.filter((issue) => issue.priority === parseInt(priority, 10));
};

const mapStateToProps = (state, {priority}) => ({
    issues: getIssuesWithThePriority(state, priority),
});

const mapDispatchToProps = (dispatch) => ({
    onClick: (id) => dispatch(changeIssueDescriptionDisplay(id)),
});

console.log(mapStateToProps, mapDispatchToProps, ListIssues);
const ListIssuesOfPriority = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListIssues);

export default ListIssuesOfPriority;

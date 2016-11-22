import {hideMessage} from '../actions/';
import {connect} from 'react-redux';
import MessagePres from '../presentationals/message';

const mapStateToProps = (state) => ({
    ...state.messageDisplay,
});

const mapDispatchToProps = (dispatch) => ({
    hideMessageHandler: () => dispatch(hideMessage()),
});

const Message = connect(
    mapStateToProps,
    mapDispatchToProps
)(MessagePres);

export default Message;
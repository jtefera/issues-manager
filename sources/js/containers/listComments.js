import React from 'react';
import {connect} from 'react-redux';
import CommentForm from '../containers/commentForm';
import NotSentWarning from '../presentationals/notSentWarning';
import {FormattedRelative} from 'react-intl';

const commentStyle = {
    fontSize: '14px',
    lineHeight: '16px',
    margin: '0px 0px',
    color: 'rgba(0, 0, 0, 0.541176)',
};

let ListComments = ({
    listComments,
    idIssue,
    isConnected,
    lastConnection,
}) => {
    const dateOptions = {    
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    const commentsEl = (!listComments) ? null : Object.keys(listComments)
        .map((key) => listComments[key])
        .map(({comment, email, name, date, received}, id) => {
            const sentState = (isConnected === false
                && received > lastConnection) ?
                    <NotSentWarning />
                    :null;
            return (
                <li
                    key={id}
                >
                    <p style={commentStyle}><b>{name}({email}): </b> {comment}</p>
                    {
                        <FormattedRelative
                            value={new Date(date)}
                            month='long'
                            year='numeric'
                            month='long'
                            day='2-digit'
                            hour='numeric'
                            minute='numeric'
                        />
                    }
                    {sentState}
                    <br />
                    <br />
                </li>
            );
        });
    return (
        <ul className='comments'>
            {commentsEl}
            <CommentForm idIssue={idIssue}/>
        </ul>
    );
};

const mapStateToProps = (state) => ({
    isConnected: state.connected.connected,
    lastConnection: state.connected.lastConnection,
});
ListComments = connect(
    mapStateToProps
)(ListComments);

export default ListComments;

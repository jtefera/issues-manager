import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import CommentForm from '../containers/commentForm';

const commentStyle = {
    fontSize: '14px',
    lineHeight: '16px',
    margin: '0px 0px',
    color: 'rgba(0, 0, 0, 0.541176)',
};

const ListComments = ({listComments, idIssue}) => {
    const dateOptions = {    
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    const commentsEl = (!listComments) ? null : Object.entries(listComments)
        .map((keyValArr) => keyValArr[1])
        .map(({comment, email, name, date}, id) => {
            return (
                <li
                    key={id}
                >
                    <p style={commentStyle}>{comment}</p>
                    <h3>
                        {name} ({email}) - {
                            (new Date(date))
                                .toLocaleDateString('en-US', dateOptions)
                        }
                    </h3>
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

export default ListComments;

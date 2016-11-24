import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const commentStyle = {
    fontSize: '14px',
    lineHeight: '16px',
    margin: '0px 0px',
    color: 'rgba(0, 0, 0, 0.541176)',
}

const ListComments = ({listComments}) => {
    const commentsEl = listComments.map(({comment, author, date}, id) => (
        <li
            key={id}
        >
            <p style={commentStyle}>{comment}</p>
            <h3>{author} - {date}</h3>
        </li>
    ));
    return (
        <ul className='comments'>
            {commentsEl}
        </ul>
    );
};

export default ListComments;

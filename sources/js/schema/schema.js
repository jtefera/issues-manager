import { Schema, arrayOf } from 'normalizr';

const issueSchema = Schema('issues');
const commentSchema = Schema('comments');

issuesSchema.define({
    comments: arrayOf(commentSchema),
});

export {issueSchema, commentSchema};
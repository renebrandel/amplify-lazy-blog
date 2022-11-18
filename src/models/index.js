// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, Comment, Reply } = initSchema(schema);

export {
  Post,
  Comment,
  Reply
};
import { CommentView } from "./CommentView"
import { DataStore } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Comment } from '../models'

export function PostView({ post }) {
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState([])

  useEffect(() => {
    if (showComments) {
      const sub = DataStore
        .observeQuery(Comment, c => c.post.id.eq(post.id))
        .subscribe(snapshot => setComments(snapshot.items))
      return () => sub.unsubscribe()
    }
  }, [showComments])

  async function handleAddComment() {
    await DataStore.save(new Comment({
      content: window.prompt("Comment content"),
      post: post
    }))
    setShowComments(true)
  }

  return <div>
    <h2>{post.title}</h2>
    <div>{post.content}</div>
    <b>Comments</b>
    <button onClick={handleAddComment}>Add comment</button>
    {showComments
      ? <ul>
        {comments.map(
          comment => <CommentView key={comment.id} comment={comment} />
        )}
      </ul>
      : <button onClick={() => setShowComments(true)}>Show comments</button>}
  </div>
}
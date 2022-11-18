import { DataStore } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Reply } from '../models'

export function CommentView({ comment }) {
  const [showReplies, setShowReplies] = useState(false)
  const [replies, setReplies] = useState([])
  useEffect(() => {
    if (showReplies) {
      const sub = DataStore
        .observeQuery(Reply, r => r.comment.id.eq(comment.id))
        .subscribe(snapshot => setReplies(snapshot.items))
      return () => sub.unsubscribe()
    }
  }, [showReplies])

  async function handleAddReply() {
    await DataStore.save(new Reply({
      comment: comment,
      content: window.prompt("Reply content")
    }))
    setShowReplies(true)
  }

  return <li>
    {comment.content}
    <button onClick={handleAddReply}>Add reply</button>
    {showReplies
      ? <ul>
        {replies.map(
          reply => <li key={reply.id}>{reply.content}</li>
        )}
      </ul>
      : <button onClick={() => setShowReplies(true)}>Show replies</button>}
  </li>
}
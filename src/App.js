import { DataStore } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Post } from './models'
import { PostView } from './components'
import { downloadString } from './utils'

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    // Add logic to incorporate filter
    const sub = DataStore
      .observeQuery(Post)
      .subscribe((snapshot) => {
        setPosts(snapshot.items)
      })
    return () => sub.unsubscribe()
  }, [filter])

  function handleAddPost() {
    DataStore.save(new Post({
      title: window.prompt("Blog title"),
      content: window.prompt('Blog post content')
    }))
  }

  async function exportAsFile() {
    let output = ""
    // Add logic to format correct output
    downloadString(output)
  }

  return (
    <div>
      <h1>Posts</h1>
      <input placeholder='Filter by reply content' onChange={e => setFilter(e.target.value)} />
      <button onClick={handleAddPost}>Add post</button>
      <button onClick={exportAsFile}>Export post, comments, and replies</button>
      {posts.map(post => <PostView key={post.id} post={post} />)}
    </div>
  );
}

export default App;

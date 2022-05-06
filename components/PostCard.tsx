import React from 'react'

const PostCard = ({ post }: any) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default PostCard

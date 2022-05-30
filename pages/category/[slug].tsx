import React from 'react'
import { PostCard, Categories } from '../../components'

import { getPostCategories, getCategories } from '../../services'

const PostCategories = ({ posts }: any) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post: any, index: any) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCategories

export async function getStaticProps({ params }: any) {
  const posts = await getPostCategories(params.slug)

  return {
    props: { posts },
  }
}

export async function getStaticPaths() {
  const categories = await getCategories()

  return {
    paths: categories.map(({ slug }: any) => ({ params: { slug } })),
    fallback: true,
  }
}

import React from 'react'
import { useRouter } from 'next/router'

import { PostCard, Categories, Contact, Loader } from '../../components'
import { getPostCategories, getCategories } from '../../services'

const PostCategories = ({ posts }: any) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.length > 0 ? (
            posts.map((post: any, index: any) => (
              <PostCard key={index} post={post.node} />
            ))
          ) : (
            <div className="pb-18 rounded-lg bg-white p-8 shadow-lg">
              There are no posts under this category.
            </div>
          )}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <Contact />
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

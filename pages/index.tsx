import type { NextPage } from 'next'
import Head from 'next/head'

import { getPosts } from '../services'

import {
  PostCard,
  Categories,
  PostWidget,
  FeaturedPostCarousel,
  Contact,
} from '../components'

const Home: NextPage = ({ posts }: any) => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>Joseph Wang</title>
        <link rel="shortcut icon" type="image/png" href="/image/favicon.png" />
      </Head>
      <FeaturedPostCarousel />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post: any) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 lg:sticky">
            <Contact />
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}

export default Home

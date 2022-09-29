import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'
import { PostNode } from '../types'

type Props = {
  posts: PostNode[]
}

const Home: NextPage<Props> = ({ posts }: Props) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => <PostCard post={post.node} key={post.node.slug} />)}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg-sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts: PostNode[] = (await getPosts()) || []

  return {
    props: { posts }
  }
}

export default Home

import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import * as React from 'react'

import { Author, Categories, Comments, CommentsForm, Loader, PostDetail, PostWidget } from '../../components'
import { getPostDetails, getPosts } from '../../services';
import { Post, PostNode } from '../../types';

type Props = {
    post: Post
}

export interface QParams extends ParsedUrlQuery {
    slug?:string
}

const PostDetails: React.FC<Props> = ({ post }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />
    }

    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    <PostDetail post={post} />
                    <Author author={post.author} />
                    <CommentsForm slug={post.slug} />
                    <Comments slug={post.slug} />
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                        <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getStaticProps: GetStaticProps<Props, QParams> = async ({ params }) => {
    const post: Post = (await getPostDetails(params?.slug)) || []
  
    return {
      props: { post }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts: PostNode[] = await getPosts();

    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: true,
    };
}

export default PostDetails
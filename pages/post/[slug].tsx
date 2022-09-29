import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import * as React from 'react'

import { Author, Categories, Comments, CommentsForm, PostDetail, PostWidget } from '../../components'
import { getPostDetails } from '../../services';
import { Post } from '../../types';

type Props = {
    post: Post
}

export interface QParams extends ParsedUrlQuery {
    slug?:string
}

const PostDetails: React.FC<Props> = ({ post }) => {
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    <PostDetail />
                    <Author />
                    <CommentsForm />
                    <Comments />
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                        <PostWidget />
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

export default PostDetails
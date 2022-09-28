export type PostNode = {
    node: Post
}

export type Post = {
    title: string;
    excerpt: string;
    slug: string;
    featuredImage: FeaturedImage;
    author: Author;
    createdAt: string;
}

export type Category = {
    name: string;
    slug: string;
}

type FeaturedImage = {
    url: string;
}

type Author = {
    name: string;
    photo: Photo;
}

type Photo = {
    url: string;
}

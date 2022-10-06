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
    categories: Category[];
    content: PostContent;
}

export type Category = {
    name: string;
    slug: string;
}

type FeaturedImage = {
    url: string;
}

export type Author = {
    name: string;
    photo: Photo;
    bio: string;
}

type Photo = {
    url: string;
}

type PostContent = {
    raw: PostRawContent;
}

type PostRawContent = {
    children: PostContentChild[]
}

export type PostContentChild = {
    type: string;
    children: PostContentChildItem[];
}

export type PostContentChildItem = {
    text: string;
    bold: boolean;
}

export type Comment = {
    name: string;
    createdAt: string;
    comment: string;
}

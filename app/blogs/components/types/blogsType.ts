type Technology = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  title: string;
};


export type BlogPost = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  title: string;
  image?: string;
  description: string;
  date: string;
  author: string;
  Technology: Technology[];
};


export type BlogPostList = BlogPost[];

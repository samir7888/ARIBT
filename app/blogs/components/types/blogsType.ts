type Technology = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  title: string;
};

type BlogPost = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  title: string;
  description: string;
  date: string;
  author: string;
  Technology: Technology[];
};


type BlogPostList = BlogPost[];

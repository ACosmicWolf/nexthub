export interface User {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Comment {
  id: string;
  authorID: string;
  content: string;
  createdAt: string;
  likes: string[];
  dislikes: string[];
  replies: Comment[];
}

export interface Post {
  id: string;
  banner: string;
  category: Category;
  title: string;
  authorID: string;
  contentURL: string;
  createdAt: string;
  comments: Comment[];
}

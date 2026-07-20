export class CreatePostDto {
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  language: string;
}

export class UpdatePostDto {
  title?: string;
  excerpt?: string;
  content?: string;
  image?: string;
  date?: string;
  readTime?: string;
  author?: string;
  authorRole?: string;
  language?: string;
}

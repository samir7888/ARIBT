
interface Portfolio {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  coverImage: string;
  title: string;
  year: string;
  description: string;
  link: string;
}

export interface Testimonial {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  name: string;
  social?: string;
  position: string;
  description: string;
  image: string;
  portfolio: Portfolio;
}

export type Testimonials = Testimonial[];

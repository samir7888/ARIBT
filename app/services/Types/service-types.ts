export type Service = {
  id: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  deletedAt: string | null;
  title: string;
  description: string; // HTML string
  file: string; // URL string
};

// If it's an array of such services:
export type ServiceList = Service[];


export interface Portfolio {
    id: string;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    deletedAt: string | null;
    coverImage: string; // URL to the image
    title: string;
    year: string; // You can use `number` if always numeric
    description: string; // HTML content as string
    link: string;
    testimonial?: string[];
    gallery?: string[];
    serviceprovided?: string[];
}

export type PortfolioList = Portfolio[];
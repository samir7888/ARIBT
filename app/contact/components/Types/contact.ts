export type ContactInfo = {
  id: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  deletedAt: string | null;
  mobileno: string;
  email: string;
  location: string;
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  whatsapp: string;
};

export type ContactInfoList = ContactInfo[];

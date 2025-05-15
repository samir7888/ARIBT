export type TeamMember = {
  id: string;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
  deletedAt: string | null;
  name: string;
  image: string; // URL to image
  position: string;
  joiningDate: string; // ISO 8601 date string (YYYY-MM-DD)
  experience: string; // Can be like "5 years", "9 months", or even just "10"
  link: string; // URL (LinkedIn/Facebook)
};

export type TeamMemberList = TeamMember[];

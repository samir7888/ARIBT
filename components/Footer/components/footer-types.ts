type Logo = {
  id: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  deletedAt: string | null;
  colorImage: string;
  whiteImage: string;
};

export type LogoList = Logo[];

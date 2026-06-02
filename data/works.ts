export interface Work {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  coverImage: string;
  protected: boolean;
}

export const works: Work[] = [];

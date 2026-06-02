export interface CaseStudy {
  slug: string;
  sections: CaseStudySection[];
}

export interface CaseStudySection {
  type: "text" | "image" | "callout";
  content: string;
}

export const caseStudies: CaseStudy[] = [];


export interface TransformationResult {
  id: string;
  originalIdea: string;
  circularPlan: string;
  createdAt: number;
  benefits: {
    regeneration: string;
    wasteElimination: string;
    productCirculation: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

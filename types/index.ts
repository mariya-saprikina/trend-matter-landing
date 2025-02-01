export interface Record {
  id: string;
  fields: {
    'Trending Keyword': string;
  };
}

export interface TrendCardProps {
  keyword: string;
  link: string;
}

export interface WhatsInsideProps {
  name: string;
  description: string;
  imageSrc: string;
}

export interface CategoryProps {
  name: string;
  imageSrc: string;
}

//feature props
export interface FeatureProps {
  title: string;
  image: string;
  content: string;
}

//feature list props
export interface FeatureListProps {
  features: FeatureProps[];
}

//testimonial card props
export interface TestimonialCardProps {
  description: string;
  imageSrc: string;
  name: string;
  position: string;
}

//testimonial list props
export interface TestimonialListProps {
  testimonials: TestimonialCardProps[];
}

//question card props
export interface QuestionCardProps {
  title: string;
  content: string;
}

//question list props
export interface QuestionListProps {
  questions: QuestionCardProps[];
}

interface Segment {
  name: string;
}

//trends table props
export interface Trend {
  id: string;
  trending_keyword: string;
  search_volume: number;
  why_its_trending: string;
  related_products: string;
  buyer_persona: string;
  segments: Segment[];
}

export interface LoginFormProps {
  signIn: (formData: FormData) => Promise<Response | null>;
}

export interface CheckmarkContentProps {
  description: string;
}

export interface LibraryCardProps {
  title: string;
  categories: string[];
  publishedAt: string;
}

export interface LibraryListProps {
  id: string;
  title: string;
  categories: string[];
  publishedAt: string;
}


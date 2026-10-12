export interface Article {
  id: string;
  section: string;
  kicker?: string;
  title: string;
  deck: string;
  readTime: string;
  authors: string[];
  authorRoles?: string[];
  publishDate: string;
  location?: string;
  heroImage: string;
  heroImageCaption?: string;
  heroImageCredit?: string;
  badge?: string;
  isFree?: boolean;
  commentCount: number;
  bodyParagraphs: string[];
  pullQuote?: {
    quote: string;
    attribution: string;
  };
  keyTakeaways?: string[];
}

export interface Comment {
  id: string;
  author: string;
  location: string;
  timestamp: string;
  content: string;
  recommendations: number;
  isNytPick?: boolean;
  replies?: Comment[];
}

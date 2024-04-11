export interface NewsInterface {
  source: {
    id: null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export const news: NewsInterface[] = [
  {
    source: {
      id: null,
      name: "Motley Fool Australia",
    },
    author: "Mitchell Lawler",
    title: "Up 16% in 2024! Are ASX tech shares now overvalued?",
    description:
      "Could it be time to cash in on recent big winners in the share market?\nThe post Up 16% in 2024! Are ASX tech shares now overvalued? appeared first on The Motley Fool Australia.",
    url: "https://www.fool.com.au/2024/04/11/up-16-in-2024-are-asx-tech-shares-now-overvalued/",
    urlToImage:
      "https://www.fool.com.au/wp-content/uploads/2023/09/tech-invest-1200x675.jpg",
    publishedAt: "2024-04-11T03:17:36Z",
    content:
      "ASX tech shares have been the frontrunner during the share market's rally to new heights. On a year-to-date basis, the Australian information technology sector is up 16%, nearly twice the return of t… [+3847 chars]",
  },
];

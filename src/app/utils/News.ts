export interface NewsInterface {
  id: number;
  sourceId?: number | null;
  sourceName?: string | null;
  author?: string | null;
  title: string;
  description?: string | null;
  url: string;
  urlToImage?: string | null;
  publishedAt?: string | null;
  content?: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export const news: NewsInterface[] = [
  {
    id: 0,
    sourceId: null,
    sourceName: null,
    createdAt: null,
    updatedAt: null,
    author: "Mitchell Lawler",
    title: "Up 16% in 2024! Are ASX tech shares now overvalued?",
    description:
      "Could it be time to cash in on recent big winners in the share market?\nThe post Up 16% in 2024! Are ASX tech shares now overvalued? appeared first on The Motley Fool Australia.",
    url: "https://www.fool.com.au/2024/04/11/up-16-in-2024-are-asx-tech-shares-now-overvalued/",
    urlToImage:
      "https://www.fool.com.au/wp-content/uploads/2023/09/tech-invest-1200x675.jpg",
    publishedAt: "2024-04-11T03:17:36Z",
    content: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt justo a libero luctus, nec fermentum enim molestie. Fusce nec justo quis nisi aliquet accumsan. Morbi convallis, ligula eget vulputate tempus, lorem neque pharetra neque, ut tempor libero dui sit amet velit. Suspendisse vel lectus id magna efficitur hendrerit. Aliquam fermentum eros non velit posuere interdum. Cras sed urna eget mauris congue efficitur id et elit. Integer auctor, justo eget volutpat posuere, quam mi vehicula eros, ac fermentum mi mi a dui. Duis luctus est at mauris vehicula ullamcorper. Sed aliquet, nisl in commodo vulputate, risus nisi bibendum lorem, non aliquam turpis lorem vel nunc. Fusce nec vehicula justo. In sollicitudin congue tortor, nec ultricies urna hendrerit a.
    
    Vivamus vitae aliquet massa. Integer mattis libero id ipsum consectetur, auctor lacinia nisi hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam sit amet orci fermentum, placerat lorem non, placerat lorem. Ut tincidunt nunc non tortor volutpat, vitae efficitur magna ultricies. Integer sit amet velit non quam mattis rhoncus. Nam eget ligula a justo tristique molestie vel eu libero. Aenean luctus odio ut justo convallis commodo. Donec eleifend, urna non feugiat fringilla, lorem turpis bibendum orci, eget laoreet enim est vel magna. Integer ut magna eget justo fringilla venenatis. Mauris vehicula, sapien sed lacinia sollicitudin, tortor lectus varius purus, nec viverra mauris augue in risus. Nulla vehicula odio id lectus aliquam, a rhoncus ex faucibus. Sed sed orci lorem.
    
    Maecenas sed nisl vehicula, consequat mauris in, venenatis justo. Cras in velit ac nunc dictum interdum. Quisque fermentum orci sed leo fermentum, vel hendrerit sem scelerisque. Nullam eu tincidunt magna. Donec scelerisque, ipsum vel malesuada accumsan, eros elit blandit elit, vel facilisis quam libero quis eros. Ut id massa eget ante fermentum suscipit. Integer placerat ligula eu nulla venenatis, vitae auctor nisi vestibulum. Vivamus at ligula justo. Phasellus bibendum urna in dolor aliquam, at gravida lectus condimentum. Sed vitae turpis nec ex commodo volutpat. Vivamus at odio libero. Donec auctor ac sem non tincidunt.
    
    Quisque nec nisl at magna tincidunt venenatis. Proin vitae lobortis nunc. Ut eget ligula a magna mattis volutpat. Sed quis viverra nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi nec lorem sit amet elit condimentum dignissim ac nec quam. Sed non turpis vel ante finibus cursus a sit amet nulla. Suspendisse ut metus at nisi commodo fermentum.
    `,
  },
];

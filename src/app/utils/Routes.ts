interface RouteInterface {
  name: string;
  path: string;
}

export const navbarTopRoutes: RouteInterface[] = [
  {
    name: "Entertainment",
    path: "/entertainment",
  },
  {
    name: "Politics",
    path: "/politics",
  },
  {
    name: "Lifestyle",
    path: "/lifestyle",
  },
  {
    name: "Sports",
    path: "/sports",
  },
];

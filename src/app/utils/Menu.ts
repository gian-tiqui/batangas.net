export interface SubmenuInterface {
  name: string;
  path: string;
}

export interface MenuInterface {
  name: string;
  submenu: SubmenuInterface[];
}

export const menu: MenuInterface[] = [
  {
    name: "News",
    submenu: [
      { name: "first", path: "/first" },
      { name: "second", path: "/second" },
      { name: "third", path: "/third" },
    ],
  },
  {
    name: "Shows",
    submenu: [
      { name: "first", path: "/first" },
      { name: "second", path: "/second" },
      { name: "third", path: "/third" },
    ],
  },
  {
    name: "Live",
    submenu: [
      { name: "first", path: "/first" },
      { name: "second", path: "/second" },
      { name: "third", path: "/third" },
    ],
  },
];

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
      { name: "Entertainment", path: "/entertainment" },
      { name: "Politics", path: "/politics" },
      { name: "Lifestyle", path: "/lifestyle" },
      { name: "Sports", path: "/sports" },
    ],
  },
];

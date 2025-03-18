const icons = {
  home: "./path/home.svg",
  add: "./path/add.svg",
  remove: "./path/remove.svg",
};

type Icon = typeof icons;

const icon: keyof Icon = "add";

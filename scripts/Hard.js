const Himg = [
  { img: "Hardimg/1" },
  { img: "Hardimg/2" },
  { img: "Hardimg/3" },
  { img: "Hardimg/4" },
];

export let Hardimghtml = "";
Himg.forEach((i) => {
  Hardimghtml += `<img src="${i.img}.jpg" alt="${i.img}">`;
});

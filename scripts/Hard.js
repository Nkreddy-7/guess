const Himg = [
  { img: "Hardimg/1" },
  { img: "Hardimg/2" },
  { img: "Hardimg/3" },
  { img: "Hardimg/4" },
  { img: "Hardimg/5" },
  { img: "Hardimg/6" },
  { img: "Hardimg/7" },
  { img: "Hardimg/8" },
  { img: "Hardimg/9" },
];

export let Hardimghtml = "";
Himg.forEach((hi,index) => {
  Hardimghtml += `<img src="${hi.img}.jpg" alt="${hi.img}" class="game-img" id="imag-${index}-H">`;
});

export let selectedHardhtml = '';
Himg.forEach((ele,index) =>{
      selectedHardhtml += `<div class="selected-image" id="image-${index + 1}-data-Hard">
    <div class="all-imgs">
        <div><img src="${ele.img}.jpg" id=" i${index + 1}"></div>
        <div class="Q-data-head">
            <div class="Q-head">
                <h5>Questions</h5>
                <div class="Questions">
                    <div class="question-1" id="img${index + 1}Q-h">
                    </div>
                    <div class="final-score"></div>
                </div>
            </div>
        </div>
    </div>
</div>`;
});

export const Himg1 = [
  {
    Q: "What animal is hanging from the branch?",
    option: {
      op1: "monkey",
      op2: "giraffe",
      op3: "elephant",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "How many dolphins are in the water?",
    option: {
      op1: "4",
      op2: "6",
      op3: "5",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What two large land animals are on the left side?",
    option: {
      op1: "lion and bear",
      op2: "giraffe and Elephant",
      op3: "A rhino and a hippo",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What is the red monkey doing in the water?",
    option: {
      op1: "Splashing",
      op2: "Swimming",
      op3: "Diving",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "How many monkeys are in the picture?",
    option: {
      op1: "2",
      op2: "4",
      op3: "3",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
];
export const Himg2 = [
  {
    Q: "What kind of animals are shown in the picture?",
    option: {
      op1: "Farm",
      op2: "Jungle",
      op3: "Wild",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "How many cows are in the picture?",
    option: {
      op1: "2",
      op2: "3",
      op3: "4",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What is in the water?",
    option: {
      op1: "Fish",
      op2: "Ducks",
      op3: "Frogs",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "How many ducks are in the picture?",
    option: {
      op1: "3",
      op2: "7",
      op3: "10",
      class1: "w3",
      class2: "w2",
      class3: "c1",
    },
  },
  {
    Q: "How many giraffe are in the picture?",
    option: {
      op1: "2",
      op2: "3",
      op3: "1",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
];
export const Himg3 = [
  {
    Q: "How many lions are in the picture?",
    option: {
      op1: "0",
      op2: "3",
      op3: "2",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "Which animals are drinking from the pond?",
    option: {
      op1: "Bears and foxes",
      op2: "Deer and raccoons",
      op3: "Deer and a fox",
      class1: "w2",
      class2: "w3",
      class3: "c1",
    },
  },
  {
    Q: "How many bears are in the picture?",
    option: {
      op1: "2",
      op2: "5",
      op3: "4",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What kind of environment is shown?",
    option: {
      op1: "desert",
      op2: "forest",
      op3: "beach",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "How many different types of animals can you see?",
    option: {
      op1: "More than 10",
      op2: "Less than 5",
      op3: "Exactly 8",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
];
export const Himg4 = [
  {
    Q: "What animals are drinking from the water?",
    option: {
      op1: "Giraffes and elephants",
      op2: "Lions and zebras",
      op3: "Rhinos and hippos",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "How many lions are in the foreground?",
    option: {
      op1: "2",
      op2: "3",
      op3: "4",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What kind of environment is this?",
    option: {
      op1: "jungle",
      op2: "savannah",
      op3: "farm",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What is the large striped animal called?",
    option: {
      op1: "tiger",
      op2: "zebra",
      op3: "horse",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What is the sun doing in the background?",
    option: {
      op1: "Setting",
      op2: "Rising",
      op3: "Shining",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
];



export const Himg5 = [
  {
    Q: "What animals are in the cage?",
    option: {
      op1: "Parrots",
      op2: "Parakeets",
      op3: "Budgies",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "How many children are feeding the birds?",
    option: {
      op1: "4",
      op2: "5",
      op3: "6",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What is the girl in the green dress doing?",
    option: {
      op1: "Singing",
      op2: "Clapping",
      op3: "Laughing",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What colors are the big parrot on the right?",
    option: {
      op1: "Red and Blue",
      op2: "Blue and Green",
      op3: "Yellow and Blue",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "How many birds are on the tree branch?",
    option: {
      op1: "2",
      op2: "3",
      op3: "4",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
];
export const Himg6 = [
  {
    Q: "What are the children collecting from the garden?",
    option: {
      op1: "Flowers",
      op2: "Vegetables",
      op3: "Stones",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What is the little girl on the right holding?",
    option: {
      op1: "bucket",
      op2: "watering can",
      op3: "basket",
      class1: "w2",
      class2: "w3",
      class3: "c1",
    },
  },
  {
    Q: "How many children are in the picture?",
    option: {
      op1: "6",
      op2: "5",
      op3: "4",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What vegetables are shown in the basket?",
    option: {
      op1: "Zucchini and pumpkins",
      op2: "Carrots and tomatoes",
      op3: "All vegetables",
      class1: "w3",
      class2: "w2",
      class3: "c1",
    },
  },
  {
    Q: "What is the boy in the middle holding?",
    option: {
      op1: "basket of flowers",
      op2: "large pumpkin",
      op3: "watering can",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
];
export const Himg7 = [
  {
    Q: "What animals are shown in the zoo?",
    option: {
      op1: "Lions, elephants, and zebras",
      op2: "Tigers, monkeys, and bears",
      op3: "Kangaroos, camels, and koalas",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "How many baby elephants are in the picture?",
    option: {
      op1: "1",
      op2: "2",
      op3: "3",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What is the man pushing?",
    option: {
      op1: "shopping cart",
      op2: "baby stroller",
      op3: "wheelbarrow",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What are the penguins doing?",
    option: {
      op1: "Eating fish",
      op2: "Swimming",
      op3: "Huddling together",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What is the girl in the pink dress holding?",
    option: {
      op1: "Binoculars",
      op2: "camera",
      op3: "toy",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
];
export const Himg8 = [
  {
    Q: "What animals are the children looking at?",
    option: {
      op1: "Cows,chickens",
      op2: "Ducks,chickens",
      op3: "Pigs,sheep",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "How many ducks are in the water?",
    option: {
      op1: "5",
      op2: "7",
      op3: "6",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What is the girl with the red hair holding?",
    option: {
      op1: "basket of eggs",
      op2: "chicken",
      op3: "watering can",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What color is the barn?",
    option: {
      op1: "Blue",
      op2: "Yellow",
      op3: "Red",
      class1: "w2",
      class2: "w3",
      class3: "c1",
    },
  },
  {
    Q: "What is the boy in the water doing?",
    option: {
      op1: "Fishing",
      op2: "Playing with ducks",
      op3: "Swimming",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
];
export const Himg9 = [
  {
    Q: "What are the children holding?",
    option: {
      op1: "Balloons",
      op2: "Gifts",
      op3: "Books",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "How many candles are on the cake?",
    option: {
      op1: "5",
      op2: "6",
      op3: "7",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "How many children are in the picture?",
    option: {
      op1: "7",
      op2: "6",
      op3: "8",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What is written on the wall in the background?",
    option: {
      op1: "Happy Birthday",
      op2: "Welcome Party",
      op3: "Let's Celebrate",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What is the floor covered with?",
    option: {
      op1: "Gifts",
      op2: "Flowers",
      op3: "Pebbles",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
];






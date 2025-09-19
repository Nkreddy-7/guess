const Mimg = [
  { img: "Mediumimg/1" },
  { img: "Mediumimg/2" },
  { img: "Mediumimg/3" },
  { img: "Mediumimg/4" },
  { img: "Mediumimg/5" },
  { img: "Mediumimg/6" },
  { img: "Mediumimg/7" },
  { img: "Mediumimg/8" },
  { img: "Mediumimg/9" },
  { img: "Mediumimg/10" },
  { img: "Mediumimg/11" },
  
];

export let Mediumimghtml = "";
Mimg.forEach((i,index) => {
  Mediumimghtml += `<img src="${i.img}.jpg" alt="${i.img}" id="imag-${index}-M">`;
});

export let selectedMediumhtml = '';
Mimg.forEach((ele,index) =>{
      selectedMediumhtml += `<div class="selected-image" id="image-${index + 1}-data-Medium">
                    <div class="all-imgs">
                <div><img src="${ele.img}.jpg" id=" i${index + 1}"></div>
                <div>
                <h5>Questions</h5>
                <div class="Questions">
                    <div class="question-1" id="img${index + 1}Q-m">
                    </div>
                    <div class="final-score"></div>
                </div>
                </div>
                </div>
            </div>`;
})

export const Mimg1 = [
  {
    Q: "What animal is in the picture with the sun?",
    option: {
      op1: "Bunnies",
      op2: "Puppies",
      op3: "Kittens",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "How many butterflies are flying in the air?",
    option: {
      op1: "3",
      op2: "4",
      op3: "5",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What is the weather like in the picture?",
    option: {
      op1: "Rainy",
      op2: "Sunny",
      op3: "Cloudy",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What are the tall landforms in the background?",
    option: {
      op1: "Volcanoes",
      op2: "Buildings",
      op3: "Mountains",
      class1: "w2",
      class2: "w3",
      class3: "c1",
    },
  },
  {
    Q: "What color are the sunflowers?",
    option: {
      op1: "Yellow",
      op2: "Blue",
      op3: "Pink",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
];
export const Mimg2 = [
  {
    Q: "Where are the children playing?",
    option: {
      op1: "park",
      op2: "beach",
      op3: "forest",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What is the girl with the striped shirt doing?",
    option: {
      op1: "Going up the slide",
      op2: "Playing on the swing",
      op3: "Sitting on the ground",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "How many swings are there?",
    option: {
      op1: "3",
      op2: "2",
      op3: "4",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What is the large yellow object in the sky?",
    option: {
      op1: "sun",
      op2: "moon",
      op3: "kite",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "How many children are playing?",
    option: {
      op1: "6",
      op2: "7",
      op3: "8",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
];
export const Mimg3 = [
  {
    Q: "What are the children doing at the beach?",
    option: {
      op1: "Playing volleyball",
      op2: "Building a sandcastle",
      op3: "Swimming",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "How many children are building the sandcastle?",
    option: {
      op1: "4",
      op2: "5",
      op3: "3",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What are the children using to build the sandcastle?",
    option: {
      op1: "Shovels and buckets",
      op2: "Their hands",
      op3: "Sticks and leaves",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "How many buckets are there?",
    option: {
      op1: "4",
      op2: "2",
      op3: "3",
      class1: "w2",
      class2: "w3",
      class3: "c1",
    },
  },
  {
    Q: "What color is the flag on top of the sandcastle?",
    option: {
      op1: "Red",
      op2: "Blue",
      op3: "White",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
];
export const Mimg4 = [
  {
    Q: "What are the two children holding?",
    option: {
      op1: "Magnifying glasses",
      op2: "Binoculars",
      op3: "Flashlights",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "How many rabbits are in the picture?",
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
    Q: "What kind of place are the children exploring?",
    option: {
      op1: " park",
      op2: "forest",
      op3: "beach",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What animal is sitting next to the boy?",
    option: {
      op1: "bear",
      op2: "squirrel",
      op3: "monkey",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What is the boy wearing on his back?",
    option: {
      op1: "backpack",
      op2: "jacket",
      op3: "vest",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
];
export const Mimg5 = [
  {
    Q: "What animals are swimming in the river?",
    option: {
      op1: "Fish and bears",
      op2: "Ducks and frogs",
      op3: "Squirrels and birds",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "How many ducks are in the river?",
    option: {
      op1: "3",
      op2: "4",
      op3: "5",
      class1: "w2",
      class2: "w3",
      class3: "c1",
    },
  },
  {
    Q: "What are the children on the left side of the river doing?",
    option: {
      op1: "Jumping",
      op2: "Fishing",
      op3: "Walking on a bridge",
      class1: "w2",
      class2: "w3",
      class3: "c1",
    },
  },
  {
    Q: "What color are the flowers in the foreground?",
    option: {
      op1: "Pink and white",
      op2: "Yellow and purple",
      op3: "All colors",
      class1: "w2",
      class2: "w3",
      class3: "c1",
    },
  },
  {
    Q: "How many frogs are there",
    option: {
      op1: "3",
      op2: "1",
      op3: "2",
      class1: "w3",
      class2: "w2",
      class3: "c1",
    },
  },
];
export const Mimg6 = [
  {
    Q: "What animals are swimming in the water?",
    option: {
      op1: "Dolphins and fish",
      op2: "Sharks and crabs",
      op3: "Turtles and seahorses",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "How many dolphins are shown in the picture?",
    option: {
      op1: "2",
      op2: "3",
      op3: "4",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What is on the bottom of the ocean?",
    option: {
      op1: "Sand",
      op2: "Coral and rocks",
      op3: "Seaweed and shells",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What is the large object floating on the surface?",
    option: {
      op1: "boat",
      op2: "cloud",
      op3: "sun",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What color are the bubbles in the water?",
    option: {
      op1: "Blue",
      op2: "White",
      op3: "Clear",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
];
export const Mimg7 = [
  {
    Q: "How many candles are on the birthday cake?",
    option: {
      op1: "5",
      op2: "7",
      op3: "4",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "How many balloons are in the picture?",
    option: {
      op1: "6",
      op2: "7",
      op3: "8",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What are the children celebrating?",
    option: {
      op1: "birthday",
      op2: "picnic",
      op3: "holiday",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What is on the table besides the cake?",
    option: {
      op1: "Gifts",
      op2: "Plates",
      op3: "Books",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "How many children are at the table?",
    option: {
      op1: "4",
      op2: "5",
      op3: "3",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
];

export const Mimg8 = [
  {
    Q: "How many candles are on the birthday cake?",
    option: {
      op1: "7",
      op2: "8",
      op3: "6",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What are the children celebrating?",
    option: {
      op1: "birthday",
      op2: "picnic",
      op3: "event",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What are the gifts wrapped in?",
    option: {
      op1: "Newspaper",
      op2: "Colorful paper",
      op3: "Bags",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What are the children wearing on their heads?",
    option: {
      op1: "Hats",
      op2: "Headbands",
      op3: "Party hats",
      class1: "w2",
      class2: "w3",
      class3: "c1",
    },
  },
  {
    Q: "How many children are standing around the cake?",
    option: {
      op1: "9",
      op2: "13",
      op3: "10",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
];
export const Mimg9 = [
  {
    Q: "What are the children doing under the tree?",
    option: {
      op1: "Playing games",
      op2: "Reading books",
      op3: "Eating lunch",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "How many children are in the picture?",
    option: {
      op1: "5",
      op2: "6",
      op3: "7",
      class1: "w2",
      class2: "w3",
      class3: "c1",
    },
  },
  {
    Q: "What color is the large tree?",
    option: {
      op1: "Brown and Green",
      op2: "Yellow and Red",
      op3: "Pink and Purple",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "How many birds are flying in the sky?",
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
    Q: "What is the boy in the green shirt holding?",
    option: {
      op1: "A book",
      op2: "A toy car",
      op3: "A ball",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
];
export const Mimg10 = [
  {
    Q: "How many ducks are in the pond?",
    option: {
      op1: "4",
      op2: "3",
      op3: "6",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What animals are flying in the sky?",
    option: {
      op1: "Butterflies and birds",
      op2: "Birds and ducks",
      op3: "Bees and birds",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What color is the sun?",
    option: {
      op1: "Yellow",
      op2: "Orange",
      op3: "Red",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What are the two animals standing on the grass in the foreground?",
    option: {
      op1: "Geese",
      op2: "Ducks",
      op3: "Swans",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "How many birds are on the big tree?",
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

export const Mimg11 = [
  {
    Q: "How many balloons are the children holding?",
    option: {
      op1: "4",
      op2: "5",
      op3: "3",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What animals are flying in the sky?",
    option: {
      op1: "Bees",
      op2: "Birds",
      op3: "Butterflies",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "How many children are in the picture?",
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
    Q: "What color are the girl's polka-dot dress?",
    option: {
      op1: "Blue and White",
      op2: "Pink and White",
      op3: "Yellow and Blue",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "How many boys are there?",
    option: {
      op1: "3",
      op2: "1",
      op3: "4",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
];
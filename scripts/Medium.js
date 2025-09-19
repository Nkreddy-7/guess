const Mimg = [
  { img: "Mediumimg/1" },
  { img: "Mediumimg/2" },
  { img: "Mediumimg/3" },
  { img: "Mediumimg/4" },
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
    Q: "Which animal is hanging on a rope?",
    option: {
      op1: "Snake",
      op2: "Lion",
      op3: "Monkey",
      class1: "w2",
      class2: "w3",
      class3: "c1",
    },
  },
  {
    Q: "What color balloon is the elephant holding?",
    option: {
      op1: "Green",
      op2: "Red",
      op3: "Pink",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "Which animal has a long neck?",
    option: {
      op1: "Giraffe",
      op2: "Lion",
      op3: "Monkey",
      class1: "c1",
      class2: "w3",
      class3: "w2",
    },
  },
  {
    Q: "How many candles are on the cake?",
    option: {
      op1: "3",
      op2: "5",
      op3: "4",
      class1: "w2",
      class2: "w3",
      class3: "c1",
    },
  },
  {
    Q: "Which animal has big ears?",
    option: {
      op1: "Giraffe",
      op2: "Elephant",
      op3: "Monkey",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
];
export const Mimg2 = [
  {
    Q: "How many balloons are in the picture?",
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
    Q: "Which animal is wearing a party hat?",
    option: {
      op1: "Rabbit",
      op2: "Bear",
      op3: "Squirrel",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What is on the table?",
    option: {
      op1: "Cake",
      op2: "Gift",
      op3: "Balloons",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "How many candles are on the cake?",
    option: {
      op1: "3",
      op2: "5",
      op3: "4",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "Which animal is holding balloons?",
    option: {
      op1: "Squirrel",
      op2: "Rabbit",
      op3: "Bear",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
];

export const Mimg3 = [
  {
    Q: "Which animal has a long neck?",
    option: {
      op1: "Lion",
      op2: "Elephant",
      op3: "Giraffe",
      class1: "w2",
      class2: "w3",
      class3: "c1",
    },
  },
  {
    Q: "Which animal is flying in the sky?",
    option: {
      op1: "Bird",
      op2: "Monkey",
      op3: "Elephant",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "Which animal has a big trunk?",
    option: {
      op1: "Lion",
      op2: "Elephant",
      op3: "Giraffe",
      class1: "w3",
      class2: "c1",
      class3: "w2",
    },
  },
  {
    Q: "Which animal is hanging on a tree branch?",
    option: {
      op1: "Monkey",
      op2: "Tiger",
      op3: "Bird",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "Who is called the king of the jungle?",
    option: {
      op1: "Elephant",
      op2: "Lion",
      op3: "Giraffe",
      class1: "w3",
      class2: "c1",
      class3: "w2",
    },
  },
];
export const Mimg4 = [
  {
    Q: "Which animals are sitting in the front?",
    option: {
      op1: "Lions",
      op2: "Elephants",
      op3: "Zebras",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "Which animal has black and white stripes?",
    option: {
      op1: "Giraffe",
      op2: "Zebra",
      op3: "Lion",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "How many giraffes are in the picture?",
    option: {
      op1: "3",
      op2: "5",
      op3: "2",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "Which animals are walking in the water?",
    option: {
      op1: "Elephants",
      op2: "Lions",
      op3: "Giraffes",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What is flying in the sky?",
    option: {
      op1: "Birds",
      op2: "Monkeys",
      op3: "Zebras",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
];
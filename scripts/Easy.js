/*data for image generation*/
const Eimg = [
  { img: "Easyimg/1" },
  { img: "Easyimg/2" },
  { img: "Easyimg/3" },
  { img: "Easyimg/4" },
  { img: "Easyimg/5" },
  
];

export let Easyimghtml='';
Eimg.forEach((ele,index)=>{
    Easyimghtml += `<img src="${ele.img}.jpg" alt="${ele.img}" class="game-img" id="imag-${index}">`;
})

/*Selected-image html*/
export let selectedhtml = '';
Eimg.forEach((ele,index) =>{
      selectedhtml += `<div class="selected-image" id="image-${index + 1}-data">
               <div class="all-imgs">
                <div><img src="${ele.img}.jpg" id=" i${index + 1}"></div>
                <div>
                <h5>Questions</h5>
                <div class="Questions">
                    <div class="question-1" id="img${index + 1}Q">
                    </div>
                    <div class="final-score"></div>
                </div>
                </div>
                </div>
            </div>`;
})

/*Questions data*/
//export let Eq1html ='';
export const Eimg1 = [
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
export const Eimg2 = [
  {
    Q: "What color is the girl's dress?",
    option: {
      op1: "Blue",
      op2: "Yellow",
      op3: "Red",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "Which insect is flying near the girl?",
    option: {
      op1: "Bee",
      op2: "Ant",
      op3: "Spider",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What is shining in the sky?",
    option: {
      op1: "Moon",
      op2: "Sun",
      op3: "Star",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What color are the birds near the girl?",
    option: {
      op1: "Blue and White",
      op2: "Green and Yellow",
      op3: "Red and Black",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "Where is the girl standing?",
    option: {
      op1: "road",
      op2: "garden",
      op3: "classroom",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
];
export const Eimg3 = [
  {
    Q: "What is the father playing with?",
    option: {
      op1: "Ball",
      op2: "Kite",
      op3: "Frisbee",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What is the mother holding?",
    option: {
      op1: "book",
      op2: "basket",
      op3: "balloon",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What is on the picnic mat?",
    option: {
      op1: "Food",
      op2: "Toys",
      op3: "Shoes",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "How many children are playing?",
    option: {
      op1: "2",
      op2: "3",
      op3: "1",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "Where is the picnic happening?",
    option: {
      op1: "In a forest",
      op2: "In a park",
      op3: "On a beach",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
];
export const Eimg4 = [
  {
    Q: "What is the boy holding?",
    option: {
      op1: "Fishing rod",
      op2: "Stick",
      op3: "Book",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "Which animal is sitting on a rock?",
    option: {
      op1: "Frog",
      op2: "Duck",
      op3: "Dog",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What is floating on the water?",
    option: {
      op1: "Lotus",
      op2: "wire",
      op3: "Paper boats",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What birds are swimming in the water?",
    option: {
      op1: "Duck",
      op2: "Swan",
      op3: "Pigeons",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What color is the boy's hat?",
    option: {
      op1: "Red",
      op2: "Green",
      op3: "Blue",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
];
export const Eimg5 = [
  {
    Q: "What is coming out of the volcano?",
    option: {
      op1: "Snow",
      op2: "Lava",
      op3: "Water",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "What animals are in the picture?",
    option: {
      op1: "Dinosaurs",
      op2: "Lions",
      op3: "Elephants",
      class1: "c1",
      class2: "w2",
      class3: "w3",
    },
  },
  {
    Q: "What color is the biggest dinosaur?",
    option: {
      op1: "Blue",
      op2: "Yellow",
      op3: "Green",
      class1: "w3",
      class2: "w2",
      class3: "c1",
    },
  },
  {
    Q: "Where are the dinosaurs standing?",
    option: {
      op1: "park",
      op2: "forest",
      op3: "Zoo",
      class1: "w2",
      class2: "c1",
      class3: "w3",
    },
  },
  {
    Q: "How many dinosaurs are there?",
    option: {
      op1: "5",
      op2: "4",
      op3: "7",
      class1: "w1",
      class2: "w2",
      class3: "c1",
    },
  },
];




/*Eimg1.forEach((i1q)=>{
  Eq1html += `<div class="question-1">
                    <p>${i1q.Q}</p>
                    <div class="options">
                        <div class="op1 ${i1q.option.class1}">${i1q.option.op1}</div>
                        <div class="op2 ${i1q.option.class2}">${i1q.option.op1}</div>
                        <div class="op3 ${i1q.option.class3}">${i1q.option.op1}</div>
                    </div>
                    <div class="result">result</div>
                </div>`;
} );
*//*

export const Eimg2 = [
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

export const Eimg3 = [
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
export const Eimg4 = [
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
*/
/*
export function EasyQhtml(Qdata) {
  let html = "";
  Qdata.forEach((i1q) => {
    html += `<div class="question-1">
                    <p>${i1q.Q}</p>
                    <div class="options">
                        <div class="op1 ${i1q.option.class1}">${i1q.option.op1}</div>
                        <div class="op2 ${i1q.option.class2}">${i1q.option.op2}</div>
                        <div class="op3 ${i1q.option.class3}">${i1q.option.op3}</div>
                    </div>
                    <div class="result">result</div>
                </div>`;
  });
  return html;
}*/
/*Questions html*/
/*
export let Eq1html = EasyQhtml(Eimg1);
export let Eq2html = EasyQhtml(Eimg2);
export let Eq3html = EasyQhtml(Eimg3);
export let Eq4html = EasyQhtml(Eimg4);
*/
/*questions visibility one by one*/

/*
export function getNextQ(imagedata){
  let currentIndex = 0;
  const btn=document.getElementById("nextQ");
  btn.addEventListener("click",()=>{
    if(currentIndex < imagedata.length){
      console.log(imagedata[currentIndex])
      currentIndex++
    }else{
      console.log(error);
    }
  });


}

export const n = getNextQ(Eimg1);*/



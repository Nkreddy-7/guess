import { Easyimghtml,selectedhtml, Eimg1,Eimg2,Eimg3,Eimg4} from "./scripts/Easy.js";

import {Mediumimghtml,selectedMediumhtml,Mimg1,Mimg2,Mimg3,Mimg4,} from "./scripts/Medium.js";
import { Hardimghtml,selectedHardhtml,Himg1,Himg2,Himg3,Himg4 } from "./scripts/Hard.js";

console.log(Eimg1)

/*calling sections*/
const Easy = document.getElementById("Eclick");
const Medium = document.getElementById("Mclick");
const Hard = document.getElementById("Hclick");

const level=document.getElementById("level")
const EasyLevel = document.getElementById("Easylevel");
const MediumLevel = document.getElementById("Mediumlevel");
const HardLevel = document.getElementById("Hardlevel");

Easy.addEventListener("click",()=>{
   level.style.display="none";
   EasyLevel.style.display = "block";
   MediumLevel.style.display = "none";
   HardLevel.style.display = "none";
  
})


Medium.addEventListener("click", () => {
  level.style.display = "none";
  EasyLevel.style.display = "none";
  MediumLevel.style.display = "block";
  HardLevel.style.display = "none";
});

Hard.addEventListener("click", () => {
  level.style.display = "none";
  EasyLevel.style.display = "none";
  MediumLevel.style.display = "none";
  HardLevel.style.display = "block";
});
console.log("naveem")


/*easy,Medium,hard section code for image container*/

document.getElementById("image-container-e").innerHTML =Easyimghtml;
document.getElementById("image-container-m").innerHTML = Mediumimghtml;
document.getElementById("image-container-h").innerHTML = Hardimghtml;

console.log("Easyimghtml")
console.log(selectedhtml);
/*Easy level code*/


/*const images = document.querySelectorAll(".game-img");

images.forEach((img) => {
  img.addEventListener("click", () => {
    // Hide all images
    images.forEach((i) => {
      i.classList.remove("active");
      i.classList.add("hidden");

    });

    // Show only the clicked one

    img.classList.remove("hidden");
    img.classList.add("active");
    
  });
});

*/
/*adding event listners for every image when clicks it open that imAGE  Easy section*/

const img1details = document.getElementById("imag-0");
const img2details = document.getElementById("imag-1");
const img3details = document.getElementById("imag-2");
const img4details = document.getElementById("imag-3");

img1details.addEventListener("click",()=>{
    document.getElementById("head-Easy").style.display = "none";
    document.getElementById("image-1-data").style.display = "block";

})

img2details.addEventListener("click", () => {
  document.getElementById("head-Easy").style.display = "none";
  document.getElementById("image-2-data").style.display = "block";
});

img3details.addEventListener("click", () => {
  document.getElementById("head-Easy").style.display = "none";
  document.getElementById("image-3-data").style.display = "block";
});

img4details.addEventListener("click", () => {
  document.getElementById("head-Easy").style.display = "none";
  document.getElementById("image-4-data").style.display = "block";
});

/*Selected img html*/
document.getElementById("all-images").innerHTML=selectedhtml;


/*medium section*/
const Mimg1details = document.getElementById("imag-0-M");
const Mimg2details = document.getElementById("imag-1-M");
const Mimg3details = document.getElementById("imag-2-M");
const Mimg4details = document.getElementById("imag-3-M");

Mimg1details.addEventListener("click", () => {
  document.getElementById("head-Easy-M").style.display = "none";
  document.getElementById("image-1-data-Medium").style.display = "block";
});

Mimg2details.addEventListener("click", () => {
  document.getElementById("head-Easy-M").style.display = "none";
  document.getElementById("image-2-data-Medium").style.display = "block";
});

Mimg3details.addEventListener("click", () => {
  document.getElementById("head-Easy-M").style.display = "none";
  document.getElementById("image-3-data-Medium").style.display = "block";
});

Mimg4details.addEventListener("click", () => {
  document.getElementById("head-Easy-M").style.display = "none";
  document.getElementById("image-4-data-Medium").style.display = "block";
});


document.getElementById("all-images-M").innerHTML = selectedMediumhtml;



/*Hard Section*/

const Himg1details = document.getElementById("imag-0-H");
const Himg2details = document.getElementById("imag-1-H");
const Himg3details = document.getElementById("imag-2-H");
const Himg4details = document.getElementById("imag-3-H");

Himg1details.addEventListener("click", () => {
 
  document.getElementById("head-Easy-H").style.display = "none";
  document.getElementById("image-1-data-Hard").style.display = "block";
});

Himg2details.addEventListener("click", () => {
  document.getElementById("head-Easy-H").style.display = "none";
  document.getElementById("image-2-data-Hard").style.display = "block";
});

Himg3details.addEventListener("click", () => {
  document.getElementById("head-Easy-H").style.display = "none";
  document.getElementById("image-3-data-Hard").style.display = "block";
});

Himg4details.addEventListener("click", () => {
  document.getElementById("head-Easy-H").style.display = "none";
  document.getElementById("image-4-data-Hard").style.display = "block";
});

document.getElementById("all-images-H").innerHTML = selectedHardhtml;




/*Questions html*/


// Global coins variable
let coins = 0;

// Update all coin boxes (Easy, Medium, Hard)
function updateCoins() {
  document
    .querySelectorAll("#coinBox, #coinBox-M, #coinBox-H")
    .forEach((el) => {
      if (el) el.textContent = coins;
    });
}

// Quiz function
export function getNextQ(imagedata, containerId) {
  let currentIndex = 0;
  let score = 0;

  const container = document.getElementById(containerId);

  function showQuestion(index) {
    const q = imagedata[index];
    container.innerHTML = `
      <div class="question-1">
        <p>${q.Q}</p>
        <div class="options">
          <div class="option ${q.option.class1}" data-correct="${q.option.class1.startsWith("c")}">${q.option.op1}</div>
          <div class="option ${q.option.class2}" data-correct="${q.option.class2.startsWith("c")}">${q.option.op2}</div>
          <div class="option ${q.option.class3}" data-correct="${q.option.class3.startsWith("c")}">${q.option.op3}</div>
        </div>
        <div class="result">Choose an answer</div>
      </div>
    `;
     
  const parentSection = container.closest("section");
  if (parentSection) {
    const backBtn = parentSection.querySelector("button[id^='backSelect']");
    if (backBtn) backBtn.style.display = "inline-block";
  }

    const options = container.querySelectorAll(".option");
    const result = container.querySelector(".result");

    options.forEach((opt) => {
      opt.addEventListener("click", () => {
        const isCorrect = opt.dataset.correct === "true";

        if (isCorrect) {
          opt.style.background = "lightgreen";
          result.textContent = "✅ Correct!";
          score++;
          coins++;
          updateCoins();

          setTimeout(() => {
            nextQuestion(); // auto move to next
          }, 1000);
        } else {
          opt.style.background = "lightcoral";
          result.textContent = "❌ Wrong, try again!";
          coins--;
          updateCoins();
        }
      });
    });
  }

  function nextQuestion() {
    currentIndex++;
    if (currentIndex < imagedata.length) {
      showQuestion(currentIndex);
    } else {
      container.innerHTML = `<p class="final-score">🎉 Quiz finished!<br> Score: ${score}/${imagedata.length}<br>💰 Coins: ${coins}</p>`;
    }

  }

  // Start first question
  showQuestion(currentIndex);
}

// Calls (no next buttons needed)
getNextQ(Eimg1, "img1Q");
getNextQ(Eimg2, "img2Q");
getNextQ(Eimg3, "img3Q");
getNextQ(Eimg4, "img4Q");

getNextQ(Mimg1, "img1Q-m");
getNextQ(Mimg2, "img2Q-m");
getNextQ(Mimg3, "img3Q-m");
getNextQ(Mimg4, "img4Q-m");

getNextQ(Himg1, "img1Q-h");
getNextQ(Himg2, "img2Q-h");
getNextQ(Himg3, "img3Q-h");
getNextQ(Himg4, "img4Q-h");

// Setup back button logic
function setupBackButton(backId, headId) {
  const backBtn = document.getElementById(backId);
  backBtn.style.display = "none"; // hide at start

  backBtn.addEventListener("click", () => {
    // hide all selected-image (question containers)
    document.querySelectorAll(`#${headId} ~ .selected-image`).forEach((el) => {
      el.style.display = "none";
    });

    // show the image header again
    document.getElementById(headId).style.display = "block";

    // hide back button again
    backBtn.style.display = "none";
  });
}

// apply to all levels
setupBackButton("backSelect-E", "head-Easy");
setupBackButton("backSelect-M", "head-Easy-M");
setupBackButton("backSelect-H", "head-Easy-H");




/*function for Each image Questions and option generation
console.log("naveeen")
export function getNextQ(imagedata, containerId, btnId) {
  let currentIndex = 0;
  let score = 0;
  const btn = document.getElementById(btnId);
  const container = document.getElementById(containerId);
   
  function showQuestion(index) {
    const q = imagedata[index];
    container.innerHTML = `
      <div class="question-1">
        <p>${q.Q}</p>
        <div class="options">
          <div class="option ${q.option.class1}" data-correct="${
      q.option.class1.startsWith("c") ? "true" : "false"
    }">${q.option.op1}</div>
          <div class="option ${q.option.class2}" data-correct="${
      q.option.class2.startsWith("c") ? "true" : "false"
    }">${q.option.op2}</div>
          <div class="option ${q.option.class3}" data-correct="${
      q.option.class3.startsWith("c") ? "true" : "false"
    }">${q.option.op3}</div>
        </div>
        <div class="result">Choose an answer</div>
        
      </div>
    `;

    // Add click listeners to options
    const options = container.querySelectorAll(".option");
    const result = container.querySelector(".result");

    options.forEach((opt) => {
      opt.addEventListener("click", () => {
        const isCorrect = opt.dataset.correct === "true";

        if (isCorrect) {
          opt.style.background = "lightgreen";
          result.textContent = "✅ Correct!";
          score++;
          
          setTimeout(() => {
          
          }, 1000); // auto move after 1 sec
        } else {
          opt.style.background = "lightcoral";
          result.textContent = "❌ Wrong, try again!";
          
        }
      });
    });
  }
  console.log("naveem")
 console.log(coins)
  function nextQuestion() {
    currentIndex++;
    if (currentIndex < imagedata.length) {
      showQuestion(currentIndex);
    } else {
      container.innerHTML = `<p class="final-score">🎉 Quiz finished! Your score: ${score}/${imagedata.length}</p>`;
      btn.style.display = "none"; // hide Next button after quiz
    }
  }

  // Start with first question
  showQuestion(currentIndex);

  // Optional manual Next button (if you still want it)
  btn.addEventListener("click", () => {
    nextQuestion();
  });
}
getNextQ(Eimg1, "img1Q", "EnextQ");
getNextQ(Eimg2, "img2Q", "EnextQ");
getNextQ(Eimg3, "img3Q", "EnextQ");
getNextQ(Eimg4, "img4Q", "EnextQ");

getNextQ(Mimg1, "img1Q-m", "MnextQ");
getNextQ(Mimg2, "img2Q-m", "MnextQ");
getNextQ(Mimg3, "img3Q-m", "MnextQ");
getNextQ(Mimg4, "img4Q-m", "MnextQ");

getNextQ(Himg1, "img1Q-h", "HnextQ");
getNextQ(Himg2, "img2Q-h", "HnextQ");
getNextQ(Himg3, "img3Q-h", "HnextQ");
getNextQ(Himg4, "img4Q-h", "HnextQ");*/

/*
 let coins =0;
function updateCoins() {
  document
    .querySelectorAll("#coinBox, #coinBox-M, #coinBox-H")
    .forEach((el) => {
      if (el) el.textContent = coins;
    });
}/*
/*
function setupHomeButton(homeId) {
  const homeBtn = document.getElementById(homeId);
  homeBtn.addEventListener("click", () => {
    document
      .querySelectorAll("section")
      .forEach((sec) => (sec.style.display = "none"));
    document.getElementById("level").style.display = "flex";
  });
}
setupHomeButton("home-E");
setupHomeButton("home-M");
setupHomeButton("home-H");

export function setupBackButton(backId, headId) {
  const backBtn = document.getElementById(backId);
  backBtn.addEventListener("click", () => {
    document
      .querySelectorAll(".selected-image")
      .forEach((el) => (el.style.display = "none"));
    document.getElementById(headId).style.display = "block";
  });
}
setupBackButton("backSelect-E", "head-Easy");
setupBackButton("backSelect-M", "head-Easy-M");
setupBackButton("backSelect-H", "head-Easy-H");*/
/*go back function
export function setupBackButton(backId) {
  const backBtn = document.getElementById(backId);

  backBtn.addEventListener("click", () => {
    // Hide all selected image question containers
    document.querySelectorAll(".selected-image").forEach((el) => {
      el.style.display = "none";
    });

    // Show header with all images again
    document.getElementById("head-Easy").style.display = "block";
  });
}
setupBackButton("backSelect-E");
setupBackButton("backSelect-M");
setupBackButton("backSelect-H");*/

/*Medium section*/

//const bgMusic = document.getElementById("bgMusic");
//bgMusic.volume = 0.5; 
/*
const bgAudio = document.getElementById("bg-audio");

// browsers block autoplay with sound → start after user interaction
document.addEventListener("click", () => {
  if (bgAudio.paused) {
    bgAudio.play().catch((err) => console.log("Play blocked:", err));
  }
});*/
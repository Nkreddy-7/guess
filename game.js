import { Easyimghtml,selectedhtml, Eimg1,Eimg2,Eimg3,Eimg4} from "./scripts/Easy.js";

//import { Mediumimghtml,selectedMediumhtml } from "./scripts/Medium.js";
import { Hardimghtml } from "./scripts/Hard.js";

console.log("Eq1html");
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
  console.log("naveen");
    document.getElementById("head-Easy").style.display = "none";
    document.getElementById("image-1-data").style.display = "block";

})

img2details.addEventListener("click", () => {
  console.log("naveen");
  document.getElementById("head-Easy").style.display = "none";
  document.getElementById("image-2-data").style.display = "block";
});

img3details.addEventListener("click", () => {
  console.log("naveen");
  document.getElementById("head-Easy").style.display = "none";
  document.getElementById("image-3-data").style.display = "block";
});

img4details.addEventListener("click", () => {
  console.log("naveen");
  document.getElementById("head-Easy").style.display = "none";
  document.getElementById("image-4-data").style.display = "block";
});

/*Selected img html*/
document.getElementById("all-images").innerHTML=selectedhtml;


/*medium section
const Mimg1details = document.getElementById("imag-0-M");
const Mimg2details = document.getElementById("imag-1-M");
const Mimg3details = document.getElementById("imag-2-M");
const Mimg4details = document.getElementById("imag-3-M");

Mimg1details.addEventListener("click", () => {
  console.log("naveen");
  document.getElementById("head-Easy-M").style.display = "none";
  document.getElementById("image-1-data-Medium").style.display = "block";
});

Mimg2details.addEventListener("click", () => {
  console.log("naveen");
  document.getElementById("head-Easy-M").style.display = "none";
  document.getElementById("image-2-data-Medium").style.display = "block";
});

Mimg3details.addEventListener("click", () => {
  console.log("naveen");
  document.getElementById("head-Easy-M").style.display = "none";
  document.getElementById("image-3-data-Medium").style.display = "block";
});

Mimg4details.addEventListener("click", () => {
  console.log("naveen");
  document.getElementById("head-Easy-M").style.display = "none";
  document.getElementById("image-4-data-Medium").style.display = "block";
});


document.getElementById("all-images-M").innerHTML = selectedMediumhtml;*/

/*Questions html*/



/*function for Each image Questions and option generation*/
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
            nextQuestion();
          }, 1000); // auto move after 1 sec
        } else {
          opt.style.background = "lightcoral";
          result.textContent = "❌ Wrong, try again!";
        }
      });
    });
  }

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
getNextQ(Eimg1, "img1Q", "nextQ");
getNextQ(Eimg2, "img2Q", "nextQ");
getNextQ(Eimg3, "img3Q", "nextQ");
getNextQ(Eimg4, "img4Q", "nextQ");

/*go back function*/
export function setupBackButton() {
  const backBtn = document.getElementById("backSelect");

  backBtn.addEventListener("click", () => {
    // Hide all selected image question containers
    document.querySelectorAll(".selected-image").forEach((el) => {
      el.style.display = "none";
    });

    // Show header with all images again
    document.getElementById("head-Easy").style.display = "block";
  });
}
setupBackButton();

/*Medium section*/


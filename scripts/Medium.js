const Eimg = [
  { img: "Mediumimg/1" },
  { img: "Mediumimg/2" },
  { img: "Mediumimg/3" },
  { img: "Mediumimg/4" },
];

export let Mediumimghtml = "";
Eimg.forEach((i) => {
  Mediumimghtml += `<img src="${i.img}.jpg" alt="${i.img}" id="imag-${index}-M">`;
});

export let selectedMediumhtml = '';
Eimg.forEach((ele,index) =>{
      selectedMediumhtml += `<div class="selected-image" id="image-${index + 1}-data-Medium">
                <img src="${ele.img}.jpg" id=" i${index + 1}">
                <h5>Questions</h5>
                <div class="Questions">
                    <div class="question-1" id="img${index + 1}Q">
                    </div>
                    <div class="final-score">score</div>
                </div>
            </div>`;
})

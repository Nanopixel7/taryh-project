//! for FIRST image
let modal = document.getElementById("myModal");
let img = document.getElementById("myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};
let span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};
//// -------------------------------------------------------------////
//! for SECOND image
let modal2 = document.getElementById("myModal2");
let img2 = document.getElementById("myImg2");
let modalImg2 = document.getElementById("img02");
let captionText2 = document.getElementById("caption2");
img2.onclick = function () {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
};
let span2 = document.getElementsByClassName("close2")[0];
span2.onclick = function () {
  modal2.style.display = "none";
};

//! for THIRD image
let modal3 = document.getElementById("myModal3");
let img3 = document.getElementById("myImg3");
let modalImg3 = document.getElementById("img03");
let captionText3 = document.getElementById("caption3");
img3.onclick = function () {
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
};
let span3 = document.getElementsByClassName("close3")[0];
span3.onclick = function () {
  modal3.style.display = "none";
};
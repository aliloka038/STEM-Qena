const productContainers = [...document.querySelectorAll(".second-generation")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += 0.33 * containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= 0.33 * containerWidth;
  });
});

function OpenOrClose() {
  document.getElementById("mySidebar").classList.toggle("open");
  document.getElementById("main").classList.toggle("open");
}

setTimeout(function() {
  document.querySelector('.loader-container').style.display = 'none';
  document.querySelector('.main-content').classList.add('visible');
  document.body.style.overflow = "auto"
  }, 2000);
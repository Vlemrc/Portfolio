var counter = document.getElementById('count');
var visitCount = localStorage.getItem("page_view");
var resetButton = document.querySelector("#reset");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counter.innerHTML = visitCount;

// resetButton.addEventListener("click", () => {
//   visitCount = 1;
//   localStorage.setItem("page_view", 1);
//   counterContainer.innerHTML = visitCount;
// });
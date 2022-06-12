export function QuizHeader({ $target, initialState, onClick }) {
  this.state = initialState;

  $target.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      e.preventDefault();
      $target.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      this.state = e.target.innerText;
      onClick(this.state);
    }
  });
}

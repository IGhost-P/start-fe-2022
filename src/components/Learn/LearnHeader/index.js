export function LearnHeader({ $target, initialState, onClick }) {
  console.log("LearnHeader is running");

  $target.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      e.preventDefault();
      const tag = e.target.innerText;
      onClick(tag);
    }
  });
}

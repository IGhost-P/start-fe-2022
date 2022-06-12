export function LoadingSpiner({ $target }) {
  console.log("LoadingSpiner is running");

  console.log($target);
  this.render = () => {
    const markup = this.generateMarkup();
    console.log(markup);
    $target.insertAdjacentHTML("beforebegin", markup);
  };

  this.generateMarkup = () => {
    return `
    <div class="spinner-box">
    <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    </div>
    `;
  };

  this.render();
}

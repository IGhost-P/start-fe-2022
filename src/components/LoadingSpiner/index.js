export function LoadingSpiner({ $target }) {
  this.render = () => {
    const markup = this.generateMarkup();
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

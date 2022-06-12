export function QuizTable({ $target, initialState }) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const markup = this.generateMarkup();
    $target.querySelector("tbody")?.remove();
    $target.insertAdjacentHTML("beforeend", markup);
  };

  this.generateMarkup = () => {
    return `
      <tbody>
          ${this.state
            .map(
              (item, idx) => `
              <tr>
              <td>${item.title}</td>
              <td>
                <a
                  class="badge bg-secondary"
                  href="${item.docUrl}"
                  >문서</a
                >
              </td>
              <td><a href="${item.previewUrl}">보기</a></td>
              <td><a href="${item.gitUrl}">git</a></td>
            </tr>
            `
            )
            .join("")}
        </tbody>
    `;
  };

  this.render();
}

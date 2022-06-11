export function LearnTable({ $target, initialState }) {
  console.log("LearnTable is running");

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
            <th scope="row">${idx + 1}</th>
            <td>${item.title}</td>
            <td>
              <a href="${item.docUrl}" class="badgebg-secondary">문서</a>
              </td>
              <td></td>
              <td>${item.date}</td>
              <td>
                <a href="${item.gitUrl}">git</a>
                </td>
                </tr>  
            `
            )
            .join("")}
            </tbody>
    `;
  };

  this.render();
}

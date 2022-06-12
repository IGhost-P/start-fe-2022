export function LearnTable({ $target, initialState }) {
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
              <a href="${item.docUrl}" class="badge bg-secondary">문서</a>
              </td>
              <td>
                ${item.links
                  .map(
                    (link, idx) => `
                <a href="${link}" class="badge bg-secondary">${idx + 1}</a>
                `
                  )
                  .join("")}
              </td>
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

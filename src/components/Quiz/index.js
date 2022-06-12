import { QuizTable, QuizHeader, LoadingSpiner } from "../../components/index";
import { $ } from "../../utils/selector";
import { fetchData } from "../../utils/api";
import { tagFilter } from "../../utils/tagFilter";
export function Quiz({ $target, initialState }) {
  console.log("Quizis running");

  this.state = {
    quizTableData: [],
    tag: "모두",
  };

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    quizTable.setState(tagFilter(this.state.quizTableData, this.state.tag));
  };

  const quizTable = new QuizTable({
    $target: $(".table", $target),
    initialState: this.state.quizTableData,
  });

  const quizHeader = new QuizHeader({
    $target: $(".titlewrap", $target),
    initialState: this.state.tag,
    onClick: (tag) => {
      this.setState({ tag });
    },
  });

  this.init = async () => {
    new LoadingSpiner({
      $target: $(".table", $target),
    });
    const quizTableData = await fetchData("./quizData.json");
    $target.querySelector(".spinner-box")?.remove();
    this.setState({ quizTableData });
  };

  this.init();
}

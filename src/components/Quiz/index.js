import { QuizTable } from "../../components/index";
import { $ } from "../../utils/selector";
import { fetchData } from "../../utils/api";
export function Quiz({ $target, initialState }) {
  console.log("Quizis running");

  this.state = {
    quizTableData: [],
    tag: "",
  };

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    quizTable.setState(this.state.quizTableData);
  };

  const quizTable = new QuizTable({
    $target: $(".table", $target),
    initialState: this.state.quizTableData,
  });

  this.init = async () => {
    const quizTableData = await fetchData("./quizData.json");
    this.setState({ quizTableData });
  };

  this.init();
}

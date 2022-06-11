import { QuizTable } from "../../components/index";
import { quizData } from "../../constants/quiz";
import { $ } from "../../utils/selector";
export function Quiz({ $target, initialState }) {
  console.log("Quizis running");

  this.state = {
    quizTableData: quizData,
    tag: "",
  };

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
  };

  const learnTabel = new QuizTable({
    $target: $(".table", $target),
    initialState: this.state.quizTableData,
  });
}

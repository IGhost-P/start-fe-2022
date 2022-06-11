import { $ } from "../../utils/selector";
import { LearnTable } from "../../components/index";
import { classData } from "../../constants/class";
import { fetchData } from "../../utils/api";
export function Learn({ $target, initialState }) {
  console.log("Learn is running");

  this.state = {
    learnTableData: [],
    tag: "",
  };

  console.log(this.state.learnTableData);

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
  };

  const learnTabel = new LearnTable({
    $target: $(".table", $target),
    initialState: this.state.learnTableData,
  });

  this.init = async () => {
    const learnTableData = await fetchData("./src/constants/class.json");
    this.setState({ learnTableData });
  };

  this.init();
}

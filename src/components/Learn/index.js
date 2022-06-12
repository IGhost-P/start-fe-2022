import { $ } from "../../utils/selector";
import { LearnTable } from "../../components/index";
import { fetchData } from "../../utils/api";
export function Learn({ $target, initialState }) {
  console.log("Learn is running");

  this.state = {
    learnTableData: [],
    tag: "",
  };

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    learnTable.setState(this.state.learnTableData);
  };

  const learnTable = new LearnTable({
    $target: $(".table", $target),
    initialState: this.state.learnTableData,
  });

  this.init = async () => {
    const learnTableData = await fetchData("./classData.json");
    this.setState({ learnTableData });
  };

  this.init();
}

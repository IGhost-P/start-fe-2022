import { $ } from "../../utils/selector";
import { LearnTable, LearnHeader } from "../../components/index";
import { fetchData } from "../../utils/api";
import { tagFilter } from "../../utils/tagFilter";
export function Learn({ $target, initialState }) {
  console.log("Learn is running");

  this.state = {
    learnTableData: [],
    tag: "",
  };

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    learnTable.setState(tagFilter(this.state.learnTableData, this.state.tag));
  };

  const learnTable = new LearnTable({
    $target: $(".table", $target),
    initialState: this.state.learnTableData,
  });

  const learnHeader = new LearnHeader({
    $target: $(".titlewrap", $target),
    initialState: this.state.tag,
    onClick: (tag) => {
      this.setState({ tag });
    },
  });
  this.init = async () => {
    const learnTableData = await fetchData("./classData.json");
    this.setState({ learnTableData });
  };

  this.init();
}

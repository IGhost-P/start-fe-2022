import { $ } from "../../utils/selector";
import { LearnTable, LearnHeader, LoadingSpiner } from "../../components/index";
import { fetchData } from "../../utils/api";
import { tagFilter } from "../../utils/tagFilter";
export function Learn({ $target, initialState }) {
  this.state = {
    learnTableData: [],
    tag: "모두",
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
    new LoadingSpiner({
      $target: $(".table", $target),
    });
    const learnTableData = await fetchData("./classData.json");
    $target.querySelector(".spinner-box")?.remove();
    this.setState({ learnTableData });
  };

  this.init();
}

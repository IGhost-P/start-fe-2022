import { Learn, Quiz } from "./components";
import { $ } from "./utils/selector";
export default function App({ $target }) {
  const learn = new Learn({ $target: $("learn-container") });
  const quiz = new Quiz({ $target: $("quiz-container") });
}

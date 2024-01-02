
import Questions from "./Questions.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { questions } from "./data.js";
export default function Faq() {
  return (
    <section className="pt-24">
      <SectionTitle text="سوالات پر تکرار"/>
      <div className="pt-10">
      {questions.map((question) => (
          <Questions key={question.id} question={question} />
        ))}
      </div>
    </section>
  );
}

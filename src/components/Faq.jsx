
import Questions from "./Questions.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { questions } from "./data.js";
export default function Faq() {
  return (
    <section className="pt-24">
      {/* <div className="mb-8 flex flex-col items-center">
        <h3 className="mb-2  text-center text-sm font-semibold text-gray-500 sm:text-lg">
          سوالات پرتکرار
        </h3>
        <hr className="border-1 w-[6rem] border-b sm:w-[8rem]" />
      </div> */}
      <SectionTitle text="سوالات پر تکرار"/>
      <div className="pt-10">

      {questions.map((question) => (
          <Questions key={question.id} question={question} />
        ))}
      </div>
    </section>
  );
}

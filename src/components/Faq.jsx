
import Questions from "./Questions.jsx";
import { questions } from "./data.js";
export default function Faq() {
  return (
    <section className="my-5">
      <div className="mb-8 flex flex-col items-center">
        <h3 className="mb-2  text-center text-sm font-semibold text-gray-500 sm:text-lg">
          سوالات پرتکرار
        </h3>
        <hr className="border-1 w-[6rem] border-b sm:w-[8rem]" />
      </div>
      {questions.map((question) => (
          <Questions key={question.id} question={question} />
        ))}
    </section>
  );
}

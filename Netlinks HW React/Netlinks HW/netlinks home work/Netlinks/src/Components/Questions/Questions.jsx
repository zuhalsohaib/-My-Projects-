import { useState } from "react";
import questions from "./Questions";
import "./Questions.css";

function Questions() {

    // Which question is open?
    const [activeQuestion, setActiveQuestion] = useState(null);


    // When we click a question
    function handleQuestionClick(index) {

        if (activeQuestion === index) {

            // Close question
            setActiveQuestion(null);

        } else {

            // Open question
            setActiveQuestion(index);

        }
    }


    return (
        <main className="questions-page">

            <section className="quote-section">

                <div className="quote-mark">
                    "
                </div>

                <div className="quote-content">

                    <h1>
                        We didn't watch Afghanistan's
                        <br />
                        tech sector emerge,{" "}
                        <span>we helped</span>
                        <br />
                        <span>build it.</span>
                    </h1>

                    <p className="quote-author">
                        Farshid Ghyasi · Founder, NETLINKS
                    </p>

                </div>

            </section>


            <section className="questions-section">

                <div className="questions-container">

                    <div className="questions-label">
                        . QUESTIONS
                    </div>

                    <h2>
                        Answers to what CIOs actually ask.
                    </h2>


                    <div className="faq-list">

                        {questions.map((item, index) => (

                            <div
                                className="faq-item"
                                key={item.id}
                            >

                                <button
                                    className="faq-question"
                                    onClick={() =>
                                        handleQuestionClick(index)
                                    }
                                >

                                    <span>
                                        {item.question}
                                    </span>

                                    <span className="faq-icon">

                                        {activeQuestion === index
                                            ? "−"
                                            : "+"}

                                    </span>

                                </button>


                                {activeQuestion === index && (

                                    <div className="faq-answer">

                                        <p>
                                            {item.answer}
                                        </p>

                                    </div>

                                )}

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Questions;
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function FaqSection() {
  const faqData = [
    {
      question: "Can I use this template for commercial purposes?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis risus vel cursus finibus. Aliquam lectus turpis, tristique sed nisl nec, tincidunt fermentum erat.",
    },
    {
      question: "In which applications can I edit your template?",
      answer:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi in sollicitudin turpis, pharetra placerat dolor.",
    },
    {
      question: "Can support help me work with the template?",
      answer:
        "Donec vehicula consectetur consequat. Ut quis facilisis felis, sed tincidunt nisi. Fusce et elit at eros dapibus pulvinar ac ut sem.",
    },
    {
      question: "Do you offer bulk discounts?",
      answer:
        "Donec laoreet lacus sit amet vulputate finibus. Donec condimentum scelerisque odio, volutpat tempus nisl dignissim pharetra. Quisque in enim ex.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq__section">
      <div className="content-container">
        <div className="faq__section--title">
          <h2>Frequently asked questions</h2>
          <p>
            Jobs that are available from us and looking for their own people!
            Browse our vacancies and find the one that is right for you!
          </p>
        </div>
        <div className="faq__section--dropdowns">
          {faqData.map((item, index) => (
            <div
              className="dropdown"
              key={index}
              onClick={() => toggleItem(index)}
            >
              <div className="dropdown-question">
                <p
                  className={`${
                    activeIndex === index ? "active-question" : ""
                  }`}
                >
                  {item.question}
                </p>
                <span
                  className={`${
                    activeIndex === index ? "carret-question" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faCaretRight} />
                </span>
              </div>
              {activeIndex === index && (
                <div className="dropdown-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <Link className="contact-btn">
          Interested in a custom plan? Get in touch
        </Link>
      </div>
    </section>
  );
}

export default FaqSection;

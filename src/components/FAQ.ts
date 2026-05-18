export function createFAQ(): string {
  const faqs = [
    {
      question: "Is Winglab's chicken Halal?",
      answer: "Yes, all of our chicken is 100% Halal certified. We are committed to providing high-quality, inclusive options for all our customers."
    },
    {
      question: "What is Nashville Hot Chicken?",
      answer: "Nashville Hot Chicken is a regional specialty from Tennessee. It's fried chicken that's been coated in a spicy oil or paste, typically featuring cayenne pepper. At Winglab, we offer various spice levels so you can find your perfect heat."
    },
    {
      question: "Do you offer delivery in Toronto?",
      answer: "Absolutely! You can find us on Uber Eats, DoorDash, and Clover for fast delivery right to your door. You can also call us directly for pickup."
    },
    {
      question: "Where is Winglab located?",
      answer: "We are located at 523 Annette St, Toronto, ON M6P 1S1, in the heart of the Junction neighborhood."
    },
    {
      question: "What are your hours of operation?",
      answer: "We are open every day from 4:00 PM to 2:00 AM, serving up hot wings and sandos late into the night."
    }
  ];

  return `
    <section class="faq-section" id="faq">
      <div class="faq-container">
        <h2 class="faq-title">FREQUENTLY ASKED</h2>
        <div class="faq-list">
          ${faqs.map((faq, index) => `
            <div class="faq-item" data-index="${index}">
              <div class="faq-question-wrapper">
                <h3 class="faq-question">${faq.question}</h3>
                <i class="fas fa-plus faq-icon"></i>
              </div>
              <div class="faq-answer-content">
                <p class="faq-answer">${faq.answer}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

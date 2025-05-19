import React from "react";

interface FAQItem {
  question: string;
  answer: string;
  id: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "password-reset",
    question: "How can I reset my password?",
    answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page. You will receive an email with instructions to reset your password.",
  },
  {
    id: "multiple-accounts",
    question: "Can I create more than one account?",
    answer: "No, our terms of service allow only one account per user. Creating multiple accounts may result in account suspension.",
  },
  {
    id: "newsletter",
    question: "How can I subscribe to monthly newsletter?",
    answer: "You can subscribe to our monthly newsletter by going to your account settings and checking the 'Subscribe to newsletter' option.",
  },
  {
    id: "security",
    question: "Do you store credit card information securely?",
    answer: "Yes, we use industry-standard encryption and security measures to protect all payment information. We are PCI DSS compliant and never store complete credit card details on our servers.",
  },
  {
    id: "payment-methods",
    question: "What payment systems do you work with?",
    answer: "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and various local payment methods depending on your region.",
  },
];

interface FAQItemProps {
  item: FAQItem;
}

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    className={`w-4 h-4 text-primary-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const FAQItem: React.FC<FAQItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const answerId = `faq-answer-${item.id}`;

  return (
    <div className="bg-secondary-100 rounded-md mb-4 border border-secondary-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-opacity-50"
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span className="font-medium text-light">{item.question}</span>
        <span className="ml-6" aria-hidden="true">
          <ChevronIcon isOpen={isOpen} />
        </span>
      </button>
      <div
        id={answerId}
        role="region"
        className={`transition-all duration-200 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-4 pt-0 text-neutralGray-700">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQs: React.FC = () => {
  return (
    <section
      id="faq-section"
      className="py-12 md:py-[120px] px-4 bg-secondary-100"
      aria-labelledby="faq-title"
    >
      <div className="max-w-[872px] mx-auto">
        <h2
          id="faq-title"
          className="text-3xl md:text-[42px] font-semibold text-light text-center mb-2 md:mb-3"
        >
          Frequently Asked <span className="text-primary-600">Questions</span>
        </h2>
        <p className="text-xl md:text-3xl text-neutralGray-700 text-center mb-6 md:mb-8">
          We&apos;re happy to answer your questions
        </p>
      </div>
      <div className="py-12 px-4">
        <div className="max-w-[872px] mx-auto">
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

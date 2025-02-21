import React from "react";

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQStructuredDataProps {
  faqs: FAQ[];
}

export interface FAQStructuredData {
  "@context": string;
  "@type": string;
  mainEntity: FAQQuestionStructuredData[];
}

export interface FAQQuestionStructuredData {
  "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
}

/**
 * A component that renders a FAQ structured data and markdown entries
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/faqpage
 * @param {FAQStructuredDataProps} props
 * @returns
 */
export default function FAQ(props: FAQStructuredDataProps) {
  /** @type {FAQStructuredData} */ const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: props.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <hr />
      <h2>Frequently Asked Questions (FAQs)</h2>
      {faqStructuredData.mainEntity.map((faq) => (
        <React.Fragment key={faq.name}>
          <h3>{faq.name}</h3>
          <div dangerouslySetInnerHTML={{ __html: faq.acceptedAnswer.text }} />
        </React.Fragment>
      ))}
    </>
  );
}

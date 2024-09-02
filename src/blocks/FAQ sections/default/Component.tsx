"use client";

import React, { useState } from 'react';

const FAQsectionsComponent: React.FC = () => {

    const [active, setActive] = useState<any>(null);

    const toggle = (id: number) => {
      setActive((prevActive: number) => (prevActive === id ? null : id));
    };
  
    const faqs = [
      {
        id: 1,
        question: 'How is this theme different from others in the market?',
        answer:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
      },
      {
        id: 2,
        question: 'Does this theme support plugins?',
        answer:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
      },
      {
        id: 3,
        question: 'Do you provide any money-back guarantee on this product?',
        answer:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
      },
      {
        id: 4,
        question: 'What payment methods do you support?',
        answer:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
      },
      {
        id: 5,
        question: 'Will I get my money back if I am not satisfied?',
        answer:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
      },
      {
        id: 6,
        question: 'How do you provide support?',
        answer:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
      },
    ];



    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-title text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
            Ask everything you need to know about our products and services.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 overflow-hidden border border-gray-200 divide-y divide-gray-200 sm:mt-16 rounded-xl">
          {faqs.map((faq) => (
            <div key={faq.id} role="region">
              <h3>
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={active === faq.id}
                  className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-left text-gray-900 sm:p-6"
                >
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="ml-4">
                    {active === faq.id ? (
                      <svg
                        className="w-6 h-6 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </span>
                </button>
              </h3>

              {active === faq.id && (
                <div>
                  <div className="px-6 pb-6">
                    <p className="text-base text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-8 overflow-hidden text-center bg-gray-100 sm:mt-12 rounded-xl">
          <div className="px-6 py-12 sm:p-12">
            <div className="max-w-sm mx-auto">
              <div className="relative z-0 flex items-center justify-center -space-x-2 overflow-hidden">
                <img
                  className="relative z-10 inline-block rounded-full w-14 h-14 ring-4 ring-gray-100"
                  src="/placeholder-image.svg"
                  alt=""
                />
                <img
                  className="relative z-30 inline-block w-16 h-16 rounded-full ring-4 ring-gray-100"
                  src="/placeholder-image.svg"
                  alt=""
                />
                <img
                  className="relative z-10 inline-block rounded-full w-14 h-14 ring-4 ring-gray-100"
                  src="/placeholder-image.svg"
                  alt=""
                />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                Still have questions?
              </h3>
              <p className="mt-2 text-base font-normal text-gray-600">
                Can&apos;t find the answer you&apos;re looking for? Please chat with our
                friendly team.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-primary border border-transparent rounded-full hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700"
                  role="button"
                >
                  Start free trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default FAQsectionsComponent;

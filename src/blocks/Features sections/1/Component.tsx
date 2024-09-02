import React from 'react';

const FeaturessectionsComponent: React.FC = () => {
    return (
      <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="font-title text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Quality feedbacks for your SaaS products
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
            The blocks & components you need
          </p>
        </div>

        <div
          className="grid max-w-md grid-cols-1 gap-5 mx-auto mt-12 lg:grid-cols-3 sm:mt-16 sm:gap-6 lg:gap-8 lg:max-w-none">
          <div className="bg-gray-100 rounded-2xl">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="px-4 pt-6 text-xl font-semibold text-gray-900">
                Take authentic feedbacks from customers of your app. <span className="bg-primary-300">Build a quick
                  list.</span>
              </h3>
              <img className="object-cover mt-12 rounded-xl " src="/placeholder-image.svg" alt=""/>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="px-4 pt-6 text-xl font-semibold text-gray-900">
                <span className="bg-primary-300">Make quick fixes</span> based on the feedbacks you've received. With a happy
                smile.
              </h3>
              <img className="object-cover mt-12 rounded-xl " src="/placeholder-image.svg" alt=""/>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="px-4 pt-6 text-xl font-semibold text-gray-900">
                Enjoy more than 10x revenue with <span className="bg-primary-300">real-time conversions.</span> Grow your
                business.
              </h3>
              <img className="object-cover mt-12 rounded-xl " src="/placeholder-image.svg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default FeaturessectionsComponent;

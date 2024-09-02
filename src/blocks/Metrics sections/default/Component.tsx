import React from 'react';

const MetricssectionsComponent: React.FC = () => {
    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-title text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Our achievements
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
            Clarity gives you the blocks & components you need to create a truly professional website for your SaaS and
            gives the
            blocks.
          </p>
        </div>

        <div
          className="relative max-w-2xl mx-auto mt-12 overflow-hidden bg-primary sm:mt-16 lg:max-w-3xl xl:max-w-none rounded-2xl">
          <div className="absolute top-0 left-0 -translate-x-2/3 -translate-y-[75%]">
            <div className="border-[8px] border-white rounded-full w-80 h-80 opacity-20 lg:opacity-100"></div>
          </div>

          <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-[85%]">
            <div className="border-[8px] border-white rounded-full w-80 h-80 opacity-20 lg:opacity-100"></div>
          </div>

          <div className="relative px-8 py-12 lg:px-12 lg:py-16 xl:py-20">
            <div className="grid grid-cols-1 gap-8 mdfirst-letter:gap-12 xl:gap-8 sm:grid-cols-2 xl:grid-cols-4">
              <div className="flex items-center">
                <p className="w-24 text-5xl font-semibold tracking-tight text-white xl:w-auto shrink-0">
                  483
                </p>
                <h3 className="ml-5 text-base font-normal leading-tight text-primary-200">
                  Satisfied global clients
                </h3>
              </div>

              <div className="flex items-center">
                <p className="w-24 text-5xl font-semibold tracking-tight text-white xl:w-auto shrink-0">
                  78%
                </p>
                <h3 className="ml-5 text-base font-normal leading-tight text-primary-200">
                  Download total range
                </h3>
              </div>

              <div className="flex items-center">
                <p className="w-24 text-5xl font-semibold tracking-tight text-white xl:w-auto shrink-0">
                  854
                </p>
                <h3 className="ml-5 text-base font-normal leading-tight text-primary-200">
                  Finish success projects
                </h3>
              </div>

              <div className="flex items-center">
                <p className="w-24 text-5xl font-semibold tracking-tight text-white xl:w-auto shrink-0">
                  315
                </p>
                <h3 className="ml-5 text-base font-normal leading-tight text-primary-200">
                  Branding awards winning
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default MetricssectionsComponent;

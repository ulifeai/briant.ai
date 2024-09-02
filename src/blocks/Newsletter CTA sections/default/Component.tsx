import React from 'react';

const NewsletterCTAsectionsComponent: React.FC = () => {
    return (
        <div className="py-12 bg-gray-50 sm:pt-16 lg:pt-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative mx-auto overflow-hidden bg-primary max-w-7xl rounded-3xl">
            <div className="absolute top-0 left-0">
                <img className="w-16 md:w-24 lg:w-32 xl:w-full" src="https://landingfoliocom.imgix.net/store/collection/saasui/images/newsletter/3/ring-pattern.svg" alt="" />
            </div>

            <div className="relative px-8 py-12 md:p-16 xl:p-24">
                <div className="max-w-2xl mx-auto text-center">
                <h2 className="font-title text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    Subscribe to our newsletter
                </h2>
                </div>

                <form action="#" method="POST"
                className="flex flex-col max-w-3xl mx-auto mt-8 space-y-4 xl:mt-12 md:flex-row md:space-y-0 md:space-x-4">
                <div className="flex-1">
                    <label htmlFor="" className="sr-only">
                    First name
                    </label>
                    <input type="text" name="" id="" placeholder="First name"
                    className="block w-full px-4 py-4 text-base font-normal text-white placeholder-white bg-transparent border border-white rounded-xl focus:ring-1 focus:ring-white focus:bg-white/10 focus:outline-none"/>
                </div>

                <div className="flex-1">
                    <label htmlFor="" className="sr-only">
                    Email address
                    </label>
                    <input type="email" name="" id="" placeholder="Email address"
                    className="block w-full px-4 py-4 text-base font-normal text-white placeholder-white bg-transparent border border-white rounded-xl focus:ring-1 focus:ring-white focus:bg-white/10 focus:outline-none"/>
                </div>

                <button type="submit"
                    className="inline-flex items-center justify-center px-10 py-4 text-base font-medium text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:ring-offset-primary">
                    Subscribe Now
                </button>
                </form>
            </div>
            </div>
            </div>
        </div>
    );
};

export default NewsletterCTAsectionsComponent;

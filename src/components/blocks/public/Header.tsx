"use client";
import React from 'react';
import { Text } from '@/components/ui/base/text';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

function HeroHeaderBlock() {
  return (
  <section className="grid h-[90vh] container mx-auto grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0">
    <div className="max-w-[50rem] justify-self-start lg:mr-20 lg:justify-self-end">
      <Text as="hero" className="mb-4 text-8xl text-lowercase first-letter-uppercase">
        Build Your Nextjs Website with AI
      </Text>
      <Text as="h6" className="md:text-md">
        Experience the next generation of website creation. Our AI Builder offers seamless design, customization, and launch—all powered by Artificial Intelligence.
      </Text>
      <div className="mt-6 flex gap-x-4 md:mt-8">
        <Link href={"/sign-up"}>
          <Button variant="default" size="lg" key={0} className="whitespace-nowrap px-4 py-2">
            Create an account- It&apos;s free
          </Button>
        </Link>

        <Link href={"https://launchpad.ulife.ai?utm=briant.ai"}>
          <Button variant="secondary" size="lg" key={0} className="whitespace-nowrap px-4 py-2">
            Create an AI app
          </Button>
        </Link>
        
        {/* <Button variant="secondary" size="lg" key={1} className="whitespace-nowrap px-4 py-2">
          Learn more
        </Button> */}
      </div>
    </div>
    <div key={0} className="">
            <div className=" w-full">
              <Image src="/3.jpg" width={900} height={"700"} alt="Sampe Image" className="inset-0 size-full object-contain" />
            </div>
          </div>
  </section>
  );
}

export default HeroHeaderBlock;

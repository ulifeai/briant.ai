import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/base/button";
import { Switch } from "@/components/ui/switch";

interface PlanFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: PlanFeature[];
}

interface PricingPlanProps {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
}
const Pricing: React.FC<PricingPlanProps> = ({ title, subtitle, plans }) => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-2">{title}</h2>
      <p className="text-xl text-center mb-8">{subtitle}</p>

      <div className="flex items-center justify-center mb-8">
        <span className={`mr-2 ${isYearly ? 'text-gray-500' : 'font-semibold'}`}>Monthly</span>
        <Switch
          checked={isYearly}
          onCheckedChange={() => setIsYearly(!isYearly)}
        />
        <span className={`ml-2 ${isYearly ? 'font-semibold' : 'text-gray-500'}`}>Yearly</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="border rounded-lg p-6 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="mb-4">{plan.description}</p>
            <div className="text-4xl font-bold mb-4">
              ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              <span className="text-lg font-normal text-gray-500">/{isYearly ? 'yr' : 'mo'}</span>
            </div>
            <Button className="mb-6">Get started</Button>
            <ul className="space-y-2 mt-auto">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="w-5 h-5 mr-2 " />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Pricing;
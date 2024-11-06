import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-8 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy for Briant AI</h1>
      <p className="mb-4">Last Updated: October 31, 2024</p>

      <section className="mb-6">
        <p>Ulife OU ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you use Briant AI.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <p>- <strong>Personal Information:</strong> When you register via Clerk, we collect information such as your name, email address, and payment details.</p>
        <p>- <strong>Usage Data:</strong> We collect data on how you interact with our services to improve user experience.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Use of Information</h2>
        <p>- <strong>Service Provision:</strong> To provide and maintain our services.</p>
        <p>- <strong>Billing:</strong> To process payments through Stripe and LemonSqueezy.</p>
        <p>- <strong>Communication:</strong> To send updates and respond to inquiries.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Sharing of Information</h2>
        <p>We do not sell your personal information. We may share data with third-party service providers, such as OpenAI and Gemini, solely for the purpose of delivering our services.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
        <p>We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at privacy@ulife.ai.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Changes to This Policy</h2>
        <p>We may update this Privacy Policy periodically. Changes will be posted on our website.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
        <p>For questions or concerns about this Privacy Policy, please contact us at privacy@ulife.ai.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

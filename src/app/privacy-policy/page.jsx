export const metadata = {
  title: "Privacy Policy | Hero Kids",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">

      <div className="text-center mb-12">

        <h1 className="text-5xl font-bold">
          Privacy Policy
        </h1>

        <p className="mt-4 text-base-content/70">
          Last Updated: June 2026
        </p>

      </div>

      <div className="space-y-8">

        <section>
          <h2 className="text-2xl font-bold mb-3">
            Introduction
          </h2>

          <p className="text-base-content/80 leading-8">
            Welcome to Hero Kids. We value your privacy
            and are committed to protecting your personal
            information. This Privacy Policy explains how
            we collect, use, and safeguard your data when
            you use our platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            Information We Collect
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Name and email address</li>
            <li>Authentication information</li>
            <li>Course enrollment data</li>
            <li>Usage and analytics information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            How We Use Your Information
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Provide learning services</li>
            <li>Improve user experience</li>
            <li>Manage your account</li>
            <li>Send important notifications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            Data Security
          </h2>

          <p className="text-base-content/80 leading-8">
            We implement industry-standard security
            measures to protect your personal data from
            unauthorized access, disclosure, or misuse.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            Third-Party Services
          </h2>

          <p className="text-base-content/80 leading-8">
            Our platform may use third-party services such
            as Firebase Authentication and MongoDB to
            provide essential functionality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            Contact Us
          </h2>

          <p className="text-base-content/80 leading-8">
            If you have any questions regarding this
            Privacy Policy, please contact us at:
          </p>

          <p className="font-semibold mt-3">
            sohag2879@gmail.com
          </p>
        </section>

      </div>

    </div>
  );
}
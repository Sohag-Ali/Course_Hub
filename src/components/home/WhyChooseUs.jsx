import {
  FaChalkboardTeacher,
  FaCertificate,
  FaClock,
} from "react-icons/fa";

const features = [
  {
    title: "Expert Mentors",
    description:
      "Learn from industry professionals.",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Certified Courses",
    description:
      "Earn recognized certificates.",
    icon: <FaCertificate />,
  },
  {
    title: "Flexible Learning",
    description:
      "Learn at your own pace.",
    icon: <FaClock />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition"
            >
              <div className="card-body text-center">
                <div className="text-5xl text-primary mx-auto">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold">
                  {feature.title}
                </h3>

                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
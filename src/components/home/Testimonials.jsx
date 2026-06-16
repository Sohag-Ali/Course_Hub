const testimonials = [
  {
    name: "Ahmed Rahman",
    review:
      "The React course helped me land my first developer job.",
  },
  {
    name: "Fatema Islam",
    review:
      "Amazing mentors and well-structured lessons.",
  },
  {
    name: "Nayeem Hasan",
    review:
      "One of the best online learning platforms.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Student Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="card bg-base-100 shadow-lg"
            >
              <div className="card-body">
                <p>{item.review}</p>

                <h3 className="font-bold text-primary">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
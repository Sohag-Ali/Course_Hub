import {
  FaCode,
  FaPaintBrush,
  FaChartLine,
  FaDatabase,
} from "react-icons/fa";

const categories = [
  {
    name: "Web Development",
    icon: <FaCode />,
  },
  {
    name: "UI/UX Design",
    icon: <FaPaintBrush />,
  },
  {
    name: "Marketing",
    icon: <FaChartLine />,
  },
  {
    name: "Data Science",
    icon: <FaDatabase />,
  },
];

export default function Categories() {
  return (
    <section className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Browse Categories
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="card bg-base-100 shadow-lg hover:-translate-y-2 transition-all"
            >
              <div className="card-body items-center text-center">
                <div className="text-5xl text-primary">
                  {category.icon}
                </div>

                <h3 className="font-bold text-lg">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from "react";

function Features() {
  const featureList = [
    {
      title: "Fast Conversion",
      description: "Get instant results without delays.",
    },
    {
      title: "Multiple Currencies",
      description: "Convert between over 150 currencies worldwide.",
    },
    {
      title: "Real-Time Rates",
      description: "Always get the latest exchange rates.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-blue-800 mb-12">
          Features
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold text-blue-700 mb-2">
                {feature.title}
              </h4>
              <p className="text-blue-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

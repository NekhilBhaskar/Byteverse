import React from "react";

const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    description: "Leading global tech company known for search, ads, and innovation.",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    description: "E-commerce and cloud computing giant with global reach.",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    description: "Software, cloud, and AI leader transforming digital experiences.",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    description: "Streaming platform delivering entertainment worldwide.",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    description: "Innovative tech company behind iPhones, MacBooks, and more.",
  },
  
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    description: "Revolutionizing transportation with electric vehicles and energy solutions.",
  },
 
 
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    description: "A legacy tech giant innovating in AI, cloud, and quantum computing.",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    description: "Global leader in electronics, smartphones, and semiconductor technology.",
  },
];

const FrontPageImage = () => {
  return (
    <section className="py-16 px-4 text-center bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Explore Top Companies</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Connect with world-class employers and take your career to the next level.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {companies.map((company) => (
          <div
            key={company.name}
            className="flex flex-col items-center p-6 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img src={company.logo} alt={company.name} className="h-12 mb-4 object-contain" />
            <h3 className="font-semibold text-lg text-gray-800">{company.name}</h3>
            <p className="text-gray-600 text-sm mt-2 text-center">{company.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrontPageImage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Industry = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const handleIndustryChange = (event) => {
    setSelectedIndustry(event.target.value);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Image Slider Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div
          className="flex h-full animate-slideInfinite"
          style={{ animationDuration: "50s" }}
        >
          <img
            src="/src/assets/image1.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover flex-shrink-0"
          />
          <img
            src="/src/assets/image2.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover flex-shrink-0"
          />
          <img
            src="/src/assets/image3.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover flex-shrink-0"
          />
          <img
            src="/src/assets/image4.jpg"
            alt="Slide 4"
            className="w-full h-full object-cover flex-shrink-0"
          />
          <img
            src="/src/assets/image5.jpg"
            alt="Slide 5"
            className="w-full h-full object-cover flex-shrink-0"
          />

          {/* Repeat the images for a seamless loop */}
          <img
            src="/src/assets/image1.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover flex-shrink-0"
          />
          <img
            src="/src/assets/image2.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover flex-shrink-0"
          />
          <img
            src="/src/assets/image3.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover flex-shrink-0"
          />
          <img
            src="/src/assets/image4.jpg"
            alt="Slide 4"
            className="w-full h-full object-cover flex-shrink-0"
          />
          <img
            src="/src/assets/image5.jpg"
            alt="Slide 5"
            className="w-full h-full object-cover flex-shrink-0"
          />
        </div>
      </div>

      {/* Overlay to darken video */}
      <div className="absolute top-0 left-0 w-full h-full bg-slate-700 bg-opacity-40 z-10"></div>

      {/* Main Content */}
      <section className="relative z-20 flex flex-col items-center space-y-6 w-full max-w-5xl mx-auto px-6 sm:px-8">
        {/* Dropdown Button */}
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="px-10 py-3 flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800 font-semibold text-3xl rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0 border border-gray-400 hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Select Industry
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="mt-6 bg-white shadow-lg rounded-lg p-4 w-full max-w-xs border border-gray-200 animate-slideDown">
            <select
              className="w-full py-2 px-4 border rounded-md focus:ring-2 focus:ring-gray-500"
              onChange={handleIndustryChange}
            >
              <option value="">Choose Industry</option>
              <option value="windPower">Wind Power</option>
              <option value="forestManagement">Forest Management</option>
              <option value="bioGas">BioGas</option>
              <option value="oilRecycling">Oil Recycling</option>
            </select>
          </div>
        )}

        {/* Selected Industry Display */}
        {selectedIndustry && (
          <div className="mt-8 flex justify-center">
            <div className="flex flex-wrap gap-6 justify-items-center">
              {/* Industry Cards */}
              {selectedIndustry === "windPower" && (
                <IndustryCard
                  imgSrc="src/assets/Wind Power.jpg"
                  title="Wind Power"
                  description="Wind power is a renewable energy source that harnesses the energy from wind to generate electricity. It plays a major role in reducing carbon emissions and combating climate change."
                  link="/wind-power" // Link to navigate to specific page
                />
              )}
              {selectedIndustry === "forestManagement" && (
                <IndustryCard
                  imgSrc="src/assets/Forest Management.jpg"
                  title="Forest Management"
                  description="Forest management involves planning and implementing strategies for the sustainable use of forest resources, promoting biodiversity, and preserving ecosystem functions."
                  link="/forest-management"
                />
              )}
              {selectedIndustry === "bioGas" && (
                <IndustryCard
                  imgSrc="src/assets/BioGas.jpg"
                  title="BioGas"
                  description="BioGas is a renewable energy source produced by the anaerobic digestion of organic materials. It helps in waste management while producing valuable energy in the form of methane gas."
                  link="/bio-gas"
                />
              )}
              {selectedIndustry === "oilRecycling" && (
                <IndustryCard
                  imgSrc="src/assets/Oil Recycling.jpg"
                  title="Oil Recycling"
                  description="Oil recycling involves the process of purifying and reusing waste oils to reduce environmental impact. It's essential for reducing pollution and conserving resources."
                  link="/oil-recycling"
                />
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

const IndustryCard = ({ imgSrc, title, description, link }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-lg w-[400px] h-[500px] flex flex-col justify-between items-center overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl border border-transparent">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-[65%] object-cover transition-transform duration-300 hover:scale-110"
      />
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="mt-4 text-gray-600">{description}</p>
      </div>
      <div className="w-full flex justify-end px-4 pb-4">
        <button
          onClick={() => navigate(link)}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Industry;

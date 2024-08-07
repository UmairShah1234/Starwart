import React from "react";
import ProjectCard from "./ProjectCard";
import image1 from "./../assets/Product1.png";
import image2 from "./../assets/Picture2.jpg";
import image3 from "./../assets/Picture3.jpg";
import image4 from "./../assets/Picture4.jpg";
import image5 from "./../assets/Picture5.png";
import image6 from "./../assets/Picture6.png";
import image7 from "./../assets/Picture7.jpg";
import image8 from "./../assets/Picture8.jpg";

const ProductComponent = () => {
  const products = [
    {
      name: "Garment Processing Front Loading Sampling Washing Machine",
      capacityrange: "Available in 5-90Kg capacity in same model",
      function: "Choice of control panel manual, microprocessor and PLC.",
      function1: "Efficient garment processing and laundry washer.",
      function2: "Dyeing and processing of garments.",
      image: image1,
    },
    {
      name: "Dyeing Front Loading Washing Machine",
      capacityrange: "Available in 100-480Kg capacity.",
      function: "Choice of control panel manual, microprocessor and PLC.",
      function1:
        "Efficient garment/Knitwear processor, washing , O-zonator machine",
      function2: "Silicon wash, softening, bleaching, dying, enzyme.",
      function3: "Choice of drive gear box/timing pulley.",
      image: image2,
    },
    {
      name: "Garment Processing  Side Loading Sampling Washing Machine",
      capacityrange: "Available in 5-90 kg capacity.",
      function: "Choice of control panel manual, microprocessor, PLC.",
      function1: "Efficient garment processing and laundry washer.",
      function2: "Dyeing and processing of garments.",
      image: image3, //to change
    },
    {
      name: "Side Loading Washing Machine",
      capacityrange: "Available in 100-400kg capacity double door system.",
      function: "Efficient garment/Knitwear processor and washer.",
      function1: "Choice of control panel manual, microprocessor, PLC.",
      function2:
        "Carries out Silicon wash, softening, bleaching, stoning, dyeing, enzyme and many more.",
      function3: "Choice of drive gear box/sprocket.",
      image: image4,
    },

    {
      name: "Drying Tumbler Jumbo Forward Tilting",
      capacityrange: "Available in 150,200 and 250 kg capacity.",
      function: "Choice of control panel manual, microprocessor, PLC.",
      function1:
        "Heating System Gas, Steam, Electric heating and Thermic fluid.",
      function2: "Dual radiator with Top to bottom air flow.",
      function3: "Choice of door opening manual or sliding.",
      image: image6,
    },
    {
      name: "Drying Tumbler",
      capacityrange: "Available in 10-125kg capacity.",
      function: "Choice of control panel manual, microprocessor and PLC.",
      function1:
        "Heating System Gas, Steam, Electric heating and Thermic fluid",
      function2: "Unique air flow ensures maximum heat utilization",
      image: image5,
    },
    {
      name: "Rotary Roaster Forward Tilting",
      capacityrange: "Available in 10-300 kg capacity.",
      function: "Choice of control panel manual, microprocessor.",
      function1: "Heating System Gas and Electric heating.",
      function2: "Unique air flow ensures maximum heat utilization.",
      image: image7,
    },
    {
      name: "Hydro Extractor(Centrifuge)",
      capacityrange: "Availabe in 25, 50, 75 and 100kg.",
      function: "Heavy dusty 3 points suspension type high speed centrifuge",
      function1: "Stainless steel inner & outer drum.",
      function2: "Inverter driver for soft start stop & breaking register.",
      function3: "Centrifugal cluth & gradual accelaration.",
      image: "/assets/HEC.jpg",
    },
    {
      name: "Curing Ovens",
      capacityrange: "Availabe in 5 pants, 30 pants, 60 pants.",
      function: "Batch type and also available in Conveyor.",
      function1: "Heating system, Electric heating or gas fired.",
      function2: "Trolley System or Conveyor System.",
      image: image8,
    },
  ];

  return (
    <div id="productSection">
      <div className="container my-3">
        <h2 className="text-center mb-5 text-decoration-underline">
          Our Products
        </h2>
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-md-4">
              <ProjectCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;

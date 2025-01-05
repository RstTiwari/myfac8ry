import cncTurningImage from "../../assets/CNC-Machining-1024x536.jpg";
import cnc_milling from "../../assets/cnc_milling.jpg";
import cnc_grinding from "../../assets/cnc_grinding.jpeg";

import customFabrication from "../../assets/myFac8ry__fabrication.jpeg";
import coating from "../../assets/myFac8ry__lathe__powder_coating__plating.jpeg";
import bending from "../../assets/myFac8ry__lathe__powder_coating__plating.jpeg";
import welding from "../../assets/myfac8ry_laser.jpg";

const cardDatas = [
  {
    id: 1,
    title: "CNC MILLING",
    image: cnc_milling,
    // features: [
    //   "Metal Cutting",
    //   "Fibre laser Cutting",
    //   "CNC Punching",
    //   "Shearing",
    // ],
  },
  {
    id: 2,
    title: "CNC TURNING",
    features: ["CNC milling", "CNC turning", "Drilling", "Grinding"],
    image: cncTurningImage,
  },
  {
    id: 3,
    title: "CNC GRINDING",
    image: cnc_grinding,
    features: [
      "Press Breaking / Bending",
      "Panel Bending",
      "Stamping",
      "Rolling",
    ],
  },
  // {
  //   id: 4,
  //   title: "WELDING",
  //   image: welding,
  //   features: ["MIG/MAG Welding", "TIG Welding", "Spot Resistance Welding "],
  // },
  // {
  //   id: 5,
  //   title: "COATING",
  //   image: coating,
  //   features: [
  //     "Powder Coating",
  //     "Galvanic Coating",
  //     "Hot Dip Galvanization",
  //     "Wet Painting",
  //   ],
  // },
  // {
  //   id: 6,
  //   title: "Custom Fabrication",
  //   image: customFabrication,
  //   features: [
  //     "Mechanical Assembly",
  //     "Frame Manufacturing",
  //     "Custom prototyping",
  //   ],
  // },
];

export default cardDatas;

import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-3 gap-20">
        <Card
          title="Business Stratagy"
          des="loremExcepteur do commodo proident ex esse labore ut dolor est non fugiat ex exercitation."
          icon={<FaBars />}
        />
        <Card
          title="Business Stratagy"
          des="loremExcepteur do commodo proident ex esse labore ut dolor est non fugiat ex exercitation."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Business Stratagy"
          des="loremExcepteur do commodo proident ex esse labore ut dolor est non fugiat ex exercitation."
          icon={<FaGlobe />}
        />
        <Card
          title="Business Stratagy"
          des="loremExcepteur do commodo proident ex esse labore ut dolor est non fugiat ex exercitation."
          icon={<SiProgress />}
        />
        <Card
          title="Business Stratagy"
          des="loremExcepteur do commodo proident ex esse labore ut dolor est non fugiat ex exercitation."
          icon={<SiAntdesign />}
        />
        <Card
          title="Business Stratagy"
          des="loremExcepteur do commodo proident ex esse labore ut dolor est non fugiat ex exercitation."
        />
      </div>
    </section>
  );
};

export default Features;

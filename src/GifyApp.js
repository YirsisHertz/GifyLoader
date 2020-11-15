import React, { useState } from "react";

import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import "./GifyApp.css";

const GifyApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h1 className="title animate__animated animate__heartBeat">GifyLoader</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifyApp;

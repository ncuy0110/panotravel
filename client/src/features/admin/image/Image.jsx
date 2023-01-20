import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import ImageCreator from "./image-creator/ImageCreator";
import ImageOfZone from "./image-list/ImageOfZone";
import './image.scss'
import ImageDetails from "./image-list/image-details/ImageDetails";

const Image = () => {
  const params = useParams();
  return (
    <div className="wrapper">
      <Routes>
        <Route index element={<ImageOfZone />} />
        <Route path="create" element={<ImageCreator />} />
        <Route path=":imageId" element={<ImageDetails/>}/>
      </Routes>
    </div>
  );
};

export default Image;

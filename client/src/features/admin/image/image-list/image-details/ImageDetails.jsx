import React, { useEffect, useRef, useState } from "react";
import { imageApi } from "../../../../../api/image.api";
import { useParams } from "react-router-dom";
import { Pannellum } from "pannellum-react";
import './image-details.scss'

function ImageDetails() {
  const [image, setImage] = useState(null);
  const params = useParams();
  const previewImageRef = useRef(null);

  useEffect(async () => {
    let img = (await imageApi.getOne(params.zoneId, params.imageId))[0];
    img.link = await imageApi.getLink(img.objectName);
    console.log(img)
    setImage(img);
  }, []);

  return (
    <div className="image">
      {image ? (
        <Pannellum
          ref={previewImageRef}
          width="100%"
          height="100vh"
          image={image.link}
          pitch={10}
          yaw={180}
          hfov={110}
          autoLoad
          onLoad={() => {
            console.log("panorama loaded");
          }}
        ></Pannellum>
      ) : (
        ""
      )}
    </div>
  );
}

export default ImageDetails;

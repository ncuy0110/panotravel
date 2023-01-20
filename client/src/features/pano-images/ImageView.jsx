import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageApi } from "../../api/image.api";

function ImageView() {
  const params = useParams();
  const [image, setImage] = useState(null);
  useEffect(async () => {
    let img = (await imageApi.getOne(1, params.imageId))[0];
    img.link = await imageApi.getLink(img.objectName); 
    setImage(img);
  });
  return (
    <>
      <Pannellum
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
      >
        {/* <Pannellum.Hotspot
          type="custom"
          pitch={0}
          yaw={0}
          text="Info Hotspot Text 3"
          handleClick={(evt, args) => {
            console.log("hello world");
          }}
          handleClickArg={{ name: "test" }}
        /> */}
      </Pannellum>
    </>
  );
}

export default ImageView;

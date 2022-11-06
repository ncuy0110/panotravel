import myImage from "../../assets/demo_pano.jpeg";
import { Pannellum } from "pannellum-react";

function PanoramaImage() {
  return (
    <Pannellum
      width="100%"
      height="100vh"
      image={myImage}
      pitch={10}
      yaw={180}
      hfov={110}
      autoLoad
      onLoad={() => {
        console.log("panorama loaded");
      }}
    >
      <Pannellum.Hotspot
            type="custom"
            pitch={0}
            yaw={0}
            text="Info Hotspot Text 3"
            handleClick={(evt, args) => {
              console.log('hello world')
            }}
            handleClickArg={{ name: "test" }}
        />
    </Pannellum>
  );
}

export default PanoramaImage;

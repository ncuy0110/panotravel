import React from "react";
import "./image-creator.scss";
import { Pannellum } from "pannellum-react";
import { useState } from "react";
import { useRef } from "react";
import { imageApi } from "../../../../api/image.api";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../../../api/axiosClient";
import axios, { Axios } from "axios";
import { toast } from "react-toastify";

function ImageCreator() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageUri, setSelectedImageUri] = useState("");
  const [name, setName] = useState("");
  const previewImageRef = useRef(null);
  const param = useParams();
  const navigate = useNavigate();

  const handleUpload = async () => {
    let formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("name", name);
    formData.append("pitch", previewImageRef.current.getViewer().getPitch());
    formData.append("yaw", previewImageRef.current.getViewer().getYaw());
    formData.append("hfov", previewImageRef.current.getViewer().getHfov());
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}zone/${param.zoneId}/image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      );
      toast.success("upload success");
      navigate(`/dashboard/zone/${param.zoneId}/image`)
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="wrapper-upload">
        <form>
          <label for="name">Name</label> <br />
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
          <br />
          <label for="uploadImage">Upload image</label> <br />
          <input
            name="uploadImage"
            type="file"
            accept="image"
            onChange={(e) => {
              setSelectedImageUri(URL.createObjectURL(e.target.files[0]));
              setSelectedImage(e.target.files[0]);
            }}
          />
        </form>
        <br />

        {selectedImage ? (
          <>
            <Pannellum
              ref={previewImageRef}
              width="100%"
              height="100vh"
              image={selectedImageUri}
              pitch={10}
              yaw={180}
              hfov={110}
              autoLoad
              onLoad={() => {
                console.log("panorama loaded");
              }}
            ></Pannellum>
            <br />
          </>
        ) : (
          ""
        )}
        <button onClick={handleUpload}>Upload</button>
      </div>
    </>
  );
}

export default ImageCreator;

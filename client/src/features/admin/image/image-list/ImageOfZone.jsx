import { AddPhotoAlternateOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./image-list.scss";
import { ImageListItem, ImageList } from "@mui/material";
import { imageApi } from "../../../../api/image.api";

function ImageOfZone() {
  const { zoneId } = useParams();
  const navigate = useNavigate();
  const [imageList, setImageList] = useState(null);
  const params = useParams();

  useEffect(async () => {
    const response = await imageApi.getAll(params.zoneId);
    let newList = [];
    for (let image of response) {
      image.link = await imageApi.getLink(image.objectName);
      newList.push(image);
    }
    setImageList(newList);
  }, [setImageList]);

  return (
    <div className="wrapper">
      <div className="head">
        <div className="item" onClick={() => navigate("create")}>
          <AddPhotoAlternateOutlined className="icon" />
          Add image
        </div>
        <div className="list">
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {imageList
              ? imageList.map((item) => (
                  <ImageListItem
                    key={item.link}
                    onClick={() =>
                      navigate(
                        `/dashboard/zone/${params.zoneId}/image/${item.id}`
                      )
                    }
                  >
                    <img
                      src={item.img}
                      srcSet={item.link}
                      alt={item.name}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))
              : ""}
          </ImageList>
        </div>
      </div>
    </div>
  );
}

export default ImageOfZone;

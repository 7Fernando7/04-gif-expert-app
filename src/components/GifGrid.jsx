import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "../components/GifItem";

export const GifGrid = ({ category }) => {
  const [images, setImagen] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImagen(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

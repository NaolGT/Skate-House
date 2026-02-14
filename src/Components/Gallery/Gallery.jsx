import ImageSlider from "../SubComponents/ImageSlider/ImageSlider";
import Title from "../SubComponents/Title/Title";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div id="gallery" className="sections">
      <Title title={"Captured on Wheels"} />
      <ImageSlider
        images={[
          "https://www.pixelstalk.net/wp-content/uploads/2016/08/1024x768-Wallpaper-HD.jpg",
          "https://images.hdqwalls.com/download/minimal-landscape-sunrise-4k-jy-1024x768.jpg",
          "https://cdn.wallpapersafari.com/84/94/1qNs0x.jpg",
          "https://www.baltana.com/files/wallpapers-23/Mountain-Nature-Wallpaper-1024x768-56831.jpg",
        ]}
      />
    </div>
  );
};

export default Gallery;

import "./styles.css";

export default function HomeImg({ imgUrl, title }) {
  return (
    <>
      <div className="track-image-component-container">
        <div
          className="track-image-component-image"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          {title}
        </div>
      </div>
    </>
  );
}

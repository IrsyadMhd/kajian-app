import classes from "./Banner.module.css";
import image from "../image/masjid.jpg";

function Banner() {
  return (
    <header
      className={classes.banner}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={classes.banner__content}>
        <h1 className={classes.content__title}>Bismillah</h1>
      </div>
    </header>
  );
}

export default Banner;

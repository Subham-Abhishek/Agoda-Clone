import Container from "@material-ui/core/Container";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container maxWidth={window.innerWidth < 700 ? "lg" : "md"}>
        <div className={styles.bottom}>
          <div className={styles.contact}>
            <h4>Help</h4>
            <div>Help center</div>
            <div>FAQ's</div>
            <div>Privacy policy</div>
            <div>Cookie policy</div>
            <div>Terms of use</div>
          </div>
          <div className={styles.about}>
            <h4>About Us</h4>
            <p>PointsMAX</p>
            <p>Press</p>
            <p>Careers</p>
            <p>Blog</p>
          </div>
          <div className={styles.learn}>
            <h4>Destinations</h4>
            <p>Countries</p>
            <p>Territories</p>
            <p>Cities</p>
          </div>
          <div className={styles.category}>
            <h4>Partner with us</h4>
            <p>YCS partner portal</p>
            <p>Partner Hub</p>
            <p>Advertise on Agoda</p>
            <p>Affiliates</p>
            <p>Connectivity partners</p>
          </div>
          <div className={styles.category}>
            <h4>Get the app</h4>
            <a
              rel="noreferrer"
              href="https://apps.apple.com/us/app/agoda-best-travel-deals/id440676901"
              target="_blank"
            >
              iOS app
            </a>
            <a
              rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.agoda.mobile.consumer&hl=en_IN&gl=US"
              target="_blank"
            >
              Android app
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

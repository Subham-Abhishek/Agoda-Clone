import React from "react";
import styles from "./dashboardleft.module.css";
import Checkbox from "@material-ui/core/Checkbox";
// import Paper from "@material-ui/core/Paper";

const Dashboardleft = () => {
  const [, setChecked] = React.useState(true);

  const handleChangecheck = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      {/* <Paper> */}

      <div className={styles.checkdiv}>
        <div className={styles.mapdivhead}>
          <div className={styles.mapnarrow}>
            <img
              height="40px"
              src="https://cdn6.agoda.net/images/MAPS-1213/default/img-map-pin-red.svg"
              alt=""
            />
          </div>
          <div>
            <img
              height=""
              src="https://cdn6.agoda.net/images/MAPS-1213/default/bkg-map-entry.svg"
              alt=""
            />
          </div>

          <div className={styles.mapnarrowtext}>
            <p>SEARCH ON MAP</p>
          </div>
        </div>
      </div>
      <div className={styles.checkdiv}>
        <div className={styles.hov}>
          <p className={styles.checkdivtext}>Distance to center</p>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Inside city center(469)
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            2 km to center (159)
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            2-5km to center (131)
          </span>
        </div>

        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            7km to center (201)
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            10km to center (151)
          </span>
        </div>
      </div>
      {/* </Paper> */}
      {/* <Paper> */}

      <div className={styles.checkdiv}>
        <div className={styles.hov}>
          <p className={styles.checkdivtext}>Neighbour</p>

          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Indira Gandhi Int'l Airport(469)
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Gurgaon (159)
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            South Delhi (131)
          </span>
        </div>

        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            7km to center (201)
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            10km to center (151)
          </span>
        </div>
      </div>
      {/* </Paper> */}

      {/* <Paper> */}
      <div className={styles.checkdiv}>
        <div className={styles.hov}>
          <p className={styles.checkdivtext}>Near Popular Attraction</p>

          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Cannought Place (228)
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Chandni Chowk(6)
          </span>
        </div>
        <div className={styles.hov}>
          <span>
            {" "}
            <Checkbox
              // checked={checked}
              color="primary"
              onChange={handleChangecheck}
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            Hauz khas valley
          </span>
        </div>
      </div>

      {/* </Paper> */}
    </>
  );
};

export default Dashboardleft;

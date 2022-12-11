import { useState } from "react";
import logo from "../images/SM/Facebook.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../styles/Topnav.module.css";
// Make a model for the sign and use the sign in example from practice
import { Modal } from "@mui/material";
function Topnav() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className={styles.headercontainer}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            This should be the sign in Modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <div>
                <label>User Name</label>
              </div>
              <input />
              <div>
                <label>Password</label>
              </div>
              <input />
              <br />
              <button>Sign-in</button>
            </div>
          </Typography>
        </Box>
      </Modal>

      <div className={styles.leftsection}>
        <img className={styles.logoimg} src={logo} alt="Make It Sparkle Logo" />
        <p className={styles.p1}>
          <b>Make It Sparkle</b>
        </p>
      </div>
      <div className={styles.rightsection}>
        <div className={isActive ? styles.menubtn : styles.showmenu}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Book a Quote!</a>
          <a href="#">Services</a>
          <a href="#">Vacancies</a>
        </div>
        <div className={styles.signinbtncontainer}>
          <div onClick={handleOpen} className={styles.signinbtn}>
            Sign In
          </div>
        </div>
      </div>
      {/* <!-- USING CHECKBOX HACK --> */}
      <input onClick={handleToggle} type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" className={styles.hamburger}>
        <span>&#9776;</span>
      </label>
    </div>
  );
}

export default Topnav;

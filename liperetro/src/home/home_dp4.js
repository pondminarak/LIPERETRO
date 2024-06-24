import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import './Home.css';

const Home_disp4 = (props) => {
    console.log(props)
  const [popup, setPopup] = useState(false);

  const toggleShowDialog = () => {
    setPopup(!popup);
    // console.log("clicked");
  };
  return (
    <>
      <img 
        className="box0"
        src='https://www.gettingstamped.com/wp-content/uploads/2016/12/Koh-Khai-Thailand-Koh-Lipe-Stone-Arch-Hannah-Standing-under-arch-1-800x450.jpg'
        alt=""
        onClick={toggleShowDialog}
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        />
      <div className="dialog">
        <Modal 
        show={popup} 
        fullscreen="lg-down" 
        dialogClassName="modal-dialog modal-xl"
        style={{color: 'rgb(68, 68, 68)',
                fontFamily: 'Mitr, sans-serif'}}>
          <Modal.Header closeButton onClick={toggleShowDialog} style={{color:'#E4FCFD',backgroundColor:'#6AB7D6'}}>
            <Modal.Title style={{fontSize:32}}>Koh Khai</Modal.Title>
          </Modal.Header>

          <Modal.Body style={{backgroundColor:'#FAFAEB'}}>
            <p>Koh Khai is a small island in the middle of the two major islands, Koh Tarutao and Koh Adang-Rawi.  This beautiful island is very unique with a large stone archway made by nature.  The sandy beach here has the color of eggshell, and it is also the turtle’s egg-laying site; there are reasons why the island is call Koh Khai, which means “egg island”.</p>
            <img
              src='https://www.gettingstamped.com/wp-content/uploads/2016/12/Koh-Khai-Thailand-Koh-Lipe-Stone-Arch-Hannah-Standing-under-arch-1-800x450.jpg'
              className="img-fluid"
              style={{borderRadius:'20px'}}
            />
          </Modal.Body>

          <Modal.Footer style={{backgroundColor:'#FAFAEB'}}>
              <Button 
              onClick={toggleShowDialog} 
              style={{backgroundColor: '#6AB7D6',
                color: 'white',
                fontFamily: 'Mitr, sans-serif',
                borderColor:'#6AB7D6'}}>
                  Close
              </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Home_disp4;

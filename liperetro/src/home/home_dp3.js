import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import './Home.css';

const Home_disp3 = (props) => {
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
        src='https://medias.thansettakij.com/uploads/images/contents/w1024/2021/11/ZQrjBtep9qdUIVl33O1u.webp'
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
            <Modal.Title style={{fontSize:32}}>The 7-color Corals</Modal.Title>
          </Modal.Header>

          <Modal.Body style={{backgroundColor:'#FAFAEB'}}>
            <p>Koh Lipe has 7-color soft corals and hard corals which you can see at shallow water even around Lipe Island. So Koh Lipe is the one of best snorkeling point in Andaman Sea.</p>
            <img
              src='https://medias.thansettakij.com/uploads/images/contents/w1024/2021/11/ZQrjBtep9qdUIVl33O1u.webp'
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

export default Home_disp3;

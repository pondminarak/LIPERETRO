import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import './Home.css';

const Home_disp1 = (props) => {
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
        src='https://thailand-directory.com/wp-content/uploads/2021/09/kla-aphimuk-YJ7U1JfB6VE-unsplash-scaled.jpg'
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
            <Modal.Title style={{fontSize:32}}>Koh Adang-Rawi</Modal.Title>
          </Modal.Header>

          <Modal.Body style={{backgroundColor:'#FAFAEB'}}>
            <p>Koh Adang-Rawi is a real paradise island located in the middle of the Tarutao Marine National Park. There are many things to do on a visit to Koh Adang-Rawi! In addition to the beautiful beaches and great snorkeling spots, you can also take a hike to the famous Koh Lipe Viewpoint.</p>
            <img
              src='https://thailand-directory.com/wp-content/uploads/2021/09/kla-aphimuk-YJ7U1JfB6VE-unsplash-scaled.jpg'
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

export default Home_disp1;

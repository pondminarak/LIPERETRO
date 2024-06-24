import { useState, useEffect } from "react";
import "./upload.css";
import { Box } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import LRbar from "../bar/Bar";
import axios from "axios";
import { useLocation } from "react-router-dom";


export default function Upload() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  console.log("Images : ", images);
  console.log("imageURLs : ", imageURLs);

  const [close, setClose] = useState(false)


  const [files,setFiles] = useState()

  return (
    <>
    <LRbar/>
    { console.log()}
    <link href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap" rel="stylesheet"/>
    <div className="upload">
      <CssBaseline />
      <div className="text">
        Payment : Upload

      </div>


      <div className="upload">

        <form >
        
        {/* <input 
          onChange={(e)=>setFiles(e.target.files)} 
          type="file"/> */}
        
        {imageURLs.map((imageSrc, idx) => (
        <img key={idx} width="300"  src={imageSrc} />
      ))}

      <div className="uplond">
        <input type="file" multiple accept="image/*" onChange={onImageChange} />
      </div>
      </form>
        
      </div>

      <div className="next-app">
        {/* <Button variant='contained' style={{maxWidth: '100px', maxHeight: '50px', minWidth: '100px', minHeight: '50px', backgroundColor: '#6AB7D6'}}> 
        BACK
        </Button> */}
        <div class='back-payment'>
            <a href="payment" class="btn"> Back </a> 
        </div>
        
        <div  class='back-payment'>
            <a href="/submitpayment" class="btn" > Next </a> 
        </div>
        {/* <Button variant='contained' style={{maxWidth: '100px', maxHeight: '50px', minWidth: '100px', minHeight: '50px' , backgroundColor: '#6AB7D6'}}>
          NEXT
        </Button> */}
      </div>
    </div>
    </>
  );
}


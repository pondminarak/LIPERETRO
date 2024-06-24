import React ,{useState,useEffect} from "react";
import './review.css';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {Avatar} from '@mui/material';
import {Grid, Typography,Toolbar, AppBar, Rating, FormControl} from "@mui/material";
import LRbar from '../bar/Bar';


function Review(){
    return(
        <>
        <LRbar/>
        <div className="backgrand-review">
        <div>
            <h1 className="Text">Review</h1>
            <div>
                <div>
                <Grid className="Tao" container spacing={2} columns={4}>
                    <Grid item xs={1}>
                    <Avatar className="avt1" alt=" " src={require("./image/avatar.png")} />
                    </Grid>
                    <Grid itam xs={3}>
                        <Typography variant="h6" component="div" color="#6AB7D6" fontFamily='Mitr'>
                        MAXIM CONNER
                        </Typography>
                        <Typography>
                            <StarIcon color="primary"/>
                            <StarBorderIcon color="primary"/>
                            <StarBorderIcon color="primary"/>
                            <StarBorderIcon color="primary"/>
                            <StarBorderIcon color="primary"/>
                            </Typography>
                        <Typography variant="body2" color="#6AB7D6" fontFamily='Mitr'>
                        It's not free
                        </Typography>
                    </Grid>
                </Grid>
                </div>
                
                <div>
                <Grid className="Tao" container spacing={2} columns={4}>
                    <Grid item xs={1}>
                    <Avatar className="avt1" alt=" " src={require("./image/avatar.png")} />
                    </Grid>
                    <Grid itam xs={3}>
                        <Typography variant="h6" component="div" color="#6AB7D6" fontFamily='Mitr'>
                        DOLA BIN DOLAH
                        </Typography>
                        <Typography>
                        <StarIcon color="primary"/>
                        <StarIcon color="primary"/>
                        <StarBorderIcon color="primary"/>
                        <StarBorderIcon color="primary"/>
                        <StarBorderIcon color="primary"/>
                            </Typography>
                        <Typography variant="body2" color="#6AB7D6" fontFamily='Mitr'>
                        I use Nokia 3310
                        </Typography>
                    </Grid>
                </Grid>
                </div>
                
                <div>
                <Grid className="Tao" container spacing={2} columns={4}>
                    <Grid item xs={1}>
                    <Avatar className="avt1" alt=" " src={require("./image/avatar.png")}/>
                    </Grid>
                    <Grid itam xs={3}>
                        <Typography variant="h6" component="div" color="#6AB7D6" fontFamily='Mitr'>
                        TAKAB LOOK TAKEB
                        </Typography>
                        <Typography>
                        <StarIcon color="primary"/>
                        <StarIcon color="primary"/>
                        <StarIcon color="primary"/>
                        <StarBorderIcon color="primary"/>
                        <StarBorderIcon color="primary"/>
                            </Typography>
                        <Typography variant="body2" color="#6AB7D6" fontFamily='Mitr'>
                        Best site Ever
                        </Typography>
                    </Grid>
                </Grid>
                </div>

                <div>
                <Grid className="Tao" container spacing={2} columns={4}>
                    <Grid item xs={1}>
                    <Avatar className="avt1" alt=" " src={require("./image/avatar.png")} />
                    </Grid>
                    <Grid itam xs={3}>
                        <Typography variant="h6" component="div" color="#6AB7D6" fontFamily='Mitr'>
                        JAISUE TAE MAISUE
                        </Typography>
                        <Typography>
                        <StarIcon color="primary"/>
                        <StarIcon color="primary"/>
                        <StarIcon color="primary"/>
                        <StarIcon color="primary"/>
                        <StarIcon color="primary"/>
                            </Typography>
                        <Typography variant="body2" color="#6AB7D6" fontFamily='Mitr'>
                        SHE SAID YESSS THANK YOU GUYS
                        </Typography>
                    </Grid>
                </Grid>
                </div>
            </div>
            <div className="box-review">            
                 <Typography className="Teen">
                <FormControl> 
                    <div className="form-star" >
                    <form className="form">
                     {/* <label for="fname"></label> */}
                     <div className='box-ii'> 
                     <Avatar className="avt2" alt=" " src={require("./image/avatar.png")} sx={{ width: 40, height: 40 }}/>
                     <div className='box-iii'>  
                    <Rating name="customized-10"  max={5} size="large"  />
                    </div> 
                    </div>
                    
                                                              
                    <input type="text1" id="fname" name="fname" className="fname" placeholder="Headers"  />
                  
                    <input type="text2" id="fname1" name="fname1" className="fname1" placeholder="Comment"  />
                    
                    <input type="submit" value="Send" ></input>                     
                    </form>
                    </div>
                </FormControl> 
                </Typography>              
            </div>   
        </div>
        </div>
        </>
    )
}

export default Review; 

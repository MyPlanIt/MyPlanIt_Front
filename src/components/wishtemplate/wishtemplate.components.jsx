import "./wishtemplate.components.css";
import { Link } from "react-router-dom";
import BottomNavBar from "../globalcomponents/bottomnavbartodo.components";
import { useNavigate } from "react-router-dom";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from '@mui/icons-material/Search';
import dummydata from "../../dummydata/dummydata.json";
import MoreTemplate from "../moretemplate/moretemplate.components";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState, useEffect,Component } from "react";
import { NavLink, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import BottomNavBarPlan from "../globalcomponents/bottomnavbarplan.components";
import { Switch } from "@mui/material";
import ViewTemplate from "../viewtemplate/viewtemplate.components";
import {
  useParams
} from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import axios from "axios";
const refreshToken =  localStorage.getItem("refreshToken");
const accessToken =  localStorage.getItem("accessToken");
axios.interceptors.request.use(
  
)
function WishTemplate() {
    let navigate = useNavigate();
    let {plan_id} = useParams();
    const categories = [
      {title: '일주일을 알차게'},
      {title: '건강한 몸'}
    ];
 
    const renderCategories = categories.map(categories =>{
      return (
        
        <MoreTemplate categories={categories}/>
      );

    });
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          setError(null);
          setUsers(null);
          setLoading(true);
          const response = await axios.get(
            'https://myplanit.link/myplans/wish',
            {
              headers: {
                access_token: accessToken,
                      refresh_token:
                  refreshToken  },
            }
         );
          setUsers(response.data); 
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
  
      fetchUsers();
    }, []);
  
    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;
  return (
    <div className="container">
         <AppBar position="static" elevation={0} style={{background: 'white',width: "100vw"}}>
      <Toolbar style={{ justifyContent: "space-between" }}>
    
      <Link
           to='../main/maintemplateroutine'
          >
            <ArrowBackIosIcon style={{color:"black"}} />
          </Link>
          <Typography
          edge = 'end'
            variant="h6"
            style={{
             marginLeft: '0',
    
            }}
          >
            <div style={{color: "black"}}>MY PLAN</div>
          </Typography>
            <div style={{width: '40px'}}></div>
        </Toolbar>
      </AppBar>
      <span
        className="button-group"
        style={{ marginTop: "8px", fontSize: "16px", fontWeight:"bold"}}
      >
        <Link
       to='../main/wishtemplate'
        className="main-routine-button"
        style={{width: "7.5vh", height: "35px",display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: '10px',
        border: '5px',
        background: 'white',
        borderRadius: '0',
        color: 'black',
        borderBottom:'solid #7965f4'}}
      >
        찜하기
      </Link>
      <div style={{width: '3vw'}}></div>
      <Link
        style={{border: '1px solid #D3d3d3'}}
        to='../main/buytemplate'
        className="main-growth-button"
        style={{width: "7.5vh", height: "35px",display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: '10px',
        border: '5px',
        background: 'white',
        borderRadius: '0',
        color: 'gray'}}
      >
        구매 플랜
      </Link>
      <div style={{width: "3vw"}}></div>
      <Link
        style={{border: '1px solid #D3d3d3'}}
        to='../main/usetemplate'
        className="main-growth-button"
        style={{width: "7.5vh", height: "35px",display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: '10px',
        border: '5px',
        background: 'white',
        borderRadius: '0',
        color: 'gray'}}
      >
        이용 중
      </Link>
      <div style={{width: "30vw"}}></div>
      </span>
       <div style={{height: '10px'}}></div>
      <ul className="template-content"style={{overflowY: 'scroll',
  width:'inherit',
  float: 'left',
  height:'680px',
  position:'relative'}}>
      <div
        className="textbox"
      >
      </div>
      <div style={{height: '10px'}}></div>
   
      
          {users.Routine.map(Routine=>(
    
           

            <li key={users.Routine.id}>
               <NavLink to={"../main/viewtemplate/"+Routine.id} className="template-overall" style={{justifyContent:'center',color:'black'}}>
 
 <React.Fragment key={uuidv4()}>
              <div style={{display:'flex',flexDirection:'column', boxShadow: '0px 0px 2px 0.5px #Dedede', justifyContent: 
          "center"}} className="template-all">
             <div style={{height: "5px"}}></div>
             <div style={{width: '350px', marginRight:'auto',marginLeft:'auto',display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
             <div style={{marginLeft:'0'}}className="template-title">{Routine.name}</div>
             </div>

             <div style={{height: "8px"}}></div>
              <img className="template-photourl" src= {Routine.intro_img_url} style={{width: '350px', height: '130px'}}></img>
              <div style={{display:'flex',flexDirection:'column', width:'350px', paddingLeft:'5px'}}>
                
              <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
              <div style={{display: 'flex', flexDirection: 'row', marginTop: '10px', width: '280px'}}>
              <img className="template-writerphoto" src= {Routine.writer_img} style={{width: '40px', height: '40px',borderRadius:'20px'}}></img>
              <div style={{display: 'flex', flexDirection: 'column',marginLeft: '10px'}}>
              <div className="template-writerintro" style={{fontSize: '10px',color:'gray', height: '15px'}}>{Routine.writer_intro}</div>
              <div style={{fontSize:'10px'}}>{Routine.writer_name}</div>
              </div>
              </div>
              <div style={{marginTop:'auto',marginBottom:'auto', color: '#7965f4'}}>
             {Routine.checkHeart ? 
             <FavoriteIcon />:
             <FavoriteBorderIcon />}
             </div>
              </div>
              <div className="template-content" style={{fontSize:'12px'}}>{Routine.desc}</div>
              <div style={{height: '5px'}}></div>
              <div style={{display:'flex', flexDirection:'row',justifyContent:'left'}}>
                <div className="template-tag">
                {Routine.tags[0]}
                </div>
                <div style={{width: '10px'}}>
                </div>
                <div className="template-tag">
                {Routine.tags[1]}
                </div>
              </div>
              <div style={{height: '5px'}}></div>
              </div>
              </div>
              <div style={{height: "15px"}}></div>
              </React.Fragment>
            </NavLink>
            </li>
         
         
          ))}
      
     
      <div
        className="textbox"
      >
      </div>
      <div style={{height: '10px'}}></div>
      </ul>
      <BottomNavBarPlan/>
    </div>
   
  );
}

export default WishTemplate;
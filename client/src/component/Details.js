import React, { useState, useEffect } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import profile from '../profile.png';
import EmailIcon from '@mui/icons-material/Email';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import {useParams,NavLink, useNavigate} from 'react-router-dom';


const Details = () => {

  const navigate=useNavigate("");
  const [getUserData, setUserData] = useState([]);
  console.log(getUserData);
  const {id}= useParams("");
  console.log(id);

  const getdata = async () => {

    const res = await fetch(`/getuser/${id}`, {

        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }

    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {

        console.log('error');
    } else {
        setUserData(data[0]);
        console.log('data fetched');
    }

}

useEffect(() => {
    getdata();
},[]) 


const deleteuser = async (id) => {

  const res = await fetch(`/deleteuser/${id}`, {

      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }

  });

  const deletedata = await res.json();
  console.log(deletedata);

  if (res.status === 422 || !deletedata) {

      console.log('error');
  } else {
      console.log('data deleted');
      navigate("/");
  }

}






  return (
    <div className='container mt-3'>

      <h1>Uesr Details</h1>

      <Card sx={{ maxWidth: 600 }}>
      <CardContent>
      <div  className='add_btn'>
          <NavLink to={`/Edit/${getUserData.ID}`} ><button className='btn btn-primary mx-2'><EditIcon/></button></NavLink>
          <button onClick={()=>deleteuser(getUserData.ID)} className='btn btn-danger'><DeleteIcon/></button>

        </div>

        <div className='row'>

        <div className='left_view col-lg-6 col-md-6 col-12'>
        <img src={profile} alt='profile' style={{width:50}} />
        <h3 className='mt-3'>Name:<span style={{fontWeight:400}}>{getUserData.name}</span></h3>
        <h3 className='mt-3'>Age:<span style={{fontWeight:400}}>{getUserData.age}</span></h3>
        <p><EmailIcon/>Email: <span style={{fontWeight:400}}>{getUserData.email}</span></p>
        <p><WorkOutlineIcon/>Job: <span style={{fontWeight:400}}>{getUserData.work}</span></p>
        </div>

        <div className='right_view col-lg-6 col-md-6 col-12'>
        <p className='mt-5'><LocalPhoneIcon/>Phone: <span style={{fontWeight:400}}>65461656464</span></p>
        <p className='mt-3'><WorkOutlineIcon/>Location: <span style={{fontWeight:400}}>New Delhi</span></p>
        <p className='mt-3'><EditLocationIcon/>Description: <span style={{fontWeight:400}}>{getUserData.description}</span></p>

        </div>
       

        </div>
      </CardContent>
      </Card>






    </div>
  )
}

export default Details
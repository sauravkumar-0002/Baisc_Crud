import React from 'react'
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


const Details = () => {
  return (
    <div className='container mt-3'>

      <h1>Uesr Details</h1>

      <Card sx={{ maxWidth: 600 }}>
      <CardContent>
      <div  className='add_btn'>
          <button className='btn btn-primary mx-2'><EditIcon/></button>
          <button className='btn btn-danger'><DeleteIcon/></button>

        </div>

        <div className='row'>

        <div className='left_view col-lg-6 col-md-6 col-12'>
        <img src={profile} alt='profile' style={{width:50}} />
        <h3 className='mt-3'>Name:<span style={{fontWeight:400}}>Harsh Pathak</span></h3>
        <h3 className='mt-3'>Age:<span style={{fontWeight:400}}>21</span></h3>
        <p><EmailIcon/>Email: <span style={{fontWeight:400}}>srk@gmail.com</span></p>
        <p><WorkOutlineIcon/>Job: <span style={{fontWeight:400}}>Software Engineer</span></p>
        </div>

        <div className='right_view col-lg-6 col-md-6 col-12'>
        <p className='mt-5'><LocalPhoneIcon/>Phone: <span style={{fontWeight:400}}>65461656464</span></p>
        <p className='mt-3'><WorkOutlineIcon/>Location: <span style={{fontWeight:400}}>New Delhi</span></p>
        <p className='mt-3'><EditLocationIcon/>Description: <span style={{fontWeight:400}}>loremm oiac  vids ovnnv diubdv sudss suibds sivubs </span></p>

        </div>
       




        </div>
      </CardContent>
      </Card>






    </div>
  )
}

export default Details
import React, { useState,useEffect} from 'react'
import { NavLink , useParams ,useNavigate} from 'react-router-dom'

const Edit = () => {

  // const [getUserData, setUserData] = useState([]);
  // console.log(getUserData);

  const history =useNavigate("");

  const [inpVal, setInp] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    work: "",
    description: ""
  })

  const setData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInp((preval) => {
      return {
        ...preval, [name]: value
      }
    })

  }



  const { id } = useParams("");
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
      setInp(data[0]);
      console.log('data fetched');
    }

  }

  useEffect(() => {
    getdata();
    },[])

  const updateuser = async(e)=>{
    e.preventDefault();

    const { name, email, age, gender, work, description} = inpVal;

    const res2 = await fetch(`/updateuser/${id}`, {

      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body :JSON.stringify({name, email, age, gender, work, description})

    });

    const data2=await res2.json();
    console.log(data2);

    if(res2.status===422 || !data2){
      alert("fill the data")
    }else{
      alert("data added")

      history("/");
    }
    


  }

  





  return (
    <div className='container'>

      <NavLink to="/">Home</NavLink>

      <form>
        <div className='mt-5'>
          <div className='row'>
            <div class="form-group col-lg-6 col-md-6 col-12">
              <label for="exampleInputEmail1">Email</label>
              <input type="email" value={inpVal.email} name='email' onChange={setData} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group col-lg-6 col-md-6 col-12">
              <label for="exampleInputEmail1">Name</label>
              <input type="text" name='name' value={inpVal.name} onChange={setData} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />

            </div>
            <div class="form-group col-lg-6 col-md-6 col-12">
              <label for="exampleInputEmail1">Age</label>
              <input type="text" name='age' value={inpVal.age} onChange={setData} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Age" />

            </div>
            <div class="form-group col-lg-6 col-md-6 col-12">
              <label for="exampleInputEmail1">Gender</label>
              <input type="text" name='gender' value={inpVal.gender} onChange={setData} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Gender" />

            </div>
            <div class="form-group col-lg-6 col-md-6 col-12">
              <label for="exampleInputEmail1">Work</label>
              <input type="text" name='work' value={inpVal.work} onChange={setData} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Work" />
            </div>
            <div class="form-group col-12">
              <label for="InputEmail1">Description</label>
              <textarea type="text" name='description' value={inpVal.description} onChange={setData} class="form-control" id="description" cols={30} rows={5} placeholder="Description" />
            </div>

            <button type="submit" onClick={updateuser} class="btn btn-primary mt-4">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}


export default Edit
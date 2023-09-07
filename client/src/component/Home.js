import React, { useState, useEffect } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom';

const Home = () => {

    const [getUserData, setUserData] = useState([]);
    console.log(getUserData);

    const getdata = async () => {

        const res = await fetch("/getusers", {

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
            setUserData(data);
            console.log('data fetched');
        }

    }

    useEffect(() => {
        getdata();
    }, [])



    return (
        <div className='mt-5'>
            <div className='container'>
                <div className="add_btn mt-2">
                    <NavLink to={"/register"} className='btn btn-primary mb-2'>Add Data</NavLink>
                </div>
                <table class="table">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">ID</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Phone</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            getUserData.map((element, id) => {

                                return (
                                    <>

                                        <tr>
                                            <th scope="row">{id+1}</th>
                                            <td>{element.name}</td>
                                            <td>{element.email}</td>
                                            <td>{element.work}</td>
                                            <td>{element.age}</td>
                                            <td className='d-flex justify-content-between'>
                                                <NavLink to={`View/${element.ID}`}><button className='btn btn-success'><VisibilityIcon /></button></NavLink>
                                                <button className='btn btn-primary'><EditIcon /></button>
                                                <button className='btn btn-danger'><DeleteIcon /></button>
                                            </td>
                                        </tr>





                                    </>
                                )



                            })
                        }


                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Home
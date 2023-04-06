
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import React, { Component, useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom'


function Studentdata() {

    const [data, setdata] = useState([])
    useEffect(() => {
        getData();
    }, [])
    console.warn(data)
    function getData() {
        fetch("http://localhost:3000/student").then((response) => {
            response.json().then((result) => {

                setdata(result)
            })
        })
    }
    function deleteuser(id) {

        fetch('http://localhost:3000/student/' + id, {
            method: "DELETE",
            // headers:{
            //     'content-type':'application/json'
            // },
            //body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((respo) => {
               alert("Student data has been deleted successfully!")
                getData()
                //console.warn(respo)
            })
             
        })
    }
    {/*this is the searching code start here data input section */}
    const [filterdata,setfilterdata]=useState([]);
    const [query,setquery]=useState('');

    useEffect(()=>{
        const getuserdata=async()=>{
         const reqdata=await fetch("http://localhost:3000/student")
         const resdata =await reqdata.json()
         setdata(resdata)
         setfilterdata(resdata)
        }
        getuserdata();

     },[])
     const handelsearch=(event)=>{
        const getsearch=event.target.value
       
        //console.warn(getsearch)
        if(getsearch.length>0){
            const getsearch=event.target.value
            const searchdata=data.filter((item)=>item.name.toLowerCase().includes(getsearch));
            setdata(searchdata)
            console.warn(searchdata)
        }else{
            setdata(filterdata)
        }
        setquery(getsearch)

     }
    {/*this is the searching code end here data input section */}
   
    return (
        <div>



            <div style={{ backgroundColor: 'papayawhip' }}>
                <Container>
                
                    <h1 style={{ color: 'plum' }}>Student data</h1>
                    {/** this is search section and code here */}
                    <input type="search"  value={query} onChange={(e)=>handelsearch(e)} className="form-control w-25 offset-2 searching" placeholder="search"/>
      {/**this is the search code ending */}
                    {

                        <div>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Father</th>
                                        <th>Mother</th>
                                        <th>Gender</th>
                                        <th>Address</th>
                                        <th>City</th>
                                        <th>State</th>
                                        <th>Mobile</th>
                                        <th>Email</th>
                                        <th>Operation</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item, i) =>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.father}</td>
                                                <td>{item.mother}</td>
                                                <td>{item.gender}</td>
                                                <td>{item.address}</td>
                                                <td>{item.city}</td>
                                                <td>{item.state}</td>
                                                <td>{item.mobile}</td>
                                                <td>{item.email}</td>

                                                <td><NavLink className="navbar" to={"/update/" + item.id} >Update</NavLink></td>
                                                <td> <NavLink className="navbar" onClick={() => deleteuser(item.id)}>Delete</NavLink></td>


                                            </tr>)

                                    }
                                </tbody>
                            </Table>
                        </div>

                    }

                </Container>
            </div>


        </div>
    )
} export default Studentdata;
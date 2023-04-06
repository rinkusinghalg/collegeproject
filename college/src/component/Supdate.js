import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import React from 'react';
import { useParams } from 'react-router';
function Supdate() {
    const [data, setdata] = useState([])

    const [name, setname] = React.useState("")
    const [father, setfather] = React.useState("")
    const [mother, setmother] = React.useState("")
    const [gender, setgender] = React.useState("")
    const [address, setaddress] = React.useState("")
    const [city, setcity] = React.useState("")
    const [state, setstate] = React.useState("")
    const [mobile, setmobile] = React.useState("")
    const [email, setemail] = React.useState("")
    const params = useParams();
    const [userId, setuserId] = React.useState(null);

    useEffect(() => {
        getData();
    }, [])
    console.warn(data)
    const getData = async () => {
        let result = await fetch(`http://localhost:3000/student/${params.id}`);
        result = await result.json();
        console.warn(params)
        setdata(result)
        setname(result.name)
        setfather(result.father)
        setmother(result.mother)
        setgender(result.gender)
        setaddress(result.address)
        setcity(result.city)
        setstate(result.state)
        setmobile(result.mobile)
        setemail(result.email)
        setuserId(result.id)

    }
    {/*this is click function which is hit of button */}
    function Userupdate() {
        let userdata = { name, father, mother, gender, address, city, state, mobile, email, userId }
        //console.warn(userdata)

        fetch('http://localhost:3000/student/' + userId, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(userdata)
        }).then((result) => {
            result.json().then((respo) => {
                alert("Student data has been update successfully!")
                getData()
                //console.warn(respo)
            })
        })
    }
    return (
        <div className='w-75 offset-1' style={{ backgroundColor: 'grey', padding: "10px", borderRadius: "10px" }}>
            <h1 className='text-white'>This is update Form </h1>
            <Form autoComplete='off'>
               
                <fieldset>
                    <legend className='text-white'>Student Updation</legend>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridtext">
                            <Form.Label> Student Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => { setname(e.target.value) }}
                                placeholder="Enter Student name" />
                        </Form.Group>
                        {/*this is the father detail section so on */}
                        <Form.Group as={Col} controlId="formGridtext">
                            <Form.Label> Father Name</Form.Label>
                            <Form.Control type="text" placeholder="Father name"
                                value={father} onChange={(e) => { setfather(e.target.value) }} />
                        </Form.Group>


                    </Row>
                    {/*this is the mother detail section so on */}
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridtext">
                            <Form.Label>Mother Name</Form.Label>
                            <Form.Control type="text" placeholder="Mother name"
                                value={mother} onChange={(e) => { setmother(e.target.value) }} />
                        </Form.Group>
                        {/*this is the gender detail section so on */}
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select defaultValue="Choose..."
                                value={gender} onChange={(e) => { setgender(e.target.value) }}>
                                <option>Choose...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Form.Select>
                        </Form.Group>


                    </Row>


                    {/*this is the address detail section so on */}
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St"
                                value={address} onChange={(e) => { setaddress(e.target.value) }} />
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control value={city} onChange={(e) => { setcity(e.target.value) }} />
                        </Form.Group>
                    </Row>
                    {/*this is the state detail section so on */}
                    <Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose..."
                                value={state} onChange={(e) => { setstate(e.target.value) }}>
                                <option>Choose...</option>
                                <option>Utter pradesh</option>
                                <option>Madhya predesh</option>
                                <option>Bihar</option>
                                <option>Rajsthan</option>
                            </Form.Select>
                        </Form.Group>
                        {/*this is the number detail section so on */}
                        <Form.Group as={Col} controlId="formGridNumber">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="number" value={mobile} onChange={(e) => { setmobile(e.target.value) }} />
                        </Form.Group>
                        {/*this is the email detail section so on */}
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                        </Form.Group>

                    </Row>


                    <Button variant="primary" type="button" onClick={Userupdate} style={{ marginTop: "25px" }}>
                        Submit
                    </Button>
                </fieldset>
            </Form>

        </div>
    )
} export default Supdate;
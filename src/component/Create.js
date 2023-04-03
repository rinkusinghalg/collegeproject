
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



function Create() {
    const [name,setname]=useState("")
    const [father,setfather]=useState("")
    const [mother,setmother]=useState("")
    const [gender,setgender]=useState("")
    const [address,setaddress]=useState("")
    const [city,setcity]=useState("")
    const [state,setstate]=useState("")
    const [mobile,setmobile]=useState("")
    const [email,setemail]=useState("")
function Saveuser(e){
e.preventDefault()
    const data={name,father,mother,gender,address,city,state,mobile,email}
    fetch("http://localhost:3000/student",{
        method:"Post",
        headers:{
            "accept":"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    }).then((result)=>{
        result.json().then((resp)=>{
            //console.warn(resp)
            alert("are you confirm submit this form")
        })
    })
}
    
    return (
        <div style={{ backgroundColor: "skyblue" }}>
            <div className='w-75 p-5' style={{ border: "2px solid black", backgroundColor: "pink", marginTop: "0px", marginLeft: "170px" }}>



                <Form autoComplete='off'>
                    <fieldset>
                        <legend className='text-primary'>Student Register</legend>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridtext">
                                <Form.Label> Student Name</Form.Label>
                                <Form.Control type="text" value={name} onChange={(e)=>{setname(e.target.value)}}
                                 placeholder="Enter Student name" />
                            </Form.Group>
                            {/*this is the father detail section so on */}
                            <Form.Group as={Col} controlId="formGridtext">
                                <Form.Label> Father Name</Form.Label>
                                <Form.Control type="text" placeholder="Father name" 
                                value={father} onChange={(e)=>{setfather(e.target.value)}}/>
                            </Form.Group>


                        </Row>
                        {/*this is the mother detail section so on */}
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridtext">
                                <Form.Label>Mother Name</Form.Label>
                                <Form.Control type="text" placeholder="Mother name" 
                                value={mother} onChange={(e)=>{setmother(e.target.value)}}/>
                            </Form.Group>
                            {/*this is the gender detail section so on */}
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select defaultValue="Choose..."
                                value={gender} onChange={(e)=>{setgender(e.target.value)}}>
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
                                value={address} onChange={(e)=>{setaddress(e.target.value)}}/>
                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control value={city} onChange={(e)=>{setcity(e.target.value)}}/>
                            </Form.Group>
                        </Row>
                        {/*this is the state detail section so on */}
                        <Row>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose..."
                                value={state} onChange={(e)=>{setstate(e.target.value)}}>
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
                                <Form.Control type="number" value={mobile} onChange={(e)=>{setmobile(e.target.value)}}/>
                            </Form.Group>
                            {/*this is the email detail section so on */}
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} />
                            </Form.Group>

                        </Row>


                        <Button variant="primary" type="reset" onClick={Saveuser} style={{ marginTop: "25px" }}>
                            Submit
                        </Button>
                    </fieldset>
                </Form>




            </div >
        </div>
    )
} export default Create;
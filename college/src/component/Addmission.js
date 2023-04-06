
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Addmission() {

    const [name, setname] = useState("")
    const [father, setfather] = useState("")
    const [registration, setregistration] = useState("")
    const [Caurse, setcaurse] = useState("")
    const [session, setsession] = useState("")
    const [branch, setbranch] = useState("")
    const [fees, setfees] = useState("")
    const [roll, setroll] = useState("")





    function Saveusers(e) {
 e.preventDefault()
        const sdata = { name, father, registration, Caurse, session, branch, fees, roll }
        fetch("http://localhost:3000/addmission", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify(sdata)
        }).then((result) => {
            result.json().then((resp) => {
                //console.warn(resp)
                alert("are you confirm submit this form")
            })
        })
    }

    return (
        <div style={{ backgroundColor: "skyblue" }}>
            <div className='w-75 p-5' style={{ border: "2px solid black", backgroundColor: "skyblue", marginTop: "0px", marginLeft: "170px" }}>



                <Form autoComplete='off'>
                    <fieldset>
                        <legend className='text-primary'>Student Register</legend>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridNumber">
                                <Form.Label> Student Registration</Form.Label>
                                <Form.Control type="number" value={registration} onChange={(e) => { setregistration(e.target.value) }}
                                    placeholder="Enter Registration" />
                            </Form.Group>

                            {/*this is the student  detail */}
                            <Form.Group as={Col} controlId="formGridNumber">
                                <Form.Label> Student Name</Form.Label>
                                <Form.Control type="text" value={name} onChange={(e) => { setname(e.target.value) }}
                                    placeholder="Enter Student name" />
                            </Form.Group>
                        </Row>
                        <Row>
                            {/*this is the father detail */}
                            <Form.Group as={Col} controlId="formGridNumber">
                                <Form.Label> Father Name</Form.Label>
                                <Form.Control type="text" value={father} onChange={(e) => { setfather(e.target.value) }}
                                    placeholder="Enter Father name" />
                            </Form.Group>
                            {/*this is the class detail section so on */}
                            <Form.Group as={Col} controlId="formGridCaurse">
                                <Form.Label>Caurse</Form.Label>
                                <Form.Select defaultValue="Choose..."
                                    value={Caurse} onChange={(e) => { setcaurse(e.target.value) }}>
                                    <option>Choose...</option>
                                    <option value="MCA">MCA</option>
                                    <option value="MBA">MBA</option>
                                    <option value="BBA">BBA</option>
                                    <option value="BCA">BCA</option>
                                    <option value="B-Tech">B-Tech</option>
                                    <option value="M-Tech">M-Tech</option>
                                    <option value="B-Com">B-Com</option>
                                    <option value="M-Com">M-Com</option>
                                    <option value="B-Pharma">B-Pharma</option>
                                    <option value="M-pharma">M-Pharma</option>
                                    <option value="">M-Pharma</option>
                                </Form.Select>
                            </Form.Group>


                        </Row>
                        {/*this is the session detail section so on */}
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridSession">
                                <Form.Label>Session</Form.Label>
                                <Form.Select defaultValue="Choose..."
                                    value={session} onChange={(e) => { setsession(e.target.value) }}>
                                    <option>Choose...</option>
                                    <option value="2019-20">2019-20</option>
                                    <option value="2020-21">2020-21</option>
                                    <option value="2021-22">2021-22</option>
                                    <option value="2022-23">2022-23</option>
                                    <option value="2023-24">2023-24</option>
                                    <option value="2024-25">2024-25</option>
                                    <option value="2025-26">2025-26</option>

                                </Form.Select>
                            </Form.Group>

                            {/*this is the Branch detail section so on */}
                            <Form.Group as={Col} controlId="formGridBranch">
                                <Form.Label>Branch</Form.Label>
                                <Form.Select defaultValue="Choose..."
                                    value={branch} onChange={(e) => { setbranch(e.target.value) }}>
                                    <option>Choose...</option>
                                    <option value="MCA">MCA</option>
                                    <option value="MBA">MBA</option>
                                    <option value="BBA">BBA</option>
                                    <option value="BCA">BCA</option>
                                    <option value="B-Tech">B-Tech</option>
                                    <option value="M-Tech">M-Tech</option>
                                    <option value="B-Com">B-Com</option>
                                    <option value="M-Com">M-Com</option>
                                    <option value="B-Pharma">B-Pharma</option>
                                    <option value="M-pharma">M-Pharma</option>
                                    <option value="">M-Pharma</option>
                                </Form.Select>
                            </Form.Group>



                        </Row>

                        {/*this is the roll number detail section so on */}

                        <Row className="mb-3">

                            <Form.Group as={Col} controlId="formGridRoll">
                                <Form.Label>Roll No.</Form.Label>
                                <Form.Control value={roll} onChange={(e) => { setroll(e.target.value) }} placeholder="Enter roll number" />
                            </Form.Group>
                            {/*this is the fees detail section so on */}
                            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Fees</Form.Label>
                                <Form.Control placeholder="Enter fees"
                                    value={fees} onChange={(e) => { setfees(e.target.value) }} />
                            </Form.Group>



                        </Row>
                        {/*this is the state detail section so on */}



                        <Button variant="primary" type="submit" onClick={Saveusers} style={{ marginTop: "25px" }}>
                            Submit
                        </Button>
                    </fieldset>
                </Form>




            </div >
        </div>
    )


} export default Addmission;
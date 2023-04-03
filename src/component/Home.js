import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
function Home() {
    return (
        <div>
            {/* this is a crosule section and picture of college */}
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cache.careers360.mobi/media/colleges/social-media/media-gallery/5031/2018/10/17/Campus%20View%20of%20Aligarh%20College%20of%20Engineering%20and%20Technology%20Aligarh_Campus-View.jpg"
                        alt="First slide" height="430px" width="auto"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.acetup.org/wp-content/uploads/2020/06/Building.jpg"
                        alt="Second slide" height="430px" width="auto"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cache.careers360.mobi/media/colleges/social-media/media-gallery/5031/2018/10/17/Campus%20View%20of%20Aligarh%20College%20of%20Engineering%20and%20Technology%20Aligarh_Campus-View.jpg"
                        alt="Third slide" height="430px" width="auto"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* this is a card dection and information of college member */}
            <h3>This is student of college</h3>
            <div style={{ display: "flex", paddingLeft: "200px", margin: "20px" }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="rsg.jpg" height="300px" width="auto" />
                    <Card.Body>
                        <Card.Title>Rinku singh</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                &nbsp; &nbsp;

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="neerajk.jpg" height="300px" width="auto" />
                    <Card.Body>
                        <Card.Title>Neeraj kumari</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                &nbsp; &nbsp;

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="naveen photo.jpg" height="300px" width="auto" />
                    <Card.Body>
                        <Card.Title>Naveen pratap singh</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
            {/*this is about of colleg */}

            <div>

<h2>the college founded in 2000 and the chairman of the college <b>deelip kumar</b></h2>
<h3>this college provided difference courses as well as bca,mca,bba,mba,b-tech<br/>
and technical course provider</h3>

                <Accordion defaultActiveKey="0" className='w-75 offset-1'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>College management</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>College student detail</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>




            </div>

            {/*this is footer and about college social network */}
            <footer>
                iso certified<br/>

                iso 2015:9001
            </footer>
        </div>
    )
} export default Home;
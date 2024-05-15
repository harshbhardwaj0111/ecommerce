// import About1 from './About1.jpg';
import { Card, Container, Row, Col } from 'react-bootstrap';
function AboutSoftech() {
    return (
        <div className="container my-4">
            <h2 align="center"><u>About Us</u></h2><hr />
            <div style={{background:' rgb(232, 230, 230)'}} className="row featurette d-flex justify-content-center align-items-center">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">Establisment of Softech Infoways. <span class="text-body-secondary">It’ll blow your mind.</span></h2>
                    <p className="lead">
                        We are suited in Sirsa Haryana 125055 since 25 years.We are working from since 2000 in the field of teaching programming language to students in Effective way to boost their carrer.
                    </p>
                </div>
                <div className="col-md-5 ">
                    <img className="img-fluid" src="http://source.unsplash.com/400x400/?computer,code" alt='aaa' />
                </div>
            </div><hr />
            <div style={{background:' rgb(232, 230, 230)'}} className="row featurette d-flex justify-content-center align-items-center">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading fw-normal lh-1">Full Stack Development. <span class="text-body-secondary">It’ll blow your mind.</span></h2>
                    <p className="lead">
                        We are teaching back-end and front-end development and full stack development in best and easy way.
                    </p>
                </div>
                <div className="col-md-5 order-md-1">
                    <img className="img-fluid" src="http://source.unsplash.com/400x400/?computer,code" />
                </div>
            </div><hr />
            <div style={{background:' rgb(232, 230, 230)'}} className="row featurette d-flex justify-content-center align-items-center">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">Special Teaching. <span class="text-body-secondary">It’ll blow your mind.</span></h2>
                    <p className="lead">
                        With Programming we teach coaching for Data Structure ,BCA ,MCA ,MSc ,PGDCA Tally and DCA. We can also built the Strong base for Computer and Programming Languages.
                    </p>
                </div>
                <div className="col-md-5">
                    <img className="img-fluid" src="http://source.unsplash.com/400x400/?computer,code" />
                </div>
            </div><hr />
            <h2 align="center"><u>Our Special Languages</u></h2>
            <Container >
                <Row className='my-4 mx-4 '>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="http://source.unsplash.com/400x400/?react" />
                            <Card.Body>
                                <Card.Title align="center">React</Card.Title>
                                <Card.Text>
                                    React is used to develop single-page, server-rendered applications with framework like Node.js.
                                </Card.Text>
                                <div class="text-center">
                                    <button type="button" class="btn btn-primary">Read More</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="http://source.unsplash.com/400x400/?java,language" />
                            <Card.Body>
                                <Card.Title align="center">JAVA</Card.Title>
                                <Card.Text>
                                    JAVA remains a robust language, App Development and large-scale enterprise applications.
                                </Card.Text>
                                <div class="text-center">
                                    <button type="button" class="btn btn-primary">Read More</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="http://source.unsplash.com/400x400/?python,language" />
                            <Card.Body>
                                <Card.Title align="center">Python</Card.Title>
                                <Card.Text>
                                    Phython is an Exellent Choice for Beginners. It's widely used is Data Science, AI and more.
                                </Card.Text>
                                <div class="text-center">
                                    <button type="button" class="btn btn-primary">Read More</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='my-4 mx-4 '>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="http://source.unsplash.com/400x400/?c,language" />
                            <Card.Body>
                                <Card.Title align="center">C Language</Card.Title>
                                <Card.Text>
                                    C is a general-purpose programming language that is extremely flexible to use.
                                </Card.Text>
                                <div class="text-center">
                                    <button type="button" class="btn btn-primary">Read More</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="http://source.unsplash.com/400x400/?c++" />
                            <Card.Body>
                                <Card.Title align="center">C++</Card.Title>
                                <Card.Text>
                                    C++ is an cross-platform language that can be used to create high performance applications.
                                </Card.Text>
                                <div class="text-center">
                                    <button type="button" class="btn btn-primary">Read More</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="http://source.unsplash.com/400x400/?javascript" />
                            <Card.Body>
                                <Card.Title align="center">JAVA Script</Card.Title>
                                <Card.Text>
                                    a key player for both Front-end and Back-end development, JavaScript is Essenttal for Web Technologies.
                                </Card.Text>
                                <div class="text-center">
                                    <button type="button" class="btn btn-primary">Read More</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='my-4 mx-4'>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="http://source.unsplash.com/400x400/?html,css" />
                            <Card.Body>
                                <Card.Title align="center">HTML & CSS</Card.Title>
                                <Card.Text>
                                    CSS is a style sheet language and for specifying the presentation and styling of a document written in a markup languagesuch as HTML.
                                </Card.Text>
                                <div class="text-center">
                                    <button type="button" class="btn btn-primary">Read More</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="http://source.unsplash.com/400x400/?csharp,language" />
                            <Card.Body>
                                <Card.Title align="center">C#</Card.Title>
                                <Card.Text>
                                    C# is primarily used for Windows applications development,game development(with Unity) and enterprise software.
                                </Card.Text>
                                <div class="text-center">
                                    <button type="button" class="btn btn-primary">Read More</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="http://source.unsplash.com/400x400/?php" />
                            <Card.Body>
                                <Card.Title align="center">PHP</Card.Title>
                                <Card.Text>
                                    Although its popularity has a waned a bit, PHP is still used for web development, especially in server-side scripting.
                                </Card.Text>
                                <div class="text-center">
                                    <button type="button" class="btn btn-primary">Read More</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default AboutSoftech;
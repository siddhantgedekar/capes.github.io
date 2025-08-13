import { Card, Stack, CardGroup, Button } from "react-bootstrap"
import Navbars from "../components/Navbars"
import Abrasive from '../abrasives.png';
import Advertising from '../advertising.png';
import Agriculture from '../agriculture.png';
import AirConditioners from '../airconditioner.png';
import Airlines from '../airlines.png';
import Aluminum from '../aluminum.png';
import Amusement from '../amusement.png';
import Aqua from '../aqua.png';
import Vehicle from '../vehicle.png';
import Automobile from '../automobile.png';
import Dealer from '../dealer.png';
import Cars from '../cars.png';

const Sector = () => {
  return (
    <div className="sector-page bg-primary-subtle">
        <Navbars />
        <div className="sector-content px-3">
            <div className="mt-5">
                <a href="/" className='text-decoration-none'>Home</a>
                <a className='mx-2 text-decoration-none text-secondary'>&gt;</a>
                <a className='text-secondary text-decoration-none'>Sector</a>
            </div>
            
            <div className="mt-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h3 className="fw-bold">Sector Page</h3>
                        <p>Go to your favourite sector and analyse in detail</p>
                    </div>
                    <div className="search">
                        <small>Search for a sector</small><br/>
                        <input type="text" name="search" id="search" className="p-3 rounded-3 border-1 bg-transparent"/>
                    </div>
                </div>
            </div>

            <CardGroup className="mt-5 mx-3">
                <Stack direction="horizontal" gap={3} className="row">
                    <Card className="sector-card col">
                        <Card.Body className="d-flex justify-content-between flex-column">
                            <Card.Body className="text-center">
                                <div className="whitecircle m-auto mb-3">
                                    <Card.Img variant="top" src={Abrasive} className="w-50"/>
                                </div>
                                <Card.Subtitle className="fw-bold">Abrasives</Card.Subtitle>
                                <small className="text-secondary">The one that scraps away all inconsistencies.</small>
                            </Card.Body>
                            <Card.Body className="text-center">
                                <div className="d-flex justify-content-center">
                                    <p className="text-primary bg-info rounded-4  w-75">6 Companies</p>
                                </div>
                                <Card.Text className="text-uppercase w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p>micro<br/>2</p>
                                        <p>small<br/>3</p>
                                        <p>mid<br/>0</p>
                                        <p>large<br/>1</p>
                                    </div>
                                </Card.Text>
                                <Card.Link href="#">
                                    <Button className="btn btn-primary">Details</Button>
                                </Card.Link>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                    <Card className="sector-card col">
                        <Card.Body className="d-flex justify-content-between flex-column">
                            <Card.Body className='text-center'>
                                <div className="whitecircle m-auto mb-3">
                                    <Card.Img variant="top" src={Advertising} className="w-50"/>
                                </div>
                                <Card.Subtitle className="fw-bold">Advertising & Media</Card.Subtitle>
                                <small className="text-secondary">The one that creates and distributes media content.</small>
                            </Card.Body>
                            <Card.Body className="text-center">
                                <div className="d-flex justify-content-center">
                                    <p className="text-primary bg-info rounded-4  w-75">6 Companies</p>
                                </div>
                                <Card.Text className="text-uppercase w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p>micro<br/>2</p>
                                        <p>small<br/>3</p>
                                        <p>mid<br/>0</p>
                                        <p>large<br/>1</p>
                                    </div>
                                </Card.Text>
                                <Card.Link href="#">
                                    <Button className="btn btn-primary">Details</Button>
                                </Card.Link>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                    <Card className="sector-card col">
                        <Card.Body className="d-flex justify-content-between flex-column">
                            <Card.Body className="text-center">
                                <div className="whitecircle m-auto mb-3">
                                    <Card.Img variant="top" src={Agriculture} className="w-50"/>
                                </div>
                                <Card.Subtitle className="fw-bold">Agriculture</Card.Subtitle>
                                <small className="text-secondary">The one that gives us vegetables and fruits to eat.</small>
                            </Card.Body>
                            <Card.Body className="text-center">
                                <div className="d-flex justify-content-center">
                                    <p className="text-primary bg-info rounded-4  w-75">6 Companies</p>
                                </div>
                                <Card.Text className="text-uppercase w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p>micro<br/>2</p>
                                        <p>small<br/>3</p>
                                        <p>mid<br/>0</p>
                                        <p>large<br/>1</p>
                                    </div>
                                </Card.Text>
                                <Card.Link href="#">
                                    <Button className="btn btn-primary">Details</Button>
                                </Card.Link>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                    <Card className="sector-card col">
                        <Card.Body className="d-flex justify-content-between flex-column">
                            <Card.Body className="text-center">
                                <div className="whitecircle m-auto mb-3">
                                    <Card.Img variant="top" src={AirConditioners} className="w-50"/>
                                </div>
                                <Card.Subtitle className="fw-bold">Air Conditioners</Card.Subtitle>
                                <small className="text-secondary">The one that keeps it cool with no noise.</small>
                            </Card.Body>
                            <Card.Body className="text-center">
                                <div className="d-flex justify-content-center">
                                    <p className="text-primary bg-info rounded-4  w-75">6 Companies</p>
                                </div>
                                <Card.Text className="text-uppercase w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p>micro<br/>2</p>
                                        <p>small<br/>3</p>
                                        <p>mid<br/>0</p>
                                        <p>large<br/>1</p>
                                    </div>
                                </Card.Text>
                                <Card.Link href="#">
                                    <Button className="btn btn-primary">Details</Button>
                                </Card.Link>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </Stack>

                <Stack direction="horizontal" gap={3} className="mt-3 row">
                    <Card className="sector-card col">
                        <Card.Body className="d-flex justify-content-between flex-column">
                            <Card.Body className="text-center">
                                <div className="whitecircle m-auto mb-3">
                                    <Card.Img variant="top" src={Airlines} className="w-50"/>
                                </div>
                                <Card.Subtitle className="fw-bold">Airlines</Card.Subtitle>
                                <small className="text-secondary">The one that takes us aroound the world in shortest time.</small>
                            </Card.Body>
                            <Card.Body className="text-center">
                                <div className="d-flex justify-content-center">
                                    <p className="text-primary bg-info rounded-4  w-75">6 Companies</p>
                                </div>
                                <Card.Text className="text-uppercase w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p>micro<br/>2</p>
                                        <p>small<br/>3</p>
                                        <p>mid<br/>0</p>
                                        <p>large<br/>1</p>
                                    </div>
                                </Card.Text>
                                <Card.Link href="#">
                                    <Button className="btn btn-primary">Details</Button>
                                </Card.Link>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                    <Card className="sector-card col">
                        <Card.Body className="d-flex justify-content-between flex-column">
                            <Card.Body className="text-center">
                                <div className="whitecircle m-auto mb-3">
                                    <Card.Img variant="top" src={Aluminum} className="w-50"/>
                                </div>
                                <Card.Subtitle className="fw-bold">Aluminimum & Aluminimum Products</Card.Subtitle>
                                <small className="text-secondary">The one that can wrap up almost everything.</small>
                            </Card.Body>
                            <Card.Body className="text-center">
                                <div className="d-flex justify-content-center">
                                    <p className="text-primary bg-info rounded-4 w-75">18 Companies</p>
                                </div>
                                <Card.Text className="text-uppercase w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p>micro<br/>2</p>
                                        <p>small<br/>3</p>
                                        <p>mid<br/>0</p>
                                        <p>large<br/>1</p>
                                    </div>
                                </Card.Text>
                                <Card.Link href="#">
                                    <Button className="btn btn-primary">Details</Button>
                                </Card.Link>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                    <Card className="sector-card col">
                        <Card.Body className="d-flex justify-content-between flex-column">
                            <Card.Body className="text-center">
                                <div className="whitecircle m-auto mb-3">
                                    <Card.Img variant="top" src={Amusement} className="w-50"/>
                                </div>
                                <Card.Subtitle className="fw-bold">Amusement Parks/Recreation/Club</Card.Subtitle>
                                <small className="text-secondary">The one that gives us vegetables and fruits to eat.</small>
                            </Card.Body>
                            <Card.Body className="text-center">
                                <div className="d-flex justify-content-center">
                                    <p className="text-primary bg-info rounded-4  w-75">4 Companies</p>
                                </div>
                                <Card.Text className="text-uppercase w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p>micro<br/>2</p>
                                        <p>small<br/>3</p>
                                        <p>mid<br/>0</p>
                                        <p>large<br/>1</p>
                                    </div>
                                </Card.Text>
                                <Card.Link href="#">
                                    <Button className="btn btn-primary">Details</Button>
                                </Card.Link>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                    <Card className="sector-card col">
                        <Card.Body className="d-flex justify-content-between aling-items-center flex-column">
                            <Card.Body className="text-center">
                                <div className="whitecircle m-auto mb-3">
                                    <Card.Img variant="top" src={Aqua} className="w-50"/>
                                </div>
                                <Card.Subtitle className="fw-bold">Aquaclture</Card.Subtitle>
                                <small className="text-secondary">The one that takes care of aquatic animals.</small>
                            </Card.Body>
                            <Card.Body className="text-center">
                                <div className="d-flex justify-content-center">
                                    <p className="text-primary bg-info rounded-4  w-75">8 Companies</p>
                                </div>
                                <Card.Text className="text-uppercase w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p>micro<br/>2</p>
                                        <p>small<br/>3</p>
                                        <p>mid<br/>0</p>
                                        <p>large<br/>1</p>
                                    </div>
                                </Card.Text>
                                <Card.Link href="#">
                                    <Button className="btn btn-primary">Details</Button>
                                </Card.Link>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </Stack>

                <Stack direction="horizontal" gap={3} className="mt-3 row">
                    <Card className="sector-card col">
                        <Card.Body className="d-flex justify-content-between flex-column">
                            <Card.Body className="text-center">
                                <div className="whitecircle m-auto mb-3">
                                    <Card.Img variant="top" src={Vehicle} className="w-50"/>
                                </div>
                                <Card.Subtitle className="fw-bold">Auto Ancillary</Card.Subtitle>
                                <small className="text-secondary">The one that provides parts to keep our vehicle running.</small>
                            </Card.Body>
                            <Card.Body className="text-center">
                                <div className="d-flex justify-content-center">
                                    <p className="text-primary bg-info rounded-4  w-75">95 Companies</p>
                                </div>
                                <Card.Text className="text-uppercase w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p>micro<br/>2</p>
                                        <p>small<br/>3</p>
                                        <p>mid<br/>0</p>
                                        <p>large<br/>1</p>
                                    </div>
                                </Card.Text>
                                <Card.Link href="#">
                                    <Button className="btn btn-primary">Details</Button>
                                </Card.Link>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                    <Card className="sector-card col">
                        <Card.Body className="d-flex justify-content-between flex-column">
                            <Card.Body className="text-center">
                                <div className="whitecircle m-auto mb-3">
                                    <Card.Img variant="top" src={Automobile} className="w-50"/>
                                </div>
                                <Card.Subtitle className="fw-bold">Automobile Two & Three Wheelers</Card.Subtitle>
                                <small className="text-secondary">The one that suits couples and smaller groups.</small>
                            </Card.Body>
                            <Card.Body className="text-center">
                                <div className="d-flex justify-content-center">
                                    <p className="text-primary bg-info rounded-4 w-75">7 Companies</p>
                                </div>
                                <Card.Text className="text-uppercase w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p>micro<br/>2</p>
                                        <p>small<br/>3</p>
                                        <p>mid<br/>0</p>
                                        <p>large<br/>1</p>
                                    </div>
                                </Card.Text>
                                <Card.Link href="#">
                                    <Button className="btn btn-primary">Details</Button>
                                </Card.Link>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                    <Card className="sector-card col">
                        <Card.Body className="d-flex justify-content-between flex-column">
                            <Card.Body className="text-center">
                                <div className="whitecircle m-auto mb-3">
                                    <Card.Img variant="top" src={Dealer} className="w-50"/>
                                </div>
                                <Card.Subtitle className="fw-bold">Automobiles - Dealers & Distrubutors</Card.Subtitle>
                                <small className="text-secondary">The one that makes cars and buses available to public.</small>
                            </Card.Body>
                            <Card.Body className="text-center">
                                <div className="d-flex justify-content-center">
                                    <p className="text-primary bg-info rounded-4 w-75">4 Companies</p>
                                </div>
                                <Card.Text className="text-uppercase w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p>micro<br/>2</p>
                                        <p>small<br/>3</p>
                                        <p>mid<br/>0</p>
                                        <p>large<br/>1</p>
                                    </div>
                                </Card.Text>
                                <Card.Link href="#">
                                    <Button className="btn btn-primary">Details</Button>
                                </Card.Link>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                    <Card className="sector-card col">
                        <Card.Body className="d-flex justify-content-between flex-column">
                            <Card.Body className="text-center">
                                <div className="whitecircle m-auto mb-3">
                                    <Card.Img variant="top" src={Cars} className="w-50"/>
                                </div>
                                <Card.Subtitle className="fw-bold">Automobile - Passenger Cars</Card.Subtitle>
                                <small className="text-secondary">The one that let families travel together comfortably.</small>
                            </Card.Body>
                            <Card.Body className="text-center">
                                <div className="d-flex justify-content-center">
                                    <p className="text-primary bg-info rounded-4  w-75">4 Companies</p>
                                </div>
                                <Card.Text className="text-uppercase w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p>micro<br/>2</p>
                                        <p>small<br/>3</p>
                                        <p>mid<br/>0</p>
                                        <p>large<br/>1</p>
                                    </div>
                                </Card.Text>
                                <Card.Link href="#">
                                    <Button className="btn btn-primary">Details</Button>
                                </Card.Link>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                </Stack>
            </CardGroup>
        </div>
    </div>
  )
}

export default Sector;
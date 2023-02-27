import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'; 
import { Card, CardBody, Row, Col } from 'reactstrap';
import { fetchUserDetails } from '../../redux/UserSlice';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import arrow from '../../assets/images/arrow.png';
import avatar2 from '../../assets/images/avatar2.png';
import line1 from '../../assets/images/Line1.png';
import fullstar from '../../assets/images/fullstar.png';
import emptystar from '../../assets/images/emptystar.png';


const UserDetails = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();    
    const id = location.pathname.split("/")[2];
    const {userObj} = useAppSelector(state => state.user);
    console.log(userObj);
    

    useEffect(() => {
        dispatch(fetchUserDetails(parseInt(id)))
    }, [])

  return (        
    <div>
        <Navbar/>
        <div className="detail">
            <Sidebar/>
            {userObj && (
                <div className="detail-content">
                    <Link to="/dashboard" style={{textDecoration: "none"}}>
                        <div className="back">
                            <img src={arrow} alt="arrow back"/> Back to users
                        </div>
                    </Link>
                    <div className="head-content mb-4">
                        <h4>User Details</h4>
                        <div className="head-buttons">
                            <button className="btn danger-btn">BLACKLIST USER</button>
                            <button className="btn success-btn">ACTIVATE USER</button>
                        </div>
                    </div>
                    <Card>
                        <CardBody style={{paddingBottom: "1px"}}>
                            <div className="card-head">
                                <div className='first-section'>
                                    <div className='avatar-circle'>
                                        <img src={avatar2} alt="avatar"/>
                                    </div>
                                    <div className="user-info">
                                        <h5>{userObj?.profile?.firstName}{" "}{userObj?.profile?.lastName}</h5>
                                        <span>{userObj?.userName}</span>
                                    </div>
                                </div> 
                                <img src={line1} alt="line" className='line'/>  
                                <div className="second-section">
                                    <div><span>User's Tier</span></div>
                                    <div>
                                        <img src={fullstar} alt="full star"/>
                                        <img src={emptystar} alt="empty star"/>
                                        <img src={emptystar} alt="empty star"/>
                                    </div>
                                </div>
                                <img src={line1} alt="line" className="line"/>
                                <div className="third-section">
                                    <div className="user-info">
                                        <h5>₦{userObj?.accountBalance}</h5>
                                        <span>{userObj?.accountNumber}/Providus Bank</span>
                                    </div>
                                </div>
                            </div>
                            <div className='card-foot'>
                                <div className="activate">General Details</div>
                                <div>Documents</div>
                                <div>Bank Details</div>
                                <div>Loan</div>
                                <div>Savings</div>
                                <div>App and System</div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className='my-3'>
                        <CardBody>
                            <Row className="mt-2">
                                <Col sm={12}>
                                    <h6>Personal Infomation</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="mb-3">
                                    <div className="mb-4">
                                        <div className="title mb-1">Full Name</div>
                                        <div className="reply">{userObj?.profile?.firstName}{" "}{userObj?.profile?.lastName}</div>
                                    </div>
                                    <div>
                                        <div className="title mb-1">Marital Status</div>
                                        <div className="reply">Single</div> 
                                    </div>
                                </Col>
                                <Col className="mb-3">
                                    <div className="mb-4">
                                        <div className="title mb-1">Phone Number</div>
                                        <div className="reply">{userObj?.phoneNumber}</div>
                                    </div>
                                    <div>
                                        <div className="title mb-1">Children</div>
                                        <div className="reply">None</div> 
                                    </div>
                                </Col>
                                <Col className="mb-3">
                                    <div className="mb-4">
                                        <div className="title mb-1">Email Address</div>
                                        <div className="reply">{userObj?.email}</div>
                                    </div>
                                    <div>
                                        <div className="title mb-1">Type of Residence</div>
                                        <div className="reply">Parent's Apartment</div> 
                                    </div>
                                </Col>
                                <Col className="mb-3">
                                    <div className="mb-4">
                                        <div className="title mb-1">BVN</div>
                                        <div className="reply">{userObj?.profile?.bvn}</div>
                                    </div>
                                </Col>
                                <Col className="mb-3">
                                    <div className="mb-4">
                                        <div className="title mb-1">Gender</div>
                                        <div className="reply">{userObj?.profile?.gender}</div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="divider"></div>
                            <Row className="mt-2">
                                <Col sm={12}>
                                    <h6>Education and Employment</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="mb-3">
                                    <div className="mb-4">
                                        <div className="title mb-1">Level of Education</div>
                                        <div className="reply">{userObj?.education?.level}</div>
                                    </div>
                                    <div>
                                        <div className="title mb-1">Office Email</div>
                                        <div className="reply">{userObj?.education?.officeEmail}</div> 
                                    </div>
                                </Col>
                                <Col className="mb-3">
                                    <div className="mb-4">
                                        <div className="title mb-1">Employment Status</div>
                                        <div className="reply">{userObj?.education?.employmentStatus}</div>
                                    </div>
                                    <div>
                                        <div className="title mb-1">Monthly Income</div>
                                        <div className="reply">{userObj.education?.monthlyIncome?.map(item => "₦" + item + " - ")}</div> 
                                    </div>
                                </Col>
                                <Col className="mb-3">
                                    <div className="mb-4">
                                        <div className="title mb-1">Sector of Employment</div>
                                        <div className="reply">{userObj?.education?.sector}</div>
                                    </div>
                                    <div>
                                        <div className="title mb-1">Loan Repayment</div>
                                        <div className="reply">{userObj?.education?.loanRepayment}</div> 
                                    </div>
                                </Col>
                                <Col className="mb-3">
                                    <div className="mb-4">
                                        <div className="title mb-1">Duration of Employment</div>
                                        <div className="reply">{userObj?.education?.duration}</div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="divider"></div>
                            <Row className="mt-2">
                                <Col sm={12}>
                                    <h6>Socials</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="mb-3">
                                    <div className="mb-4">
                                        <div className="title mb-1">Twitter</div>
                                        <div className="reply">{userObj?.socials?.twitter}</div>
                                    </div>
                                </Col>
                                <Col className="mb-3">
                                    <div className="mb-4">
                                        <div className="title mb-1">Facebook</div>
                                        <div className="reply">{userObj?.socials?.facebook}</div>
                                    </div>
                                </Col>
                                <Col className="mb-3">
                                    <div className="mb-4">
                                        <div className="title mb-1">Instagram</div>
                                        <div className="reply">{userObj?.socials?.instagram}</div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="divider"></div>
                            <Row className="mt-2">
                                <Col sm={12}>
                                    <h6>Guarantor</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="mb-3">
                                    <div className="mb-4">
                                        <div className="title mb-1">Full Name</div>
                                        <div className="reply">{userObj?.guarantor?.firstName}{" "}{userObj?.guarantor?.lastName}</div>
                                    </div>
                                </Col>
                                <Col className="mb-3">
                                    <div className="mb-4">
                                        <div className="title mb-1">Phone Number</div>
                                        <div className="reply">{userObj?.guarantor?.phoneNumber}</div>
                                    </div>
                                </Col>
                                <Col className="mb-3">
                                    <div className="mb-4">
                                        <div className="title mb-1">Email Address</div>
                                        <div className="reply">debby@gmail.com</div>
                                    </div>
                                </Col>
                                <Col className="mb-3">
                                    <div className="mb-4">
                                        <div className="title mb-1">Relationship</div>
                                        <div className="reply">Sister</div>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </div>
            )}
        </div>
    </div>    
  )
}

export default UserDetails;

import React from "react";
import { Menu, Dropdown, Icon, Container, Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import "../App.css";

const NavBar = () => {


    return (
        <div className="allnavbar" style={{ position: "fixed", top: 0, zIndex: 100 }}>


            <div className="desktop-nav-bar">
                <Menu
                    style={{
                        marginTop: "20px", borderTop: "2px solid #A333C8"
                    }}
                >
                    <Container>

                        <Menu.Item
                            as={Link} to="/"
                        >
                            <Image
                                src="/blockicon.png"
                                style={{ width: "20px", marginRight: "7px" }}
                            />
                            Home
                        </Menu.Item>



                        <Menu.Item as={Link} to="/resume"
                        >Resume</Menu.Item>

                        <Menu.Item as={Link} to="/performancereviews">IBM Performance Reviews</Menu.Item>

                        <Dropdown item text="Projects">
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/crowdcoin">
                                    CrowdCoin
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/developerportfoio">
                                    This Developer Portfolio
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/ethriver">
                                    EthRiver
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/tokentalk">
                                    TokenTalk
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/cryptosettle">
                                    CryptoSettle -
                                    COMING SOON!
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown item text="Education">
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/udemytrainings">Udemy Trainings</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/bookreviews">Book Reviews</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Menu.Menu position="right">

                           <Menu.Item>
                            <a href="https://www.linkedin.com/in/t-whynot" target="_blank" rel="noopener noreferrer"  >
                                
                                    <Icon color="blue" name="linkedin square" size='large' style={{ marginLeft: '10px' }} />
                                
                                </a>
                            </Menu.Item>
                            <Menu.Item>
                            <a href="https://github.com/theresa-whynot" target="_blank" rel="noopener noreferrer" >
                                    <Icon color="black" name="github" size='large' style={{ marginLeft: '10px' }} />
                                </a>
                            </Menu.Item>
                        </Menu.Menu>

                      

                    </Container>
                </Menu>
            </div>

            <div className="mobile-nav-bar">

                <Menu style={{
                    marginTop: "20px", borderTop: "2px solid #A333C8"
                }} attached='top'>
      <Dropdown item icon='bars'>
        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/">
                                <Image
                                src="/blockicon.png"
                                style={{ width: "20px", marginTop: "1px" }}
                            /> Home</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/resume">Resume</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/performancereviews">IBM Reviews</Dropdown.Item>

                            <Dropdown item text="Projects">
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/crowdcoin">
                                        CrowdCoin
                                    </Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/developerportfoio">
                                        This Developer Portfolio
                                    </Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/ethriver">
                                        EthRiver
                                    </Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/tokentalk">
                                        TokenTalk
                                    </Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/cryptosettle">
                                        CryptoSettle
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown item text="Education">
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/udemytrainings">Udemy Trainings</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/bookreviews">Book Reviews</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>


                            <Dropdown.Item position="right">
                                <a href="https://www.linkedin.com/in/t-whynot" target="_blank" rel="noopener noreferrer" style={{color:"black"} }>
                                    <Icon color="blue" name="linkedin square"/>
                                    LinkedIn</a>
                            </Dropdown.Item>

                            <Dropdown.Item position="right">
                                <a href="https://github.com/theresa-whynot" target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
                                    <Icon color="black" name="github" size='large' />
                                    GitHub </a> 
                            </Dropdown.Item>



        </Dropdown.Menu>
      </Dropdown>
      </Menu>
        </div>


        </div>
    );
};

export default NavBar;
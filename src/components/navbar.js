import React from "react";
import { Menu, Dropdown, Icon, Container, Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import "../App.css";

const NavBar = () => {


    return (
        <div style={{ position: "fixed", top: 0, zIndex: 100 }}>
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
                        <a href="https://www.linkedin.com/in/t-whynot" target="_blank" rel="noopener noreferrer">
                        <Menu.Item>
                                <Icon color="blue" name="linkedin square" size='large' style={{ marginLeft: '10px' }} />
                            </Menu.Item>
                        </a>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    );
};

export default NavBar;
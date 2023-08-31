import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import {
    Image,
    Grid,
    Segment
} from "semantic-ui-react";
import Layout from "./components/layout";
import PerformanceReviewsPreview from "./components/performancereviewspreview";
import ResumePage from "./resumepage";
import PerformanceReview from "./performancereviews";
import CrowdCoin from "./crowdcoin";
import DeveloperPortfolio from "./developerportfoio";
import CryptoSettle from "./cryptosettle";
import UdemyTrainings from "./udemytrainings";
import BookReviews from "./bookreviews";

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/performancereviews" element={<PerformanceReview />} />
            <Route path="/crowdcoin" element={<CrowdCoin />} />
            <Route path="/developerportfoio" element={<DeveloperPortfolio />} />
            <Route path="/cryptosettle" element={<CryptoSettle />} />
            <Route path="/udemytrainings" element={<UdemyTrainings />} />
            <Route path="/bookreviews" element={<BookReviews />} />
        </Routes>
    )
};

const HomePage = () => {

    return (

<Layout>
                <Grid>
                    <Grid.Row>
                        <Segment
                            color="purple"
                            style={{ width: "1000px", margin: "0 auto" }}
                        >
                            <Image src="/profilepic.jpg" floated="left" size="small" />
                            <h2>Theresa Whynot - Blockchain Developer</h2>
                            <p>
                                Welcome to my portfolio! After 6 years spent in Software
                                Consulting at IBM - working with clients such as Wal-Mart, New
                                Balance, Johnson & Johnson, and Google - I am ready for a new
                                adventure. With a year spent independently mastering
                                blockchain fundamentals, smart contracts, and front-end
                                development, I've honed a skill set that's fueled by an
                                unwavering enthusiasm for programming and blockchain
                                technology.
                            </p>
                        </Segment>
                    </Grid.Row>

                    <Grid.Row>
                        <div style={{ marginLeft: "90px", marginTop: "-15px" }}>
                            <Grid columns={3}>
                                <Grid.Column width={4}>
                                    <Segment.Group>
                                        <Segment color="purple" style={{ borderBottom: "1px solid #E0E0E0" }}>
                                            <h4>Technical Skills</h4>
                                        <Link to="/resume">Resume Here</Link>
                                        </Segment>

                                        <div style={{ textAlign: "center" }}>
                                            <Grid columns={2}>
                                                <Grid.Column>
                                                    <Segment vertical>Solidity</Segment>
                                                    <Segment vertical>JavaScript</Segment>
                                                    <Segment vertical>Next.JS</Segment>
                                                    <Segment vertical>Node.JS</Segment>
                                                </Grid.Column>
                                                <Grid.Column>
                                                    <Segment vertical>React</Segment>
                                                    <Segment vertical>CSS</Segment>
                                                    <Segment vertical>HTML</Segment>
                                                    <Segment vertical>Excel</Segment>
                                                </Grid.Column>
                                            </Grid>
                                        </div>
                                    </Segment.Group>
                                </Grid.Column>

                                <Grid.Column>
                                    <PerformanceReviewsPreview />
                                </Grid.Column>

                                <Grid.Column>
                                <div>
                                    <Segment.Group>
                                        <Segment color="purple">
                                            <h4>Featured Project - CrowdCoin</h4>
                                            <Link to="/crowdcoin">Project Details Here</Link>
                                        </Segment>
                                        <Segment>
                                            <Link to="/crowdcoin">
                                                <Image src="/CrowdCoin2.png" />
                                            </Link>>
                                        </Segment>
                                    </Segment.Group>
                                        </div>
                                </Grid.Column>
                            </Grid>
                        </div>
                    </Grid.Row>
                </Grid>
        </Layout>
    );
};

    export default App;              
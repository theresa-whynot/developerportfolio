import React from "react";
import { Routes, Route} from 'react-router-dom';
import {
    Grid
} from "semantic-ui-react";
import Layout from "./components/layout";
import TopSegment from "./components/topsegment";
import TechnicalSkills from "./components/technicalskills";
import PerformanceReviewsPreview from "./components/performancereviewspreview";
import ProjectDetails from "./components/projectdetails";
import ResumePage from "./resumepage";
import PerformanceReview from "./performancereviews";
import CrowdCoin from "./crowdcoin";
import DeveloperPortfolio from "./developerportfoio";
import CryptoSettle from "./cryptosettle";
import UdemyTrainings from "./udemytrainings";
import BookReviews from "./bookreviews";
import "./App.css";

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
                <div className="desktophomesegments">
                    <Grid.Row>
                        <div style={{ marginTop: "15px"}}>
                            <TopSegment />
                        </div>
                    </Grid.Row>
                    <Grid.Row>
                        <div style={{ marginLeft: "70px", marginTop: "15px"}}>
                            <Grid columns={3}>
                                <Grid.Column width={4}>
                                    <TechnicalSkills />
                                </Grid.Column>

                                <Grid.Column>
                                    <PerformanceReviewsPreview />
                            </Grid.Column>


                                <Grid.Column>
                                <ProjectDetails />
                                </Grid.Column>
                            </Grid>
                        </div>
                </Grid.Row>
                </div>
            </Grid>

           
                <div className="mobilehomesegments">
                
                     <TopSegment />
                
                    <TechnicalSkills/>
             
                        <PerformanceReviewsPreview />
               
                    <ProjectDetails/>
                
                </div>

                
        </Layout>
    );
};

    export default App;              
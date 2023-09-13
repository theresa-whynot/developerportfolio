import React, { Component } from "react";
import Layout from "./components/layout";
import { Grid, Segment, Image, Menu } from "semantic-ui-react";

class PerformanceReview extends Component {
    state = {
        year: 2022,
        pdf: "PA-2022.pdf",
        activeItem: 2022
    };

    onClick = (event, selectedYear, selectedPdf) => {
        event.preventDefault();
        this.setState({ year: selectedYear, pdf: selectedPdf, activeItem: selectedYear });
    };

    renderYearMenu() {
        const years = [2022, 2021, 2020, 2019, 2018];

        return years.map((year) => (
            <Menu.Item
                active={this.state.activeItem === year}
                onClick={(event) => this.onClick(event, year, `PA-${year}.pdf`)}
            >
                {year}
            </Menu.Item>
        ));
    }


    render() {

        return (
            <Layout>

                <div className="desktop-year-menu">
                <Grid columns={2}>

                    <Grid.Column width={4}>
                        <Segment color="purple">
                            <h4>IBM Performance Reviews by Year</h4>
                            <Menu vertical fluid style={{ textAlign: "center", marginTop: "20px" }}>
                                    {this.renderYearMenu()}
                            </Menu>
                        </Segment>

                    </Grid.Column>

                    <Grid.Column width={12}>
                        <Segment.Group>
                        <Segment color="purple">
                            <Grid columns={2}>
                                <Grid.Column width={2}>
                                    <Image
                                        src="/ibm.png"
                                        style={{ width: "100px" }}
                                    />
                                </Grid.Column>
                                <Grid.Column width={14}>
                                    <h4 style={{ marginTop: "10px" }}>{this.state.year} Performance Reviews</h4>
                                </Grid.Column>
                            </Grid>
                            </Segment>

                        </Segment.Group>

                        <div style={{ width: "100%", margin: "0 auto" }}>
                            <iframe src={this.state.pdf} width="100%" height="600px" zoom="1" style={{ border: "2px solid #A333C8" }} title="PerformanceReviews"></iframe>
                        </div>
                    </Grid.Column>

                </Grid>
                </div>



                <div className="mobile-year-menu">
                    <Segment.Group>
                        <Segment color="purple">
                            <Grid columns={2}>
                                <Grid.Column width={2}>
                                    <Image
                                        src="/ibm.png"
                                        style={{ width: "100px" }}
                                    />
                                </Grid.Column>
                                <Grid.Column width={14}>
                                    <h4 style={{ marginTop: "10px" }}>{this.state.year} Performance Reviews</h4>
                                </Grid.Column>
                            </Grid>
                        </Segment>


                        <Menu widths={5} style={{ textAlign: "center" }}>
                            {this.renderYearMenu()}
                        </Menu>


                    </Segment.Group>

                    <div style={{ width: "100%", margin: "0 auto" }}>
                        <iframe src={this.state.pdf} width="100%" height="600px" zoom="1" style={{ border: "2px solid #A333C8" }} title="PerformanceReviews"></iframe>
                    </div>

                </div>


            </Layout>
        );
    };
};

export default PerformanceReview;

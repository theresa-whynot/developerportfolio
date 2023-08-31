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


    render() {
        const { activeItem } = this.state

        return (
            <Layout>
                <Grid columns={2}>

                    <Grid.Column width={4}>
                        <Segment color="purple">
                            <h4>IBM Performance Reviews by Year</h4>
                            <Menu vertical fluid style={{ textAlign: "center", marginTop: "20px" }}>
                                <Menu.Item
                                    active={activeItem === 2022}
                                    onClick={(event) => this.onClick(event, 2022, "PA-2022.pdf")}
                                >
                                    2022
                                </Menu.Item>

                                <Menu.Item
                                    active={activeItem === 2021}
                                    onClick={(event) => this.onClick(event, 2021, "PA-2021.pdf")}
                                >
                                    2021
                                </Menu.Item>

                                <Menu.Item
                                    active={activeItem === 2020}
                                    onClick={(event) => this.onClick(event, 2020, "PA-2020.pdf")}
                                >
                                    2020
                                </Menu.Item>

                                <Menu.Item
                                    active={activeItem === 2019}
                                    onClick={(event) => this.onClick(event, 2019, "PA-2019.pdf")}
                                >
                                    2019
                                </Menu.Item>

                                <Menu.Item
                                    active={activeItem === 2018}
                                    onClick={(event) => this.onClick(event, 2018, "PA-2018.pdf")}
                                >
                                    2018
                                </Menu.Item>



                            </Menu>
                        </Segment>

                    </Grid.Column>
                    <Grid.Column width={12}>
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
                        <div style={{ width: "100%", margin: "0 auto" }}>
                            <iframe src={this.state.pdf} width="100%" height="600px" zoom="1" style={{ border: "2px solid #A333C8" }} title="PerformanceReviews"></iframe>
                        </div>
                    </Grid.Column>

                </Grid>

            </Layout>
        );
    };
};

export default PerformanceReview;

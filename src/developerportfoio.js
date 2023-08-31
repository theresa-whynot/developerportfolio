import React, { Component } from "react";
import Layout from "./components/layout";
import DeveloperPortfolioDetails from "./components/developerportfoliodetails";
import { Segment, Icon, Header } from "semantic-ui-react";


class DeveloperPortfolio extends Component {
    state = {

    }
    render() {
        return (
            <Layout>
                <Segment color="purple" style={{ textAlign: 'center', marginTop: '10px' }}>
                    <Header>
                        <h2> My Developer Portfolio <Icon color="purple" name="briefcase" /></h2>
                        <Header.Subheader style={{ marginTop: '-10px' }}>
                            Theresa Whynot - Blockchain Developer
                        </Header.Subheader>
                    </Header>
                </Segment>
                <DeveloperPortfolioDetails/>
            </Layout>
        );
    };
};

export default DeveloperPortfolio;

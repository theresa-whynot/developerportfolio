import React, { Component } from "react";
import Layout from "./components/layout";
import GitHubDetails from "./components/githubdetails";
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
                <GitHubDetails repoTitle="developerportfolio" repoColor="purple"/>
            </Layout>
        );
    };
};

export default DeveloperPortfolio;

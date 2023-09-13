import React from "react";
import { Link } from 'react-router-dom';
import {
    Grid,
    Segment
} from "semantic-ui-react";
import "../App.css";



const TechnicalSkills = () => {

    return (
        <Segment.Group className="technicalskills">
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
    )
}
export default TechnicalSkills;     
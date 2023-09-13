import React from "react";
import { Link } from 'react-router-dom';
import {
    Segment,
    Image
} from "semantic-ui-react";
import "../App.css";



const ProjectDetails = () => {

    return (
        <div>
            <Segment.Group className="projectdetails">
                <Segment color="purple">
                    <h4>Featured Project - CrowdCoin</h4>
                    <Link to="/crowdcoin">Project Details Here</Link>
                </Segment>
                <Segment>
                    <Link to="/crowdcoin">
                        <Image src="/CrowdCoin2.png" />
                    </Link>
                </Segment>
            </Segment.Group>
        </div>
    )
}
export default ProjectDetails;     

import React from "react";
import {
    Segment,
    Image
} from "semantic-ui-react";
import "../App.css";



const TopSegment = () => {

    return (
        <Segment.Group className="top-segment-group">
            <Segment
                color="purple"
                className="top-segment"
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
        </Segment.Group>
    )
}
export default TopSegment;     


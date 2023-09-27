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
                <h2>Theresa Whynot - Web & Blockchain Developer</h2>
                <p>
                    After 6 years spent in Software Consulting at IBM - working with clients such as Google,
                    Johson&Johnson, Wal-Mart and New Balance- I am ready for a new adventure in the
                    software engineering world. With a year spent independently mastering web development
                    and blockchain fundamentals, I've honed a skill set that's fueled by an unwavering
                    enthusiasm for programming and blockchain technology. 
                </p>
            </Segment>
        </Segment.Group>
    )
}
export default TopSegment;     


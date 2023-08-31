import React, { Component } from "react";
import { Segment, Header, Progress } from "semantic-ui-react";

class CoursesList extends Component {
    state = {
        courses: [
            {
                name: "Ethereum and Solidity: The Complete Developer's Guide",
                link: "https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/",
                description: "Use Ethereum, Solidity, and Smart Contracts to build production-ready apps based on the blockchain",
                progress: 100,
                complete: true,
            },
            {
                name: "Blockchain Theory 101",
                link: "https://www.udemy.com/course/blockchain-theory-101/",
                description: "Basic description, applications, and implication of blockchain technology",
                progress: 100,
                complete: true,
            },
            {
                name: "Web Development Fundamentals: HTML5 and CSS3 for Beginners",
                link: "https://www.udemy.com/course/html5-and-css3-for-absolute-beginners/",
                description: "Learn HTML + CSS basics. And Jump Start Your Web Development Journey.",
                progress: 100,
                complete: true,
            },
            {
                name: "React JS For Beginner Convert Any HTML Site To React JS",
                link: "https://www.udemy.com/course/react-for-beginner-convert-html-to-react/",
                description: "This Course Will Help You To Build Strong Foundation of React JS And You Will Be Able, Convert Any HTML Site To React JS",
                progress: 100,
                complete: true,
            },
            {
                name: "Ethereum Blockchain Developer Bootcamp With Solidity (2023)",
                link: "https://www.udemy.com/course/blockchain-developer/",
                description: "Become An Ethereum Blockchain Developer With One Course. Master Solidity, Web3.JS, Truffle, Metamask, Remix & More!",
                progress: 35,
                complete: false,
            },
            {
                name: "The Complete JavaScript Course 2023: From Zero to Expert!",
                link: "https://www.udemy.com/course/the-complete-javascript-course/",
                description: "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
                progress: 25,
                complete: false,
            },
        ],
    };

    render() {
        return (
            <div>
                    {this.state.courses.map((course, index) => (
                        <Segment color="purple" key={index}>
                            <Header>
                                <a href={course.link} target="_blank" rel="noopener noreferrer">
                                    {course.name}
                                </a>
                                <Header.Subheader>
                                    {course.description}
                                </Header.Subheader>
                            </Header>
                            <div style={{ marginTop: '-7px' }}>
                                <h5>Course Progress</h5>
                                <Progress progress='percent' percent={course.progress} success={course.complete ? true : false}>
                                    {course.complete ? 'Complete' : 'In Progress'}
                                </Progress>
                            </div>
                        </Segment>
                    ))}
            </div>
        );
    }
}

export default CoursesList;
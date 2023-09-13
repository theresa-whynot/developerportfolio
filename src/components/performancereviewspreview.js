import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
    Menu,
    Icon,
    Segment
} from "semantic-ui-react";
import "../App.css";

class PerformanceReivewsPreview extends Component {
    state = {
        currentReviewIndex: 0,
        reviews: [
            {
                header: "Review from: IBM Project Manager, 2021",
                content: `"Theresa has wonderful business acumen, she is professional and responsive. Her constant commitment, transparency, and flexibility - allowed the project to succeed - you can tell that she truly cared in the success of the team and project. Theresa was a demonstrated leader, delivering the solution along with attention to timeline and budget. I would welcome to work with Theresa again on any future project within Workday or other Product."`
            },
            {
                header: "Review from: IBM Partner, 2022",
                content: `"For Kraft Heinz, there was a huge risk that the client would escalate to the IBM Account Level leadership if there was any delay or misstep in the 2023 merit process project. To your credit, you led the team through a successful transition, successful Advanced Compensation build and helped to prepare the client for testing. There were no escalations and I have only received positive feedback. This was a huge 'win!'"`
            },
            {
                header: "Review from: IBM Project Manager, 2020",
                content: `"Theresa was a critical resource at Johnson and Johnson data conversion project.
Client really likes her for her experience and attitude and work ethics and personally
reached out to me appreciating her work. She is a true professional and always
willing to go above and beyond and exceeded client expectations."`
            },
            {
                header: "Review from: IBM Project Manager, 2021",
                content: `"A testament to her leadership, I have not had to intervene as she and team have kept the data workstream on track, but alerting sufficiently of any project risks or roadblocks. Theresa is a valuable asset to IBM and any project she works on. I am glad to have her continued support on our team for this project."`
            },
            {
                header: "Review from: IBM Co-Team Lead, 2021",
                content: `"Immediately upon joining, you were a leader for the project and had managed to obtain requirements from many different areas and consolidate into a user- friendly documentation that was used to train all new resources.I was able to learn so much from you as well from a management and organization standpoint."`
            },
            {
                header: "Review from: IBM Project Manager, 2022",
                content: `"I really appreciate her taking lead on this project and also mentoring the junior team members and guiding them at every step. I am glad she was part of my team and looking forward to working with her in the future"`
            },
                {
                header: "Review from: IBM Project Manager, 2019",
                content: `"Theresa is very professional and dedicated to her work. Very simply, if she can make it
happen, she will. Quite honestly, we would not be having the success we are on this project if
it wasn't for Theresa's ability to work with the client to communicate and resolve their data
issues. She is always willing to help out other team members and puts the project success
above all else."`
            },
            {
                header: "Review from: IBM Project Manager, 2018",
                content: `"I can't say enough good things about Theresa, but here's my attempt...  Theresa was assigned
as Conversion lead at the State of Oregon, replacing a functional consultant.  At the time, we
were in midstream of a tenant build and having some issues.  On day 1, I asked Theresa to
help in advance of turnover, instead, Theresa took full control of the process and full
responsibility of getting the build completed.  Impressive from the start and no different with
subsequent builds and curve ball requirements."`
            }
        ]
    };


    handlePrevReview = () => {
        this.setState((prevState) => ({
            currentReviewIndex: (prevState.currentReviewIndex - 1 + prevState.reviews.length) % prevState.reviews.length
        }));
    };

    handleNextReview = () => {
        this.setState((prevState) => ({
            currentReviewIndex: (prevState.currentReviewIndex + 1) % prevState.reviews.length
        }));
    };

    componentDidMount() {
        this.animateFadeIn();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentReviewIndex !== this.state.currentReviewIndex) {

            this.animateFadeIn();
        }
    }

    animateFadeIn = () => {
        const reviewContent = document.querySelector(".review-content");
        reviewContent.classList.add("animate-fadeIn");

        setTimeout(() => {
            reviewContent.classList.remove("animate-fadeIn");
        }, 1500);
    };



    render() {
        const { currentReviewIndex, reviews } = this.state;

        return (



            <Segment.Group className="performancereviewindex">
                <Segment color="purple">
                    <h4>Perfomance Reviews</h4>
                    <Link to="/performancereviews">IBM Performance Reviews Here</Link>
                </Segment>
                <Segment>
                    <div className="review-content">
                        <h5>{reviews[currentReviewIndex].header}</h5>
                        <div style={{ fontSize: "10px" }}>
                            <p> {reviews[currentReviewIndex].content}</p>
                        </div>
                    </div>
                </Segment>
                <Menu borderless attached="bottom">
                    <Menu.Menu
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                    >
                        <Menu.Item onClick={this.handlePrevReview}>
                            {" "}
                            <Icon
                                color="purple"
                                name="arrow circle left"
                            />{" "}
                        </Menu.Item>
                        <Menu.Item onClick={this.handleNextReview}>
                            {" "}
                            <Icon
                                color="purple"
                                name="arrow circle right"
                            />{" "}
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Segment.Group>
        );
    };
};

        export default PerformanceReivewsPreview;                     

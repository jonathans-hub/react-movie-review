import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Review from "./Review";
export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=Xpr2Wy6vwzndGgUwZIj6n2VtwxUnj6sB"
    )
      .then((res) => res.json())
      .then((reviews) => {
        console.log("reviews:", reviews);
        this.setState({ reviews: reviews.results });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        <Container>
          <h4 className="mt-3">Reviews</h4>
        </Container>
        <hr></hr>
        <div>
          {this.state.reviews.map((review) => (
            <Review review={review} />
          ))}
        </div>
      </>
    );
  }
}

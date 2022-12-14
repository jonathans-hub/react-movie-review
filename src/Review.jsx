import React from "react";
import { Container, Card } from "react-bootstrap";
import "./Review.css";
export default function Review({ review }) {
  return (
    <div>
      <Container>
        <Card border="dark" style={{ maxWidth: "68rem" }} className="my-2">
          <Card.Header><h5>{review.display_title}</h5></Card.Header>
          <Card.Body>
            <div className="flex">
              <div>
                <Card.Img
                  variant="side"
                  src={review.multimedia.src}
                  width={180 + "px"}
                  height={180 + "px"}
                  className="imgg"
                />
              </div>
              <div className="marginl">
                <Card.Title className="textt">- {review.byline}</Card.Title>
                <Card.Text className="textt"><strong>{review.critics_pick}</strong></Card.Text>
                <Card.Text className="textt">{review.summary_short}</Card.Text>
                <Card.Text className="textt"><h6>{review.headline}</h6></Card.Text>
              </div>
            </div>
          </Card.Body>
        </Card>
        <br />
      </Container>
    </div>
  );
}

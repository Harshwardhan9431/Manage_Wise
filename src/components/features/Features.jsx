import React from "react";
import "./Features.css";
import Card from "react-bootstrap/Card";
import feature1 from "./../../assets/feature1.webp";
import feature2 from "./../../assets/feature2.webp";
import feature4 from "./../../assets/feature4.webp";
import feature3 from "./../../assets/feature3.webp";


function Features() {
  return (
    <div className="features-container">
      <p>🔥PREMIER FEATURES</p>
      <h1>Discover our product's Capabilities</h1>
      <p>
        Powerful management platform designed to streamline your business
        operations, boost productivity, and drive success
      </p>
      <div className="features-one">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>⭐️</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
            <Card.Text style={{ fontSize: "25px" }}>
              Boost productivity and streamline workflow with us. Enjoy our
              intuitive interface and robust features.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "30rem" }}>
          <Card.Img
            variant="top"
            src={feature1}
            style={{ width: "100%" }}
          />
          <Card.Body>
            <Card.Title>Smart Task Management</Card.Title>
            <Card.Text>
              Say goodbye to chaos with our smart task management system
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="features-two">
        <Card style={{ width: "15rem" }}>
          <Card.Img style={{width:'300px', height:'304px'}} variant="top" src={feature2} />
          <Card.Body>
            <Card.Title>Flexible Scheduling</Card.Title>
            <Card.Text>
              Say goodbye to chaos with our smart task management system
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" style={{width:'300px', height:'304px'}} src={feature3} />
          <Card.Body>
            <Card.Title>Easy Communication</Card.Title>
            <Card.Text>
              Say goodbye to chaos with our smart task management system
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" style={{width:'300px', height:'304px'}} src={feature4} />
          <Card.Body>
            <Card.Title>Analytics</Card.Title>
            <Card.Text>
              Say goodbye to chaos with our smart task management system
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Features;

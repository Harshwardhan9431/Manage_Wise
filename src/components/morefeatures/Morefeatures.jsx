import React from "react";
import Card from "react-bootstrap/Card";
import "./Morefeatures.css";
import svg1 from "./../../assets/svg1.svg";
import svg2 from "./../../assets/svg2.svg";
import svg3 from "./../../assets/svg3.svg";
import integrations from "./../../assets/integration.webp";

function Morefeatures() {
  return (
    <div className="morefeature-container">
      <div className="body-content">
        <p>🤩 AND MORE...</p>
        <h1>
          Explore an array of features that elevate your Productivity to new
          heights
        </h1>
        <p>
          Discover the tools that will revolutionize the way you manage and
          optimize your operations
        </p>
      </div>
      <div className="section-one">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              <img
                src={svg1}
                alt="Smartphone"
                style={{ width: "10%", height: "10%" }}
              />
            </Card.Subtitle>
            <Card.Title>Cross-Platform Compatibility</Card.Title>
            <Card.Text>
              Enjoy the flexibility of cross-platform compatibility. Our product
              works seamlessly across desktop, web, and mobile devices, allowing
              you to work from your preferred device.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              <img
                src={svg2}
                alt="Notificatio"
                style={{ width: "10%", height: "10%" }}
              />
            </Card.Subtitle>
            <Card.Title>Stay Informed with Essential Notifications</Card.Title>
            <Card.Text>
              Automate support from first customer contact to closing the
              ticket. Drastically improve time to resolution.Automate support
              from first customer contact to closing the ticket.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              <img
                src={svg3}
                alt="Fire"
                style={{ width: "10%", height: "10%" }}
              />
            </Card.Subtitle>
            <Card.Title>Secure Data Encryption at all times</Card.Title>
            <Card.Text>
              Trust in our robust data encryption to keep your sensitive
              information safe and secure. Rest easy knowing your data is
              protected at all times.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="section-two">
        <p>🛠️INTEGRATIONS</p>
        <h1>Enable integration with other popular tools and platforms</h1>
        <p>
          Seamlessly connect and amplify your workflow by enabling integration
          with a diverse array of widely-used tools and platforms.
        </p>
      </div>
      <img
        className="integ"
        src={integrations}
        alt="Integrations Search image"
        style={{ width: "40%", height: "60%" }}
      />
    </div>
  );
}

export default Morefeatures;

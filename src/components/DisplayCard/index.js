import { Card, Button, Badge } from "react-bootstrap";
import "./index.css";
export const DisplayCard = () => {
  return (
    <>
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Badge bg="danger">11% off</Badge>
          <div className="c-content">
            <div>
              <Card.Title className="c-title">Xiaomi 13 Pro</Card.Title>
              <Card.Text className="c-font">From 79,999</Card.Text>
            </div>
          </div>
          <div className="m-1 c-content mt-3">
            <Button variant="dark" className="m-1 px-4" size="sm">
              Buy Now
            </Button>
            <Button variant="outline-dark" className="m-1 px-4" size="sm">
              Learn More
            </Button>
          </div>
        </Card.Body>
        <Card.Img
          variant="top"
          src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677241587.64975684!348x348.jpg?f=webp"
        />
      </Card>
    </>
  );
};

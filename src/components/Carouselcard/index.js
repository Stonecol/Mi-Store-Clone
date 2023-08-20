import Carousel from "react-bootstrap/Carousel";
export const CarouselCard = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            src="https://i03.appmifile.com/728_operator_in/05/08/2023/fbecd7cbf1212fd4ab3ce250651b3f74.jpg?f=webp"
            alt=""
            className="d-block w-100 c-img"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            src="https://i03.appmifile.com/194_operator_in/17/08/2023/68b119cb98d9af64b70cf1646a9e60a3.jpg?f=webp"
            alt=""
            className="d-block w-100 c-img"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            src="https://i03.appmifile.com/991_operator_in/17/08/2023/2bd298ba2f336b124e8d6e4ef557d670.jpg?f=webp"
            alt=""
            className="d-block c-img"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

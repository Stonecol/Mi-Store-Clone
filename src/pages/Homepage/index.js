import { Button } from "react-bootstrap";
import "./index.css";
import { Trending } from "../../components/TrendingProduct";
import { trending } from "../../dummyData/trending";
export const Homepage = () => {
  return (
    <>
      {trending.map((product) => {
        return (<Trending props={product} />)
      })}
    </>
  );
};

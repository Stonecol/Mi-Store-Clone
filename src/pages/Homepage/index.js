import "./index.css";
import { Trending } from "../../components/TrendingProduct";
import { trending } from "../../dummyData/trending";
export const Homepage = () => {
  return (
    <>
      <div className="homepage-container">
        {trending.map((product) => {
          return <Trending props={product} />;
        })}
      </div>
    </>
  );
};

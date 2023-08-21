import { CarouselCard } from "../../components/Carouselcard";
import { ProductsContainer } from "../../components/ProductsContainer";
import { smartTvs } from "../../dummyData/smartTvs";
export const SmartHome = () => {
  return (
    <>
      <CarouselCard />
      <ProductsContainer props={smartTvs}/>
    </>
  );
};

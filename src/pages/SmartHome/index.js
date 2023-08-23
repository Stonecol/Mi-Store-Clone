import { CarouselCard } from "../../components/Carouselcard";
import { ProductsContainer } from "../../components/ProductsContainer";
import { smaartTvCarouselData, smartTvs } from "../../dummyData/smartTvs";
export const SmartHome = () => {
  return (
    <>
      <CarouselCard props={smaartTvCarouselData}/>
      <ProductsContainer props={smartTvs}/>
    </>
  );
};

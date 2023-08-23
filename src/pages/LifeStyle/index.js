import { CarouselCard } from "../../components/Carouselcard";
import { ProductsContainer } from "../../components/ProductsContainer";
import { lifestyle, lifestyleCarouselData } from "../../dummyData/lifeStyle";
export const LifeStyle = () => {
  return (
    <>
      <CarouselCard props={lifestyleCarouselData}/>
      <ProductsContainer props={lifestyle} />
    </>
  );
};

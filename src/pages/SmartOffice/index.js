import { CarouselCard } from "../../components/Carouselcard";
import { ProductsContainer } from "../../components/ProductsContainer";
import { laptopCarouselData, laptops } from "../../dummyData/laptops";
export const SmartOffice = () => {
  return (
    <>
      <CarouselCard props={laptopCarouselData}/>
      <ProductsContainer props={laptops} />
    </>
  );
};

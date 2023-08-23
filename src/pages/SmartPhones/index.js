import { CarouselCard } from "../../components/Carouselcard";
import { ProductsContainer } from "../../components/ProductsContainer";
import { phones, phonesCarouselData } from "../../dummyData/phones";
export const SmartPhones = () => {
  return (
    <>
      <CarouselCard props={phonesCarouselData} />
      <ProductsContainer props={phones} />
    </>
  );
};

import { CarouselCard } from "../../components/Carouselcard";
import { ProductsContainer } from "../../components/ProductsContainer";
import { phones } from "../../dummyData/phones";
export const SmartPhones = () => {
  return (
    <>
      <CarouselCard />
      <ProductsContainer props={phones}/>
    </>
  );
};

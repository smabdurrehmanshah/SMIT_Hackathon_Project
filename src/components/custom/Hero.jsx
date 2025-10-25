import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";

function Hero() {
  const imagesData = [
    "https://images.pexels.com/photos/1502216/pexels-photo-1502216.jpeg",
    "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg",
    "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
  ];
  return (
    <Carousel
      className="my-10 w-[90vw] mx-auto overflow-x-clip sm:overflow-visible"
      plugins={[
        AutoPlay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {imagesData.map((image) => {
          return (
            <CarouselItem key={image}>
              <img
                src={image}
                loading="lazy"
                className="h-[60vh] w-full object-cover rounded-3xl"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Hero;

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
    "https://images.pexels.com/photos/265631/pexels-photo-265631.jpeg",
    "https://images.pexels.com/photos/671629/pexels-photo-671629.jpeg",
    "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg",
    "https://images.pexels.com/photos/556565/pexels-photo-556565.jpeg",
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

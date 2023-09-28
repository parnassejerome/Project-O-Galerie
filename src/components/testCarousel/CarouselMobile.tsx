"use client";

import { useEffect, useState } from "react";

import SlideMobile from "./SlideMobile";
import CarouselButton from "../Buttons/CarouselButton";

//Interface for the temporary test image list
interface ImageProps {
  id: string;
  url: string;
}

interface CarouselMobileProps {
  imageList: ImageProps[];
}


export default function CarouselMobile({imageList}: CarouselMobileProps){
  //Je créé un tableau de slides en utilisant le tableau d'images
  const slides = imageList.map((imageList) => {
    return <SlideMobile key={imageList.id} url={imageList.url} />;
  });
  //currentSlide est un state qui permet d'avoir un index 'symboliques' pour les images, 
  //même s'il ne correspond pas réellement à l'index de l'image dans le tableau
  const [currentSlide, setCurrentSlide] = useState(0);
  //slidesEnd et slidesStart sont des states qui permettent de savoir si on est au début ou à la fin du carousel
  //Ils sont utilisés pour cacher les boutons de navigation
  const [slidesEnd, setSlidesEnd] = useState(false);
  const [slidesStart, setSlidesStart] = useState(true);

  useEffect(() => { 
    //Je check si l'index est égal à la longueur du tableau -1 (car l'index commence à 0)
    //Si c'est le cas, je set slidesEnd à true, sinon je le set à false
    if (currentSlide >= (slides.length - 1)) {
      setSlidesEnd(true);
    } else {
      setSlidesEnd(false);
    }
    //Je check si l'index est égal à 0 donc au début du carousel
    //Si c'est le cas, je set slidesStart à true
    if (currentSlide === 0) {
      setSlidesStart(true);
    } else {
      setSlidesStart(false);
    }      
  }, [currentSlide]);

  //previousSlide et nextSlide permettent de changer l'index (valeur de currentSlide)
  const previousSlide = () => {
    setCurrentSlide(currentSlide - 1);
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
    console.log(currentSlide);
  }

  return (
    //Cette div contient le carousel en entier et les boutons de nav sont positionnés par rappport à elle
    <div className="relative my-auto w-screen">
        {/*Cette div permet de délimiter ce que l'on peut voir de la div qu'elle contient*/}
      <div className="w-[90vw] mx-auto overflow-hidden">
        {/*Cette div contient toute les images 'à la suite' le translate permet
          de se déplacer horizontalement entre celle si comme si l'on faisait défiler un bandeau d'images*/}
        <div className="flex transition-transform ease-out duration-500"
            style={{transform: `translateX(-${currentSlide*100}%)`}}>
          {slides}
        </div>
        {/*-----*/}     
      </div>
      {/*Si on est au début (slideStart) le bouton previous est hidden*/}
      {/*Si on est à la fin (slideEnd) le bouton next est hidden*/}
      <CarouselButton direction="left" className={` text-4xl absolute top-1/2 -translate-y-1/2 ${slidesStart ? "hidden" : ""}`} onClick={previousSlide} />
      <CarouselButton direction="right" className={` text-4xl absolute right-0 top-1/2 -translate-y-1/2 ${slidesEnd ? "hidden" : ""}`} onClick={nextSlide}/>
    </div>     

  );
}
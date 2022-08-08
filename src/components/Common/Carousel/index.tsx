// Dependencies
import React, { FC, ReactNode } from 'react';
import OwlCarousel from 'react-owl-carousel3';

import * as S from './styles';

// Interface
interface ICarouselOption {
  startPosition?: number;
  loop?: boolean;
  nav?: boolean;
  dots?: boolean;
  autoplayHoverPause?: boolean;
  autoplay?: boolean;
  autoplayTimeout?: number;
  items?: number;
  margin?: number;
  navText?: ['', ''];
  mouseDrag?: boolean;
}

export interface ICarouselProps {
  children: ReactNode;
  option?: ICarouselOption;
}

// Constants
const defaultOption = {
  startPosition: -1,
  loop: false,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: false,
  autoplayTimeout: 5,
  items: 1,
  margin: 5,
  navText: ['', ''],
  mouseDrag: true,
};

// Export Icon component
export const Carousel: FC<ICarouselProps> = ({ children, option }) => (
  <S.CarouselWrapper>
    <OwlCarousel className="owl-theme" {...defaultOption} {...option}>
      {children}
    </OwlCarousel>
  </S.CarouselWrapper>
);

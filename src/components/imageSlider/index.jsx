import { useState } from 'react';
import styled from 'styled-components';

import ImageMagnifier from '../imageMagnifier';

// --- Styled Components ---
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16/9; /* 👈 RESPONSIVO */
  margin: 2rem auto;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const SlideWrapper = styled.div`
  display: flex;
  height: 100%; /* 👈 IMPORTANTE */
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translate}%);
`;

const SlideImage = styled.img`
  width: 100%;
  flex-shrink: 0;
  object-fit: cover;
  /* aspect-ratio: 16/9; // Mantém a proporção ideal para prints de tela */
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  ${(props) => (props.direction === 'left' ? 'left: 10px;' : 'right: 10px;')}
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => (props.active ? '#0070f3' : 'rgba(255, 255, 255, 0.5)')};
  cursor: pointer;
  transition: background 0.2s;
`;

// --- Componente Principal ---
const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <SliderContainer>
      <SlideWrapper translate={-(currentIndex * 100)}>
        {images.map((img, index) => (
          <ImageMagnifier
            key={index}
            src={img.src}
            alt={img.alt || `Slide ${index + 1}`}
          />
        ))}
      </SlideWrapper>

      <NavButton direction="left" onClick={prevSlide}>
        &#10094;
      </NavButton>
      <NavButton direction="right" onClick={nextSlide}>
        &#10095;
      </NavButton>

      <DotsContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </DotsContainer>
    </SliderContainer>
  );
};

export default ImageSlider;
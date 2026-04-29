// import React, { useState, useRef } from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   flex-shrink: 0;
//   cursor: none; /* Esconde o ponteiro do mouse para mostrar só a lupa */
// `;

// const BaseImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: contain; /* 👈 Muda de cover para contain */
//   display: block;
// `;

// const MagnifierCircle = styled.div`
//   position: absolute;
//   pointer-events: none; /* Garante que a lupa não bloqueie os eventos do mouse */
//   width: 200px; /* 👈 Tamanho da bola da lupa (ajuste como quiser) */
//   height: 200px;
//   border-radius: 50%; /* Transforma o quadrado numa bola */
//   border: 3px solid rgba(255, 255, 255, 0.8);
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

//   /* Centraliza exatamente na ponta do cursor */
//   transform: translate(-50%, -50%);
//   background-repeat: no-repeat;

//   /* Transição suave para aparecer/desaparecer */
//   opacity: ${(props) => (props.$show ? 1 : 0)};
//   transition: opacity 0.2s ease;
//   z-index: 10;
// `;

// const ImageMagnifier = ({ src, alt }) => {
//   const [magnifierState, setMagnifierState] = useState({
//     show: false,
//     x: 0,
//     y: 0,
//     bgPosX: 0,
//     bgPosY: 0,
//     bgWidth: 0,
//     bgHeight: 0,
//   });

//   const containerRef = useRef(null);
//   const zoomLevel = 1; // 👈 Nível do zoom dentro da lupa

//   const handleMouseMove = (e) => {
//     if (!containerRef.current) return;

//     // Pega o tamanho e posição da imagem original
//     const { left, top, width, height } = containerRef.current.getBoundingClientRect();

//     // Calcula a posição do mouse em Pixels dentro da imagem
//     const x = e.clientX - left;
//     const y = e.clientY - top;

//     // Calcula a posição do background em Porcentagem (0 a 100)
//     // Isso garante que o centro da lupa mostre o lugar certo
//     const bgPosX = (x / width) * 100;
//     const bgPosY = (y / height) * 100;

//     setMagnifierState({
//       show: true,
//       x,
//       y,
//       bgPosX,
//       bgPosY,
//       bgWidth: width * zoomLevel,
//       bgHeight: height * zoomLevel,
//     });
//   };

//   return (
//     <Container
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setMagnifierState(prev => ({ ...prev, show: true }))}
//       onMouseLeave={() => setMagnifierState(prev => ({ ...prev, show: false }))}
//     >
//       <BaseImage src={src} alt={alt} />

//       <MagnifierCircle
//         $show={magnifierState.show}
//         style={{
//           left: `${magnifierState.x}px`,
//           top: `${magnifierState.y}px`,
//           backgroundImage: `url(${src})`,
//           backgroundSize: `${magnifierState.bgWidth}px ${magnifierState.bgHeight}px`,
//           backgroundPosition: `${magnifierState.bgPosX}% ${magnifierState.bgPosY}%`
//         }}
//       />
//     </Container>
//   );
// };

// export default ImageMagnifier;

import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  cursor: crosshair; /* 👈 Cursor de mira, padrão em e-commerces */
`;

const BaseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

const ZoomOverlay = styled.div`
  position: absolute;
  /* As variáveis abaixo garantem que o zoom cubra SÓ a imagem, ignorando as bordas vazias */
  top: ${(props) => props.$top}px;
  left: ${(props) => props.$left}px;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: ${(props) => props.$bgWidth}px ${(props) => props.$bgHeight}px;
  background-position: ${(props) => props.$bgPosX}% ${(props) => props.$bgPosY}%;
  
  background-color: white; /* Esconde a imagem de baixo na hora do zoom */
  opacity: ${(props) => (props.$show ? 1 : 0)};
  pointer-events: none; /* Garante que o mouse continue lendo a div de baixo */
  z-index: 10;
  
  /* Transição suave ao entrar e sair do zoom */
  transition: opacity 0.2s ease;
`;

const ImageMagnifier = ({ src, alt }) => {
  const [zoomState, setZoomState] = useState({
    show: false,
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    bgWidth: 0,
    bgHeight: 0,
    bgPosX: 50,
    bgPosY: 50,
  });

  const containerRef = useRef(null);
  const imgRef = useRef(null);

  const zoomLevel = 2.5; // 👈 Nível do zoom

  const handleMouseMove = (e) => {
    if (!containerRef.current || !imgRef.current) return;
    const img = imgRef.current;

    if (!img.naturalWidth) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();

    // 1. Proporções para descobrir o tamanho real da imagem visível
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const containerRatio = width / height;

    let renderedWidth, renderedHeight;
    if (imgRatio > containerRatio) {
      renderedWidth = width;
      renderedHeight = width / imgRatio;
    } else {
      renderedHeight = height;
      renderedWidth = height * imgRatio;
    }

    // 2. Descobre o tamanho das bordas vazias para posicionar o overlay
    const offsetX = (width - renderedWidth) / 2;
    const offsetY = (height - renderedHeight) / 2;

    // 3. Calcula a posição do mouse relativa SÓ à imagem
    const mouseX = e.clientX - left - offsetX;
    const mouseY = e.clientY - top - offsetY;

    // Se o mouse for para a borda vazia, desliga o zoom suavemente
    if (mouseX < 0 || mouseX > renderedWidth || mouseY < 0 || mouseY > renderedHeight) {
      if (zoomState.show) setZoomState((prev) => ({ ...prev, show: false }));
      return;
    }

    // 4. Porcentagem exata do mouse (0 a 100) para mover o background
    const percentX = (mouseX / renderedWidth) * 100;
    const percentY = (mouseY / renderedHeight) * 100;

    setZoomState({
      show: true,
      top: offsetY,
      left: offsetX,
      width: renderedWidth,
      height: renderedHeight,
      bgWidth: renderedWidth * zoomLevel,
      bgHeight: renderedHeight * zoomLevel,
      bgPosX: percentX,
      bgPosY: percentY,
    });
  };

  return (
    <Container
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setZoomState(prev => ({ ...prev, show: false }))}
    >
      <BaseImage ref={imgRef} src={src} alt={alt} />

      <ZoomOverlay
        src={src}
        $show={zoomState.show}
        $top={zoomState.top}
        $left={zoomState.left}
        $width={zoomState.width}
        $height={zoomState.height}
        $bgWidth={zoomState.bgWidth}
        $bgHeight={zoomState.bgHeight}
        $bgPosX={zoomState.bgPosX}
        $bgPosY={zoomState.bgPosY}
      />
    </Container>
  );
};

export default ImageMagnifier;
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useGlobalState } from "../../../context/GlobalStateContext";

import perfil from '../../../assets/images/perfil.jpeg';
import { Containerfixed, Container, Menu, XContainer, Bar, DiagonalOne, DiagonalTwo } from './styles';

const SideBar = () => {
  const { isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();

  const [isLoaded, setIsLoaded] = useState(false);
  const [activeLink, setActiveLink] = useState('/'); // Estado para armazenar o link ativo
  const router = useRouter(); // Hook para pegar a rota atual

  useEffect(() => {
    setIsLoaded(true);
    setActiveLink(router.pathname); // Atualiza o estado com a rota atual
    console.log(router.pathname);
  }, [router.pathname]); // Executa sempre que a rota mudar


  return (
    <Containerfixed isHamburguerOpen={isHamburguerOpen}>
      {isHamburguerOpen &&
        <XContainer onClick={() => setIsHamburguerOpen(!isHamburguerOpen)}>
          <DiagonalOne />
          <DiagonalTwo />
        </XContainer>
      }
      <Container>
        <Link href="/">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "solid 2px #243b53", borderRadius: '50%', width: "160px", height: "160px", marginTop: "40px" }}>
            <Image src={perfil} width={150} height={150} style={{ borderRadius: '50%' }} className="profile-image" alt="img" />
          </div>
        </Link>
        <h3 style={{ color: "#d1dfed" }}>Jorge Luiz de Medeiros e Silva Jr</h3>
        <p style={{ color: "#bcccdc", fontSize: "20px" }}>Web Developer</p>
        <div style={{ width: "260px", border: "solid 1px #243B53", marginTop: "20px" }}></div>
        <Menu>
          <ul>
            <li>
              <Link href="/">
                <span onClick={() => setActiveLink('/sobre')} className={activeLink === '/' ? 'active' : ''}>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/sobre">
                <span onClick={() => setActiveLink('/sobre')} className={activeLink === '/sobre' ? 'active' : ''}>Sobre</span>
              </Link>
            </li>
            <li>
              <Link href="/projetos">
                <span onClick={() => setActiveLink('/projetos')} className={activeLink === '/projetos' ? 'active' : ''}>Projetos</span>
              </Link>
            </li>
          </ul>
        </Menu>
        <div style={{ width: "260px", border: "solid 1px #243B53", marginTop: "20px" }}></div>
      </Container>
    </Containerfixed>
  );
};

export default SideBar;




// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import perfil from '../../../assets/images/perfil.jpeg';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// import { Containerfixed, Container, Menu, XContainer, Bar, DiagonalOne, DiagonalTwo } from './styles';

// const SideBar = ({ isHamburguerOpen, setIsHamburguerOpen }) => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [activeLink, setActiveLink] = useState('/'); // Estado para armazenar o link ativo
//   const router = useRouter(); // Hook para pegar a rota atual

//   useEffect(() => {
//     setIsLoaded(true);
//     setActiveLink(router.pathname); // Atualiza o estado com a rota atual
//     console.log(router.pathname);
//   }, [router.pathname]); // Executa sempre que a rota mudar

//   const [ripple, setRipple] = useState([]);

//   const handleMouseMove = (e) => {
//     const { left, top } = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - left;
//     const y = e.clientY - top;

//     setRipple([...ripple, { x, y, id: Date.now() }]);

//     setTimeout(() => {
//       setRipple((prev) => prev.filter((r) => r.id !== Date.now()));
//     }, 1000);
//   };

//   const handleMouseLeave = () => {
//     setRipple([]); // Remove o efeito ao sair da imagem
//   };

//   if (!isLoaded) return null; // Aguarda o carregamento


//   return (
//     <Containerfixed isHamburguerOpen={isHamburguerOpen}>
//       {isHamburguerOpen &&
//         <XContainer onClick={() => setIsHamburguerOpen(!isHamburguerOpen)}>
//           <DiagonalOne />
//           <DiagonalTwo />
//         </XContainer>
//       }
//       <Container>
//         <Link href="/">
//           <div className="profile-container"
//             onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "solid 2px #243b53", borderRadius: '50%', width: "160px", height: "160px", marginTop: "40px" }}>
//             <Image src={perfil} width={150} height={150} className="profile-image" alt="img" />
//             {ripple.map((r) => (
//               <span
//                 key={r.id}
//                 className="ripple"
//                 style={{ left: r.x, top: r.y }}
//               />
//             ))}
//           </div>
//         </Link>
//         <h3 style={{ color: "#d1dfed" }}>Jorge Luiz de Medeiros e Silva Jr</h3>
//         <p style={{ color: "#bcccdc", fontSize: "20px" }}>Web Developer</p>
//         <div style={{ width: "260px", border: "solid 1px #243B53", marginTop: "20px" }}></div>
//         <Menu>
//           <ul>
//             <li>
//               <Link href="/">
//                 <span onClick={() => setActiveLink('/sobre')} className={activeLink === '/' ? 'active' : ''}>Home</span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/sobre">
//                 <span onClick={() => setActiveLink('/sobre')} className={activeLink === '/sobre' ? 'active' : ''}>Sobre</span>
//               </Link>
//             </li>
//             <li>
//               <Link href="/projetos">
//                 <span onClick={() => setActiveLink('/projetos')} className={activeLink === '/projetos' ? 'active' : ''}>Projetos</span>
//               </Link>
//             </li>
//           </ul>
//         </Menu>
//         <div style={{ width: "260px", border: "solid 1px #243B53", marginTop: "20px" }}></div>
//       </Container>
//     </Containerfixed>
//   );
// };

// export default SideBar;
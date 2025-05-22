import { useGlobalState } from "../../../context/GlobalStateContext";
import { ContentWrapper } from './styles';

const HeaderLayout = () => {
  const { isHamburguerOpen, setIsHamburguerOpen } = useGlobalState();
  const toggleHamburguer = () => setIsHamburguerOpen(!isHamburguerOpen);

  return (
    <ContentWrapper>
      <div onClick={toggleHamburguer} className='contentWrapper-hamburguer'>
        <div className='hamburguer'></div>
        <div className='hamburguer'></div>
        <div className='hamburguer'></div>
      </div>
    </ContentWrapper>
  );
};

export default HeaderLayout;
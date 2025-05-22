import { ContentWrapper } from './styles';

const MainContent = ({ children }) => {
  return (
    <ContentWrapper>
      {children}
    </ContentWrapper>
  );
};

export default MainContent;
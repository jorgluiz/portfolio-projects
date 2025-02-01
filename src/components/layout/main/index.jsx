import { Container } from './styles';

const Main = ({ children, isHamburguerOpen }) => {
  return (
    <Container isHamburguerOpen={isHamburguerOpen}>
      {children}
    </Container>
  );
};

export default Main;
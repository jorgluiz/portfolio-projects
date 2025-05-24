import styled from 'styled-components';

const Title = styled.h3`
  color: #2980b9;
  text-align: center;
  cursor: pointer;
  user-select: none;

  &.title-carousel, 
  &.title-stripe,
  &.title-portfolio,
  &.title-dataAnalysisTwitter,
  &.title-streamDolby,
  &.title-imageGenerator,
  &.title-playerVideoCustomizado,
  &.title-catalogo,
  &.title-ytformp3,
  &.title-ytformp4Cloud,
  &.title-ytformp4Location,
  &.title-ytAnalyseVideo,
  &.title-vendasCurso {
    line-height: 28px;
    margin-bottom: 20px;
  }
`;

export default Title;

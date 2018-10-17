import styled from 'styled-components'

const WeatherTitle = styled.h1`
  margin-bottom: 0;
  line-height: 1.2;
  font-weight: 300;
  color: ${props => props.theme.grey};
  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`

export default WeatherTitle
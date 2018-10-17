import styled from 'styled-components'

const CityWrapper = styled.div`
  position: relative;
  width:60%;
  margin: auto;
  button {
    background-image: url('../static/search.svg');
    position: absolute;
    padding: 10px;
    cursor: pointer;
    right:  0px;
    border: none;
    outline: none;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`

export default CityWrapper
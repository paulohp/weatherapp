import styled from 'styled-components'

const CityInput = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  width: 100%;
  height: 3rem;
  ::placeholder {
    font-size: 2.5rem;
    text-align:center;
  }
  :focus {
    outline: none;
  }
`

export default CityInput
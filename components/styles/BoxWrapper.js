import styled from 'styled-components'

const BoxWrapper = styled.div`
  text-align: center;
  padding: 12rem;
  @media (max-width: 600px) {
    padding: 5rem 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
  }
`

export default BoxWrapper
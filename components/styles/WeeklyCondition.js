import styled from 'styled-components'

const WeeklyCondition = styled.li`
  display:inline-block;
  text-align:center;
  i {
    font-size: 5rem;
    color: ${props => props.theme.grey};
    @media (max-width: 600px) {
      font-size: 3rem;
    }
  }
  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`

export default WeeklyCondition
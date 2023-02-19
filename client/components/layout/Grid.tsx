import styled from 'styled-components'

// responsive design for user details tile using media query
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
export default Grid;
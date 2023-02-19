import styled from 'styled-components'
import {colors} from '../../styles/color'

const Button = styled.button`
  display: block;
  background-color: ${colors.pantone};
  color: ${colors.white};
  font-size: 1rem;
  font-family: Boston;
  font-weight: 700;
  border-radius: 8px;
  text-align: center;
  padding: 15px 32px;
  margin: 20px auto;

  &:hover {
    background-color: ${colors.darkCyan};
  }
`
export default Button
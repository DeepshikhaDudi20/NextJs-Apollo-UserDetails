import styled from 'styled-components'
import {colors} from '../../styles/color'

export const TileWrapper = styled('div')`
  padding: 8px;
  display: flex;
  flex-direction: column;
  min-height: 175px;
`
export const TileContent = styled.div`
  background: ${colors.deepSeaBlue};
  font-family: Boston;
  font-weight: 500;
  padding: 16px;
  border-radius: 8px;
  flex: 1;
`
export const Name = styled.h2`
  color: ${colors.white};
  font-weight: 700;
  font-size: 1rem;
  line-height: 1rem;
  margin-bottom: 38px;
  margin-top: 10px;
`
export const Phone = styled.a`
  color: ${colors.white};
  font-size: 0.95rem;
  display: inline-block;
  margin-bottom: 0.8rem;
`
export const Email = styled.a`
  color: ${colors.white};
  font-size: 0.85rem;
  display: inline-block;
  margin-bottom: 0.1rem;
`
export const Address = styled.p`
  color: ${colors.white};
  font-size: 0.85rem;
  line-height: 2rem;
  margin-bottom: 0.5rem;
`

import styled from 'styled-components'
import { fadeIn } from '../../../config/Config.style'

export const HomeStyled = styled.div`
  animation: ${fadeIn} 1s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  p{
    margin-left: 5px;
    font-size: 11px;
  }
  svg{
    cursor: pointer;
    path{
      fill: var(--ui-negative);
    }
  }
`

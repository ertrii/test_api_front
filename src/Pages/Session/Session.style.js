import styled from 'styled-components'
import { fadeIn } from '../../../config/Config.style'

export const SessionStyled = styled.div`
  animation: ${fadeIn} 1s ease;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Img = styled.img`
  width: 100%;
  margin-bottom: 1em;
`

export const FormLogin = styled.form`
  max-width: 350px;
  padding: 2em;
  border: 1px solid var(--alto);
  border-radius: 5px;
  box-shadow: 1px 1px 5px -2px #e1e1e1;
  .Input{
    margin-top: .2em;
    margin-bottom: 1em;
  }
  @media screen and (max-width: 520px) {
    border: 0;
    max-width: auto;
    width: 100%;
    box-shadow: none;
  }
`

export const Label = styled.label`
  font-size: 11px;
`

export const Message = styled.p`
  font-size: 12px;
  display: flex;
  align-items: center;
  padding: .7em;
  background-color: var(--ui-negative);
  color: white;
  margin-bottom: 1em;
  svg{
    width: 15px;
    margin-right: 5px;
    path{
      fill: white;
    }
  }
`

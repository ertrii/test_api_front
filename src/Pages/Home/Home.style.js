import styled from 'styled-components'
import { fadeIn } from '../../../config/Config.style'

export const HomeStyled = styled.div`
  animation: ${fadeIn} 1s ease;
  width: 100%;
  max-width: 950px;
  margin: 2em auto;
  padding: 2em;
  border: 1px solid var(--border);
  h1{
    margin-bottom: 1em;
  }
  .form_car{
    display: flex;
    margin-bottom: 1em;
    .Input{
      margin-right: 1em;
    }
  }
  .user_form{
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    padding: 2em;
    border: 1px solid var(--border);
    h2{
      text-align: center;
      margin-bottom: 5px;
    }
    .Input{
      margin-bottom: 5px;
    }
  }
`

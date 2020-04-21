import styled from 'styled-components'

export const Block = styled.div`
  display: flex;
  flex-direction: ${p => p.flexDirection ? p.flexDirection : 'row'};
  justify-content: ${p => p.justifyContent ? p.justifyContent : 'space-evenly'}
`

import styled from '@emotion/styled'

export const TopBarStyled = styled('div')`
  display: flex;
  gap: var(--ui-size-md);

  align-items: center;

  background-color: var(--ui-color-white);
  padding: var(--ui-size-sm) var(--ui-size-md);

  & > *:nth-child(2) {
    margin-left: auto;
  }
`

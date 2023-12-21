import styled from '@emotion/styled'

export const ButtonStyled = styled.button`
  width: 375px;
  height: 58px;
  padding: 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--button-color-default);

  &:disabled {
    background-color: var(--button-color-disabled);
    opacity: 60%;
  }
`

import styled from '@emotion/styled'

export const ButtonStyled = styled.button`
  width: 375px;
  height: 58px;
  margin-top: 20px;
  margin-left: 20px;
  padding: 17px 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--button-color-default);

  &:disabled {
    background-color: var(--button-color-disabled);
  }
`

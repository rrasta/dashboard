import styled from '@emotion/styled'

export const MenuStyled = styled('nav')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background: #ffffff;
  width: 296px;
`

export const Logo = styled('div')`
  margin-bottom: 60px;
  display: flow;
`

export const MenuList = styled('ul')`
  list-style: none;
  padding: 0;
  width: 100%;
    display: compact;
`

export const MenuItem = styled('li')`
  font-family: Poppins;
  width: 80%;
  padding: 10px;
  cursor: revert;
  display: flex;
  align-items: center;
  font-size: 1.2em;

  &:hover {
    background-color: #9ac4fc;
    width: 80%;
      border-radius: 10px;
  }

  svg {
    margin-right: 10px;
  }
`

export const LogoutButton = styled(MenuItem)`
    margin-top: 30rem;
  background: transparent;

  &:hover {
    background-color: #d491fc;
  }
`

// Dodaj odpowiednie kolory, marginesy i inne style według preferencji.

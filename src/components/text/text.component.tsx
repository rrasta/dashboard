import styled from '@emotion/styled'

import { InputVariant } from '../../types/common.type.ts'

export const H3 = styled('h3')`
  color: var(--ui-color-black-60);

  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export const InputPlaceholder = styled('div')<{ variant: InputVariant }>`
  color: var(
    ${({ variant }) =>
      variant === 'primary' ? '--ui-color-black-2' : '--ui-color-black-100'}
  );
  font-family: Inter, serif;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

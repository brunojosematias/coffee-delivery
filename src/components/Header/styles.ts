import styled, { css } from 'styled-components';

export interface Product {
  id: number
  image: string;
  name: string;
  types: string[];
  description: string;
  price: number;
  quantity: number
}
interface HeaderContainerProps {
  $productCart: (Product | null)[];
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  padding-block: 2rem;
  background: ${({ theme }) => theme.colors.background};

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding-inline: 7rem;

  @media only screen and (max-width: 767px)  {
    padding-inline: 2rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding-inline: 2rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: .75rem;

    a {
      padding: .5rem;
      border-radius: 6px;
      position: relative;

      background: ${({ theme }) => theme.colors['yellow-light']};

      ${({ $productCart }) => $productCart.length > 0 && css`
        &::after {
          content: '${$productCart.length}';
          padding: .5rem;
          font-size: .75rem;
          font-weight: 800;
          color: ${({ theme }) => theme.colors.background};
          clip-path: circle();
          background: ${({ theme }) => theme.colors['yellow-dark']};
          position: absolute;
          top: -0.8rem;
          right: -0.7rem;
        }
      `}
    }
  }
`;

export const Location = styled.span`
  padding: .5rem;
  font-size: .875rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: .25rem;

  background: ${({ theme }) => theme.colors['purple-light']};
  color: ${({ theme }) => theme.colors['purple-dark']};
`;

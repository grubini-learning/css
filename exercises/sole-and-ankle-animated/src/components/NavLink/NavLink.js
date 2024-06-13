import React from "react";
import styled from "styled-components";

import { WEIGHTS } from "../../constants";

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <NormalText>{children}</NormalText>
      <HoverText aria-hidden={true}>{children}</HoverText>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  position: relative;
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
  transform: translateY(var(--transition-from));
  transition: transform 500ms;

  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover &,
    ${Wrapper}:focus & {
      transition: transform 250ms;
      transform: translateY(var(--transition-to));
    }
  }
`;

const NormalText = styled(Text)`
  --transition-from: 0%;
  --transition-to: -100%;
`;

const HoverText = styled(Text)`
  position: absolute;
  top: 0;
  left: 0;
  --transition-from: 100%;
  --transition-to: 0%;
  font-weight: ${WEIGHTS.bold};
`;

export default NavLink;

# Groups and Gaps

Before cluttering the HTML markup, its better to leverage the margin of a single item to push a group.

```jsx
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <Logo>My Thing</Logo>
      <AuthButton>Log in</AuthButton>
      <AuthButton>Sign up</AuthButton>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  gap: 8px;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  margin-right: auto;
`;

const AuthButton = styled.button``;

export default Header;
```

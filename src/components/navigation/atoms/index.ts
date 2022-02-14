import styled from 'styled-components';

export const NavList = styled.div`
  display: flex;
  align-items: center;
  a {
    display: block;
    width: 50%;
    padding: 8px 16px;
    text-align: center;
    color: var(--text-color);
    transition: .2s ease;
    
    &:hover {
      background-color: #f2f2f2;
    }
    
    &.active {
      background-color: var(--primary);
      color: #fff;
    }
  }
`
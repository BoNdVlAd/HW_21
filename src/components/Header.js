import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: 80px;
  background-color: #2b303a;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  font-size: 24px;
  a {
    color: #fff;
    text-decoration: none;
    transition: all ease 0.3s;
    &: hover {
      opacity: 0.4;
    }
    &.active {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  const [active, setActive] = React.useState('make');

  React.useEffect(() => {
    const path = window.location.pathname.split('/')[1];
    if (!path) {
      return;
    }
    setActive(path);
  }, []);

  return (
    <>
      <Wrapper>
        <Link
          onClick={() => setActive('make')}
          className={active === 'make' ? 'active' : ''}
          to="make">
          make a post
        </Link>
        <Link
          onClick={() => setActive('posts')}
          className={active === 'posts' ? 'active' : ''}
          to="posts">
          posts
        </Link>
      </Wrapper>
    </>
  );
};

export default Header;

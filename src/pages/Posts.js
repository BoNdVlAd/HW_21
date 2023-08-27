import React from 'react';
import styles from './Publications.module.scss';
import Post from '../components/Post';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 0 auto;
  padding: 50px 0;
`;

const Posts = () => {
  const ANAKIN_IMAGE =
    'https://www.bobafettfanclub.com/tn/200x200/multimedia/galleries/albums/userpics/10001/anakin-skywalker-1569312236.jpeg';

  const RAY_IMAGE =
    'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale';

  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <>
      <Wrapper>
        {posts.map((e, index) => (
          <Post
            key={e}
            author={{
              name: e.author,
              photo: e.avatarUrl,
              nickname: '@dart_vader',
            }}
            content={e.text}
            image={e.imageUrl}
            date={e.date}
            likes={e.likes}
            comments={e.comments}
            shares={e.shares}
            id={index}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default Posts;

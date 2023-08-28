import React from 'react';
import { styled } from 'styled-components';
import Dropdown from '../components/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../store/postsSlice';
import SubmitButton from '../components/SubmitButton';

const Wrapper = styled.div`
  display: flex;
  width: 400px;
  height: 500px;
  background-color: #2b303a;
  margin: 0 auto;
  margin-top: 200px;
  border-radius: 15px;
  transition: all ease 0.5s;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;
  transform: scale(0);
  color: #fff;
  &.active {
    transform: scale(1);
  }
`;

const Flex = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  font-weight: 600;
  textArea {
    border: none;
    resize: none;
    outline: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    padding: 10px;
  }
`;

const Menu = styled.ul`
  margin: 1px 0 0;
  padding: 0;
  border: 1px solid #bebebe;
  max-height: 100px;
  overflow-y: auto;
`;

const MakePost = () => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const authors = ['Anakin skywalker', 'Ryan Gosling', 'Leonardo DiCaprio'];
  const authorsAvatars = [
    'https://www.bobafettfanclub.com/tn/200x200/multimedia/galleries/albums/userpics/10001/anakin-skywalker-1569312236.jpeg',
    'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcS3wVCeuLfmptdaglkD43vkQtyU8FA9qe13gZFGBim8L_pGAbyOnMFMBnJHNlPHLcxaA-qZfoZKMjj6y7s',
    'https://www.hollywoodreporter.com/wp-content/uploads/2014/11/leonardo_dicaprio.jpg?w=3000',
  ];
  const [selectedAuthor, setSelectedAuthor] = React.useState();
  const [text, setText] = React.useState('');
  const [iamgeUrl, setImageUrl] = React.useState('');
  const windowRef = React.useRef();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  React.useLayoutEffect(() => {
    setTimeout(() => {
      windowRef.current.classList.add('active');
    });
    return () => {
      windowRef.current.classList.remove('active');
    };
  }, []);

  const submitAddPost = () => {
    let date = new Date();
    dispatch(
      addPost({
        id: posts.length + 1,
        avatarUrl: authorsAvatars[authors.indexOf(selectedAuthor)],
        text: text,
        imageUrl: iamgeUrl,
        author: selectedAuthor,
        likes: 0,
        comments: 0,
        shares: 0,
        date: `${date.getUTCDate()} ${monthNames[date.getMonth()]}`,
      }),
    );
  };

  return (
    <>
      <Wrapper ref={windowRef}>
        <h2>POST</h2>
        <Flex>
          Text
          <textarea onChange={(e) => setText(e.target.value)}></textarea>
        </Flex>
        <Flex>
          Image url
          <textarea onChange={(e) => setImageUrl(e.target.value)}></textarea>
        </Flex>
        <Flex>
          Author
          <Dropdown
            selectedAuthor={selectedAuthor}
            setSelectedAuthor={setSelectedAuthor}
            authors={authors}
          />
        </Flex>
        <SubmitButton onClick={submitAddPost}>Submit</SubmitButton>
      </Wrapper>
    </>
  );
};

export default MakePost;

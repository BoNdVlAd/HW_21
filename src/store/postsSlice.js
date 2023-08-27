import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    avatarUrl:
      'https://www.bobafettfanclub.com/tn/200x200/multimedia/galleries/albums/userpics/10001/anakin-skywalker-1569312236.jpeg',
    text: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
    imageUrl:
      'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale',
    author: 'Anakin skywalker',
    likes: 124,
    comments: 56,
    shares: 19,
    date: '26 лют.',
  },
];

export const counterSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    //posts
    addPost: (state, action) => {
      state.push(action.payload);
    },
    //comments
    addComment: (state, actions) => {
      state[actions.payload.id].comments += 1;
    },
    removeComment: (state, actions) => {
      state[actions.payload.id].comments -= 1;
    },
    //shares
    addShare: (state, actions) => {
      state[actions.payload.id].shares += 1;
    },
    removeShare: (state, actions) => {
      state[actions.payload.id].shares -= 1;
    },
    //likes
    addLike: (state, actions) => {
      state[actions.payload.id].likes += 1;
    },
    removeLike: (state, actions) => {
      state[actions.payload.id].likes -= 1;
    },
  },
});

export const { addPost, addComment, removeComment, addShare, removeShare, addLike, removeLike } =
  counterSlice.actions;

export default counterSlice.reducer;

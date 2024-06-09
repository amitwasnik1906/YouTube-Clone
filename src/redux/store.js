import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/auth.reducer";
import {
  channelVideosReducer,
  homeVideosReducer,
  relatedVideoReducer,
  searchedVideosReducer,
  selectedVideoReducer,
  subscriptionsChannelReducer,
} from "./reducers/videos.reducer";
import { channelDetailsReducer } from "./reducers/channel.reducer";
import { commentListReducer } from "./reducers/comments.reducer";

const sampleSlice = createSlice({
  name: "sample",
  initialState: {
    name: "amit",
    age: 20,
  },
  reducers: {},
});

const initialState = {};

const rootReducer = combineReducers({
  sample: sampleSlice.reducer,
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  commentList: commentListReducer,
  relatedVideos: relatedVideoReducer,
  searchedVideos: searchedVideosReducer,
  subscriptionsChannel: subscriptionsChannelReducer,
  channelVideos: channelVideosReducer,
});

const store = configureStore({
  reducer: rootReducer,
  initialState,
});

export default store;

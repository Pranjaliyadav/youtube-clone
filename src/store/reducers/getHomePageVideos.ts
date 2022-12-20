import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";
import { YOUTUBE_API_URL } from "../../utils/constants";
import { parseData } from "../../utils";
import { HomePageVideos } from "../../Types";

const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;
export const getHomePageVideos = createAsyncThunk(
  "youtubeApp/homePageVideos",
  async (isNext: boolean, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
      //getting nextpagetoken and videos from our redux state
      //videos is video array and nextPagetoken is for infinite scroll
      //when we want next page videos we use this nextPageToken provided by youtube data api
    } = getState() as RootState;
    const {
      data: { items, nextPageToken },
    } = await axios.get(
        `${YOUTUBE_API_URL}/search?maxResults=20&q="q2han"&key=${API_KEY}&part=snippet&type=video&${
          isNext ? `pageToken=${nextPageTokenFromState}` : ""
        }`
      );
    // console.log(items);
    const parsedData: HomePageVideos[] = await parseData(items);
    return { parsedData: [...videos, ...parsedData], nextPageToken };
  }//we added "strictNullChecks":false to tsconfig.json to resolve this pARSEDdATA
);
//getHomePageVideos is a reducer
//we created a thunk to grab homepage videos

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AdvertisementState {
  // Content
  title: string;
  content: string;
  callToActionText: string;
  callToActionLink: string;

  // Properties
  letterSpacing: number;
  lineSpacing: number;
  advertisementWidth: number;
}

const initialState: AdvertisementState = {
  content:
    "Test Content lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  title: "Advertisement",
  callToActionText: "Click here",
  callToActionLink: "https://www.google.com",
  letterSpacing: 0,
  lineSpacing: 1.3,
  advertisementWidth: 400,
};

export const advertisementSlice = createSlice({
  name: "advertisement",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setContent: (state, action: PayloadAction<string>) => {
      console.log(
        "🚀 ~ file: advertisement.ts:37 ~ action.payload:",
        action.payload,
      );
      state.content = action.payload;
    },
    setCallToActionText: (state, action: PayloadAction<string>) => {
      state.callToActionText = action.payload;
    },
    setCallToActionLink: (state, action: PayloadAction<string>) => {
      state.callToActionLink = action.payload;
    },
    setLetterSpacing: (state, action: PayloadAction<number>) => {
      state.letterSpacing = action.payload;
    },
    setLineSpacing: (state, action: PayloadAction<number>) => {
      state.lineSpacing = action.payload;
    },
    setAdvertisementWidth: (state, action: PayloadAction<number>) => {
      state.advertisementWidth = action.payload;
    },
  },
});

export const {
  setTitle,
  setContent,
  setCallToActionText,
  setCallToActionLink,
  setLetterSpacing,
  setLineSpacing,
  setAdvertisementWidth,
} = advertisementSlice.actions;

export default advertisementSlice.reducer;

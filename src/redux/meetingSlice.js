import { createSlice } from "@reduxjs/toolkit";

export const meetingSlice = createSlice({
  name: "meeting",
  initialState: {
    buildings: [],
    date: "",
    startTime: "",
    endTime: "",
    building: "",
    meetingRoomId: "",
    title: ""
  },
  reducers: {
    addBuildings: (state, action) => {
      state.buildings = [...action.payload];
    },
    setMeetingDate: (state, action) => {
      state.date = action.payload;
    },
    setStartTime: (state, action) => {
      state.startTime = action.payload;
    },
    setEndTime: (state, action) => {
      state.endTime = action.payload;
    },
    setBuilding: (state, action) => {
      state.building = action.payload;
    },
    setMeetingRoomId: (state, action) => {
      state.meetingRoomId = action.payload;
    }, 
    addTitle: (state, action) => {
      state.title = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { addBuildings, setMeetingDate, setStartTime, setEndTime, setBuilding, setMeetingRoomId, addTitle } = meetingSlice.actions;

export const state = (state) => {
  return state;
}

export default meetingSlice.reducer;

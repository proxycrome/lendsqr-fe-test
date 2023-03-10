import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../components/types";



type initialStateType = {
  loading: Boolean
  users: User[]
  error: string
  userObj: User | null
  userError: string
}

const initialState: initialStateType = {
  loading: false,
  users: [],
  error: "",
  userObj: null,
  userError: ""
};

// Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
    .then((response) => response.data);
});

export const fetchUserDetails = createAsyncThunk("user/UserDetails", (id: number) => {
    return axios
        .get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
        .then((response) => response.data);
})

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {        
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected , (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message || 'something went wrong';
    });
    builder.addCase(fetchUserDetails.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, action: PayloadAction<User>) => {        
        state.loading = false;
        state.userObj = action.payload;
        state.error = "";
    });
    builder.addCase(fetchUserDetails.rejected , (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message || 'something went wrong';
    });
  },
});


export default userSlice.reducer;
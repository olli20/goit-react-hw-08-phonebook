import {createAsyncThunk} from "@reduxjs/toolkit";

import * as api from '../../shared/api/auth';

export const signup = createAsyncThunk(
    "auth/signup",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.signup(data);
            return result;
        }
        catch(error) {
            return rejectWithValue(error.message);
        };
    }
);
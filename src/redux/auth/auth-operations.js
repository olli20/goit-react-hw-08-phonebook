import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const user = createAsyncThunk(
  'auth/user',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.getUser(auth.token);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logout();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

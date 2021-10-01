import {createSlice} from '@reduxjs/toolkit'
import { retreiveBugs } from '../bugController'

const slice = createSlice({
  name: "bug",
  initialState: [],
  reducers: {
    getBugs: (state) => retreiveBugs(),
    createBugs: (state, actions) => {

    },
    updateBug: (state, actions) => {

    },
    markComplete: (state, action) => {

    }
  }
})
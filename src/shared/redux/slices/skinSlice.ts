import { pipeSkinType, stoneSkinType } from '@/shared/types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  pipeCount: number
  topStonesCount: number
  bottomStonesCount: number
  pickedStoneSkin: stoneSkinType
  pickedPipeSkin: pipeSkinType
}

const skinSlice = createSlice({
  name: 'skin',

  initialState: {
    pipeCount: 9,
    topStonesCount: 1,
    bottomStonesCount: 4,
    pickedStoneSkin: 'blue',
    pickedPipeSkin: 'gray',
  } as initialStateType,

  reducers: {
    pipeCountChanged(state, action) {
      state.pipeCount = action.payload
    },
    topStonesCountChanged(state, action) {
      state.topStonesCount = action.payload
    },
    bottomStonesCountChanged(state, action) {
      state.bottomStonesCount = action.payload
    },
    pickedStoneSkinChanged(state, action: PayloadAction<'blue' | 'brown'>) {
      state.pickedStoneSkin = action.payload
    },
    pickedPipeSkinChanged(state, action: PayloadAction<pipeSkinType>) {
      state.pickedPipeSkin = action.payload
    },
  },
})
export const {
  pipeCountChanged,
  topStonesCountChanged,
  bottomStonesCountChanged,
  pickedStoneSkinChanged,
  pickedPipeSkinChanged,
} = skinSlice.actions
export default skinSlice.reducer

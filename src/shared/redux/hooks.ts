import type { RootState, AppDispatch } from './store'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

export {
  pipeCountChanged,
  topStonesCountChanged,
  bottomStonesCountChanged,
  pickedStoneSkinChanged,
  pickedPipeSkinChanged,
} from './slices/skinSlice'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

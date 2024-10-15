import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'
import productsSlice from "./productsSlice";
import modalSlice from "./modalSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'modal']
}


const rootReducer = combineReducers({
  cart : cartSlice,
  product : productsSlice,
  modal : modalSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Ignore redux-persist actions
      },
    }),
});
 export const persistor = persistStore(store)
 export default store
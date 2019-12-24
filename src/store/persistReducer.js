import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export default reducers => {
  // AsyncStorage.clear();
  return persistReducer(
    {
      key: 'gympoint',
      storage: AsyncStorage,
      whitelist: ['auth'],
    },
    reducers
  );
};

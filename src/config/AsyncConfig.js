import {MMKV} from 'react-native-mmkv';

export const storeObj = (val, key) => {
  MMKV.set(key, JSON.stringify(val));
};

export const getObj = (key) => {
  const jsonData = MMKV.getString(key);
  return JSON.parse(jsonData);
};

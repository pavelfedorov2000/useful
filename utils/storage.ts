import { TLocalStorageKey, TNullable, TSessionStorageKey } from "../types";

type TStorageKeys = {
  local: TLocalStorageKey;
  session: TSessionStorageKey;
};

type TStorageType = keyof TStorageKeys;

const safeJSONStringify = (value: unknown): TNullable<string> => {
  try {
    return JSON.stringify(value);
  } catch (error: unknown) {
    return null;
  }
};

const safeJSONParse = (value: TNullable<string>): unknown => {
  if (!value) return null;

  try {
    return JSON.parse(value);
  } catch (error: unknown) {
    return value;
  }
};

const addItemToStorage =
  <StorageType extends TStorageType>(storageType: Storage) =>
  (key: TStorageKeys[StorageType] | string, value: unknown) => {
    const jsonValue = safeJSONStringify(value);
    if (jsonValue !== null) {
      storageType.setItem(key, jsonValue);
    }
  };

const getItemFromStorage =
  <StorageType extends TStorageType>(storageType: Storage) =>
  (key: TStorageKeys[StorageType] | string) =>
    safeJSONParse(storageType.getItem(key));

const removeItemFromStorage =
  <StorageType extends TStorageType>(storageType: Storage) =>
  (key: TStorageKeys[StorageType] | string) =>
    storageType.removeItem(key);

const getCustomStorage = <StorageType extends TStorageType>(storageType: TNullable<Storage>) => ({
  setItem: storageType === null ? () => {} : addItemToStorage<StorageType>(storageType),
  getItem: storageType === null ? () => {} : getItemFromStorage<StorageType>(storageType),
  removeItem: storageType === null ? () => {} : removeItemFromStorage<StorageType>(storageType),
});

export const CustomLocalStorage = getCustomStorage<'local'>(localStorage);
export const CustomSessionStorage = getCustomStorage<'session'>(sessionStorage);
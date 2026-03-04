import { LOCAL_STORAGE_KEYS, SESSION_STORAGE_KEYS } from "../constants";

export type TLocalStorageKey = (typeof LOCAL_STORAGE_KEYS)[keyof typeof LOCAL_STORAGE_KEYS]

export type TSessionStorageKey = (typeof SESSION_STORAGE_KEYS)[keyof typeof SESSION_STORAGE_KEYS];

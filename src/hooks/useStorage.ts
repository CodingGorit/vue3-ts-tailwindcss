import { ref } from 'vue';

/**
 * @usage 
 * const { useStorageType, [token, setToken]} = useStorage('token');
 * setToken('new token');
 * 
 * @param key string
 * @param storage Storage
 * @returns
 */

const getItem = (key: string, storage: Storage) => {
    let value = storage.getItem(key);
    if (!value) {
        return null;
    }
    try {
        return JSON.parse(value)
    } catch (error) {
        return value;
    }
}

export const useStorage = (key: string, type: useStorageType = 'session') => {
    let storage = null;
    switch (type) {
        case 'SESSION':
        case 'session':
            storage = window.sessionStorage;
            break;
        case 'LOCAL':
        case 'local':
            storage = window.localStorage;
            break;
        default:
            return null;
    }
    const value = ref(getItem(key, storage));
    const setItem = (storage: Storage) => {
        return (newValue: any) => {
            value.value = newValue;
            storage.setItem(key, JSON.stringify(newValue));
        }
    }
    return [
        value,
        setItem(storage)
    ]
}

export type useStorageType = "session" |
    "local" |
    "SESSION" |
    "LOCAL";
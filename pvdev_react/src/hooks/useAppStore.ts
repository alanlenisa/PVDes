import {create} from 'zustand';
import AppData, {emptyData} from "../models/AppData";
import AppState from "../models/AppState";

const LOCALSTORAGE = "ls";

const getContext = ():AppData => {
    if (localStorage.getItem(LOCALSTORAGE) === null)
        localStorage.setItem(LOCALSTORAGE, JSON.stringify({
            ...emptyData
        }))
    return JSON.parse(localStorage.getItem(LOCALSTORAGE))
}

const setContext = (data: AppData): AppData => {
    localStorage.setItem(LOCALSTORAGE, JSON.stringify(data));
    return data;
}

/*;*/

export const useAppStore = create<AppState>()((set) => ({
    formData: getContext(),
    changeFormData: (data) => set(() => ({ formData: { ...setContext(data) } })),
    resetFormData: () => set(() => ({ formData: { ...setContext(emptyData)}})),

}));
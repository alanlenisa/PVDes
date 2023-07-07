import {create} from 'zustand';
import {emptyData} from "../models/AppData";
import AppState from "../models/AppState";

const useAppStore = create<AppState>() ((set) =>({
    formData:emptyData,
    changeFormData:(data) => set(()=>({formData:{...data}})),
    resetFormData:() => set(()=>({formData:{...emptyData}})),

}));
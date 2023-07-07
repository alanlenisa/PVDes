import AppData from './AppData';

export default interface AppState{
    formData:AppData;

    changeFormData:(data:AppData)=>void;
    resetFormData()=>void;

}
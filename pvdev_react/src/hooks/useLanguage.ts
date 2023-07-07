import { LocalizedStrings } from "../models/LocalizedStrings";


function translate(l:string,k:string) {
    let v = LocalizedStrings[l][k];
    if (v == null || v == undefined || v == "")
        return k;
    return v;
}

export default function useLanguage(lngId: string){
    return (key: string) => translate(lngId,key);
}

export  function useCurrentLanguage() {
    const languageId = 'it';
    return (key: string) => translate(languageId,key);
}
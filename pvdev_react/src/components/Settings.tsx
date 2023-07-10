import * as React from 'react';
import Button from '@mui/material/Button';

import { useCurrentLanguage } from '../hooks/useLanguage';
import InputAdornment from '@mui/material/InputAdornment';
import {
    kwh_gg_validation,
    gg_needed_validation
} from "../models/validations";
import { FormProvider, useForm } from 'react-hook-form';
import { TextFieldValidated } from './validated/TextFieldValidated';
import { useAppStore } from '../hooks/useAppStore';
import AppData from '../models/AppData';


const Settings = () => {
    const T = useCurrentLanguage();

    const formdata = useAppStore((s) => s.formData);
    console.log(formdata);
    const changeData = useAppStore((s) => s.changeFormData);

    const methods = useForm({ defaultValues: formdata || {} });

    const onSubmit = methods.handleSubmit((data:AppData) => {
        const d: AppData = {
            ...formdata,
            kwh_gg: data.kwh_gg,


        };
        changeData(d);
    });

    return (
        <>

            
            <FormProvider {...methods}>
                <form className="panel-flex " style={{ margin: 10 }} onSubmit={e => e.preventDefault()}>
                    <TextFieldValidated className="input-normal " style={{ textAlign:'center'}} {...kwh_gg_validation} ></TextFieldValidated>
                    <TextFieldValidated className="input-normal " style={{ textAlign: 'center' }}  {...gg_needed_validation} ></TextFieldValidated>
                </form>
                <div>
                    <Button variant="contained" onClick={onSubmit} >{ T("ui_compute")}</Button>
                </div>
            </FormProvider>

        </>
    );
}

export default Settings;
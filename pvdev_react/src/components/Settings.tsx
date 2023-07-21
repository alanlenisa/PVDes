import * as React from 'react';
import Button from '@mui/material/Button';

import { useCurrentLanguage } from '../hooks/useLanguage';
import InputAdornment from '@mui/material/InputAdornment';
import {
    kwh_gg_validation,
    gg_needed_validation,
    w_inverter_validation,
    v_plant_validation,
    percent_battery_max_validation
} from "../models/validations";
import { FormProvider, useForm } from 'react-hook-form';
import { TextFieldValidated } from './validated/TextFieldValidated';
import { useAppStore } from '../hooks/useAppStore';
import AppData from '../models/AppData';


const Settings = () => {
    const T = useCurrentLanguage();

    const formdata = useAppStore((s) => s.formData);
 
    const changeData = useAppStore((s) => s.changeFormData);

    const methods = useForm({ defaultValues: formdata || {} });

    const onSubmit = methods.handleSubmit(async (data: AppData) => {
        const d: AppData = {
            ...formdata,
            kwh_gg: data.kwh_gg,
            gg_needed: data.gg_needed,
            w_inverter: data.w_inverter,
            v_plant: data.v_plant,
            percent_battery_max:data.percent_battery_max,


        };
        changeData(d);
        console.log(d);

      
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(d)//x-www-form-urlencoded

        };
       
        try {
          //  const response = await fetch('https://www.volk.cloud/ws/ws.asmx/HelloWorld',
            const response = await fetch('http://localhost/volk_new/ws/ws.asmx/pvcalc',
                requestOptions);
            if (!response.ok)
                throw new Error(response.statusText);
            //.then((r) => {
            //    console.log(`fetched `);
            //    console.log(r);
            //})
            //.catch((err) => {
            //    alert(err);
            //});
            //  console.log(`response ${response}`);
            const dj = await response.json();
            console.log(dj);
        }
        catch (err) {
            console.warn(err);
        }
    });

    return (
        <>

            
            <FormProvider {...methods}>
                <form className="panel-flex " style={{ margin: 10 }} onSubmit={e => e.preventDefault()}>
                    <TextFieldValidated className="input-normal " style={{ textAlign:'center'}} {...kwh_gg_validation} ></TextFieldValidated>
                    <TextFieldValidated className="input-normal " style={{ textAlign: 'center' }}  {...gg_needed_validation} ></TextFieldValidated>
                    <TextFieldValidated className="input-normal " style={{ textAlign: 'center' }}  {...w_inverter_validation} ></TextFieldValidated>
                    <TextFieldValidated className="input-normal " style={{ textAlign: 'center' }}  {...v_plant_validation} ></TextFieldValidated>
                    <TextFieldValidated className="input-normal " style={{ textAlign: 'center' }}  {...percent_battery_max_validation} ></TextFieldValidated>
                </form>
                <div>
                    <Button variant="contained" onClick={onSubmit} >{ T("ui_compute")}</Button>
                </div>
            </FormProvider>

        </>
    );
}

export default Settings;
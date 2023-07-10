
import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { useForm, useFormContext } from 'react-hook-form'
import { useCurrentLanguage } from '../../hooks/useLanguage';
import { findInputErrors, isFormInvalid } from '../../lib';
import { InputErrorSlot } from './InputErrorSlot';

export const TextFieldValidated = (props: any) => {

    const {
        name,
        label,
        type,
        id,
        placeholder,
        validation,
        multiline,
        className,
        value,
        postfix,
        style,
        onChange,


        ...rest

    } = props;


    const {
        register,
        formState: { errors, touchedFields },
    } = useFormContext();
 
    const inputErrors: any = findInputErrors(errors, name);
    const isInvalid = isFormInvalid(inputErrors);
    const T = useCurrentLanguage();
                      //InputProps={{
                      //      endAdornment: <InputAdornment position="end">{postfix}</InputAdornment>,
                      //  }}
                       

    return (
        <>
            <div className="component-div">
                <div className="width-1" >

                    {/*<input*/}
                    {/*    {...register(name, validation)}*/}
                    {/*    {...rest}*/}
                    {/*    id={id}*/}
                    {/*    type={type}*/}

                    {/*    className={`${className}  ${isInvalid ? " invalid-input" : ""}`}*/}
                    {/*/>*/}
                    <TextField
                        {...register(name, validation)}
                        {...rest}
                        id={id}
                        type={type}
                        label={T(label)}
                        className={`${className}`}
                        error={ isInvalid}
                        inputProps={{ style: style }}
                    />
                </div>

                <div className="width-2">
                    {isInvalid && (
                        <InputErrorSlot
                            message={inputErrors.error.message}
                            key={inputErrors.error.message}
                        />)}
                </div>
            </div>



        </>
    );
}
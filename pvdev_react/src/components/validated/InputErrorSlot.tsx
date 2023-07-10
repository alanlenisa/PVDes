import React from 'react';
import { MdError } from 'react-icons/md';

export const InputErrorSlot = (p: any) => {
    //{p.message}
    return (
        <>
            <p className="text-danger">
                <MdError />
            </p>
        </>

    );
};

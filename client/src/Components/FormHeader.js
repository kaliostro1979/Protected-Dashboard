import React from 'react';
import {Typography} from "@mui/material";

const FormHeader = ({icon, heading}) => {
    return (
        <div className={"form-header"}>
            <div className={"form-icon"}>
                {icon}
            </div>
            <Typography variant={'h4'}>{heading}</Typography>
        </div>
    );
};

export default FormHeader;

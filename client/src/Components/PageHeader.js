import React from 'react';
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const PageHeader = ({heading, action, callBack}) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    {heading}
                </Typography>
                <Button color="inherit" onClick={callBack}>{action}</Button>
            </Toolbar>
        </AppBar>
    );
};

export default PageHeader;

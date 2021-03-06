import { AppBar, IconButton, Toolbar, Typography, WithStyles, withStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React from "react";
import { mainStyles } from "../styles/main";

interface HeaderProps extends WithStyles<typeof mainStyles> {
    onDrawerToggle: () => void;
}

const formatLastUpdateDate = () => {
    const d = new Date(document.lastModified);
    return "v" +
        d.getUTCFullYear().toString().padStart(4, "0") +
        (d.getUTCMonth() + 1).toString().padStart(2, "0") +
        d.getUTCDate().toString().padStart(2, "0") +
        "." +
        d.getUTCHours().toString().padStart(2, "0") +
        d.getUTCMinutes().toString().padStart(2, "0");
}

export const Header = withStyles(mainStyles)(({ classes, onDrawerToggle }: HeaderProps) => (
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={onDrawerToggle}
                className={classes.menuButton}
            >
                <Menu />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
                Google Code Jam Statistics
                <Typography variant="caption" color="inherit" noWrap>
                    {formatLastUpdateDate()}
                </Typography>
            </Typography>
        </Toolbar>
    </AppBar>
));
import React from 'react'
import { Appbar, Toolbar, Iconbutton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons'

const Navbar = () => {
    return (
        <>
            <Appbar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={} alt="eStore.js" height="25px" className={classes.image} />
                        eStore.js
                    </Typography>
                </Toolbar>
            </Appbar>
        </>
    )
}

export default Navbar

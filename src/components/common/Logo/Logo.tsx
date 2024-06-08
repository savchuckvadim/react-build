import React, { FC } from 'react'
import * as classes from '@/components/common/Logo/Logo.module.scss'

// import logo from '@/assets/logo/lg_april_tree_blue.png'
import LogoSVG from '@/assets/logo.svg'
const Logo: FC<{}> = () => {

    return (
        // <img
        //     className={classes.logo}
        //     src={logo}
        //     alt="logo">

        // </img>
        <div className={classes.logo}>
            <LogoSVG width={'100px'} height={'80px'} color={'black'}/>
        </div>
    )
}

export default Logo
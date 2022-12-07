import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import { Box } from "components/Box/Box";
import AppBar from "components/AppBar";

const Layout = () => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            as='main'
            width='1200px'
            margin='auto'
        >
            <AppBar />
            <Suspense fallback={<div>adsadsad</div>}>
                <Outlet />
            </Suspense> 
        </Box>
    )
}

export default Layout;
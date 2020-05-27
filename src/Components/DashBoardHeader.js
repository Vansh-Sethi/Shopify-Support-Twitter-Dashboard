import React from 'react'
import { render } from '@testing-library/react'


function DashBoardHeader() {
    const imgStyles = {
        width: "6%",
        height: "6%"
    }

    const headerTextStyles = {
        fontSize: "3rem",
        marginLeft: "1rem"
    }

    const url_of_shopify_logo = "https://www.realisable.co.uk/wp-content/themes/realisable/images/logos/shopify.svg"
    return(

        <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
            <img src={url_of_shopify_logo} style={imgStyles} />
            <h1 style={headerTextStyles}><b>Shopify</b> <i>Support</i></h1>
        </div>


    );
}


export default DashBoardHeader;
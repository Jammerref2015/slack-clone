 import React from 'react'
 import styled from "styled-components";
 import { Avatar } from "@material-ui/core";
 import AccessTimeIcon from "@material-ui/icons/AccessTime";

 function Header() {
     return (
         <HeaderContainer>
             {/* Header left */}
             <HeaderLeft>
                <HeaderAvatar 
                    // TODO: Add onclick
                />
                <AccessTimeIcon />
             </HeaderLeft>

             {/* Header Search */}

             {/* Header Right */}
         </HeaderContainer>
     )
 }
 
 export default Header
 // rfec then ->|

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
    `;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
    `;

const HeaderAvatar = styled(Avatar)`
    cursor:cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;
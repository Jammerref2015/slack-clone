import React from "react";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import ChatInput from "./ChatInput";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import styled from "styled-components";

function Chat() {
 
  const roomId = useSelector(selectRoomId);
  
  
  return (
    <ChatContainer>
        <>
          <Header>
            <HeaderLeft>
              <h4>
                <strong>#</strong>
                <StarBorderOutlinedIcon />
              </h4>
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlinedIcon /> Details
              </p>
            </HeaderRight>
          </Header>

       

          <ChatInput
            channelId={roomId}
          />
        </>
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  > h4 {
    display: flex;
    text-transform: lowercase;
  }
  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;


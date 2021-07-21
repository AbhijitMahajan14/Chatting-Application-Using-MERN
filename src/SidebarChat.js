import React from "react";
import "./SidebarChat.css";
import {Avatar} from "@material-ui/core";


function SidebarChat()
{
    return <div className="sidebarChat">
<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCuw5XAfbrIFSCYB-2UIk1dGg_qGKef6rBjSc4pcB6p7CcAd9vN7nCrAaE0FuMYd03c0&usqp=CAU"/>
    <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>This is the last msg</p>
        </div>
        </div>;
}

export default SidebarChat;
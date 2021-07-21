
import React from 'react' ;
import "./Sidebar.css"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton} from "@material-ui/core";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
 <div className="sidebar">
 

 <div className="sidebar__header">
 <IconButton>
 <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ2QO7d0-oLeiv5Dk_E1yaxdBmxlW90wH8kxpgALlx-JzWFMtnNcZYvkihc97LDDN9Kzg&usqp=CAU"/>
 </IconButton>
   <div className="sidebar__headerRight">
   
    <IconButton>
    <DonutLargeIcon />
      </IconButton>

      <IconButton>
    <ChatIcon />
      </IconButton>

      <IconButton>
    <MoreVertIcon />
      </IconButton>


     </div>
    </div>

    <div className="sidebar__search">
      <div className="sidebar__searchContainer">

      <SearchOutlinedIcon />
      <input placeholder="Search or start new chat" type="text"/>
      </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        </div>


  

 </div>
  );
}

export default Sidebar;

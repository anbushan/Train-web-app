
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { FaTrainSubway } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineWorkHistory } from "react-icons/md";
import { MdFeedback } from "react-icons/md";
import { GiRailway } from "react-icons/gi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
export const sidebarItems = [
  {
    "id": 1,
    "label": " Dashboard",
    "parent_id": null,
    "icon":<MdOutlineAdminPanelSettings size={20} />,
    "order_index": 1,
    "url": "/admin/Dashboard"
  },{
    "id": 2,
    "label": "User List",
    "parent_id": null,
    "icon":<PiUserListBold size={20}/>,
    "order_index": 2,
    "url": "/admin/Userlist",
  },
  {
    "id": 3,
    "label": "Train",
    "parent_id": null,
    "icon":<FaTrainSubway size={20}/>,
    "order_index": 3,
    "url": "/admin/Train",
  },
  {
    "id": 4,
    "label": "Station",
    "parent_id": null,
    "icon":<GiRailway  size={20}/>,
    "order_index": 4,
    "url": "/admin/Station",
  },
  {
    "id": 5,
    "label": "Notification",
    "parent_id": null,
    "icon":<IoMdNotifications  size={20}/>,
    "order_index": 5,
    "url": "/admin/Notification",
  },  
  {
    "id": 6,
    "label": "Withdraw request",
    "parent_id": null,
    "icon":<BiMoneyWithdraw size={20}/>,
    "order_index": 6,
    "url": "/admin/Withdrawrequest",
  },
  {
    "id": 7,
    "label": "Withdraw history",
    "parent_id": null,
    "icon":<MdOutlineWorkHistory  size={20}/>,
    "order_index": 7,
    "url": "/admin/Withdrawhistory",
  },
  {
    "id": 8,
    "label": "FeedBack",
    "parent_id": null,
    "icon":<MdFeedback   size={20}/>,
    "order_index": 8,
    "url": "/admin/Feedback",
  },
  {
    "id": 8,
    "label": "Setting",
    "parent_id": null,
    "icon":<IoSettingsOutline   size={20}/>,
    "order_index": 8,
    "url": "/admin/Setting",
  },
];

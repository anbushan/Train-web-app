
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { FaTrainSubway } from "react-icons/fa6";
import { BiStation } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { CiSquareQuestion } from "react-icons/ci";
import { MdOutlineWorkHistory } from "react-icons/md";
import { MdFeedback } from "react-icons/md";

export const sidebarItems = [
  {
    "id": 1,
    "label": " Dashboard",
    "parent_id": null,
    "icon":<MdOutlineAdminPanelSettings size={20} />,
    "order_index": 1,
    "url": "/Dashboard"
  },{
    "id": 2,
    "label": "User List",
    "parent_id": null,
    "icon":<PiUserListBold size={20}/>,
    "order_index": 2,
    "url": "/Traininfo",
  },
  {
    "id": 3,
    "label": "Train",
    "parent_id": null,
    "icon":<FaTrainSubway size={20}/>,
    "order_index": 3,
    "url": "/Train",
  },
  {
    "id": 4,
    "label": "Station",
    "parent_id": null,
    "icon":<BiStation  size={20}/>,
    "order_index": 4,
    "url": "/Station",
  },
  {
    "id": 5,
    "label": "Notification",
    "parent_id": null,
    "icon":<IoMdNotifications  size={20}/>,
    "order_index": 5,
    "url": "/Notification",
  },  
  {
    "id": 6,
    "label": "Withdraw request",
    "parent_id": null,
    "icon":<CiSquareQuestion size={20}/>,
    "order_index": 6,
    "url": "/Withdrawrequest",
  },
  {
    "id": 7,
    "label": "Withdraw history",
    "parent_id": null,
    "icon":<MdOutlineWorkHistory  size={20}/>,
    "order_index": 7,
    "url": "/Withdrawhistory",
  },
  {
    "id": 8,
    "label": "FeedBack",
    "parent_id": null,
    "icon":<MdFeedback   size={20}/>,
    "order_index": 8,
    "url": "/FeedBack",
  },
];

import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { FaTrainSubway } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineWorkHistory } from "react-icons/md";
import { MdFeedback } from "react-icons/md";
import { GiRailway } from "react-icons/gi";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdPerson } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";

export const sidebarItems = [
  {
    "id": 1,
    "label": " Dashboard",
    "parent_id": null,
    "icon":<MdOutlineAdminPanelSettings size={20} />,
    "order_index": 1,
    "url": "/admin/dashboard"
  },{
    "id": 2,
    "label": "User List",
    "parent_id": null,
    "icon":<PiUserListBold size={20}/>,
    "order_index": 2,
    "url": "/admin/user-list",
  },
  {
    "id": 3,
    "label": "Train",
    "parent_id": null,
    "icon":<FaTrainSubway size={20}/>,
    "order_index": 3,
    "url": "/admin/train",
  },
  {
    "id": 4,
    "label": "Station",
    "parent_id": null,
    "icon":<GiRailway  size={20}/>,
    "order_index": 4,
    "url": "/admin/station",
  },
  {
    "id": 5,
    "label": "Notification",
    "parent_id": null,
    "icon": <IoMdNotifications size={20}  />,
    "order_index": 5,
    "url": "/",
    "style": { color: 'white' },
    "children": [
      {
        "id": 6,
        "label": "General",
        "parent_id": null,
        "icon": <IoPersonCircleSharp size={20}/>,
        "order_index":1,
        "url": "/admin/general"
      },
      {
        "id": 7,
        "label": "Individual",
        "parent_id": null,
        "icon":<MdPerson size={20}/>,
        "order_index": 2,
        "url": "/admin/individual"
      }
      ,
      {
        "id": 8,
        "label": "Group",
        "parent_id": null,
        "icon":<HiMiniUserGroup size={20}/>,
        "order_index": 3,
        "url": "/admin/group"
      }
    ]
  },  
  {
    "id": 9,
    "label": "Withdraw request",
    "parent_id": null,
    "icon":<BiMoneyWithdraw size={20}/>,
    "order_index": 6,
    "url": "/admin/withdraw-request",
  },
  {
    "id": 10,
    "label": "Withdraw history",
    "parent_id": null,
    "icon":<MdOutlineWorkHistory  size={20}/>,
    "order_index": 7,
    "url": "/admin/withdraw-history",
  },
  {
    "id": 11,
    "label": "FeedBack",
    "parent_id": null,
    "icon":<MdFeedback   size={20}/>,
    "order_index": 8,
    "url": "/admin/feedback",
  },
  {
    "id": 12,
    "label": "Issues",
    "parent_id": null,
    "icon":<AiOutlineIssuesClose   size={20}/>,
    "order_index": 8,
    "url": "/admin/issue",
  },
  {
    "id": 13,
    "label": "Settings",
    "parent_id": null,
    "icon":<IoSettingsOutline   size={20}/>,
    "order_index": 8,
    "url": "/admin/settings",
  },
 
];

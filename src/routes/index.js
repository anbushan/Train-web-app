import { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Loader from "../pages/Loader/Loader";
import GuestGuard from "../guards/GuestGuard";
import AuthGuard from "../guards/AuthGuard";


const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
       
      ],
    },
    {
     
      children: [
        {
          path: "/admin",
          element: (
            <AuthGuard>
              <DashboardLayout/>
            </AuthGuard>
          ),
          children:[
            {
              path: "/admin/train",
              element: (
                <AuthGuard>
                  <Train/>
                </AuthGuard>
              ),
            },
            {
              path: "/admin/station",
              element: (
                <AuthGuard>
                  <Station/>
                </AuthGuard>
              ),
            },
    
    
            {
              path: "/admin/user-list",
              element: (
                <AuthGuard>
                  <TrainInfo/>
                </AuthGuard>
              ),
            },
    

            {
              path: "/admin/dashboard",
              element: (
                <AuthGuard>
                  <Dashboard/>
                </AuthGuard>
              ),
            },
    
            {
              path: "/admin/general",
              element: (
                <AuthGuard>
                  <General/>
                </AuthGuard>
              ),
            },

            {
              path: "/admin/feedback",
              element: (
                <AuthGuard>
                  <FeedBack/>
                </AuthGuard>
              ),
            },

            {
              path: "/admin/settings",
              element: (
                <AuthGuard>
                  <Setting/>
                </AuthGuard>
              ),
            },

            {
              path: "/admin/add-train",
              element: (
                <AuthGuard>
                  <AddTrain/>
                </AuthGuard>
              ),
            },

            {
              path: "/admin/edit-train/:id",
              element: (
                <AuthGuard>
                  <EditTrain/>
                </AuthGuard>
              ),
            },
            {
              path: "/admin/withdraw-history",
              element: (
                <AuthGuard>
                  <WithdrawHistory/>
                </AuthGuard>
              ),
            },
            {
              path: "/admin/withdraw-request",
              element: (
                <AuthGuard>
                  <WithdrawRequest/>
                </AuthGuard>
              ),
            },

            {
              path: "/admin/add-general",
              element: (
                <AuthGuard>
                  <AddGeneral/>
                </AuthGuard>
              ),
            },

            {
              path: "/admin/add-station",
              element: (
                <AuthGuard>
                  <AddStation/>
                </AuthGuard>
              ),
            },
            
            
            {
              path: "/admin/edit-station/:id",
              element: (
                <AuthGuard>
                  <EditStation/>
                </AuthGuard>
              ),
            },

            {
              path: "/admin/adduser-list",
              element: (
                <AuthGuard>
                  <AddUserList/>
                </AuthGuard>
              ),
            },
            {
              path: "/admin/issue",
              element: (
                <AuthGuard>
                  <Issue/>
                </AuthGuard>
              ),
            },

            {
              path: "/admin/edit-issue",
              element: (
                <AuthGuard>
                  <EditIssue/>
                </AuthGuard>
              ),
            },
            {
              path: "/admin/group",
              element: (
                <AuthGuard>
                  <Group/>
                </AuthGuard>
              ),
            },
            {
              path: "/admin/individual",
              element: (
                <AuthGuard>
                  <Individual/>
                </AuthGuard>
              ),
            },
            {
              path: "/admin/news",
              element: (
                <AuthGuard>
                  <News/>
                </AuthGuard>
              ),
            },
            {
              path: "/admin/group-notification",
              element: (
                <AuthGuard>
                  <GroupNotification/>
                </AuthGuard>
              ),
            },
            {
              path: "/admin/local-train",
              element: (
                <AuthGuard>
                  <LocalTrain/>
                </AuthGuard>
              ),
            },
            {
              path: "/admin/metro-train",
              element: (
                <AuthGuard>
                  <MetroTrain/>
                </AuthGuard>
              ),
            },
            {
              path: "/admin/add-localtrain",
              element: (
                <AuthGuard>
                  <AddLocalTrain/>
                </AuthGuard>
              ),
            },
            {
              path: "/admin/add-metrotrain",
              element: (
                <AuthGuard>
                  <AddMetroTrain/>
                </AuthGuard>
              ),
            },
            {
              path: "/admin/edit-localtrain/:id",
              element: (
                <AuthGuard>
                  <EditLocalTrain/>
                </AuthGuard>
              ),
            },
            {
              path: "/admin/edit-metrotrain/:id",
              element: (
                <AuthGuard>
                  <EditMetroTrain/>
                </AuthGuard>
              ),
            },
          ]
        },
      
        
       
      
      ],
    },
    {
       path: "*",
       children: [
         { path: "404", element: <NotFound /> },
         { path: "*", element: <Navigate to="/404" replace /> },
       ],
     },
  ]);
}

const Login = Loadable(lazy(() => import("../pages/loginForms/Login")));


const DashboardLayout = Loadable(lazy(() => import("../pages/Dashboard/DashboardLayout")));

const TrainInfo = Loadable(lazy(()=>import("../pages/Userlist/UserList")));

const Train = Loadable(lazy(()=>import("../pages/Train/Train")));

const Station = Loadable(lazy(()=>import("../pages/Station/Station")));

const General = Loadable(lazy(()=>import("../pages/Notification/General/General")));


const Dashboard = Loadable(lazy(()=>import("../pages/Dashboard/Dashboard")));


const FeedBack = Loadable(lazy(()=>import("../pages/FeedBack/FeedBack")));

const Setting = Loadable(lazy(()=>import("../pages/Setting page/Setting")));

const AddTrain = Loadable(lazy(()=>import("../pages/Train/AddTrain")));

const EditTrain = Loadable(lazy(()=>import("../pages/Train/EditTrain")));

const WithdrawHistory = Loadable(lazy(()=>import("../pages/WithdrawHistory/WithdrawHistory")));

const WithdrawRequest = Loadable(lazy(()=>import("../pages/WithdrawRequest/WithdrawRequest")));


const AddGeneral = Loadable(lazy(()=>import("../pages/Notification/General/AddGeneralNotification")));

const AddStation = Loadable(lazy(()=>import("../pages/Station/AddStation")));

const EditStation = Loadable(lazy(()=>import("../pages/Station/EditStation")));

const AddUserList = Loadable(lazy(()=>import("../pages/Userlist/AddUserList")));

const Issue = Loadable(lazy(()=>import("../pages/Issue/Issue")));

const EditIssue = Loadable(lazy(()=>import("../pages/Issue/EditIssue")));

const Group = Loadable(lazy(()=>import("../pages/Notification/Group/Group")));

const GroupNotification = Loadable(lazy(()=>import("../pages/Notification/Group/GroupNotification")));


const Individual = Loadable(lazy(()=>import("../pages/Notification/Individual/Individual")));

const News = Loadable(lazy(()=>import("../pages/News/News")));

const LocalTrain = Loadable(lazy(()=>import("../pages/LocalTrain/LocalTrain")));
const AddLocalTrain = Loadable(lazy(()=>import("../pages/LocalTrain/AddLocalTrain")));
const EditLocalTrain = Loadable(lazy(()=>import("../pages/LocalTrain/EditLocalTrain")));


const MetroTrain = Loadable(lazy(()=>import("../pages/MetroTrain/MetroTrain")));

const AddMetroTrain = Loadable(lazy(()=>import("../pages/MetroTrain/AddMetroTrain")));
const EditMetroTrain = Loadable(lazy(()=>import("../pages/MetroTrain/EditMetroTrain")));









const NotFound = Loadable(lazy(() => import("../pages/404/Page404")));
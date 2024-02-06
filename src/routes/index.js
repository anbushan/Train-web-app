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
              path: "/admin/notification",
              element: (
                <AuthGuard>
                  <Notification/>
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
              path: "/admin/edit-train",
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
              path: "/admin/add-notification",
              element: (
                <AuthGuard>
                  <AddNotification/>
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
              path: "/admin/edit-station",
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
              path: "/admin/edit-withdrawrequest",
              element: (
                <AuthGuard>
                  <EditWithdrawrequest/>
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

const Notification = Loadable(lazy(()=>import("../pages/Notification/Notification")));


const Dashboard = Loadable(lazy(()=>import("../pages/Dashboard/Dashboard")));


const FeedBack = Loadable(lazy(()=>import("../pages/FeedBack/FeedBack")));

const Setting = Loadable(lazy(()=>import("../pages/Setting page/Setting")));

const AddTrain = Loadable(lazy(()=>import("../pages/Train/AddTrain")));

const EditTrain = Loadable(lazy(()=>import("../pages/Train/EditTrain")));

const WithdrawHistory = Loadable(lazy(()=>import("../pages/WithdrawHistory/WithdrawHistory")));

const WithdrawRequest = Loadable(lazy(()=>import("../pages/WithdrawRequest/WithdrawRequest")));


const AddNotification = Loadable(lazy(()=>import("../pages/Notification/AddNotification")));

const AddStation = Loadable(lazy(()=>import("../pages/Station/AddStation")));

const EditStation = Loadable(lazy(()=>import("../pages/Station/EditStation")));

const AddUserList = Loadable(lazy(()=>import("../pages/Userlist/AddUserList")));

const Issue = Loadable(lazy(()=>import("../pages/Issue/Issue")));

const EditIssue = Loadable(lazy(()=>import("../pages/Issue/EditIssue")));
const EditWithdrawrequest = Loadable(lazy(()=>import("../pages/WithdrawRequest/EditWithdrawrequest")));




const NotFound = Loadable(lazy(() => import("../pages/404/Page404")));
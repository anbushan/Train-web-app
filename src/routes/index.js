import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
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
              path: "/admin/Train",
              element: (
                <AuthGuard>
                  <Train/>
                </AuthGuard>
              ),
            },
            {
              path: "/admin/Station",
              element: (
                <AuthGuard>
                  <Station/>
                </AuthGuard>
              ),
            },
    
    
            {
              path: "/admin/Userlist",
              element: (
                <AuthGuard>
                  <TrainInfo/>
                </AuthGuard>
              ),
            },
    

            {
              path: "/admin/Dashboard",
              element: (
                <AuthGuard>
                  <Dashboard/>
                </AuthGuard>
              ),
            },
    
            {
              path: "/admin/Notification",
              element: (
                <AuthGuard>
                  <Notification/>
                </AuthGuard>
              ),
            },

            {
              path: "/admin/Feedback",
              element: (
                <AuthGuard>
                  <FeedBack/>
                </AuthGuard>
              ),
            },
          ]
        },
      
        
       
      
      ],
    },
    // {
    //   path: "*",
    //   children: [
    //     { path: "404", element: <NotFound /> },
    //     { path: "*", element: <Navigate to="/404" replace /> },
    //   ],
    // },
  ]);
}

const Login = Loadable(lazy(() => import("../pages/loginForms/Login")));


const DashboardLayout = Loadable(lazy(() => import("../pages/Dashboard/DashboardLayout")));

const TrainInfo = Loadable(lazy(()=>import("../pages/TrainInfo/Traininfo")));

const Train = Loadable(lazy(()=>import("../pages/Train/Train")));

const Station = Loadable(lazy(()=>import("../pages/Station/Station")));

const Notification = Loadable(lazy(()=>import("../pages/Notification/Notification")));


const Dashboard = Loadable(lazy(()=>import("../pages/Dashboard/Dashboard")));


const FeedBack = Loadable(lazy(()=>import("../pages/FeedBack/FeedBack")));


// const NotFound = Loadable(lazy(() => import("../pages/404/Page404")));
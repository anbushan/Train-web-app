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
          path: "/Dashboard",
          element: (
            <AuthGuard>
              <DashboardLayout/>
            </AuthGuard>
          ),
          children:[

          ]
        },
        {
          path: "Traininfo",
          element: (
            <AuthGuard>
              <TrainInfo/>
            </AuthGuard>
          ),
          children:[

          ]
        },
        {
          path: "Train",
          element: (
            <AuthGuard>
              <Train/>
            </AuthGuard>
          ),
          children:[

          ]
        },
       
        {
          path: "Station",
          element: (
            <AuthGuard>
              <Station/>
            </AuthGuard>
          ),
          children:[

          ]
        },
        {
          path: "Notification",
          element: (
            <AuthGuard>
              <Notification/>
            </AuthGuard>
          ),
          children:[

          ]
        },
        {
          path: "Dash",
          element: (
            <AuthGuard>
              <Dash/>
            </AuthGuard>
          ),
          children:[

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


const Dash = Loadable(lazy(()=>import("../pages/Dashboard/Dashboard")));


// const NotFound = Loadable(lazy(() => import("../pages/404/Page404")));
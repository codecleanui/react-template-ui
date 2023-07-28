
import { LoginPage,HomePages } from "../pages";
import {Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";


export async function rootLoader(): Promise<any> {

  return {  };
}
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet/>,
    loader:rootLoader,
    children: [ 
      {
        index: true,
        element: <LoginPage/>,
      },
    ],
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
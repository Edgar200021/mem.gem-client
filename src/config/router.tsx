import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "../const/route";
import { AppLayout } from "../layouts/AppLayout";
import { TokenLayout } from "../layouts/TokenLayout";
import { CreateTokenPage } from "../pages/CreateTokenPage";
import { MainPage } from "../pages/MainPage";
import { TokenAboutPage } from "../pages/TokenAboutPage";
import { TokenPurchasePage } from "../pages/TokenPurchasePage";
import { TokenTradePage } from "../pages/TokenTradePage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: PATHS.MAIN,
        element: <MainPage />,
      },
      {
        path: PATHS.TOKEN.MAIN,
        element: <TokenLayout />,
        children: [
          {
            path: PATHS.TOKEN.TRADE,
            index: true,
            element: <TokenTradePage />,
          },
          {
            path: PATHS.TOKEN.ABOUT,
            element: <TokenAboutPage />,
          },
        ],
      },
      {
        path: PATHS.PURCHASE,
        element: <TokenPurchasePage />,
      },
      {
        path: PATHS.CREATE_TOKEN,
        element: <CreateTokenPage />,
      },
    ],
  },
]);

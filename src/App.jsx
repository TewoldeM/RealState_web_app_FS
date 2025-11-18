import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout/layout.jsx";
import HomePage from "./routes/homepage/homePage.jsx";
import ListPage from "./routes/listPostPage/listPages.jsx";
import SinglePage from "./routes/singePage/SinglePage.jsx";
import Login from "./routes/login/login.jsx";
// import Register from "./routes/register/";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/list", element: <ListPage /> },
        { path: "/:id", element: <SinglePage /> },
        { path: "/login", element: <Login /> },
        // { path: "/register", element: <Register /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;

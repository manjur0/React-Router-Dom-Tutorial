import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./Error";
import Contact from "./Contact";
import { getContactsLoader } from "./loaders/contactsLoader";
import EditContact from "./EditContact";
import { editContactAction } from "./Action/ContactsAction";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: getContactsLoader,
        action: editContactAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

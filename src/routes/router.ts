import { createBrowserRouter } from "react-router";
import HomePage from "@/pages/HomePage";
import MainLayout from "@/layouts/MainLayout";
import AllBooks from "@/pages/AllBooks";
import AddBooks from "@/pages/AddBooks";

export const router = createBrowserRouter([
 {
    path: '/',
    Component: MainLayout,
    children: [
        {
            index: true,
            Component: HomePage,
        },
        {
            path: '/books',
            Component: AllBooks
        },
        {
            path: '/create-books',
            Component: AddBooks
        }
    ]
 }
]);

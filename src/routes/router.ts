import { createBrowserRouter } from "react-router";
import HomePage from "@/pages/HomePage";
import MainLayout from "@/layouts/MainLayout";
import AllBooks from "@/pages/AllBooks";

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
        }
    ]
 }
]);

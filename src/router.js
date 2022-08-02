import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name : "Anasayfa",
        path: "/",
        component: () => import("@/components/Home")
    },
    {
        name : "hakkımda",
        path: "/about",
        component: () => import("@/components/About")
    }
];

const router = createRouter({
    routes,
    history : createWebHistory()   
});

export default router; 
import { RouteConfig } from "vue-router";

const routes: RouteConfig[] = [
    {
        path: "/",
        component: () => import("layouts/MyLayout.vue"),
        children: [
            {
                name: "client",
                path: "",
                component: () => import("pages/Client.vue")
            },
            {
                name: "login",
                path: "/login",
                component: () => import("pages/Login.vue")
            },
            {
                name: "register",
                path: "/register",
                component: () => import("pages/Register.vue")
            },
            {
                name: "confirm",
                path: "/confirm",
                component: () => import("pages/Confirm.vue")
            },
            {
                name: "problem",
                path: "/client/:clientId/problem/:problemId",
                component: () => import("pages/ProblemRecording.vue")
            },
            {
                name: "outcome",
                path: "/client/:clientId/problem/:problemId/outcome",
                component: () => import("pages/Rating.vue")
            },
            {
                name: "problemsByDiagnosis",
                path: "/client/:clientId/diagnoses",
                component: () => import("pages/ProblemsByDiagnosis.vue")
            }
        ]
    }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
    routes.push({
        path: "*",
        component: () => import("pages/Error404.vue")
    });
}

export default routes;

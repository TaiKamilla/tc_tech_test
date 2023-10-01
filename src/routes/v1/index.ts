import express from "express";
import todoRoute from "./todo.route";
import docsRoute from "./docs.route";

const router = express.Router();

const Routes = [
  {
    path: "/todo",
    route: todoRoute,
  },
  {
    path: "/docs",
    route: docsRoute,
  },
];

Routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;

import React, { useState } from "react";
import { routes } from "./routes";
import { useRoutes } from "react-router-dom";

const AppRouter = () => {
    const [favorite, setFavorite] = useState([]); 
    const [petHome, setPetHome] = useState([]); 

    return <>{useRoutes(routes, { favorite, setFavorite, petHome, setPetHome })}</>;
};

export default AppRouter;


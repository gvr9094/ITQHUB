import React from "react";
import { Outlet, Navigate } from 'react-router-dom';

export default function ProtectedRoutes() {
    const isAuthenticated = localStorage.getItem("authToken") !== null;
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
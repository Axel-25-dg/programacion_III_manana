import { Box, Container, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import type { JSX } from "react";

export default function PrivateLayout(): JSX.Element {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
      <Toolbar />
      
      <Container sx={{ py: 3 }}>
        <Outlet />
      </Container>
    </Box>
  );
}
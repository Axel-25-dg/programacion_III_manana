import { Box, Typography } from "@mui/material";
import type { JSX } from "react";

export default function DashboardHome(): JSX.Element {
  return (
    <Box>
      <Typography variant="h4">Dashboard</Typography>
      <Typography variant="body1">
        Bienvenido al panel de administración
      </Typography>
    </Box>
  );
}
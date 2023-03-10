import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { red } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function HeartRespRate(props) {
  return (
    <React.Fragment>
      <Paper style={{ height: "100%", width: "100%" }}>
        <Box sx={{ height: "8%", display: "flex", flexDirection: "row" }}>
          <Typography variant="body 2" sx={{ flexGrow: 1 }}>
            HEART-RESP RATE
          </Typography>

          <IconButton
            color="secondary"
            onClick={props.booleanCheckHeartRespRate}
            size="small"
          >
            <ClearIcon fontSize="small" sx={{ color: red[700] }} />
          </IconButton>
        </Box>

        <ResponsiveContainer height="92%">
          <BarChart data={props.dataClinicalAnalysis}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="birthString" />
            <YAxis
              yAxisId="left"
              orientation="left"
              stroke="#8884d8"
              domain={[0, 140]}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#82ca9d"
              domain={[0, 45]}
            />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="Heart rate" fill="#8884d8" />
            <Bar yAxisId="right" dataKey="Resp rate" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </React.Fragment>
  );
}

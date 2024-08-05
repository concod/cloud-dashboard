import React, { useState } from "react";
import { Container, Grid, Paper } from "@mui/material";
import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";
import PieChart from "./charts/PieChart";
import Notification from "./Notification";
import SearchBar from "./SearchBar";
import NetworkTrafficChart from "./charts/NetworkTrafficChart";
import DiskUsageChart from "./charts/DiskUsageChart";
import { mockMetrics } from "../services/mockData";

const Dashboard = () => {
  const [filteredMetrics, setFilteredMetrics] = useState(mockMetrics);

  const handleSearch = (query) => {
    if (query === "") {
      setFilteredMetrics(mockMetrics);
    } else {
      const filteredData = {
        cpuUsage: mockMetrics.cpuUsage.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        ),
        memoryConsumption: mockMetrics.memoryConsumption.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        ),
        serverStatus: mockMetrics.serverStatus.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        ),
        networkTraffic: mockMetrics.networkTraffic.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        ),
        diskUsage: mockMetrics.diskUsage.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        ),
      };
      setFilteredMetrics(filteredData);
    }
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper>
            <BarChart data={filteredMetrics.cpuUsage} title="CPU Usage" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <LineChart
              data={filteredMetrics.memoryConsumption}
              title="Memory Consumption"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <NetworkTrafficChart data={filteredMetrics.networkTraffic} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <DiskUsageChart data={filteredMetrics.diskUsage} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <PieChart
              data={filteredMetrics.serverStatus}
              title="Server Status"
            />
          </Paper>
        </Grid>
      </Grid>
      <Notification />
    </Container>
  );
};

export default Dashboard;

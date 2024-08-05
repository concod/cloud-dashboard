// services/mockData.js
export const mockMetrics = {
  cpuUsage: [
    { name: "Server 1", usage: 45 },
    { name: "Server 2", usage: 70 },
    { name: "Server 3", usage: 60 },
    { name: "Server 4", usage: 30 },
    { name: "Server 5", usage: 80 },
  ],
  memoryConsumption: [
    { name: "Server 1", usage: 65 },
    { name: "Server 2", usage: 55 },
    { name: "Server 3", usage: 75 },
    { name: "Server 4", usage: 40 },
    { name: "Server 5", usage: 85 },
  ],
  serverStatus: [
    { name: "Server 1", status: "Running" },
    { name: "Server 2", status: "Running" },
    { name: "Server 3", status: "Stopped" },
    { name: "Server 4", status: "Running" },
    { name: "Server 5", status: "Maintenance" },
  ],
  networkTraffic: [
    { name: "Server 1", inbound: 200, outbound: 150 },
    { name: "Server 2", inbound: 300, outbound: 250 },
    { name: "Server 3", inbound: 100, outbound: 80 },
    { name: "Server 4", inbound: 250, outbound: 200 },
    { name: "Server 5", inbound: 400, outbound: 350 },
  ],
  diskUsage: [
    { name: "Server 1", usage: 50 },
    { name: "Server 2", usage: 70 },
    { name: "Server 3", usage: 90 },
    { name: "Server 4", usage: 40 },
    { name: "Server 5", usage: 60 },
  ],
  uptime: [
    { name: "Server 1", uptime: 99.9 },
    { name: "Server 2", uptime: 99.8 },
    { name: "Server 3", uptime: 99.5 },
    { name: "Server 4", uptime: 99.7 },
    { name: "Server 5", uptime: 99.6 },
  ],
  responseTime: [
    { name: "Server 1", responseTime: 120 },
    { name: "Server 2", responseTime: 150 },
    { name: "Server 3", responseTime: 200 },
    { name: "Server 4", responseTime: 130 },
    { name: "Server 5", responseTime: 170 },
  ],
  errorRates: [
    { name: "Server 1", errors: 5 },
    { name: "Server 2", errors: 3 },
    { name: "Server 3", errors: 10 },
    { name: "Server 4", errors: 2 },
    { name: "Server 5", errors: 7 },
  ],
  requestCounts: [
    { name: "Server 1", requests: 5000 },
    { name: "Server 2", requests: 7000 },
    { name: "Server 3", requests: 4000 },
    { name: "Server 4", requests: 6000 },
    { name: "Server 5", requests: 8000 },
  ],
  alerts: [
    { message: "Server 3 is down", timestamp: new Date() },
    { message: "Server 5 is in maintenance mode", timestamp: new Date() },
  ],
};

export const generateNotification = () => {
  const messages = [
    "Server overload detected!",
    "Memory usage high!",
    "Server downtime!",
    "Maintenance mode activated!",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};

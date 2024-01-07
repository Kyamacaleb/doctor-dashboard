import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockHistory } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Person3Icon from '@mui/icons-material/Person3';
import PeopleIcon from '@mui/icons-material/People';
import TrafficIcon from "@mui/icons-material/Traffic";
import ImageIcon from '@mui/icons-material/Image';
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/*header*/}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Hi Doctor" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.yellowAccent[800],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/*grids and charts*/}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/*Row 1*/}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="5000"
            subtitle="Patients"
            progress="0.60"
            increase="+18%"
            icon={
              <PeopleIcon
                sx={{ color: colors.yellowAccent[700], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="10000"
            subtitle="Images Processed"
            progress="0.70"
            increase="+15%"
            icon={
              <ImageIcon
                sx={{ color: colors.yellowAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="200"
            subtitle="New Patients"
            progress="0.23"
            increase="+12%"
            icon={
              <Person3Icon
                sx={{ color: colors.yellowAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="13500"
            subtitle="Traffic Received"
            progress="0.60"
            increase="+35%"
            icon={
              <TrafficIcon
                sx={{ color: colors.yellowAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/*Row 2*/}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent History
            </Typography>
          </Box>
          {mockHistory.map((history, i) => (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.yellowAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                </Typography>
                <Typography color={colors.grey[100]}>
                  {history.patient}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{history.date}</Box>
              <Box>{history.diagnosis}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

import React from "react";
import {
  Grid,
  TextField,
  Stack,
  InputAdornment,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const Explore = () => {
  const [data, setData] = React.useState([]);

  const handleTrend = async () => {
    try {
      const response = await fetch(`http://localhost:3000/trends`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  React.useEffect(() => {
    handleTrend();
  }, []);

  return (
    <Stack>
      <Stack
        sx={{
          padding: "8px 0px 0px 16px",
        }}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        justifyItems="space-between"
      >
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            style: {
              height: "45px",
              alignContent: "center",
              paddingLeft: "25px",
              color: "#000",
            },
          }}
          placeholder="Search"
          variant="filled"
          sx={{
            borderRadius: "50px",
            width: "90%",
          }}
        />
        <SettingsOutlinedIcon
          sx={{
            mr: "10px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#e0e6eb",
              borderRadius: "50%",
            },
          }}
          onClick={() => {
            alert("Settings");
          }}
        />
      </Stack>
      <Stack p="4px 0px 4px 0px">
        <img src="https://pbs.twimg.com/media/F5guOsvXsAAiNJF?format=jpg&name=small" />
        <Typography
          variant="body2"
          position="absolute"
          sx={{
            color: "#FFFF00",
            transform: "translateX(23%) translateY(100%)",
            top: "59%",
          }}
        >
          Event · LIVE
        </Typography>
        <Typography
          variant="h6"
          fontWeight="bold"
          position="absolute"
          mt={2}
          sx={{
            color: "#FFFF00",
            transform: "translateX(4%) translateY(100%)",
            top: "59%",
          }}
        >
          Name a Web3 project you'll always believe in 🌊
        </Typography>
      </Stack>
      <Stack
        sx={{
          maxHeight: "31vh",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Grid
          sx={{
            overflow: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Paper
            sx={{
              borderTop: "0.5px solid #e0e6eb",
              backgroundColor: "#FFF",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                padding: "8px",
                marginLeft: "8px",
                cursor: "pointer",
              }}
            >
              Trends for you
            </Typography>
            <Box>
              <Box
                sx={{
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                {data.map((trend, index) => (
                  <Box
                    key={index}
                    sx={{
                      height: "8vh",
                      "&:hover": {
                        backgroundColor: "#e0e6eb",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        padding: "8px",
                        marginLeft: "8px",
                      }}
                    >
                      <Typography variant="span">{trend.title}</Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "bold",
                        }}
                      >
                        {trend.keyword}
                      </Typography>
                      <Typography variant="span">
                        {trend.post + "K post"}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Stack>
    </Stack>
  );
};

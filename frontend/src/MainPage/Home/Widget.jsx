import React from "react";
import {
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Widget = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
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

    handleTrend();
  }, []);

  return (
    <Grid
      container
      padding={"0 20px"}
      direction={"column"}
      justifyContent={"space-between"}
      sx={{
        borderLeft: "2px solid #000000", // TODO - It will change to #e6ecf0
      }}
    >
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant="filled"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            marginTop: 1,
            marginBottom: 1,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Paper
          sx={{
            backgroundColor: "#f5f8fa",
            borderRadius: "15px",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              padding: "2%",
              marginLeft: "4%",
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
                      padding: "2%",
                      marginLeft: "4%",
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
    </Grid>
  );
};

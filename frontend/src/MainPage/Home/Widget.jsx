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
    >
      <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
        <TextField
          variant="outlined"
          placeholder="Search"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#808080" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            m: 1,
            width: "30vh",
          }}
        />
      </Grid>
      <Grid
        item
        xs={10}
        sm={10}
        md={10}
        lg={10}
        xl={10}
        display={"flex"}
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 1,
            width: "30vh",
            height: "89vh",
          },
        }}
      >
        <Paper
          elevation={10}
          sx={{
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
            }}
          >
            Trends for you
          </Typography>
          <Box
            sx={{
              padding: "2%",
              marginLeft: "4%",
            }}
          >
            {data.map((trend, index) => (
              <Box
                // TODO - Ask logic of the key keyword to Mert.
                key={index}
                sx={{
                  marginBottom: "10%",
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
                <Typography variant="span">{trend.post + "K post"}</Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

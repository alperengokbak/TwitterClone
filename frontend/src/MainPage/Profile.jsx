import { IconButton, Stack } from "@mui/material";
import React from "react";
import { Route } from "react-router-dom";

export const Profile = () => {
  //useEffect
  // fetchData

  //user
  return (
    <Link to="/${user?.username}">
      <Stack>
        <Stack direction="row" justifyContent="flex-start">
          <IconButton className="profileBackButton"></IconButton>
        </Stack>
      </Stack>
    </Link>
  );
};

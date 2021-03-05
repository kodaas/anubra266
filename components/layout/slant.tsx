import { chakra, Box, Stack, useMediaQuery } from "@chakra-ui/react";
import React from "react";

const Slant = () => {
  const [isTallEnough] = useMediaQuery("(min-height: 560px)");
  return (
    isTallEnough && (
      <Stack
        transform="rotate(-90deg)"
        transformOrigin="left top"
        whiteSpace="nowrap"
        pos="absolute"
        bottom="-55px"
        letterSpacing="0.8px"
        lineHeight="80px"
      >
        <Box>
          <chakra.span color="brand.300"> Abraham Anuoluwapo A.</chakra.span>{" "}
          &copy; 2021
        </Box>
      </Stack>
    )
  );
};

export default Slant;

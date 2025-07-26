
import React from "react";
import { Card } from "@mui/material";
import { motion } from "framer-motion";

const Cards = ({ children }) => {
  return (
    <Card
      component={motion.div}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      sx={{
        width: "100%",
        maxWidth: "1200px",
        padding: 4,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(10px)",
        borderRadius: 4,
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.4)",
      }}
    >
      {children}
    </Card>
  );
};

export default Cards;

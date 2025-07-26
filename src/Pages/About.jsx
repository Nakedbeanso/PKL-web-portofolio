import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import  Cards  from "../assets/Cards.jsx";

const About = () => {

  return (
    <section
    id="about"
    className="min-h-screen flex items-center justify-center bg-transparent px-4 py-16"
  >
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-full flex justify-center px-4 py-8"
    >

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          <Cards 
                data-aos="fade-up"
                data-aos-duration="1500"
          >
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <h6 className="text-3xl sm:text-4xl font-bold text-gray-800 pb-5" > About Me</h6>
            <Typography variant="body1">
              Profesional yang berdedikasi dan bersemangat dengan keahlian dalam pengembangan perangkat lunak. 
              Memiliki kemampuan yang kuat dalam komunikasi dan analisis data. 
              Berkomitmen untuk terus belajar dan berkontribusi pada kesuksesan tim maupun perusahaan.
            </Typography>
          </Box>
          </Cards>

          <Cards
                data-aos="fade-up"
                data-aos-duration="1500"
          >
          <Box sx={{ flex: 1, textAlign: "center" }}>
           <h6 className="text-3xl sm:text-4xl font-bold text-gray-800 pb-5"> Skills </h6>
            <ul style={{ listStyle: "disc", paddingLeft: "1.2rem", textAlign: "left" }}>
              <li>Teamwork</li>
              <li>Time Management</li>
              <li>Critical Thinking</li>
            </ul>
          </Box>
          </Cards>

          <Cards
                data-aos="fade-up"
                data-aos-duration="1500"
          >
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <h6 className="text-3xl sm:text-4xl font-bold text-gray-800 pb-5"> Language </h6>
            <ul style={{ listStyle: "disc", paddingLeft: "1.2rem", textAlign: "left" }}>
              <li>English</li>
              <li>Indonesia</li>
            </ul>
          </Box>
          </Cards>
        </Box>
    </Box>
    </section>
  );
};

export default About;
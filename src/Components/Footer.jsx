import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsEnvelope,
  BsTelephone,
} from "react-icons/bs";

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Footer = () => {
  return (
    <motion.div
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          backgroundColor: "#1a202c",
          color: "white",
          py: 6,
          px: { xs: 2, sm: 4 },
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px", 
            mx: "auto", 
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",      
              sm: "repeat(2, 1fr)", 
              md: "repeat(3, 1fr)", 
            },
            gap: 6,
          }}
        >
          {/* Portfolio Section */}
          <Box>
            <Typography
              variant="h6"
              sx={{ color: "#4f8a8b", fontWeight: "bold", fontSize: "1.25rem" }}
            >
              Portfolio
            </Typography>
            <Typography sx={{ color: "gray", mt: 1, fontSize: "1rem" }}>
              Your one-stop solution for web development and design.
            </Typography>
          </Box>

          {/* Contact Section */}
          <Box>
            <Typography
              variant="h6"
              sx={{ color: "#4f8a8b", fontWeight: "bold", fontSize: "1.25rem" }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <BsEnvelope style={{ marginRight: "8px", color: "gray", fontSize: "1.25rem" }} />
              <Typography sx={{ color: "gray", fontSize: "1rem" }}>
                info@portfolio.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <BsTelephone style={{ marginRight: "8px", color: "gray", fontSize: "1.25rem" }} />
              <Typography sx={{ color: "gray", fontSize: "1rem" }}>
                +62 851 7686 4900
              </Typography>
            </Box>
          </Box>

          <Box sx={{ textAlign: { xs: "left", md: "center" } }}>
            <Typography
              variant="h6"
              sx={{ color: "#4f8a8b", fontWeight: "bold", fontSize: "1.25rem", mb: 2 }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", justifyContent: { xs: "start", md: "center" }, gap: 2 }}>
              {[BsGithub, BsLinkedin, BsInstagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "gray",
                    fontSize: "1.5rem",
                    transition: "color 0.3s",
                  }}
                  className="hover:text-blue-500"
                >
                  <Icon />
                </a>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            mt: 6,
            borderTop: "1px solid #2d3748",
            pt: 2,
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography sx={{ color: "gray", fontSize: "0.9rem" }}>
            &copy; 2024 Portfolio. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Footer;

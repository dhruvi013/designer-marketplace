import React from "react";
import { Grid, Typography, Button, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <div>
      <Grid
        container
        className="bg-black text-white text-center mt-10"
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        {/* Column for "Company" Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ pb: 2 }}>
            Company
          </Typography>
          <div>
            <Button variant="text" sx={{ color: "rgba(255, 255, 255, 0.6)", pb: 1, fontWeight: 300 }}>
              About
            </Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "rgba(255, 255, 255, 0.6)", pb: 1, fontWeight: 300 }}>
              Blog
            </Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "rgba(255, 255, 255, 0.6)", pb: 1, fontWeight: 300 }}>
              Press
            </Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "rgba(255, 255, 255, 0.6)", pb: 1, fontWeight: 300 }}>
              Jobs
            </Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "rgba(255, 255, 255, 0.6)", pb: 1, fontWeight: 300 }}>
              Partners
            </Button>
          </div>
        </Grid>

        {/* Column for "Solutions" Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ pb: 2 }}>
            Solutions
          </Typography>
          <div>
            <Button variant="text" sx={{ color: "rgba(255, 255, 255, 0.6)", pb: 1, fontWeight: 300 }}>
              Marketing
            </Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "rgba(255, 255, 255, 0.6)", pb: 1, fontWeight: 300 }}>
              Analytics
            </Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "rgba(255, 255, 255, 0.6)", pb: 1, fontWeight: 300 }}>
              Commerce
            </Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "rgba(255, 255, 255, 0.6)", pb: 1, fontWeight: 300 }}>
              Insights
            </Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "rgba(255, 255, 255, 0.6)", pb: 1, fontWeight: 300 }}>
              Support
            </Button>
          </div>
        </Grid>

        {/* Column for "Documentation" Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ pb: 2 }}>
            Documentation
          </Typography>
          <div>
            <Button variant="text" sx={{ color: "rgba(255, 255, 255, 0.6)", pb: 1, fontWeight: 300 }}>
              Guides
            </Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "rgba(255, 255, 255, 0.6)", pb: 1, fontWeight: 300 }}>
              API Status
            </Button>
          </div>
        </Grid>

        {/* Column for "Legal" Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" sx={{ pb: 2 }}>
            Legal
          </Typography>
          <div>
            <Button variant="text" sx={{ color: "rgba(255, 255, 255, 0.6)", pb: 1, fontWeight: 300 }}>
              Claim
            </Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "rgba(255, 255, 255, 0.6)", pb: 1, fontWeight: 300 }}>
              Privacy
            </Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "rgba(255, 255, 255, 0.6)", pb: 1, fontWeight: 300 }}>
              Terms
            </Button>
          </div>
        </Grid>
      </Grid>

      {/* Connect with Us Section */}
      <Grid
        container
        sx={{
          bgcolor: "black",
          color: "rgba(255, 255, 255, 0.6)",
          py: 2,
          justifyContent: "center", // Centers the content horizontally
          alignItems: "center", // Centers the content vertically
          textAlign: "center", // Ensures the text is centered within the Grid
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" sx={{ pb: 2 }}>
            Connect with Us
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.6)", mr: 2 }}
              href="https://www.facebook.com"
              target="_blank"
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.6)", mr: 2 }}
              href="https://www.instagram.com"
              target="_blank"
            >
              <Instagram />
            </IconButton>
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.6)", mr: 2 }}
              href="https://twitter.com"
              target="_blank"
            >
              <Twitter />
            </IconButton>
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.6)", mr: 2 }}
              href="https://www.linkedin.com"
              target="_blank"
            >
              <LinkedIn />
            </IconButton>
          </div>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Grid container sx={{ bgcolor: "black", color: "rgba(255, 255, 255, 0.6)", py: 2 }}>
        <Grid item xs={12} textAlign="center">
          <Typography variant="body2">
            © 2025 YourCompanyName. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;

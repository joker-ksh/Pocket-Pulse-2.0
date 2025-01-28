import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ledger from "./ledger.png";
import rating from './rating.png';
import reminder from './reminder.png';
import chat from './chat.png';
import security from './security.png';
import { useContext } from "react";
import { ScrollContext } from "../Scroll/Context";
// Functionalities data as an array of objects
const functionalities = [
  {
    title: "Transaction Ledger",
    description:
      "Maintain a record of all transactions securely and efficiently with real-time updates.",
    image: ledger,
  },
  {
    title: "User Ratings",
    description:
      "Rate users based on transactions and build trust with an integrated rating system.",
    image: rating,
  },
  {
    title: "Transaction Reminders",
    description:
      "Never miss a transaction deadline with timely reminders and notifications.",
    image: reminder,
  },
  {
    title: "Security & Encryption",
    description:
      "Secure all your data and chats with industry-standard end-to-end encryption.",
    image: security,
  },
  {
    title: "Chat & Friends",
    description:
      "Chat with friends and manage transactions collaboratively in one app.",
    image: chat,
  },
];

export default function FunctionalityCards() {
    const { sectionRefs } = useContext(ScrollContext);
  return (
    <Box
      ref={sectionRefs.Card}
      sx={{
        display: "flex",
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically (if page has height)
        marginLeft: "160px",
        marginRight: "auto",
        maxWidth: "80%", // Optional: Control total grid width
        paddingTop: 4,
        paddingBottom: 4,
      }}
    >
      {/* Grid layout for responsive cards */}
      <Grid container spacing={4} justifyContent="center">
        {functionalities.map((func, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                borderRadius: "15px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={func.image}
                  alt={func.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: "white" }}
                  >
                    {func.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255, 255, 255, 0.8)" }}
                  >
                    {func.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

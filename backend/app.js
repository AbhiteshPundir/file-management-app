import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// MIDDLEWARES
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(cookieParser());

// Routes
import registerRoute from "./routes/register.js";
import loginRoute from "./routes/login.js";
import logoutRoute from "./routes/logout.js";
import deatilsRoute from "./routes/details.js";
import fileUploadRoute from "./routes/files.js";
import folderRoute from "./routes/folder.js";

app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);
app.use("/details", deatilsRoute);
app.use("/upload", fileUploadRoute);
app.use("/folder", folderRoute);

export default app;

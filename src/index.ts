import express, { Application } from "express";

import cors from "cors";
import routes from "./routes";
// import helmet from "helmet";
import { errorHandler } from "./middlewares/errorMiddleware";

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(cors())
// app.use(helmet());


// Routes for entire API
app.use("/api", routes);

// Global Error Handler
app.use(errorHandler);

const PORT = 3000;

app.listen(PORT,
    () => console.log(`Server running on port ${PORT}`)
)
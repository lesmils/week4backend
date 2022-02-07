const express = require("express");

const port = 4000;
const app = express();
app.use(express.json());
const categoryRouter = require("./routers/categories");
const userRouter = require("./routers/users");
const productRouter = require("./routers/products");
const authRouter = require("./routers/auth");

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/categories", categoryRouter);

app.listen(port, () => console.log(`listening on port ${port}`));

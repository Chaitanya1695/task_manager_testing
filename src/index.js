const app = require("./app");
// require("dotenv").config();
const port = process.env.PORT || 3000;
// console.log(process.env.test);
// app.use((req, res, next) => {
//   // console.log(req.method, req.path);
//   // next();
//   if (req.method === "GET") {
//     res.send("GET REQUEST DISABLED");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Site is currently down. check back soon");
// });

// const multer = require("multer");

// const uploadDoc = multer({
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error("Please upload a word document"));
//     }
//     cb(undefined, true);
//   },
// });

// app.post(
//   "/upload",
//   uploadDoc.single("upload"),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );

// without middleware: new request -> run route handler

// with middleware:  new request -> do something   -> run route handler

app.listen(port, "0.0.0.0", () => {
  console.log("Server is up on port " + port);
});

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "thisismytoken", {
//     expiresIn: "1 seconds",
//   });
//   console.log(token);

//   const data = jwt.verify(token, "thisismytoken");
//   console.log(data);
// };

// myFunction();

// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//   // const task = await Task.findById("5f4a2c6b8aed284804ff910c");
//   // await task.populate("owner").execPopulate();
//   // console.log(task.owner.password);

//   const user = await User.findById("5f4a2af3518596446cbf8973");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };
// main();

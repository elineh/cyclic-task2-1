var express = require("express");
const router = express.Router();
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

// router.get("/", async (req, res) => {
//   let my_file;
//   try {
//     my_file = await s3
//       .getObject({
//         Bucket: process.env.CYCLIC_BUCKET_NAME,
//         Key: "content.json"
//       })
//       .promise();
//     res.json({
//       status: "success",
//       content: my_file
//     });
//   } catch (err) {
//     if (err.code === "NoSuchKey") {
//       console.log(`No such key ${my_file}`);
//       res.sendStatus(404).end();
//     } else {
//       console.log(err);
//       res.sendStatus(500).end();
//     }
//   }
// });

// router.post("/", async (req, res) => {
//   const { content } = req.body;
//   const contentObj = {
//     content: content
//   };
//   // store something
//   await s3
//     .putObject({
//       Body: JSON.stringify(contentObj, null, 2),
//       Bucket: process.env.CYCLIC_BUCKET_NAME,
//       Key: "content.json"
//     })
//     .promise();
//   res.json({
//     status: "success",
//     content: content
//   });
// });

router.get("/", (req, res) => {
  res.json({ status: "success", result: "Here is some text" });
});

module.exports = router;

const express = require("express");

const app = express();
module.exports = { path: "/api", handler: app };
const rendertron = require("rendertron-middleware");

const BOTS = rendertron.botUserAgents.concat("googlebot");
const BOT_UA_PATTERN = new RegExp(BOTS.join("|"), "i");

app.use(
  rendertron.makeMiddleware({
    proxyUrl: "https://ampedcast-7c1d6.uc.r.appspot.com/render",
    userAgentPattern: BOT_UA_PATTERN
  })
);

app.use(express.static("files"));
app.listen(8080);

// app.get("/", (req, res) => {
//   console.log("hello nuxt in text");
//   res.send("hello world");
// });


process.on("SIGINT", () => {
  process.exit(0);
});

const electrodeConfippet = require("electrode-confippet");
const support = require("electrode-archetype-react-app/support");

/* eslint-disable global-require */
const startServer = config => require("./express-server")(config);

support.load().then(() => {
  const config = electrodeConfippet.config;
  console.log(JSON.stringify(config, null, 2));
  return startServer(config);
});

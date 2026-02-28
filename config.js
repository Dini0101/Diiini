/** @format */

module.exports = {
  token: process.env.DISCORD_TOKEN || "MTQ3NDk3MTc4ODA2Nzk5OTg2NQ.Gi8LIs.C1EK2qDAGUQVyVA7e4M6vbZKr4liHlDKVqoyTU",
  clientId: process.env.CLIENT_ID || "1474971788067999865",
  prefix: process.env.BOT_PREFIX || ">",
  ownerID: process.env.OWNER_ID || "1242220786312413254",
  mongourl: process.env.MONGO_URL || "mongodb+srv://sub:itspossibler@cluster0.xbflmtx.mongodb.net/?retryWrites=true&w=majority",
  embedColor: "#2f3136",
  logs: process.env.WEBHOOK_LOGS || "https://discord.com/api/webhooks/1474977147088277674/T9gaGjssD7_-u52zxkBDzGNyO2Ea9Yrf6kc6e26RnlWU9KCJGH1J60WNnpml3g_77LNQ",
  node_source: "ytsearch",
/////:
    support: "https://discord.gg/urV9mkfW9t",

    line:
      "https://cdn.discordapp.com/attachments/1468219750311002112/1474967851424026694/Untitled116_20260222022902.png?ex=699bc65b&is=699a74db&hm=daaead0d8cc3fcb1dc50e1700f00c20514fa1026a623de51fb265408f4309541&",
    power: "Powered By Desper 🌙",
    vanity: "https://discord.gg/BNhB3xEQ37",
    guild: "1325384856477368420",
  },
  Webhooks: {
    black: process.env.WEBHOOK_BLACK || "",
    player_create: process.env.WEBHOOK_PLAYER_CREATE || "https://discord.com/api/webhooks/1474978380373037198/HViLqnJEE-aUwqjdq5h7VaJGdvR3XjPZns5bOv97iDeC_oKI8OCNzx5MtjOYcrSy_-UE",
    player_delete: process.env.WEBHOOK_PLAYER_DELETE || "https://discord.com/api/webhooks/1474978380373037198/HViLqnJEE-aUwqjdq5h7VaJGdvR3XjPZns5bOv97iDeC_oKI8OCNzx5MtjOYcrSy_-UE",
    guild_join: process.env.WEBHOOK_GUILD_JOIN || "https://discord.com/api/webhooks/1474978728852590665/BKjS5YkZB9g4iES3hbua92oDnE9JB8ykEDn2P4T8eHXaz2x8Fnlm_g2KKH1LgERQS91d",
    guild_leave: process.env.WEBHOOK_GUILD_LEAVE || "https://discord.com/api/webhooks/1474978728852590665/BKjS5YkZB9g4iES3hbua92oDnE9JB8ykEDn2P4T8eHXaz2x8Fnlm_g2KKH1LgERQS91d",
    cmdrun: process.env.WEBHOOK_CMDRUN || "",
  },

  nodes: [
    {


function parseBoolean(value) {
  if (typeof value === "string") {
    value = value.trim().toLowerCase();
  }
  switch (value) {
    case true:
    case "true":
      return true;
    default:
      return false;
  }
}

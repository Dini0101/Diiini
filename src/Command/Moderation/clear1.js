/** @format */

const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  name: "clear1",
  category: "Moderation",
  aliases: ["purge1"],
  description: "Clear a specific number of messages.",
  botParams: ["ManageMessages"],
  userParams: ["ManageMessages"],
  cooldown: 3,
  execute: async (message, args, client, prefix) => {
    if (!args[0]) {
      return message.reply({
        embeds: [
          new EmbedBuilder()
            .setColor(client.color)
            .setDescription(`${client.emoji.cross} | Please provide the number of messages to clear!`),
        ],
      });
    }

    const amount = parseInt(args[0]);

    if (isNaN(amount) || amount <= 0 || amount > 100) {
      return message.reply({
        embeds: [
          new EmbedBuilder()
            .setColor(client.color)
            .setDescription(`${client.emoji.cross} | Please provide a number between 1 and 100!`),
        ],
      });
    }

    await message.channel.bulkDelete(amount, true).then((messages) => {
      const embed = new EmbedBuilder()
        .setColor(client.color)
        .setDescription(`${client.emoji.tick} | Successfully cleared \`${messages.size}\` messages.`);
      message.channel.send({ embeds: [embed] }).then((msg) => {
        setTimeout(() => msg.delete(), 5000);
      });
    }).catch((err) => {
      console.error(err);
      message.reply("There was an error trying to clear messages in this channel!");
    });
  },
};

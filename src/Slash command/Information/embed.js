/** @format */

const {
  EmbedBuilder,
  CommandInteraction,
  Client,
  ApplicationCommandOptionType,
} = require("discord.js");

module.exports = {
  name: "embed",
  description: "Create a custom embed message",
  userPrams: ["ManageMessages"],
  botPrams: ["EmbedLinks"],
  options: [
    {
      name: "description",
      description: "The description of the embed",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
    {
      name: "title",
      description: "The title of the embed",
      type: ApplicationCommandOptionType.String,
      required: false,
    },
    {
      name: "color",
      description: "The color of the embed (hex code, e.g., #ff0000)",
      type: ApplicationCommandOptionType.String,
      required: false,
    },
    {
      name: "image",
      description: "The image URL for the embed",
      type: ApplicationCommandOptionType.String,
      required: false,
    },
  ],

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */

  run: async (client, interaction) => {
    const title = interaction.options.getString("title");
    const description = interaction.options.getString("description");
    const color = interaction.options.getString("color") || client.color || "#2f3136";
    const image = interaction.options.getString("image");

    const embed = new EmbedBuilder()
      .setDescription(description)
      .setColor(color);

    if (title) embed.setTitle(title);
    if (image) embed.setImage(image);

    await interaction.reply({ embeds: [embed] });
  },
};

# Arrkiii Discord Bot

## Overview
A feature-rich Discord music bot built with Discord.js v14, featuring music playback (via Lavalink/Kazagumo), moderation, anti-nuke protection, auto-moderation, fun commands, profile system, and more.

## Project Architecture
- **Entry Point**: `Shard.js` - Uses discord-hybrid-sharding to manage bot clusters
- **Bot Client**: `index.js` - Initializes the MusicBot client
- **Config**: `src/config.js` - Configuration loaded from environment variables
- **Structure**: `src/structures/MusicClient.js` - Extended Discord.js client

### Directory Layout
```
src/
├── commands/        # Prefix-based commands organized by category
│   ├── Antinuke/    # Anti-nuke protection commands
│   ├── Automod/     # Auto-moderation commands
│   ├── Config/      # Bot configuration commands
│   ├── Extra/       # Extra utility commands
│   ├── Fun/         # Fun/entertainment commands
│   ├── Image/       # Image manipulation commands
│   ├── Information/ # Info commands
│   ├── Moderation/  # Moderation commands
│   ├── Music/       # Music playback commands
│   ├── Owner/       # Bot owner commands
│   ├── Pfps/        # Profile picture commands
│   ├── Playlist/    # Playlist management
│   ├── Profile/     # User profile commands
│   ├── Role/        # Role management commands
│   ├── Utility/     # Utility commands
│   ├── Voice/       # Voice channel commands
│   └── Welcome/     # Welcome system commands
├── slashCommands/   # Discord slash commands
├── events/          # Event handlers
├── loaders/         # Module loaders
├── schema/          # Mongoose database schemas
├── structures/      # Bot client structure
├── custom/          # Custom utilities (embeds, buttons)
└── utils/           # Utility functions
```

## Tech Stack
- **Runtime**: Node.js 20
- **Bot Framework**: Discord.js v14 with discord-hybrid-sharding
- **Database**: MongoDB (via Mongoose)
- **Music**: Kazagumo + Shoukaku (Lavalink client)
- **Spotify**: kazagumo-spotify plugin

## Required Environment Variables (Secrets)
- `DISCORD_TOKEN` - Discord bot token (required)
- `MONGO_URL` - MongoDB connection string (required)
- `SPOTIFY_ID` - Spotify client ID
- `SPOTIFY_SECRET` - Spotify client secret
- `TOPGG_TOKEN` - Top.gg API token
- `WEBHOOK_LOGS` - Discord webhook URL for logs

## Running
```bash
node Shard.js
```

import { REST, Routes } from 'discord.js';

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];

const rest = new REST({ version: '10' }).setToken("MTIwMzY5NjM2MDk0ODUwMjU2OA.Gn9fKW.dIKPghEYwmxXVibMxO1tgHihaTk5jO7sSl0e2E");

try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands("CLIENT_ID"), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
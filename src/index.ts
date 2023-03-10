/* Importing modules */
import express from 'express';
import topgg from '@top-gg/sdk';
import { config } from 'dotenv';
import fetch from 'node-fetch';
import colors from 'colors';

/* Configuring dotenv */
config();

/* Creating Variables */
const app = express();
const port = process.env.PORT || 3000;
const webhook = new topgg.Webhook(process.env.TOPGG_TOKEN);

/* Creating the webhook */
app.post('/vote', webhook.listener(vote => {
    let value = JSON.stringify({
        content: `**${vote.user}** just voted for **${vote.bot}**!`,
    });
    fetch(process.env.TOPGG_TOKEN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: value
    }).catch(e => console.log(`${colors.green} [Top.gg] ${colors.red} Error: ${e}`));

}));

app.listen(port, () => {
    console.log(`${colors.green} [Top.gg] ${colors.yellow} Listening on port ${port}`);
});
console.log(`${colors.green} [Top.gg] ${colors.yellow} Webhook is ready!`);
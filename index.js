const { Client } = require("discord.js-selfbot-v13");
const axios = require("axios");
require('dotenv').config();
const API_TOKEN = process.env.API_TOKEN;
const fs = require("fs");
const client = new Client();
const cookies = process.env.COOKIE
client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);
});




async function smartlink() {
  const url = "https://shapes.inc/api/users/memory";
  const headers = {
    Host: "shapes.inc",
    "Sec-Ch-Ua": '"Not/A)Brand";v="8", "Chromium";v="126"',
    "Accept-Language": "en-US",
    Baggage:
      "sentry-environment=vercel-production,sentry-release=44a380ba2e2d558e4787ed1e004081c6cf95f951,sentry-public_key=76d51a8a2b12f9ba0985b149d42a23de,sentry-trace_id=d3c8a190a72c4681a0fa88600fcc9f81",
    "Sec-Ch-Ua-Mobile": "?0",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.6478.127 Safari/537.36",
    "Sentry-Trace": "d3c8a190a72c4681a0fa88600fcc9f81-b2f1583a902cec8d-1",
    "Sec-Ch-Ua-Platform": '"Windows"',
    Accept: "*/*",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Dest": "empty",
    Referer: "https://shapes.inc/explore",
    "Accept-Encoding": "gzip, deflate, br",
    Priority: "u=1, i",
  };


  try {
    const response = await axios.get(url, {
      headers: {
        ...headers,
        Cookie: cookies,
      },
      withCredentials: true, // Ensure cookies are sent
    });
console.log(response.status)
    return response.data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Propagate the error
  }
}


setInterval(smartlink, 60000);










client.on("messageCreate", async (message) => {
  if (message.author.id === "1155782105352114236") {
    if (message.content.includes("punch")) {
      let a = message.content.split(" ");
      let msg = a[1]
      let msg2 = a.slice(2).join(" ");

      async function searchData() {
        const url = "https://shapes.inc/api/users/memory";
        const headers = {
          Host: "shapes.inc",
          "Sec-Ch-Ua": '"Not/A)Brand";v="8", "Chromium";v="126"',
          "Accept-Language": "en-US",
          Baggage:
            "sentry-environment=vercel-production,sentry-release=44a380ba2e2d558e4787ed1e004081c6cf95f951,sentry-public_key=76d51a8a2b12f9ba0985b149d42a23de,sentry-trace_id=d3c8a190a72c4681a0fa88600fcc9f81",
          "Sec-Ch-Ua-Mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.6478.127 Safari/537.36",
          "Sentry-Trace": "d3c8a190a72c4681a0fa88600fcc9f81-b2f1583a902cec8d-1",
          "Sec-Ch-Ua-Platform": '"Windows"',
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://shapes.inc/explore",
          "Accept-Encoding": "gzip, deflate, br",
          Priority: "u=1, i",
        };

   
        try {
          const response = await axios.get(url, {
            headers: {
              ...headers,
              Cookie: cookies,
            },
            withCredentials: true, // Ensure cookies are sent
          });

          return response.data; // Return the fetched data
        } catch (error) {
          console.error("Error fetching data:", error);
          throw error; // Propagate the error
        }
      }

      async function fetchData() {
        try {
          const users = await searchData(); // Await searchData function call
        

          if (!Array.isArray(users)) {
            throw new Error("searchData() did not return an array");
          }

          const selectedItems = users
          .filter(user => {
            // Replace 'condition' with your filtering criteria
            return user.name === msg;
          })
          .map(user => ({
            username: user.username,
            id: user.id,
          }));
      

            const shapeId = selectedItems[0].id
            const chatReviveChannel = message.channel.id;
            const chatReviveRole = msg2;
            console.log({shapeId,chatReviveChannel,chatReviveRole,msg})
            
            const url = `https://shapes.inc/api/shapes/${shapeId}/servers/1176022257483657317/trigger-chat-revive`;
            
            const headers = {
              'Content-Type': 'application/json',
              'Cookie': cookies
            };
            
            const data = {
              "dm_welcome_msg_enabled": false,
              "channel_welcome_msg_enabled": false,
              "channel_welcome_msg_selected_channel": null,
              "keywords": ["anime"],
              "blacklisted_channels": [],
              "whitelisted_channels": ["1176022258326700044"],
              "reply_style": "new_message_with_mention",
              "chat_revive_enabled": true,
              "chat_revive_frequency": 24,
              "chat_revive_channel": chatReviveChannel,
              "chat_revive_role": chatReviveRole,
              "chat_revive_last_sent": null,
              "free_will": "disabled",
              "hate_enabled": false,
              "hate_threshold": 0,
              "hate_threatening_enabled": false,
              "hate_threatening_threshold": 0,
              "harassment_enabled": false,
              "harassment_threshold": 0,
              "harassment_threatening_enabled": false,
              "harassment_threatening_threshold": 0,
              "self_harm_enabled": false,
              "self_harm_threshold": 0,
              "self_harm_intent_enabled": false,
              "self_harm_intent_threshold": 0,
              "self_harm_instructions_enabled": false,
              "self_harm_instructions_threshold": 0,
              "sexual_enabled": false,
              "sexual_threshold": 0,
              "sexual_minors_enabled": false,
              "sexual_minors_threshold": 0,
              "violence_enabled": false,
              "violence_threshold": 0,
              "violence_graphic_enabled": false,
              "violence_graphic_threshold": 0,
              "shape_id": shapeId,
              "discord_server_id": "1176022257483657317"
            };
            
            axios.post(url, data, { headers })
              .then(response => {
                console.log('Response:', response.data);
              })
              .catch(error => {
                if (error.response) {
                  console.error('Status:', error.response.status);
           
                }
              });
            
        



        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      fetchData();
    }



























    if (message.content.includes("config")) {
      let a = message.content.split(" ");
      let msg = a.slice(1).join(" ");

      async function searchData() {
        const url = "https://shapes.inc/api/users/memory";
        const headers = {
          Host: "shapes.inc",
          "Sec-Ch-Ua": '"Not/A)Brand";v="8", "Chromium";v="126"',
          "Accept-Language": "en-US",
          Baggage:
            "sentry-environment=vercel-production,sentry-release=44a380ba2e2d558e4787ed1e004081c6cf95f951,sentry-public_key=76d51a8a2b12f9ba0985b149d42a23de,sentry-trace_id=d3c8a190a72c4681a0fa88600fcc9f81",
          "Sec-Ch-Ua-Mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.6478.127 Safari/537.36",
          "Sentry-Trace": "d3c8a190a72c4681a0fa88600fcc9f81-b2f1583a902cec8d-1",
          "Sec-Ch-Ua-Platform": '"Windows"',
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://shapes.inc/explore",
          "Accept-Encoding": "gzip, deflate, br",
          Priority: "u=1, i",
        };

     
        try {
          const response = await axios.get(url, {
            headers: {
              ...headers,
              Cookie: cookies,
            },
            withCredentials: true, // Ensure cookies are sent
          });
          console.log(response.data);
          return response.data; // Return the fetched data
        } catch (error) {
          console.error("Error fetching data:", error);
          throw error; // Propagate the error
        }
      }

      async function fetchData() {
        try {
          const users = await searchData(); // Await searchData function call
          console.log(users);

          if (!Array.isArray(users)) {
            throw new Error("searchData() did not return an array");
          }

          const selectedItems = users
            .filter((user) => {
              // Replace 'condition' with your filtering criteria
              return user.name === msg;
            })
            .map((user) => ({
              username: user.username,
              id: user.id,
              servers: user.app_info.full_data.approximate_guild_count,
              image_jailbreak: user.image_jailbreak,
              dall_e_3_style: user.dall_e_3_style,
              dall_e_3_size: user.dall_e_3_size,
              Free_will_levl: user.free_will_level,
              image_model: user.image_model,
              Keys: user.keywords,
              verify_key: user.app_info.full_data.verify_key,
              hook: user.app_info.full_data.hook,
              free_will_v2_ff: user.free_will_v2_ff,
              listed_for_adoption: user.listed_for_adoption,
              voice_frequency: user.voice_frequency,
              voice_stability: user.voice_stability,
              voice_similarity: user.voice_similarity,
              voice_style: user.voice_style,
              engine_max_output_tokens: user.engine_max_output_tokens,
              free_will_dm_new: user.free_will_dm_new,
              engine_temperature: user.engine_temperature,
            }));

          const fulldata = users.filter((user) => {
            // Replace 'condition' with your filtering criteria
            return user.name === msg;
          });

          const amsg = JSON.stringify(selectedItems, null, 2);
          const fulldataa = JSON.stringify(fulldata, null, 2);

          // Send message with attachment
          const e = await client.channels.cache.get(message.channel.id).send({
            files: [
              {
                attachment: Buffer.from(fulldataa),
                name: "full_config.json",
              },
            ],
            content: "```" + amsg + "```",
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      fetchData();
    }

    if (message.content.includes("dotshapes")) {
      async function searchData() {
        const url = "https://shapes.inc/api/users/memory";
        const headers = {
          Host: "shapes.inc",
          "Sec-Ch-Ua": '"Not/A)Brand";v="8", "Chromium";v="126"',
          "Accept-Language": "en-US",
          Baggage:
            "sentry-environment=vercel-production,sentry-release=44a380ba2e2d558e4787ed1e004081c6cf95f951,sentry-public_key=76d51a8a2b12f9ba0985b149d42a23de,sentry-trace_id=d3c8a190a72c4681a0fa88600fcc9f81",
          "Sec-Ch-Ua-Mobile": "?0",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.6478.127 Safari/537.36",
          "Sentry-Trace": "d3c8a190a72c4681a0fa88600fcc9f81-b2f1583a902cec8d-1",
          "Sec-Ch-Ua-Platform": '"Windows"',
          Accept: "*/*",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          Referer: "https://shapes.inc/explore",
          "Accept-Encoding": "gzip, deflate, br",
          Priority: "u=1, i",
        };

  
        try {
          const response = await axios.get(url, {
            headers: {
              ...headers,
              Cookie: cookies,
            },
            withCredentials: true, // Ensure cookies are sent
          });
          console.log(response.data);
          return response.data; // Return the fetched data
        } catch (error) {
          console.error("Error fetching data:", error);
          throw error; // Propagate the error
        }
      }

      async function fetchData() {
        try {
          const users = await searchData(); // Await searchData function call
          console.log(users);

          if (!Array.isArray(users)) {
            throw new Error("searchData() did not return an array");
          }

          const selectedItems = users.map((user) => ({
            Name: user.name,
            Engine: user.engine_model,
            ShapeID: user.id,
          }));

          return selectedItems;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      const usersArray = await fetchData();

      let output = "Username                           ShapeID         \n";
      usersArray.forEach((user) => {
        output += `${user.Name.padEnd(20)} ${user.ShapeID}\n\n`;
      });

      message.channel.send("```" + output + "```");
    }
  }
});
client.login(API_TOKEN);

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

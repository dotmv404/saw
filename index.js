const { Client } = require("discord.js-selfbot-v13");
const axios = require("axios");
require('dotenv').config();
console.log(API_TOKEN)
const fs = require("fs");
const client = new Client();
const cookies =
"_ga=GA1.1.183523695.1720728425; _ga_HQ7TXER6B2=GS1.1.1720885862.1.1.1720886345.0.0.0; _ga_GDSBL1RHK4=GS1.1.1720979402.8.1.1720979481.0.0.0; appSession=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwidWF0IjoxNzIwOTc5NTMxLCJpYXQiOjE3MjA5Nzk1MjAsImV4cCI6MTcyMTA2NTkzMX0..O9QX7tYlUAcvQp71.wLovYdKTDdsN-a1jrSQV2MXW56FCEc_X-PVDu3awjBB7v8-MtbyGm1_EwDCC71KhfAdWyzuLLNwUy94dgFMkiyd4F9hNigJak_PeMvD_UYqZLVCw7jBnGujprbDrpu0j1cLweufEYqGVwiTA_Y7Bislu6CfMYp6ToLmE0sBsJhRy_DuNlgdupj_7iPwf67okVjIoMac4eiP468uLOmAMuV13TRw6zAKoeXKwsS5BYAlK7aKP7Cdi17WjIgZ7C6KdTLC9hXgap31d3XvIKys60uYLzYGTeSNBXYCYGtoYseLJ04uBDfpcWQZvtUcS86XCXa0niP7tpGT8HAAavHqHEqw72mqhO8dKQHm1rxAWA_ovPOcit4ReOF-Gqpux_vpuH_Ig16Wsv6_7R-zKeoNuhDOzoLVCJ2c4P2vGWM90YvN5qW8_EUDlUNuU8Edub5JaCKG1BwfbC-o7RVnZN_KvNuaqCBzz0y4saJy73T-e1bbud9od15GEFCbo2CcMU1ym80qnumUdD-xXsh418PzyK3wJ0wjeaXTpDeb8Z44i-vDAEO_u6MjQ1ztu1R3-2SK5vvqCgycR0HKyVD2JwYQsURsgXxMshBdS0qQTMgohqiRPKoFk3MjkmRnYCcBKD87cQJcw5ODVK8MjFBudiMmRoXYUqtaMEc5gFfXwboYRyf_a9itsqKoZg-QpIzVEo8iGTf2I8_zJJv3Q0V1DmmADkGZ1zDfJBZxgXlfzhBaGNm-B5muc-sRr1KN-HeSiiq84PVkF696M-T_pXVxLrUKXhBHG3GwGU8Y7uARMfSw8dv7EkbALc6ZgwsdM2Lj2nFAV-eWPXT7Ix0jbWgbt0mPkoGZXgDNSxcby-CKaDZY7fvhzO1s0FHLLq0uH_Thd8Jtj2Rq9b_4mousTh891CExAoiNbxK082oPn1lAdrGJsGqYt-CchDK4A8BhCagKaBpdAWXCbH9NMZMU8fNBMygVXIs6WAwh9YtTb4N83uWiwJHKdKexm0fLt-u2c14BaJC3h4TI28hN5MJYk1iWr6lk6uMUN-5W3-_PrbENVG0D-R2xjIQdziy7aMOgnDJgwJP9sWkzC8SZyUJa62rFzXiENz4D2nRodPuBmn4k72q0uaH6Q5S8oy1UvRdI2AZZk-CXG_NXP86eE-5kOqK0eIWHC-KpQN75GGH0DHEFAoCzBE8XAJBZFSETDFK7gVJs3MsQDQlFw9TZfBgdWewC1g4fA5-lpwBxC8gd0eLBKlhof6WoRNrgEuv3IpUtXOipeuOEq6bG2DlF6yEJFmLtCjSBZSJ4zAwnoUnwSoNyDzIyI0SDl_LruDcmduKX_OMRI8btarh92o4p2I7d0lmbgHCOCqfGCIO8AXieVuBDopnFjs0gN1Kimd461v1BX_JFA65-LWa1XwUMuST0TZo2aIh0RR4GQBymkkvawkIBfi3DIvuiq-VTdf67bR75TGJYT-_RZIlhJnSr5i99nB5Db_5ms_gYDhxn3XRd_yhpHZWMURBNrE4fG9shsjeNbq1HJeLZo_r4--Z6be0gfbtiEtcsEw3mmXoKxNomn_fClezEnX2E-SMtXiN_Tvee28o_gEaHA8-vh-N-XtXL__8ONDE0SZo5JJZj2YGC5IbKJeYgm_OccJGd6o6fP4MSCVM3RzThStpCL05RoPAfIhlWl33_hcF5vuAEf2CqOoWkchu9mFoRitaGcaXbe_d8o1xJDMfZHJPkeClihOstZ_0u6OV9UgMGrCq5_qfxG04mXmreIk28L1Q-K3xhtJmopwH37DKxFS1hdMaYur_asHHpSlBgxKEP2sUFq75lr1zljs7DgA9IJaBkyAE0JGeCgMMVg5LjN_D7mF05_gHmVUQh8ttczD2qoReQCoNeAV5NW3o9wy8tvWzLXVqHlDjLDt1TQB1_wn1Nvw10dau8w6phwTPgYqoxNCqSzw-auSHMx-wThUchv8x9s99awowEbD1ZuGOGLLrDqb3JUF1VrDGXPbQepoHUpe2V9tKW9Fe-HkQt-6CjKHVi6YB_DDj17ytn8KqmupPPrnIpbVcmnLxlzuoZICxniValW5HMxR-OJZFT65cwjMhZ0sMCrJ8iBBHkJAWIhRtIOAX-d_tO777fFolOVLOUeKnr0Qr-o2iOFDQVRbsoabv6CY_n847mSXRrZgVCRScIKKfB5kmOfs2pZcC8qofABns4lm8f3z0-bAygL1mtCzTGhFFByfmShD85VaOG3yERtQC-DHbPCy2HcNkmU849VrREfmOiUh4HrkWhp23KuGJC_F23J2RhZLIbMD_k1xfq_ROZiXMXVAj2GJKpung5gvngXZOSrhNKBKkssYNj32vzssW7msASd7-q4VOtYy-mHTZZ3DjnGLp3ZFRUd7zaJiWS4L8pFdc_B6BAt0jYq6P6Mpi-fgMq3VTjJLri_kkEDBWMP7Z5-N29ud0inWmF73d1VuVXKBpjO3tjFvJkv-5jiKwQNsXxNBwrFC8MfCMApdAwb4K1LMimV_DLkft22sUtGa9dTEKJE_DPKf6D3L2BQoV2wStU1QITrZ4c85wy_xiDn2dmsLRU1N56qMdYIkgqpQTN7PJgnBxy9e7uKGv3LivFdscrvJGxFvBVtisuOQvBMmA6G9gHIgHTES0ad4gCLB-UwQWbGtO_ik-E93r5g5wd663f5Yw8x91WLjGJtH7UdbsgqE6rUPMQ7BdK4en6Xiv2ih5cNBV_NSMmDGcqnFpSV9voFIZPCai7JCkX5JLNtHA7imRM.AMcL0_TSev_EqaD1deEFXg; crisp-client%2Fsession%2Fc2c4d706-9087-40cb-84d1-645037798ec1=session_66f4b7c9-a666-45eb-8796-e9bcc5ad6f79";

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);
});

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
              'Cookie': "_ga=GA1.1.183523695.1720728425; _ga_HQ7TXER6B2=GS1.1.1720885862.1.1.1720886345.0.0.0; _ga_GDSBL1RHK4=GS1.1.1720979402.8.1.1720979481.0.0.0; appSession=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwidWF0IjoxNzIwOTc5NTMxLCJpYXQiOjE3MjA5Nzk1MjAsImV4cCI6MTcyMTA2NTkzMX0..O9QX7tYlUAcvQp71.wLovYdKTDdsN-a1jrSQV2MXW56FCEc_X-PVDu3awjBB7v8-MtbyGm1_EwDCC71KhfAdWyzuLLNwUy94dgFMkiyd4F9hNigJak_PeMvD_UYqZLVCw7jBnGujprbDrpu0j1cLweufEYqGVwiTA_Y7Bislu6CfMYp6ToLmE0sBsJhRy_DuNlgdupj_7iPwf67okVjIoMac4eiP468uLOmAMuV13TRw6zAKoeXKwsS5BYAlK7aKP7Cdi17WjIgZ7C6KdTLC9hXgap31d3XvIKys60uYLzYGTeSNBXYCYGtoYseLJ04uBDfpcWQZvtUcS86XCXa0niP7tpGT8HAAavHqHEqw72mqhO8dKQHm1rxAWA_ovPOcit4ReOF-Gqpux_vpuH_Ig16Wsv6_7R-zKeoNuhDOzoLVCJ2c4P2vGWM90YvN5qW8_EUDlUNuU8Edub5JaCKG1BwfbC-o7RVnZN_KvNuaqCBzz0y4saJy73T-e1bbud9od15GEFCbo2CcMU1ym80qnumUdD-xXsh418PzyK3wJ0wjeaXTpDeb8Z44i-vDAEO_u6MjQ1ztu1R3-2SK5vvqCgycR0HKyVD2JwYQsURsgXxMshBdS0qQTMgohqiRPKoFk3MjkmRnYCcBKD87cQJcw5ODVK8MjFBudiMmRoXYUqtaMEc5gFfXwboYRyf_a9itsqKoZg-QpIzVEo8iGTf2I8_zJJv3Q0V1DmmADkGZ1zDfJBZxgXlfzhBaGNm-B5muc-sRr1KN-HeSiiq84PVkF696M-T_pXVxLrUKXhBHG3GwGU8Y7uARMfSw8dv7EkbALc6ZgwsdM2Lj2nFAV-eWPXT7Ix0jbWgbt0mPkoGZXgDNSxcby-CKaDZY7fvhzO1s0FHLLq0uH_Thd8Jtj2Rq9b_4mousTh891CExAoiNbxK082oPn1lAdrGJsGqYt-CchDK4A8BhCagKaBpdAWXCbH9NMZMU8fNBMygVXIs6WAwh9YtTb4N83uWiwJHKdKexm0fLt-u2c14BaJC3h4TI28hN5MJYk1iWr6lk6uMUN-5W3-_PrbENVG0D-R2xjIQdziy7aMOgnDJgwJP9sWkzC8SZyUJa62rFzXiENz4D2nRodPuBmn4k72q0uaH6Q5S8oy1UvRdI2AZZk-CXG_NXP86eE-5kOqK0eIWHC-KpQN75GGH0DHEFAoCzBE8XAJBZFSETDFK7gVJs3MsQDQlFw9TZfBgdWewC1g4fA5-lpwBxC8gd0eLBKlhof6WoRNrgEuv3IpUtXOipeuOEq6bG2DlF6yEJFmLtCjSBZSJ4zAwnoUnwSoNyDzIyI0SDl_LruDcmduKX_OMRI8btarh92o4p2I7d0lmbgHCOCqfGCIO8AXieVuBDopnFjs0gN1Kimd461v1BX_JFA65-LWa1XwUMuST0TZo2aIh0RR4GQBymkkvawkIBfi3DIvuiq-VTdf67bR75TGJYT-_RZIlhJnSr5i99nB5Db_5ms_gYDhxn3XRd_yhpHZWMURBNrE4fG9shsjeNbq1HJeLZo_r4--Z6be0gfbtiEtcsEw3mmXoKxNomn_fClezEnX2E-SMtXiN_Tvee28o_gEaHA8-vh-N-XtXL__8ONDE0SZo5JJZj2YGC5IbKJeYgm_OccJGd6o6fP4MSCVM3RzThStpCL05RoPAfIhlWl33_hcF5vuAEf2CqOoWkchu9mFoRitaGcaXbe_d8o1xJDMfZHJPkeClihOstZ_0u6OV9UgMGrCq5_qfxG04mXmreIk28L1Q-K3xhtJmopwH37DKxFS1hdMaYur_asHHpSlBgxKEP2sUFq75lr1zljs7DgA9IJaBkyAE0JGeCgMMVg5LjN_D7mF05_gHmVUQh8ttczD2qoReQCoNeAV5NW3o9wy8tvWzLXVqHlDjLDt1TQB1_wn1Nvw10dau8w6phwTPgYqoxNCqSzw-auSHMx-wThUchv8x9s99awowEbD1ZuGOGLLrDqb3JUF1VrDGXPbQepoHUpe2V9tKW9Fe-HkQt-6CjKHVi6YB_DDj17ytn8KqmupPPrnIpbVcmnLxlzuoZICxniValW5HMxR-OJZFT65cwjMhZ0sMCrJ8iBBHkJAWIhRtIOAX-d_tO777fFolOVLOUeKnr0Qr-o2iOFDQVRbsoabv6CY_n847mSXRrZgVCRScIKKfB5kmOfs2pZcC8qofABns4lm8f3z0-bAygL1mtCzTGhFFByfmShD85VaOG3yERtQC-DHbPCy2HcNkmU849VrREfmOiUh4HrkWhp23KuGJC_F23J2RhZLIbMD_k1xfq_ROZiXMXVAj2GJKpung5gvngXZOSrhNKBKkssYNj32vzssW7msASd7-q4VOtYy-mHTZZ3DjnGLp3ZFRUd7zaJiWS4L8pFdc_B6BAt0jYq6P6Mpi-fgMq3VTjJLri_kkEDBWMP7Z5-N29ud0inWmF73d1VuVXKBpjO3tjFvJkv-5jiKwQNsXxNBwrFC8MfCMApdAwb4K1LMimV_DLkft22sUtGa9dTEKJE_DPKf6D3L2BQoV2wStU1QITrZ4c85wy_xiDn2dmsLRU1N56qMdYIkgqpQTN7PJgnBxy9e7uKGv3LivFdscrvJGxFvBVtisuOQvBMmA6G9gHIgHTES0ad4gCLB-UwQWbGtO_ik-E93r5g5wd663f5Yw8x91WLjGJtH7UdbsgqE6rUPMQ7BdK4en6Xiv2ih5cNBV_NSMmDGcqnFpSV9voFIZPCai7JCkX5JLNtHA7imRM.AMcL0_TSev_EqaD1deEFXg; crisp-client%2Fsession%2Fc2c4d706-9087-40cb-84d1-645037798ec1=session_66f4b7c9-a666-45eb-8796-e9bcc5ad6f79"
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
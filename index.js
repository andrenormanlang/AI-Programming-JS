// import OpenAI from "openai";

// async function hello(author, text) {
//   const stream = await openai.chat.completions.create({
//     messages: [
      // {
      //   role: "system",
      //   content:
      //     "You are a motivational speaker who is encouraging me as a JavaScript developer to keep studying and doing the hard work necessary for success."
      // },
      // {
      //   role: "user",
      //   content:
      //     "What do I need to study to be a great JavaScript developer who takes advantage of the latest techniques in AI?"
      // }
      // {
      //   role: "system",
      //   content:
      //     "You are an amazing JavaScript developer. When I send a codeblock of JavaScript, you will return a more reusable and better written version of this code."
      // },
      // {
      //   role: "user",
      //   content:
      //     "function add(x, y) { var z = x + y; console.log(z);}add(3, 4);"
      // },
      // {
      //   role: "system",
      //   content: "You are a world-renowned author."
      // },
      // {
      //   role: "user",
      //   content: `Write this in the style of ${author}:   ${text}`
      // }
//     ],
//     model: "gpt-3.5-turbo",
//     stream: true,
//     max_tokens: 60
//   });
//   for await (const chunk of stream) {
//     process.stdout.write(
//       chunk.choices[0].delta.content || ""
//     );
//   }
// }

// hello(
//   "Jack Kerouac",
//   "It was the best of times. It was the worst of times."
// );

// const openai = new OpenAI();

// Prompt for a job interview as a Jr. Frontend Developer with frontend experience in JavaScript, TypeScript, Bootstrap, Tailwind, React, React Query, MUI and SolidJs and some  fullstack experience in NextJs, Nodejs, Prisma, MySQL, MongoDB, Firebase and API Development.
// Ask 3 interview questions and answer them.
//  Use a template to make this dynamic and reusable for other job interviews with any other programming language.

// async function hello(role) {
//   const completion = await openai.chat.completions.create({
//     messages: [
//       {
//         role: "system",
//         content:
//           "You will be asked to create job interview questions."
//       },
//       {
//         role: "user",
//         content: `Give me 3 interview questions for  a ${role}  with frontend experience in JavasScript, TypeScript, Bootstrap, Tailwind, React, React Query, MUI and SolidJs and some  fullstack experience in NextJs, Nodejs, Prisma, MySQL, MongoDB, Firebase and API Development.`
//       }
//     ],
//     model: "gpt-3.5-turbo"
//   });
//   console.log(completion.choices[0].message.content);
// }

// hello("Jr. Frontend Developer");


/* Read line for answering specific questions */
// import OpenAI from "openai";
// import readline from "readline";

// const openai = new OpenAI();

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("What do you want to ask the AI? ", async (question) => {
//   let res = await openai.chat.completions.create({
//     messages: [
//       {
//         role: "system",
//         content: "You are a helpful AI."
//       },
//       {
//         role: "user",
//         content: question
//       }
//     ],
//     model: "gpt-3.5-turbo"
//   });
//   console.log(res.choices[0].message.content);
//   rl.close();
// });

/* Creating image descriptions usion Open AI vision model*/
// import OpenAI from "openai";

// const openai = new OpenAI();

// async function imageDescription(url) {
//   let response = await openai.chat.completions.create({
//     messages: [
//       {
//         role: "user",
//         content: [
//           {
//             type: "text",
//             text: "What is this a picture of?"
//           },
//           {
//             type: "image_url",
//             image_url: {
//               url: `${url}`
//             }
//           }
//         ]
//       }
//     ],
//     model: "gpt-4-vision-preview",
//     max_tokens: 300
//   });
//   console.log(response.choices[0].message);
// }

// imageDescription('');

/* Transcribing files */
// import "dotenv/config";
// import axios from "axios";
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";
// import FormData from "form-data";

// const __dirname = path.dirname(
//   fileURLToPath(import.meta.url)
// );
// const recordingPath = path.join(
//   __dirname,
//   "audiotest.mp3"
// );
// const model = "whisper-1";

// const data = new FormData();
// data.append("model", model);
// data.append("file", fs.createReadStream(recordingPath));

// axios
//   .post(
//     "https://api.openai.com/v1/audio/transcriptions",
//     data,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//         "Content-Type": `multipart/form-data;boundary=${data.boundary}`
//       }
//     }
//   )
//   .then((response) => console.log(response.data));

/* Image generation with DALL-E  */
// https://platform.openai.com/docs/guides/images
// import "dotenv/config";
// import axios from "axios";

// axios.post("https://api.openai.com/v1/images/generations", {
//   model: "dall-e-3",
//   prompt: "A painting of psychedelic sunset over the seascape.The sky is ablaze with intense, swirling colors that veer away from the traditional red and orange hues. Instead, the sunset sky should reflect an assortment of psychedelic colors like neon pinks, blues and greens, illuminating the tranquil sea below.",
//   size:"1024x1024"},{
//     headers:{
//       Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//       "Content-Type": "application/json"
//     }
//   }).then((response) => {
//     console.log(response.data);
//   })

/* Assistants API playground refactored*/
// https://platform.openai.com/assistants
// provide me a name to use in assistant playground
// André the Giant
// provide me instructions to use in assistant playground in 30 words or less
// Create a conversation with the assistant by asking it questions about the latest JavaScript frameworks and libraries.
// import "dotenv/config";
// import axios from "axios";

// const API_URL = "https://api.openai.com/v1/images/generations";
// const headers = {
//     Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//     "Content-Type": "application/json"
// };

// async function generatePsychedelicSunset() {
//     try {
//         const response = await axios.post(API_URL,
//             {
//                 model: "dall-e-3",
//                 prompt: "A painting of psychedelic sunset over the seascape. The sky is ablaze with intense, swirling colors that veer away from the traditional red and orange hues. Instead, the sunset sky should reflect an assortment of psychedelic colors like neon pinks, blues and greens, illuminating the tranquil sea below.",
//                 size: "1024x1024"
//             },
//             { headers: headers }
//         );
//         console.log(response.data);
//     } catch (error) {
//         console.error('Failed to generate image:', error);
//     }
// }

// generatePsychedelicSunset();

/* Assistant in an node application*/
// import OpenAI from "openai";
// import dotenv from "dotenv/config";

// const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

// async function andreTheGiantRefactor() {
//   const assistant = await openai.beta.assistants.create({
//     name: "Andre the Giant Code Refactor",
//     instructions: "You are a world renowned code refactoring expert. You will be asked to refactor code in various programming languages.",
//     model: "gpt-4"
//   });
//   console.log(assistant);
// }

// andreTheGiantRefactor();

/* Adding messages to threads in the assistant */
// import OpenAI from "openai";
// import "dotenv/config";
// import readline from "readline";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY
// });

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question(
//   "What is your question for the coding genius?  \n",
//   async (question) => {
//     const thread = await openai.beta.threads.create();
//     const message =
//       await openai.beta.threads.messages.create(thread.id, {
//         role: "user",
//         content: question
//       });
//     console.log(message);
//   }
// );

/* Parsing assistant response */
// import OpenAI from "openai";
// import "dotenv/config";
// import readline from "readline";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY
// });

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question(
//   "Share your thoughts about programming in C#!  \n",
//   async (question) => {
//     const run = await openai.beta.threads.createAndRun({
//       assistant_id: "asst_KnY7fB0zdma9spYhmTkq1RfD",
//       thread: {
//         messages: [
//           {
//             role: "user",
//             content: question
//           }
//         ]
//       }
//     });
//     async function checkStatus() {
//       let status = await openai.beta.threads.runs.retrieve(
//         run.thread_id,
//         run.id
//       );
//       if (status.status === "completed") {
//         let messages =
//           await openai.beta.threads.messages.list(
//             run.thread_id
//           );
//         messages.data.forEach((msg) => {
//           const content = msg.content[0].text.value;
//           console.log(content);
//         });
//       } else {
//         console.log("Run is not completed yet.");
//       }
//     }
//     setTimeout(() => {
//       checkStatus(run.thread_id, run.id);
//     }, 20000);
//   }
// );

/*  Langchain for AI Chat Haiku */
// import { ChatOpenAI } from "@langchain/openai";
// import { ChatPromptTemplate } from "@langchain/core/prompts";
// import { StringOutputParser } from "@langchain/core/output_parsers";
// import "dotenv/config";

// const prompt = ChatPromptTemplate.fromMessages([
//   "human",
//   "Write a haiku about {topic}"
// ]);

// const chatModel = new ChatOpenAI();
// const parser = new StringOutputParser();

// const chain = prompt.pipe(chatModel).pipe(parser);

// const response = await chain.invoke({
//   topic: "crimson sky"
// });

// console.log(response);

/* Langchan with Runnable Sequence and multiple prompts  */
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import "dotenv/config";

const chatModel = new ChatOpenAI();

const prompt1 = PromptTemplate.fromTemplate(
  "Write a {koan}. Respond with the name of the author."
);

const prompt2 = PromptTemplate.fromTemplate(
  "What is the meaning of the {koan}. Respond in {language}."
);

const parser = new StringOutputParser();

const chain = prompt1.pipe(chatModel).pipe(parser);

const bigChain = RunnableSequence.from([
  {
    koan: chain,
    language: (input) => input.language
  },
  prompt2,
  chatModel,
  parser
]);

const response = await bigChain.invoke({
  koan: "reflective koan",
  language: "Brazilian Portuguese"
});

console.log(response);
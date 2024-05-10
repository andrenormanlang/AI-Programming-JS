# OpenAI API with Node.js

## Overview

This project based on an online tutorial demonstrates how to interact with the OpenAI API using Node.js. It contains various examples and utilities, such as generating image descriptions, transcribing audio files, creating job interview questions, and chaining prompts to generate responses in different languages.

## Requirements

- Node.js (v14+ recommended)
- NPM
- OpenAI API Key

## Installation

1. Clone or download the repository.
2. Navigate to the project directory.
3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file and set your OpenAI API key:

    ```bash
    OPENAI_API_KEY=your_openai_api_key
    ```

## Usage

### Examples

**1. Hello Prompt System**

Generates motivational responses and refactors JavaScript code.

```js
// import OpenAI from "openai";
async function hello(author, text) {
  // Your OpenAI code implementation here
}
```

**2. Job Interview Questions Generator**

Prompts the assistant to create job interview questions dynamically for a role.

```js
async function hello(role) {
  // Your OpenAI code implementation here
}
```

**3. Audio Transcription**

Transcribes an audio file to text using the OpenAI Whisper model.

```js
// Import and setup necessary modules
// Code implementation to transcribe files
```

**4. DALL-E Image Generation**

Generates images using DALL-E.

```js
async function generatePsychedelicSunset() {
  // Code implementation to generate images
}
```

**5. Assistant API Playground Refactored**

Creates a playground assistant that refactors code.

```js
async function andreTheGiantRefactor() {
  // Code implementation to refactor code using OpenAI
}
```

**6. Langchain Integration**

Chaining prompts together to perform tasks using the Langchain framework.

```js
import { ChatOpenAI, RunnableSequence } from "@langchain/core";

// Code implementation with RunnableSequence
```

### Running Examples

To run any of the examples, ensure the required dependencies are installed and environment variables are set up properly. Execute the file directly using Node.js:

```bash
node your_example_file.js
```

Replace `your_example_file.js` with the specific file you want to run.

### Troubleshooting

1. **Missing API Key:** Ensure the `.env` file contains the correct API key.
2. **Module Not Found:** Run `npm install` to ensure all required packages are installed.

## Contribution

Feel free to contribute by submitting a pull request or reporting issues. Review the repository's contributing guidelines.

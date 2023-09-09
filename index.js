const OpenAI = require('openai');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

const { Configuration, OpenAIApi } = OpenAI;

const configuration = new Configuration({   
    organization: process.env.ORG_KEY,
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());    

app.get('/', async (req, res) => {
    res.send('Hello World!')
});

app.post('/', async (req, res) => {
    const { message } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `
            You are a smart and intelligent chatbot named Kundu!
            ${message}
        `,
        max_tokens: 150,
        temperature: 0,
    });
    console.log(response.data);
    if (response.data.choices[0].text) {
        res.json({ message: response.data.choices[0].text });
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
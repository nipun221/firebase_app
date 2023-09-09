This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### open your favourite terminal and enter these commands
-> git clone https://github.com/nipun221/firebase_app.git

-> npm install autoprefixer axios body-parser cors dotenv express firebase openai react-router-dom postcss tailwindcss

### If any dependencies remained unmentioned please check-out package.json
To run this project with your own firebase configurations go inside firebase_app/src/app/firebase.js
Then update firebaseConfig with your own that includes
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

After that create .env file in firebase_app that is our root directory
and update API_KEY with your OpenAI API Key and ORG_KEY with Organization Id;-
API_KEY=
ORG_KEY=

### make sure that project has node_modules folder and .next folder inside root directory
After that-
-> cd firebase_app
### run following commands in separate terminals
-> node index.js
-> npm run dev
### In case you have errors while running this project download whole project with every file required -https://drive.google.com/file/d/1K7xtixFQ5PUITG_F9B-ydpysca1dTPHU/view?usp=sharing
If still you have any issue please email me or message me on linkedin;- 




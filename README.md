# Cursorless Command Helper

Get the right command to do something in [Cursorless](https://github.com/cursorless-dev/cursorless).

<img width="598" alt="image" src="https://github.com/user-attachments/assets/18fedf07-125d-48fb-b2c5-8f3275109354" />

## Usage

You'll need a Google AI Studio API key. We're using this instead of OpenAI or Anthropic because unlike those it has a free model that is more than sufficient, so there is no need to set up billing.  
You can get one [here](https://aistudio.google.com/app/apikey).  

### Web UI

https://cursorless-command-helper.vercel.app/

### Local usage

Requires
- NodeJS installed

1. Clone this repository.
2. `npm install` to install the required dependencies.
3. `npm run dev` to launch the development server.

If you run it locally you can experiment with using a different model. In my experience, Gemini 2.0 Flash Experimental works great, so anything better than that should work too, though I haven't tried.

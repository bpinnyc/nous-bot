# nous-bot

First off, I copied most of this from [zunxbt](https://x.com/Zun2025) so you better go follow him, star his git, thank him for being such a great guy and whatever else you can do to show appreciation for what he provides to us degens: [zun git](https://github.com/zunxbt). 

Please star [this repo](https://github.com/bpinnyc/nous-bot), follow [my git](https://github.com/bpinnyc) and give me a follow on X if you find this helpful: [bp](https://x.com/bp__). I think you should also try out Nous' worldsim models. I did [a short thread on how to access them](https://x.com/bp__/status/1916455131278626853).

This bot is a feature-rich Telegram bot integrating Nous Research's AI models for text generation.

## 📋 Prerequisites
- Node.js v16+ 
- npm/yarn
- Telegram account & bot token
- [Nous API Key](https://portal.nousresearch.com/login) - sign up, may have to wait a bit to get approved for access.

## 📥 Installation
1. **Install Node.js and npm if not installed already**
```bash
curl -sSL https://raw.githubusercontent.com/zunxbt/installation/main/node.sh | bash
```
2. **Clone Repository**
```bash
rm -rf nous-bot && git clone https://github.com/bpinnyc/nous-bot.git && cd nous-bot
```
3. **Install dependencies**
```bash
npm install axios@^1.8.3 dotenv@^16.4.7 telegraf@^4.16.3 telegraf-session-local@^2.1.1
```

4. **Install `screen` and `nano` package**
```bash
sudo apt update && sudo apt install -y screen nano
```

## ⚙️ Configuration
1. **Get Telegram Bot Token**
- Open Telegram and search for @BotFather
- Create new bot with /newbot
- Copy the provided HTTP API token

2. **Get Nous API Key**
- Sign Up or Log In at [Nous API Website](https://portal.nousresearch.com/api-docs) and request access to the API key. Once you have it then you can continue.
- Go to Settings → API Keys
- Create/copy your API key

## 🛠️ Environment Set Up
- Create `.env` file using the below command
```bash
nano .env
```
- Now input your Telegram Bot Token
```bash
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
```
- Now save this file using `Ctrl + X` and then `Y` and then press `Enter`

## ⚡ Run the bot
- Create a screen session
```bash
screen -S nous
```
- Now run the below command
```bash
node bot.js
```
- Now detach from this screen session using `Ctrl + A`, then press `D`

## 📜 Commands

| Command    | Description            |
|------------|------------------------|
| `/start`   | Start the bot          |
| `/switch`  | Change model           |
| `/remove`  | Remove API key         |
| `/help`    | Show commands          |

## 🔒 Security
- API keys stored only in session memory
- Keys automatically cleared with /remove command
- No persistent storage of credentials

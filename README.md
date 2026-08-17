# 祖牌 PDF Generator

REST API server that generates formatted PDF documents for traditional ancestral tablets (祖先牌位).

## How It Works

```
JSON input → Handlebars template → Puppeteer render → PDF output
```

## Tech Stack

| Tech | Purpose |
|------|---------|
| Node.js + Express | API server |
| Handlebars | HTML templating |
| Puppeteer | PDF rendering |

## Getting Started

```bash
git clone https://github.com/john8895/zupai-pdf-generator.git
cd zupai-pdf-generator
npm install
node server.js
```

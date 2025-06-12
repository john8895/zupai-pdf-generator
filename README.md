# zupai-pdf-generator

產出直式祖牌 PDF，支援自訂尺寸、標楷體、自動縮字與直式排版。

## 使用方式

```bash
npm install
node server.js
```

用 curl 呼叫：

```bash
curl -X POST http://localhost:3000/generate \
  -H "Content-Type: application/json" \
  -d @example.json \
  --output output.pdf
```

## 設定說明

- `template.html`：祖牌模板
- `style.css`：直式排版樣式
- `generate.js`：產 PDF 的程式
- `server.js`：Express API
- `example.json`：測試資料
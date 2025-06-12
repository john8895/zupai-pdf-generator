const puppeteer = require('puppeteer');
const fs = require('fs');
const Handlebars = require('handlebars');

async function generatePDF(data) {
  const templateHtml = fs.readFileSync('template.html', 'utf8');
  const template = Handlebars.compile(templateHtml);
  const html = template(data);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });

  await page.addStyleTag({ path: 'style.css' });

  const filename = `祖牌-${data.姓名}.pdf`;
  await page.pdf({
    path: filename,
    format: 'A4',
    width: `${data.尺寸.寬}mm`,
    height: `${data.尺寸.高}mm`,
    printBackground: true
  });

  await browser.close();
  return filename;
}

module.exports = generatePDF;
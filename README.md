# 仁美里的城藝文旅

清華大學附設實驗國民小學　第40屆藝術才能美術班「仁美里」2024 畢業美展網站。
由原 Google 協作平台網站（sites.google.com/mail.ntut.edu.tw/renmei）移轉為靜態網頁，以 GitHub Pages 發布。

## 結構

| 檔案 | 內容 |
|---|---|
| `index.html` | 首頁 |
| `depart.html` | 出發（展覽時間、地點） |
| `works.html` | 作品展示 |
| `works-*.html` | 7 個作品子頁（明信片、鑰匙圈、徽章、馬克杯、貼紙、形象周邊） |
| `life.html` | 生活點滴（影片與活動紀錄） |
| `contact.html` | 聯絡方式 |
| `assets/` | 共用樣式 `style.css`、互動 `site.js`、網站圖示 |
| `img/` | 全站 273 張圖片（WebP） |

## 發布到 GitHub Pages

1. 用 GitHub Desktop：File → Add local repository → 選這個資料夾 → 「create a repository」→ Publish repository（取消勾選 Keep this code private，或使用付費方案）。
2. 到 GitHub 上的 repo → Settings → Pages → Source 選 **Deploy from a branch**，Branch 選 `main`、資料夾 `/ (root)` → Save。
3. 約 1 分鐘後網站會出現在 `https://<帳號>.github.io/renmei/`。

## 修改內容

每一頁都是單純的 HTML，可直接用編輯器修改文字；新增圖片放進 `img/`，再以 `<img src="img/檔名.webp">` 引用。

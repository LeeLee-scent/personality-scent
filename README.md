
# LeeLee Scent Studio - 香氣人格測驗

這是一個仿照 VOGUE 香氣風格設計的互動測驗頁面，提供六種香氣人格的探索。

## 使用方式

1. 開啟 `index.html` 開始測驗
2. 點擊進入後查看六種香氣類型
3. 可部署於 GitHub Pages

## 品牌視覺

以 LeeLee Scent Studio 為設計主軸，插圖、香氣、文案皆以繁體中文完成。
"""

# 寫入檔案
with open(os.path.join(project_root, "index.html"), "w") as f:
    f.write(index_html)

with open(os.path.join(project_root, "results.html"), "w") as f:
    f.write(results_html)

with open(os.path.join(project_root, "style.css"), "w") as f:
    f.write(style_css)

with open(os.path.join(project_root, "README.md"), "w") as f:
    f.write(readme_md)
    

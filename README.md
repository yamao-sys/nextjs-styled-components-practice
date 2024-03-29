# nextjs-styled-components-practice

## 技術構成
- Next.js: v14.1.4
- styled-components: 6.1.8

## 設計方針
- スタイルを充てるコンポーネントにて、styled-componentsを使用
- 共通コンポーネントでレイアウトのバリエーションを持たせたいものはpropsで受けるように
- 共通のスタイル値はtheme.tsから使用

## ちょっと難点
- ThemeProviderがClient Componentオンリーのためlayout.tsxではなく、別途レイアウトコンポーネントを作成している

### 参考
https://github.com/kimromi/notes/issues/28

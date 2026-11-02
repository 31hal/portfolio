// 作品データ。写真を追加するときは、ここに1件足すだけです。
// 写真ファイルは public/photos/ に入れ、file にファイル名を書きます。
// file が空のあいだは、tones の色でできた仮の画像が表示されます。
export const site = {
  name: 'Your Name',
  about: '写真を撮っています。',
  contact: 'you@example.com',
};

export type Work = {
  slug: string;
  title: string;
  year: number;
  place: string;
  ratio: string;
  tones: [string, string];
  file?: string;
};

export const works: Work[] = [
  { slug: 'after-rain', title: '雨のあと', year: 2026, place: '東京', ratio: '3 / 2', tones: ['#20242c', '#8d97a8'] },
  { slug: 'white-wall', title: '白い壁', year: 2026, place: '京都', ratio: '4 / 5', tones: ['#d9d9d6', '#f4f4f2'] },
  { slug: 'platform', title: 'ホーム', year: 2025, place: '大阪', ratio: '3 / 2', tones: ['#33291f', '#b58a5c'] },
  { slug: 'low-tide', title: '引き潮', year: 2025, place: '鎌倉', ratio: '1 / 1', tones: ['#3b4a4d', '#a9bcbc'] },
  { slug: 'last-train', title: '終電', year: 2024, place: '東京', ratio: '2 / 3', tones: ['#111111', '#5a4a6a'] },
  { slug: 'blank', title: '余白', year: 2024, place: '札幌', ratio: '3 / 2', tones: ['#c9ccd1', '#eef0f3'] },
];

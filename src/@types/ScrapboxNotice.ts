// Scrapbox から送信されるオブジェクトサンプル
// {
//   text: 'New lines on <https://scrapbox.io/unabara/|unabara>',
//   mrkdwn: true,
//   username: 'Scrapbox',
//   attachments: [
//     {
//       title: 'テスト',
//       title_link: 'https://scrapbox.io/unabara/%E3%83%86%E3%82%B9%E3%83%88#63269b32cf762000001f0e36',
//       text: '\t• テスト',
//       rawText: '\tテスト',
//       mrkdwn_in: ['text'],
//       author_name: 'pachory'
//     }
//   ]
// }

export type ScrapboxNotice = {
  readonly text: string;
  readonly mrkdwn: boolean;
  readonly username: string;
  readonly attachments: ScrapboxNoticeAttachment[];
};

export type ScrapboxNoticeAttachment = {
  readonly title: string;
  readonly title_link: string;
  readonly text: string;
  readonly rawText: string;
  readonly mrkdwn_in: MrkdwnIn;
  readonly author_name: string;
};

type MrkdwnIn = readonly [string];

import express from 'express';
import { ScrapboxNotice } from './@types/ScrapboxNotice';
import { SlackPostOptionsAttachments } from './@types/SlackPostOptions';
import { ScrapboxService } from './services/ScrapboxService';
import { SlackNoticeService } from './services/SlackNoticeService';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();
const port = 8080;

app.use(express.json());

app.post('/push_to_slack', (req, res) => {
  if (process.env.SLACK_API_TOKEN == null) {
    throw new Error('SLACK_API_TOKEN の値がありません');
  }
  const scrapboxNoticeObj = req.body as ScrapboxNotice;

  const token = process.env.SLACK_API_TOKEN as string;

  const filteredScrapboxNoticeObj =
    ScrapboxService().filterNotifiable(scrapboxNoticeObj);

  if (filteredScrapboxNoticeObj.attachments.length > 0) {
    SlackNoticeService().push(token, {
      channel: 'unabara_scrapbox',
      text: scrapboxNoticeObj.text,
      attachments: filteredScrapboxNoticeObj.attachments.map(
        (item): SlackPostOptionsAttachments => {
          return {
            title: item.title,
            title_link: item.title_link,
            text: item.text,
            author_name: item.author_name,
          };
        }
      ),
    });
  }

  res.send('ok');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

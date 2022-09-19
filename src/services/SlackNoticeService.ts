import { WebClient } from '@slack/web-api';
import SlackPostOptions from '../@types/SlackPostOptions';

const SlackNoticeService = () => {
  const push = async (
    token: string,
    options: SlackPostOptions
  ): Promise<boolean> => {
    const client = new WebClient(token);
    const response = await client.chat.postMessage(options);

    return response.ok;
  };

  return { push };
};

export default SlackNoticeService;

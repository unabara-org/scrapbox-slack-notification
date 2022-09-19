type SlackPostOptions = {
  channel: string;
  text: string;
  attachments: Attachments[];
};

type Attachments = {
  title: string;
  title_link: string;
  text: string;
  author_name: string;
};

export default SlackPostOptions;

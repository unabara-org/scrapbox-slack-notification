export type SlackPostOptions = {
  channel: string;
  text: string;
  attachments: SlackPostOptionsAttachments[];
};

export type SlackPostOptionsAttachments = {
  title: string;
  title_link: string;
  text: string;
  author_name: string;
};

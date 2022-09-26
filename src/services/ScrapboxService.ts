import {
  ScrapboxNotice,
  ScrapboxNoticeAttachment,
} from '../@types/ScrapboxNotice';

export const ScrapboxService = () => {
  const isNotifiable = (attachment: ScrapboxNoticeAttachment): boolean => {
    const ignoreTitlePatterns = [/^日報[\s　].*/, /^下書き[\s　].*/];

    return (
      ignoreTitlePatterns.filter((regex) => {
        return regex.test(attachment.title);
      }).length === 0
    );
  };

  const filterNotifiable = (notice: ScrapboxNotice) => {
    const result: ScrapboxNotice = { ...notice, attachments: [] };

    for (const item of notice.attachments) {
      if (ScrapboxService().isNotifiable(item)) {
        result.attachments.push(item);
      }
    }

    return result;
  };

  return { isNotifiable, filterNotifiable };
};

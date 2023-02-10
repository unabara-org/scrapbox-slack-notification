import {
  ScrapboxNotice,
  ScrapboxNoticeAttachment,
} from '../@types/ScrapboxNotice';

export const ScrapboxService = () => {
  const isNotifiable = (attachment: ScrapboxNoticeAttachment): boolean => {
    const ignoreTitlePatterns = [/^日報[\s　]/, /^下書き[\s　]/];

    return ignoreTitlePatterns.every(
      (pattern) => !pattern.test(attachment.title)
    );
  };

  const filterNotifiable = (notice: ScrapboxNotice): ScrapboxNotice => {
    return {
      ...notice,
      attachments: notice.attachments.filter((attachment) =>
        ScrapboxService().isNotifiable(attachment)
      ),
    };
  };

  return { isNotifiable, filterNotifiable };
};

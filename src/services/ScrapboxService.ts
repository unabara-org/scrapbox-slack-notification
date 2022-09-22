import {
  ScrapboxNotice,
  ScrapboxNoticeAttachment,
} from '../@types/ScrapboxNotice';

const ScrapboxService = () => {
  const isNotifiable = (attachment: ScrapboxNoticeAttachment): boolean => {
    const regexList = [/^日報[\s　].*/, /^下書き[\s　].*/];

    return (
      regexList.filter((regex) => {
        return attachment.title.match(regex) != null;
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

export default ScrapboxService;

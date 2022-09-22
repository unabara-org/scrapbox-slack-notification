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

  return { isNotifiable };
};

export default ScrapboxService;

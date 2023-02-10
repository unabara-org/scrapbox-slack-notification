import {
  ScrapboxNotice,
  ScrapboxNoticeAttachment,
} from '../../../@types/ScrapboxNotice';
import { ScrapboxService } from '../../../services/ScrapboxService';

describe('ScrapboxService()', () => {
  describe('isNotifiable()', () => {
    const baseAttachment: ScrapboxNoticeAttachment = {
      title: '',
      title_link: '',
      text: '',
      rawText: '',
      mrkdwn_in: [''],
      author_name: '',
    };

    test('title の文字列が「日報or下書き」で始まり、次に半角or全角の空白がある場合は false が返却される、それ以外の場合は true が返却される', async () => {
      expect(
        ScrapboxService().isNotifiable({
          ...baseAttachment,
          title: '日報 あいうえお',
        })
      ).toBe(false);

      expect(
        ScrapboxService().isNotifiable({
          ...baseAttachment,
          title: '日報　あいうえお',
        })
      ).toBe(false);

      expect(
        ScrapboxService().isNotifiable({
          ...baseAttachment,
          title: '日報あいうえお',
        })
      ).toBe(true);

      expect(
        ScrapboxService().isNotifiable({
          ...baseAttachment,
          title: 'あいうえお日報あいうえお',
        })
      ).toBe(true);

      expect(
        ScrapboxService().isNotifiable({
          ...baseAttachment,
          title: '下書き あいうえお',
        })
      ).toBe(false);

      expect(
        ScrapboxService().isNotifiable({
          ...baseAttachment,
          title: '下書き　あいうえお',
        })
      ).toBe(false);

      expect(
        ScrapboxService().isNotifiable({
          ...baseAttachment,
          title: '下書きあいうえお',
        })
      ).toBe(true);

      expect(
        ScrapboxService().isNotifiable({
          ...baseAttachment,
          title: 'あいうえお下書きあいうえお',
        })
      ).toBe(true);

      expect(
        ScrapboxService().isNotifiable({ ...baseAttachment, title: '' })
      ).toBe(true);
    });
  });

  describe('filterNotifiable()', () => {
    const baseScrapboxNotice: ScrapboxNotice = {
      username: '',
      text: '',
      mrkdwn: true,
      attachments: [],
    };
    let baseAttachment: ScrapboxNoticeAttachment = {
      title: '',
      title_link: '',
      text: '',
      rawText: '',
      mrkdwn_in: [''],
      author_name: '',
    };

    test('isNotifiable() で false を返す ScrapboxNoticeAttachment オブジェクトがある場合は返却値に含まれない', async () => {
      const notice: ScrapboxNotice = {
        ...baseScrapboxNotice,
        attachments: [
          { ...baseAttachment, title: 'あいうえお' },
          { ...baseAttachment, title: '日報 あいうえお' },
          { ...baseAttachment, title: 'かきくけこ' },
          { ...baseAttachment, title: '下書き あいうえお' },
        ],
      };

      const filterd = ScrapboxService().filterNotifiable(notice);
      expect(filterd).toEqual({
        ...notice,
        attachments: [
          { ...baseAttachment, title: 'あいうえお' },
          { ...baseAttachment, title: 'かきくけこ' },
        ],
      });
    });
  });
});

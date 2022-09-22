import { ScrapboxNoticeAttachment } from '../../../@types/ScrapboxNotice';
import ScrapboxService from '../../../services/ScrapboxService';

describe('ScrapboxService() のテスト', () => {
  describe('isNotifiable() のテスト', () => {
    let baseAttachment: ScrapboxNoticeAttachment = {
      title: '',
      title_link: '',
      text: '',
      rawText: '',
      mrkdwn_in: [''],
      author_name: '',
    };

    test('「日報 」の場合 false になる', async () => {
      const attachment = { ...baseAttachment, title: '日報 あいうえお' };
      expect(ScrapboxService().isNotifiable(attachment)).toBe(false);
    });

    test('「日報　」の場合 false になる', async () => {
      const attachment = { ...baseAttachment, title: '日報　あいうえお' };
      expect(ScrapboxService().isNotifiable(attachment)).toBe(false);
    });

    test('「日報あいうえお」の場合 true になる', async () => {
      const attachment = { ...baseAttachment, title: '日報あいうえお' };
      expect(ScrapboxService().isNotifiable(attachment)).toBe(true);
    });

    test('「あいうえお日報あいうえお」の場合 true になる', async () => {
      const attachment = {
        ...baseAttachment,
        title: 'あいうえお日報あいうえお',
      };
      expect(ScrapboxService().isNotifiable(attachment)).toBe(true);
    });

    test('「下書き 」の場合 false になる', async () => {
      const attachment = { ...baseAttachment, title: '下書き あいうえお' };
      expect(ScrapboxService().isNotifiable(attachment)).toBe(false);
    });

    test('「下書き　」の場合 false になる', async () => {
      const attachment = { ...baseAttachment, title: '下書き　あいうえお' };
      expect(ScrapboxService().isNotifiable(attachment)).toBe(false);
    });

    test('「下書きあいうえお」の場合 true になる', async () => {
      const attachment = { ...baseAttachment, title: '下書きあいうえお' };
      expect(ScrapboxService().isNotifiable(attachment)).toBe(true);
    });

    test('「あいうえお下書きあいうえお」の場合 true になる', async () => {
      const attachment = {
        ...baseAttachment,
        title: 'あいうえお下書きあいうえお',
      };
      expect(ScrapboxService().isNotifiable(attachment)).toBe(true);
    });

    test('空文字の場合 true になる', async () => {
      const attachment = { ...baseAttachment, title: '' };
      expect(ScrapboxService().isNotifiable(attachment)).toBe(true);
    });
  });
});

import { ScrapboxNotice } from '../@types/ScrapboxNotice';

const ScrapboxService = () => {
  const isNotifiable = (notice: ScrapboxNotice) => {
    // todo: どのようなルールで通知可とするか
    return true;
  };

  return { isNotifiable };
};

export default ScrapboxService;

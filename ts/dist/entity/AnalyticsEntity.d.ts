import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { Analytics, AnalyticsLoadMatch } from '../MemesioContentCreationTypes';
declare class AnalyticsEntity extends MemesioContentCreationEntityBase<Analytics> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: AnalyticsEntity): AnalyticsEntity;
    load(this: any, reqmatch?: AnalyticsLoadMatch, ctrl?: Control): Promise<AnalyticsEntity>;
}
export { AnalyticsEntity };

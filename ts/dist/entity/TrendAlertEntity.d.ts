import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { TrendAlert, TrendAlertLoadMatch, TrendAlertCreateData } from '../MemesioContentCreationTypes';
declare class TrendAlertEntity extends MemesioContentCreationEntityBase<TrendAlert> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: TrendAlertEntity): TrendAlertEntity;
    load(this: any, reqmatch?: TrendAlertLoadMatch, ctrl?: Control): Promise<TrendAlertEntity>;
    create(this: any, reqdata?: TrendAlertCreateData, ctrl?: Control): Promise<TrendAlertEntity>;
}
export { TrendAlertEntity };

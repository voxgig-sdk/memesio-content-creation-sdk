import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { Growth, GrowthLoadMatch, GrowthCreateData } from '../MemesioContentCreationTypes';
declare class GrowthEntity extends MemesioContentCreationEntityBase<Growth> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: GrowthEntity): GrowthEntity;
    load(this: any, reqmatch?: GrowthLoadMatch, ctrl?: Control): Promise<GrowthEntity>;
    create(this: any, reqdata?: GrowthCreateData, ctrl?: Control): Promise<GrowthEntity>;
}
export { GrowthEntity };

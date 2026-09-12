import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { Billing, BillingLoadMatch } from '../MemesioContentCreationTypes';
declare class BillingEntity extends MemesioContentCreationEntityBase<Billing> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: BillingEntity): BillingEntity;
    load(this: any, reqmatch?: BillingLoadMatch, ctrl?: Control): Promise<BillingEntity>;
}
export { BillingEntity };

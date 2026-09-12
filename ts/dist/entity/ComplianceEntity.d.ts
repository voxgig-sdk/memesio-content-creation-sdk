import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { Compliance, ComplianceLoadMatch } from '../MemesioContentCreationTypes';
declare class ComplianceEntity extends MemesioContentCreationEntityBase<Compliance> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: ComplianceEntity): ComplianceEntity;
    load(this: any, reqmatch?: ComplianceLoadMatch, ctrl?: Control): Promise<ComplianceEntity>;
}
export { ComplianceEntity };

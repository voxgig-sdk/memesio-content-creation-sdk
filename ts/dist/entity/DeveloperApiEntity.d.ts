import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { DeveloperApi, DeveloperApiLoadMatch, DeveloperApiCreateData } from '../MemesioContentCreationTypes';
declare class DeveloperApiEntity extends MemesioContentCreationEntityBase<DeveloperApi> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: DeveloperApiEntity): DeveloperApiEntity;
    load(this: any, reqmatch?: DeveloperApiLoadMatch, ctrl?: Control): Promise<DeveloperApiEntity>;
    create(this: any, reqdata?: DeveloperApiCreateData, ctrl?: Control): Promise<DeveloperApiEntity>;
}
export { DeveloperApiEntity };

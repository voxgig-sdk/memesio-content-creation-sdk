import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { AiProvider, AiProviderLoadMatch, AiProviderCreateData } from '../MemesioContentCreationTypes';
declare class AiProviderEntity extends MemesioContentCreationEntityBase<AiProvider> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: AiProviderEntity): AiProviderEntity;
    load(this: any, reqmatch?: AiProviderLoadMatch, ctrl?: Control): Promise<AiProviderEntity>;
    create(this: any, reqdata?: AiProviderCreateData, ctrl?: Control): Promise<AiProviderEntity>;
}
export { AiProviderEntity };

import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { AiJob, AiJobLoadMatch, AiJobCreateData } from '../MemesioContentCreationTypes';
declare class AiJobEntity extends MemesioContentCreationEntityBase<AiJob> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: AiJobEntity): AiJobEntity;
    load(this: any, reqmatch?: AiJobLoadMatch, ctrl?: Control): Promise<AiJobEntity>;
    create(this: any, reqdata?: AiJobCreateData, ctrl?: Control): Promise<AiJobEntity>;
}
export { AiJobEntity };

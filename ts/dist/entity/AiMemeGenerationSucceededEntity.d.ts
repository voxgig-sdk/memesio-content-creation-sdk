import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { AiMemeGenerationSucceeded, AiMemeGenerationSucceededCreateData } from '../MemesioContentCreationTypes';
declare class AiMemeGenerationSucceededEntity extends MemesioContentCreationEntityBase<AiMemeGenerationSucceeded> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: AiMemeGenerationSucceededEntity): AiMemeGenerationSucceededEntity;
    create(this: any, reqdata?: AiMemeGenerationSucceededCreateData, ctrl?: Control): Promise<AiMemeGenerationSucceededEntity>;
}
export { AiMemeGenerationSucceededEntity };

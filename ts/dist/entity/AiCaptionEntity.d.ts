import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { AiCaption, AiCaptionLoadMatch, AiCaptionCreateData } from '../MemesioContentCreationTypes';
declare class AiCaptionEntity extends MemesioContentCreationEntityBase<AiCaption> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: AiCaptionEntity): AiCaptionEntity;
    load(this: any, reqmatch?: AiCaptionLoadMatch, ctrl?: Control): Promise<AiCaptionEntity>;
    create(this: any, reqdata?: AiCaptionCreateData, ctrl?: Control): Promise<AiCaptionEntity>;
}
export { AiCaptionEntity };

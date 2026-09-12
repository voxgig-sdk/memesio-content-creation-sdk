import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { Generate, GenerateCreateData } from '../MemesioContentCreationTypes';
declare class GenerateEntity extends MemesioContentCreationEntityBase<Generate> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: GenerateEntity): GenerateEntity;
    create(this: any, reqdata?: GenerateCreateData, ctrl?: Control): Promise<GenerateEntity>;
}
export { GenerateEntity };

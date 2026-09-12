import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { CreateMeme, CreateMemeCreateData } from '../MemesioContentCreationTypes';
declare class CreateMemeEntity extends MemesioContentCreationEntityBase<CreateMeme> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: CreateMemeEntity): CreateMemeEntity;
    create(this: any, reqdata?: CreateMemeCreateData, ctrl?: Control): Promise<CreateMemeEntity>;
}
export { CreateMemeEntity };

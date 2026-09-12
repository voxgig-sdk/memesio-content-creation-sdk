import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { PublicTemplateMediaItem, PublicTemplateMediaItemLoadMatch, PublicTemplateMediaItemCreateData } from '../MemesioContentCreationTypes';
declare class PublicTemplateMediaItemEntity extends MemesioContentCreationEntityBase<PublicTemplateMediaItem> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: PublicTemplateMediaItemEntity): PublicTemplateMediaItemEntity;
    load(this: any, reqmatch?: PublicTemplateMediaItemLoadMatch, ctrl?: Control): Promise<PublicTemplateMediaItemEntity>;
    create(this: any, reqdata?: PublicTemplateMediaItemCreateData, ctrl?: Control): Promise<PublicTemplateMediaItemEntity>;
}
export { PublicTemplateMediaItemEntity };

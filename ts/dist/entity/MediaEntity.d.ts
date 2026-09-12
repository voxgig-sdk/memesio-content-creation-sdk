import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { Media, MediaCreateData } from '../MemesioContentCreationTypes';
declare class MediaEntity extends MemesioContentCreationEntityBase<Media> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: MediaEntity): MediaEntity;
    create(this: any, reqdata?: MediaCreateData, ctrl?: Control): Promise<MediaEntity>;
}
export { MediaEntity };

import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { Video, VideoLoadMatch, VideoCreateData } from '../MemesioContentCreationTypes';
declare class VideoEntity extends MemesioContentCreationEntityBase<Video> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: VideoEntity): VideoEntity;
    load(this: any, reqmatch?: VideoLoadMatch, ctrl?: Control): Promise<VideoEntity>;
    create(this: any, reqdata?: VideoCreateData, ctrl?: Control): Promise<VideoEntity>;
}
export { VideoEntity };

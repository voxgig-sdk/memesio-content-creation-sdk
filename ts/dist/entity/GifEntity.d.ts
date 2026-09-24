import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { Gif, GifListMatch } from '../MemesioContentCreationTypes';
declare class GifEntity extends MemesioContentCreationEntityBase<Gif> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: GifEntity): GifEntity;
    list(this: any, reqmatch?: GifListMatch, ctrl?: Control): Promise<GifEntity[]>;
}
export { GifEntity };

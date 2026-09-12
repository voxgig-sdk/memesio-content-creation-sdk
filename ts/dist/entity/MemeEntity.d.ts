import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { Meme, MemeLoadMatch, MemeRemoveMatch } from '../MemesioContentCreationTypes';
declare class MemeEntity extends MemesioContentCreationEntityBase<Meme> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: MemeEntity): MemeEntity;
    load(this: any, reqmatch?: MemeLoadMatch, ctrl?: Control): Promise<MemeEntity>;
    remove(this: any, reqmatch?: MemeRemoveMatch, ctrl?: Control): Promise<MemeEntity>;
}
export { MemeEntity };

import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { ListMeme, ListMemeListMatch } from '../MemesioContentCreationTypes';
declare class ListMemeEntity extends MemesioContentCreationEntityBase<ListMeme> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: ListMemeEntity): ListMemeEntity;
    list(this: any, reqmatch?: ListMemeListMatch, ctrl?: Control): Promise<ListMemeEntity[]>;
}
export { ListMemeEntity };

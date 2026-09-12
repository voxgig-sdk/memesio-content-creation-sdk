import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { FreeTemplateSearch, FreeTemplateSearchListMatch } from '../MemesioContentCreationTypes';
declare class FreeTemplateSearchEntity extends MemesioContentCreationEntityBase<FreeTemplateSearch> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: FreeTemplateSearchEntity): FreeTemplateSearchEntity;
    list(this: any, reqmatch?: FreeTemplateSearchListMatch, ctrl?: Control): Promise<FreeTemplateSearchEntity[]>;
}
export { FreeTemplateSearchEntity };

import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { TemplateSearch, TemplateSearchListMatch } from '../MemesioContentCreationTypes';
declare class TemplateSearchEntity extends MemesioContentCreationEntityBase<TemplateSearch> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: TemplateSearchEntity): TemplateSearchEntity;
    list(this: any, reqmatch?: TemplateSearchListMatch, ctrl?: Control): Promise<TemplateSearchEntity[]>;
}
export { TemplateSearchEntity };

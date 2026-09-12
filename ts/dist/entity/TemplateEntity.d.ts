import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { Template, TemplateListMatch } from '../MemesioContentCreationTypes';
declare class TemplateEntity extends MemesioContentCreationEntityBase<Template> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: TemplateEntity): TemplateEntity;
    list(this: any, reqmatch?: TemplateListMatch, ctrl?: Control): Promise<TemplateEntity[]>;
}
export { TemplateEntity };

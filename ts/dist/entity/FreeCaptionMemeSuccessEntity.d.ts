import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { FreeCaptionMemeSuccess, FreeCaptionMemeSuccessCreateData } from '../MemesioContentCreationTypes';
declare class FreeCaptionMemeSuccessEntity extends MemesioContentCreationEntityBase<FreeCaptionMemeSuccess> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: FreeCaptionMemeSuccessEntity): FreeCaptionMemeSuccessEntity;
    create(this: any, reqdata?: FreeCaptionMemeSuccessCreateData, ctrl?: Control): Promise<FreeCaptionMemeSuccessEntity>;
}
export { FreeCaptionMemeSuccessEntity };

import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { UploadCaptionMemeSuccess, UploadCaptionMemeSuccessCreateData } from '../MemesioContentCreationTypes';
declare class UploadCaptionMemeSuccessEntity extends MemesioContentCreationEntityBase<UploadCaptionMemeSuccess> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: UploadCaptionMemeSuccessEntity): UploadCaptionMemeSuccessEntity;
    create(this: any, reqdata?: UploadCaptionMemeSuccessCreateData, ctrl?: Control): Promise<UploadCaptionMemeSuccessEntity>;
}
export { UploadCaptionMemeSuccessEntity };

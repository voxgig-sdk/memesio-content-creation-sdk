import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { Collaboration, CollaborationLoadMatch, CollaborationCreateData } from '../MemesioContentCreationTypes';
declare class CollaborationEntity extends MemesioContentCreationEntityBase<Collaboration> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: CollaborationEntity): CollaborationEntity;
    load(this: any, reqmatch?: CollaborationLoadMatch, ctrl?: Control): Promise<CollaborationEntity>;
    create(this: any, reqdata?: CollaborationCreateData, ctrl?: Control): Promise<CollaborationEntity>;
}
export { CollaborationEntity };

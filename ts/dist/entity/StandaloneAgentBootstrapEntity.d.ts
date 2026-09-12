import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { StandaloneAgentBootstrap, StandaloneAgentBootstrapCreateData } from '../MemesioContentCreationTypes';
declare class StandaloneAgentBootstrapEntity extends MemesioContentCreationEntityBase<StandaloneAgentBootstrap> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: StandaloneAgentBootstrapEntity): StandaloneAgentBootstrapEntity;
    create(this: any, reqdata?: StandaloneAgentBootstrapCreateData, ctrl?: Control): Promise<StandaloneAgentBootstrapEntity>;
}
export { StandaloneAgentBootstrapEntity };

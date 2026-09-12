import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { AgentInfra, AgentInfraLoadMatch, AgentInfraCreateData, AgentInfraRemoveMatch } from '../MemesioContentCreationTypes';
declare class AgentInfraEntity extends MemesioContentCreationEntityBase<AgentInfra> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: AgentInfraEntity): AgentInfraEntity;
    load(this: any, reqmatch?: AgentInfraLoadMatch, ctrl?: Control): Promise<AgentInfraEntity>;
    create(this: any, reqdata?: AgentInfraCreateData, ctrl?: Control): Promise<AgentInfraEntity>;
    remove(this: any, reqmatch?: AgentInfraRemoveMatch, ctrl?: Control): Promise<AgentInfraEntity>;
}
export { AgentInfraEntity };

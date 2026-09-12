import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { Agent, AgentLoadMatch, AgentCreateData, AgentUpdateData } from '../MemesioContentCreationTypes';
declare class AgentEntity extends MemesioContentCreationEntityBase<Agent> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: AgentEntity): AgentEntity;
    load(this: any, reqmatch?: AgentLoadMatch, ctrl?: Control): Promise<AgentEntity>;
    create(this: any, reqdata?: AgentCreateData, ctrl?: Control): Promise<AgentEntity>;
    update(this: any, reqdata?: AgentUpdateData, ctrl?: Control): Promise<AgentEntity>;
}
export { AgentEntity };

import { MemesioContentCreationEntityBase } from '../MemesioContentCreationEntityBase';
import type { MemesioContentCreationSDK } from '../MemesioContentCreationSDK';
import type { Control } from '../types';
import type { Auth, AuthCreateData } from '../MemesioContentCreationTypes';
declare class AuthEntity extends MemesioContentCreationEntityBase<Auth> {
    constructor(client: MemesioContentCreationSDK, entopts: any);
    make(this: AuthEntity): AuthEntity;
    create(this: any, reqdata?: AuthCreateData, ctrl?: Control): Promise<AuthEntity>;
}
export { AuthEntity };

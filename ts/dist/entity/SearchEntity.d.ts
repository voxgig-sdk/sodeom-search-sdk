import { SodeomSearchEntityBase } from '../SodeomSearchEntityBase';
import type { SodeomSearchSDK } from '../SodeomSearchSDK';
import type { Control } from '../types';
import type { Search, SearchListMatch } from '../SodeomSearchTypes';
declare class SearchEntity extends SodeomSearchEntityBase<Search> {
    constructor(client: SodeomSearchSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    list(this: any, reqmatch?: SearchListMatch, ctrl?: Control): Promise<SearchEntity[]>;
}
export { SearchEntity };

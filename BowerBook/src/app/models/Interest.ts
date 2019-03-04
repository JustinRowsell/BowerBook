import { Resource } from './Resource';
import { Tag } from './Tag';

export class Interest {
    public interestId: number;
    public interestName: string;
    public category: string;
    public description: string;
    public resources: Resource[];
    public tags: Tag[];
}

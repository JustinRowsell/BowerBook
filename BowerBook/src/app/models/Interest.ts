import { Resource } from './Resource';
import { Tag } from './Tag';

export class Interest {
    public _id: string;
    public interestName: string;
    public category: string;
    public description: string;
    public resources: number[];
    public tags: number[];
}

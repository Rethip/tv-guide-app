
import {IGuideService} from './guide.service';
import {Ishowdetail} from './ishowdetail';
import { Observable,of} from 'rxjs';

export class GuideServiceFake implements IGuideService
{ 
    private fakeGuide:Ishowdetail = {
    summary: 'great',
    showName: 'girls',
    time: 5,
    day:new Date() ,
    Image: '',
    NetworkName: 'abc'
}
    public getShowName (search:string):Observable<Ishowdetail>{ 
        return of(this.fakeGuide);
    }   

}


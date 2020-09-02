import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApprovalList} from '../model/approval-list';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {MyUsers} from '../model/my-users';

@Injectable({
  providedIn: 'root'
})
export class RemotedataService {

  constructor(private httpClient: HttpClient) { }

  loadApprovalList = () : Observable<ApprovalList[]> => {
    return this.httpClient.get<ApprovalList[]>(environment.approval_list);
  }
  loadMyUserList = () : Observable<MyUsers[]> => {
    return this.httpClient.get<MyUsers[]>(environment.myuser_list);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApprovalList} from '../model/approval-list';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {MyUsersList} from '../model/my-users-list';

@Injectable({
  providedIn: 'root'
})
export class RemotedataService {

  constructor(private httpClient: HttpClient) { }

  loadApprovalList = () : Observable<ApprovalList[]> => {
    return this.httpClient.get<ApprovalList[]>(environment.approval_list);
  }
  loadMyUserList = () : Observable<MyUsersList[]> => {
    return this.httpClient.get<MyUsersList[]>(environment.myuser_list);
  }
}

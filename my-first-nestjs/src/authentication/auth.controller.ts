import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FederatedUserModel } from './federated.user.model';
import { FederatedUserAttribute } from './federated.user.attribute';

@Controller('auth-service')
export class AuthController {
  federatedUserAttributes: FederatedUserAttribute[] = [];
  federatedUserModelList:FederatedUserModel[] =[];
  attributeMap :Map<string, string[]>;
  attributeMap2 :Map<string, string[]>;

  constructor() {
   this.attributeMap = new Map<string, string[]>();
    this.attributeMap.set('phone', ['1111111111', '2222222222']);
    this.attributeMap.set('ssn', ['111-222-3456']);


    this.attributeMap2 = new Map<string, string[]>();
    this.attributeMap2.set('phone', ['7878787878', '9494945656']);
    this.attributeMap2.set('ssn', ['999-777-5555']);




    // const attribute1:FederatedUserAttribute = new FederatedUserAttribute();
    // attribute1.name = "phone";
    // attribute1.value = ['1111111111', '2222222222'];

    // const attribute2:FederatedUserAttribute = new FederatedUserAttribute();
    // attribute2.name = "ssn";
    // attribute2.value = ['111-222-3333'];

    // this.federatedUserAttributes.push(attribute1);
    // this.federatedUserAttributes.push(attribute2);

    const user1: FederatedUserModel = new FederatedUserModel();
    user1.username = 'myuser1';
    user1.firstName = 'f-user-1';
    user1.lastName = 'l-user-1';
    user1.email = 'user1@gmail.com';
    user1.enabled = true;
    user1.emailVerified = true;
    user1.password = 'password'
    user1.roles = ['READ', 'WRITE', 'UPDATE', 'DELETE'];

    //user1.attributes = this.federatedUserAttributes;
    user1.attributes = this.converMapToJson(this.attributeMap);


    const user2: FederatedUserModel = new FederatedUserModel();
    user2.username = 'myuser2';
    user2.firstName = 'f-user-2';
    user2.lastName = 'l-user-2';
    user2.email = 'user2@gmail.com';
    user2.enabled = true;
    user2.emailVerified = true;
    user2.password = 'password'
    user2.roles = ['READ'];

    //user2.attributes = this.federatedUserAttributes;
    user2.attributes = this.converMapToJson(this.attributeMap2);

    this.federatedUserModelList.push(user1);
    this.federatedUserModelList.push(user2);
  }

  @Post('/auth/v1/user/:user')
  auth(@Param('user') user, @Body('credential') password: string): boolean {
    //var status: boolean = false;
    if (user === 'admin' && password === 'admin') {
      return  true;
    }
    return false;
  }

  @Get('/auth/v1/user/:username')
  user(@Param('username') user): FederatedUserModel {
    console.log(">>> "+user);
    const fedUsers:FederatedUserModel[] = this.federatedUserModelList.filter(e => e.username === user);


    if(fedUsers && fedUsers.length == 1){
      //console.log(fedUsers[0].attributes)
      return fedUsers[0];
    }else{
      throw Error("User doesn't exist !")
    }
  }

  converMapToJson(map:Map<string,string[]>):any{
    const jsonObject = {};
    map.forEach((value, key) => {
      jsonObject[key] = value
    });
    console.log(JSON.stringify(jsonObject))

    return jsonObject;
  }




}

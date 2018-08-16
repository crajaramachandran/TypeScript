import {GithubApiService} from './GithubApiService';
import { User } from './user';
import { Repo } from './repo';
import * as lodashObj from 'lodash';

let svc = new GithubApiService();
svc.getUserInfo('crajaramachandran',(user: User)=>{
    svc.getRepos('crajaramachandran',(repos:Repo[])=>{
        console.log( user);
        let sortedRepos = lodashObj.sortBy(repos,[(repo:Repo)=>repo.size]);
        user.repos = sortedRepos;
        user.repos.forEach(singleRepo => {
            console.log(singleRepo.name+"  "+singleRepo.size);
        });
    });
});




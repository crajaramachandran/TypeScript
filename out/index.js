"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var lodashObj = __importStar(require("lodash"));
var svc = new GithubApiService_1.GithubApiService();
svc.getUserInfo('crajaramachandran', function (user) {
    svc.getRepos('crajaramachandran', function (repos) {
        console.log(user);
        var sortedRepos = lodashObj.sortBy(repos, [function (repo) { return repo.size; }]);
        user.repos = sortedRepos;
        user.repos.forEach(function (singleRepo) {
            console.log(singleRepo.name + "  " + singleRepo.size);
        });
    });
});

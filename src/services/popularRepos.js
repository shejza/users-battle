import http from "./httpService";



// export function getPopularRepos(language) {
//   return http.get('https://api.github.com/search/repositories?q=stars:%3E1+language:Java&sort=stars&order=desc&type=Repositories').then(function (response) {
//
//   });
// }
export function getPopularRepos(language) {
  return http.get('https://api.github.com/search/repositories?q=stars:%3E1+language:' + language +
  '&sort=stars&order=desc&type=Repositories').then(response => {
    return response.data.items;

  })
}
// console.log(getPopularRepos().then(resp => {
//   console.log('ok');
// }));
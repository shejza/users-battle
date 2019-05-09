import React, {Component} from 'react';
import {getLanguages, getPopularRepos} from "../services/popularRepos";

class Popular extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      data: [],
    };

  }

   async componentDidMount() {

     await this.updateLang();
  }

  updateLang = async (lang) => {

    const datas = this.state.data;
    this.setState({
      selectedLanguage: lang,
      data: datas
    });

    await this.populateRepos(lang);
  }

  async populateRepos(lang) {
    const data = await getPopularRepos(lang).then(data => {

    this.setState(() => {
      return {
        data
    }
    })

  });

}


render()
{
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  const {data} = this.state;
  console.log(data);
  return (
    <div>
      <ul className="languagess">

        {
          languages.map(lang => {
            return <li style={lang === this.state.selectedLanguage ? {color: '#d0021b'} : null} key={lang}
                       onClick={() => this.updateLang(lang)}
            >{lang}</li>
          })
        }
      </ul>

      <ul className="popular-list">

        {
          data.map((repo, index) => {
            return (
              <li className="popular-item">
                <div className="popular-rank"># {index + 1}</div>
                <ul lang="space-list-items">
                  <li>
                    <img src={repo.owner.avatar_url} className="avatar"/></li>
                  <li><a href={repo.html_url}>{repo.name}</a></li>
                  <li>@{repo.owner.login}</li>
                  <li>{repo.stargazers_count} stars</li>
                </ul>
              </li>

            )
          })
        }
      </ul>

    </div>
  );
}
}

export default Popular;

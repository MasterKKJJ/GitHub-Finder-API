import { useState } from "react"

import { UserProps } from "./types/User";
import Search from "./components/Search";
import UserShowProfile from "./components/UserShowProfile";
import ErrorUser from "./components/ErrorUser";
import { Outlet } from "react-router-dom";
function App() {
  const [User, setUser] = useState<UserProps | null>(null);
  const [Error, setError] = useState<boolean>(false);
  const loadUser = async (nomeUser: string) => {
  setError(false);
  setUser(null);

  const res = await fetch(`https://api.github.com/users/${nomeUser}`);
  
  // Verifica se a resposta foi 404
  if (res.status === 404) {
    setError(true);
    return;
  }

  const data = await res.json();

  // Mapeia a resposta da API para o tipo UserProps
  const userData: UserProps = {
    login: data.login,
    id: data.id,
    node_id: data.node_id,
    avatar_url: data.avatar_url,
    gravatar_id: data.gravatar_id,
    url: data.url,
    html_url: data.html_url,
    followers_url: data.followers_url,
    following_url: data.following_url,
    gists_url: data.gists_url,
    starred_url: data.starred_url,
    subscriptions_url: data.subscriptions_url,
    organizations_url: data.organizations_url,
    repos_url: data.repos_url,
    events_url: data.events_url,
    received_events_url: data.received_events_url,
    type: data.type,
    user_view_type: data.user_view_type,
    site_admin: data.site_admin,
    name: data.name,
    company: data.company,
    blog: data.blog,
    location: data.location,
    email: data.email,
    hireable: data.hireable,
    bio: data.bio,
    twitter_username: data.twitter_username,
    public_repos: data.public_repos,
    public_gists: data.public_gists,
    followers: data.followers,
    following: data.following,
    created_at: data.created_at,
    updated_at: data.updated_at
  };

  // Atualiza o estado com os dados do usuário
  setUser(userData);
};

  return (
    <div className="min-h-screen min-w-full bg-black text-white">

      <div>
        <h1 className="p-4 font-bold flex justify-center text-4xl">
          GitHub Finder</h1>
      <Outlet  />
      </div>
      <Search loadUser={loadUser} />
      {User && <UserShowProfile {...User} />}
      {Error && <ErrorUser />}
      
    </div>
  )
}
export default App
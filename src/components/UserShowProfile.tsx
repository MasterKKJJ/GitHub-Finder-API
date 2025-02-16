import { UserProps } from "../types/User";

function UserShowProfile({
  avatar_url,
  followers,
  following,
  id,
  location,
  name,
  login,
  node_id,
  gravatar_id,
  url,
  html_url,
  followers_url,
  following_url,
  gists_url,
  starred_url,
  subscriptions_url,
  organizations_url,
  repos_url,
  events_url,
  received_events_url,
  type,
  user_view_type,
  site_admin,
  company,
  blog,
  email,
  hireable,
  bio,
  twitter_username,
  public_repos,
  public_gists,
  created_at,
  updated_at,
}: UserProps) {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <div className="w-[600px] h-auto bg-zinc-600 rounded-lg flex flex-col items-center p-6">
        
        <div className="flex flex-row justify-between w-full">

        {/* Avatar Image */}
        <img src={avatar_url} alt={name} className="rounded-full h-56 w-56 mb-4" />

        {/* User Information */}
        <div className="text-center mb-4 flex flex-col justify-center ">
          <div className="text-2xl font-bold text-white">{name}</div>
          <div className="text-white">Login: {login}</div>
          <div className="text-white">ID: {id}</div>
          <div className="text-white">Location: {location || "N/A"}</div>
        </div>

        </div>
        {/* Links Section - Formatted Left to Right */}
        <div className="flex justify-between text-white mb-4 w-full">
          {/* Additional Information - Formatted Left to Right */}
          <div className="flex flex-col items-start">
            <div><strong>Company:</strong> {company || "N/A"}</div>
            <div><strong>Blog:</strong> {blog || "N/A"}</div>
            <div><strong>Email:</strong> {email || "N/A"}</div>
            <div><strong>Twitter Username:</strong> {twitter_username || "N/A"}</div>
            <div><strong>Bio:</strong> {bio || "N/A"}</div>
            <div><strong>Hireable:</strong> {hireable ? "Yes" : "No"}</div>
            <div><strong>Site Admin:</strong> {site_admin ? "Yes" : "No"}</div>
            <div><strong>User View Type:</strong> {user_view_type}</div>
          </div>
          {/* Stats Section - Formatted Left to Right */}
          <div className="flex flex-col items-start">
            <div>Followers: {followers}</div>
            <div>Following: {following}</div>
            <div>Public Repos: {public_repos}</div>
            <div>Public Gists: {public_gists}</div>
          </div>

          <div className="flex flex-col items-start">
            <div><strong>URL:</strong> <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-400">URL da api do Perfil</a></div>
            <div><strong>HTML URL:</strong> <a href={html_url} target="_blank" rel="noopener noreferrer" className="text-blue-400">URL do Perfil</a></div>
          </div>

          
        </div>

        {/* Dates - Formatted Left to Right */}
        <div className="flex justify-between text-white w-full">
          <div><strong>Created At:</strong> {new Date(created_at).toLocaleDateString()}</div>
          <div><strong>Updated At:</strong> {new Date(updated_at).toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
}

export default UserShowProfile;

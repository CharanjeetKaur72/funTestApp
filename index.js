require("dotenv").config();
const express = require("express");
const app = express();
// const port = 3000;
const githubData = {
  login: "CharanjeetKaur72",
  id: 69910100,
  node_id: "MDQ6VXNlcjY5OTEwMTAw",
  avatar_url: "https://avatars.githubusercontent.com/u/69910100?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/CharanjeetKaur72",
  html_url: "https://github.com/CharanjeetKaur72",
  followers_url: "https://api.github.com/users/CharanjeetKaur72/followers",
  following_url:
    "https://api.github.com/users/CharanjeetKaur72/following{/other_user}",
  gists_url: "https://api.github.com/users/CharanjeetKaur72/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/CharanjeetKaur72/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/CharanjeetKaur72/subscriptions",
  organizations_url: "https://api.github.com/users/CharanjeetKaur72/orgs",
  repos_url: "https://api.github.com/users/CharanjeetKaur72/repos",
  events_url: "https://api.github.com/users/CharanjeetKaur72/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/CharanjeetKaur72/received_events",
  type: "User",
  site_admin: false,
  name: "Charanjeet Kaur",
  company: null,
  blog: "",
  location: "India",
  email: null,
  hireable: null,
  bio: "Aspiring web developer...worked as a programmer long back using platforms like VB, ASP, SQL.",
  twitter_username: "CharanjeetSonia",
  public_repos: 4,
  public_gists: 0,
  followers: 10,
  following: 14,
  created_at: "2020-08-19T14:29:14Z",
  updated_at: "2024-09-02T10:00:38Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("charandotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at chai or code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>chai aur code</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

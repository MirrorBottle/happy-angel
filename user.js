export default (data = "") => {
  if (sessionStorage && sessionStorage.getItem("master")) {
    return JSON.parse(atob(sessionStorage.getItem("master") || "{}"))[data] || null;
  }
  return null;
};

export const usersData = [
  {
    masterId: 1,
    username: "sebastian",
    password: "12345",
    role: "Master",
    cast: 20000000
  },
  {
    masterId: 2,
    username: "rence",
    password: "12345",
    role: "Angel",
    cast: 50000000
  },
  {
    masterId: 3,
    username: "egi",
    password: "12345",
    role: "Master",
    cast: 60000000
  }
];  

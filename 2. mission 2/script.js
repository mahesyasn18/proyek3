var members = [
  {
    name: "Daniar Miftah",
    username: "daniar",
    isFollow: false,
  },
  {
    name: "Adinda Raisa",
    username: "adinda",
    isFollow: false,
  },
  {
    name: "Rizki Gunawan",
    username: "rizki",
    isFollow: false,
  },
  {
    name: "Ahmad Fauzy",
    username: "fauzy",
    isFollow: false,
  },
  {
    name: "Faisal Adha",
    username: "isal",
    isFollow: false,
  },
];

let friendCount = 0;
const countElement = document.querySelector(".count");
countElement.textContent = friendCount;

const container = document.querySelector(".content-all-members");
const myFriendsContainer = document.querySelector(".my-friends-container");

members.forEach((member) => {
  const row = document.createElement("div");
  row.classList.add("row", "align-items-center");

  row.innerHTML = `
        <div class="col-12 col-md-2 mb-3 mb-md-0 text-center">
          <img src="pic.jpg" class="img-thumbnail" alt="Profile Picture" />
        </div>
        <div class="col-12 col-md-7 mb-3 mb-md-0">
          <h4 class="mb-1">${member.name}</h4>
          <p class="mb-0">@${member.username}</p>
        </div>
        <div class="col-12 col-md-3 text-md-center">
          <button class="btn btn-primary follow-button">Follow</button>
        </div>
        <hr class="mt-2" />
      `;

  const followButton = row.querySelector(".follow-button");
  followButton.addEventListener("click", () => {
    if (member.isFollow) {
      myFriendsContainer.removeChild(row);
      container.appendChild(row);
      followButton.classList.remove("btn-danger");
      followButton.classList.add("btn-primary");
      followButton.textContent = "Follow";
      member.isFollow = false;
      countElement.textContent = --friendCount;
    } else {
      myFriendsContainer.appendChild(row);
      followButton.textContent = "Unfollow";
      followButton.classList.remove("btn-primary");
      followButton.classList.add("btn-danger");
      member.isFollow = true;
      countElement.textContent = ++friendCount;
    }
  });

  container.appendChild(row);
});

import "./sass/style.scss";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nemo quaerat aperiam provident reprehenderit, veniam ipsum voluptatum quia aliquid velit eaque magni deserunt, nesciunt magnam. Dignissimos ut blanditiis optio delectus.";

const cardData = [
  { title: "Super Cool Project", text: lorem },
  { title: "Less Cool Project", text: lorem },
  { title: "Impossible App", text: lorem },
  { title: "Easy Peasy App", text: lorem },
  { title: "Ad Blocker", text: lorem },
  { title: "Money Maker", text: lorem },
];

const projectCard = document.getElementById(
  "project-card"
) as HTMLTemplateElement;

cardData.forEach((card) => {
  const clone = projectCard.content.firstElementChild?.cloneNode(
    true
  ) as HTMLDivElement;

  const title = clone.getElementsByTagName("h3")[0];
  const text = clone.getElementsByTagName("p")[0];

  title.innerText = card.title;
  text.innerText = card.text;

  const projectCards = document.getElementById("project-cards");
  projectCards?.appendChild(clone);
});

const announcements = [
  { title: "Site Maintenance", text: lorem },
  { title: "Community Share Day", text: lorem },
  { title: "Update Privacy Policy", text: lorem },
];

const announcementTemplate = document.getElementById(
  "announcement"
) as HTMLTemplateElement;

const announcementCard = document.getElementById(
  "announcement-card"
) as HTMLDivElement;

announcements.forEach((announcement, i) => {
  const clone = announcementTemplate.content.firstElementChild?.cloneNode(
    true
  ) as HTMLDivElement;

  const title = clone.getElementsByTagName("h3")[0];
  const text = clone.getElementsByTagName("p")[0];

  title.innerText = announcement.title;
  text.innerText = announcement.text;

  announcementCard.appendChild(clone);
  i < announcements.length - 1 &&
    announcementCard.appendChild(document.createElement("hr"));
});

const trends = [
  {
    img: "./assets/horse.png",
    alt: "horse",
    username: "tegan",
    text: "world peace builder",
  },
  {
    img: "./assets/cat.png",
    alt: "cat",
    username: "morgan",
    text: "super cool project",
  },
  {
    img: "./assets/guy.png",
    alt: "guy",
    username: "kendall",
    text: "life changing app",
  },
  {
    img: "./assets/penguin.png",
    alt: "penguin",
    username: "alex",
    text: "no traffic maker",
  },
];

const trendTemplate = document.getElementById("trend") as HTMLTemplateElement;

const trendingCard = document.getElementById("trending-card");

trends.forEach((trend) => {
  const clone = trendTemplate.content.firstElementChild?.cloneNode(
    true
  ) as HTMLDivElement;

  const img = clone.getElementsByTagName("img")[0];
  const username = clone.getElementsByTagName("h3")[0];
  const text = clone.getElementsByTagName("p")[0];

  img.src = trend.img;
  img.alt = trend.alt;
  username.innerText = `@${trend.username}`;
  text.innerText = trend.text;
  trendingCard?.appendChild(clone);
});

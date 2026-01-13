import juwa2 from "../assets/gamesPicture/juwa_2.jpg";
import juwa from "../assets/gamesPicture/juwa.png";
import orionStar from "../assets/gamesPicture/orionStar.jpg";
import milkyway from "../assets/gamesPicture/milkyway.jpg";
import gamevault from "../assets/gamesPicture/Gamevault.jpg";
import vblink from "../assets/gamesPicture/Vblink.jpg";
import highstakes from "../assets/gamesPicture/highstakes.jpg";
import yolo from "../assets/gamesPicture/Yolo.jpg";
import gameroom from "../assets/gamesPicture/gameroom.jpg";
import mrallinone from "../assets/gamesPicture/mrallinone.jpg";
import firekirin from "../assets/gamesPicture/firekirin.png";
import cashfrenzy from "../assets/gamesPicture/cashfrenzy.png";

const normalize = (name) =>
  name.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "");

const games = [
  {
    name: "Juwa",
    tagline: "Popular choice",
    image: juwa,
    url: "https://dl.juwa777.com/",
  },
  {
    name: "Juwa 2.0",
    tagline: "Classic skill gaming",
    image: juwa2,
    url: "https://m.juwa2.com/",
  },
  {
    name: "Orion Star",
    tagline: "Skill-based fun",
    image: orionStar,
    url: "http://start.orionstars.vip:8580/index.html",
  },
  {
    name: "Milky Way",
    tagline: "Galactic wins",
    image: milkyway,
    url: "https://milkywayapp.xyz/",
  },
  {
    name: "Game Vault",
    tagline: "Treasure of games",
    image: gamevault,
    url: "https://download.gamevault999.com/",
  },
  {
    name: "Vblink",
    tagline: "Fast & exciting",
    image: vblink,
    url: "http://www.vblink777.club/",
  },
  {
    name: "Highstakes",
    tagline: "High risk, high reward",
    image: highstakes,
    url: "http://dl.highstakesweeps.com/",
  },
  {
    name: "Yolo",
    tagline: "Play bold",
    image: yolo,
    url: "https://yolo777.game/",
  },
  {
    name: "Gameroom",
    tagline: "Your play space",
    image: gameroom,
    url: "https://www.gameroom777.com/",
  },
  {
    name: "Mr. All In One",
    tagline: "All your favorites",
    image: mrallinone,
    url: "https://www.mrallinone777.com/",
  },
  {
    name: "Firekirin",
    tagline: "Hot action",
    image: firekirin,
    url: "http://start.firekirin.xyz:8580/",
  },
  {
    name: "Cash Frenzy",
    tagline: "Fast & furious",
    image: cashfrenzy,
    url: "https://www.cashfrenzy777.com/",
  },
].map((g) => ({ ...g, slug: normalize(g.name) }));

export default games;

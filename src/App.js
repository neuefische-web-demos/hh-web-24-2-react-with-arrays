import React from "react";
import MovieCard from "./components/MovieCard";
import "./App.css";
import "./styles.css";

export default function App() {
  return (
    <main className="app">
      <h1 className="app__title">Movie List</h1>
      <ul className="app__movies">
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard title={movie.title} genres={movie.genre} />
          </li>
        ))}
      </ul>
    </main>
  );
}

const movies = [
  {
    id: "01HSX5JY9S90DPFF2T134ZSKGD",
    title: "Suicide Killers",
    genre: "Documentary",
  },
  {
    id: "01HSX5JY9T4MAEAPVSAQ2V5K5J",
    title: "Picnic on the Grass (Le déjeuner sur l'herbe)",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JY9V511TDYR8YPPDSY04",
    title: "Humoresque",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JY9WJV7X9P7K9AXPM194",
    title: "Love with the Proper Stranger",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JY9XC4XVM3C9GF7CNQ3G",
    title: "Lore",
    genre: "Drama|Thriller|War",
  },
  {
    id: "01HSX5JY9YTNA2R4FMTQ22EMKZ",
    title: "Wallace & Gromit in The Curse of the Were-Rabbit",
    genre: "Adventure|Animation|Children|Comedy",
  },
  {
    id: "01HSX5JY9ZB7DF8QAWYKAA28K7",
    title: "Life After People",
    genre: "Documentary",
  },
  {
    id: "01HSX5JY9ZVB34ZC42R832511F",
    title: "Hilary and Jackie",
    genre: "Drama",
  },
  {
    id: "01HSX5JY9ZP4MP638WW3Y1CZK9",
    title: "Steamboat Willie",
    genre: "Animation|Children|Comedy|Musical",
  },
  {
    id: "01HSX5JYA0J7YNDY90AZQMWG7F",
    title: "Fatty and Mabel Adrift",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYA12FHBQC2W1B8260KV",
    title: "Zotz!",
    genre: "Comedy|Fantasy|Horror",
  },
  { id: "01HSX5JYA2V54B6BVXB85J9X98", title: "Swastika", genre: "Documentary" },
  {
    id: "01HSX5JYA28BJGRDGJQVS3Q40V",
    title: "Hunchback of Notre Dame, The",
    genre: "Animation|Children|Drama|Musical|Romance",
  },
  {
    id: "01HSX5JYA32321BC0840381K6S",
    title: "Householder, The (Gharbar)",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYA43N6F0RNFP92QM1VW",
    title: "Growth",
    genre: "Sci-Fi|Thriller",
  },
  {
    id: "01HSX5JYA5XGFR7KW2EJHVJEDY",
    title: "Love Song for Bobby Long, A",
    genre: "Drama",
  },
  { id: "01HSX5JYA6QBRAZXFT1DFS45WA", title: "Express, The", genre: "Drama" },
  { id: "01HSX5JYA6V0W7TRCBQEV6M16X", title: "Turn the River", genre: "Drama" },
  {
    id: "01HSX5JYA7CAV08KZETB67G1XQ",
    title: "Rebellion (L'ordre et la morale)",
    genre: "Action|Drama",
  },
  {
    id: "01HSX5JYA8DE2V2M07N7P23YWA",
    title: "The Last Outpost",
    genre: "Western",
  },
  {
    id: "01HSX5JYA8CPCZA2SZ9YSPCG1E",
    title: "Planet Terror",
    genre: "Action|Horror|Sci-Fi",
  },
  {
    id: "01HSX5JYA9GMA9EGV79XA25VGJ",
    title: "Handle with Care (a.k.a. Citizen's Band)",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYA9MHR8W4WAEK7WQXSW",
    title: "Roger Dodger",
    genre: "Comedy|Drama",
  },
  { id: "01HSX5JYA9MYMD9ZQEM03AZWFJ", title: "Legend No. 17", genre: "Drama" },
  {
    id: "01HSX5JYAAEB78B76G5BTZZN9M",
    title: "Threads",
    genre: "Drama|Sci-Fi|War",
  },
  {
    id: "01HSX5JYAABQTZ987928G2XWTQ",
    title: "Chechahcos, The",
    genre: "Adventure|Drama",
  },
  {
    id: "01HSX5JYAADT0JRK7212FQ7ZWS",
    title: "Note by Note: The Making of Steinway L1037",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYABTH28D0Q9SSGG7NN5",
    title: "Lizard, The (Marmoulak)",
    genre: "Adventure|Comedy|Crime",
  },
  {
    id: "01HSX5JYABD8QBM5BTQA4CSBZG",
    title: "Vlad Tepes (Vlad &#354;epe&#351;)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYAC7B3TYYN8N7R5E01R",
    title: "The Girl in a Swing",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYACYPPY5FNG57PT51XQ",
    title: "Million Dollar Hotel, The",
    genre: "Drama|Mystery|Romance",
  },
  {
    id: "01HSX5JYADNPTV2M7BQFH8YZJH",
    title: "Glass Key, The",
    genre: "Crime|Drama|Film-Noir|Mystery",
  },
  {
    id: "01HSX5JYADBN3RE0XZ8WC0PBK5",
    title: "Green Pastures, The",
    genre: "Drama",
  },
  {
    id: "01HSX5JYAEJNEBQA4TJEDE3CMK",
    title: "Full of It",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYAEWBW4XGE29WBQ7M9S",
    title: "Diary of Anne Frank, The",
    genre: "Drama|War",
  },
  {
    id: "01HSX5JYAEQJJ61WT4WT5WWEP7",
    title: "Love and Other Troubles",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYAF826GBSGPMH5M21D8",
    title: "Sword of Doom, The (Dai-bosatsu tôge)",
    genre: "Action|Drama",
  },
  {
    id: "01HSX5JYAFVRQSZDACA0J1DSH0",
    title: "Man Called Adam, A",
    genre: "Drama",
  },
  {
    id: "01HSX5JYAF7WVFA4YCQ0VD8FN3",
    title: "Kimberly",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYAG3ZS5NC3KVT68V2V4",
    title: "Nora's Will (Cinco días sin Nora)",
    genre: "Comedy|Drama",
  },
  { id: "01HSX5JYAGG9RWBRQK655MRAM8", title: "Newlyweds", genre: "Drama" },
  {
    id: "01HSX5JYAH0WR8WHHC88YH0K7J",
    title: "For Queen and Country",
    genre: "Drama",
  },
  {
    id: "01HSX5JYAH1WSMQR7CBW2GYBZT",
    title: "Witless Protection",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYAHV3230E9CY293RQH5",
    title: "Ghost Story",
    genre: "Drama|Horror",
  },
  {
    id: "01HSX5JYAJZRHJ6YDMCYMF6D38",
    title: "Harvard Man",
    genre: "Crime|Drama|Romance|Thriller",
  },
  {
    id: "01HSX5JYAJZG5EQ1J1REQK5XD2",
    title: "Fragile",
    genre: "Horror|Thriller",
  },
  {
    id: "01HSX5JYAJF1JZFEYV9D6PDQ24",
    title: "Firm, The",
    genre: "Drama|Thriller",
  },
  {
    id: "01HSX5JYAKQNZPC6KSJ437MP85",
    title: "Deep Water",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYAKK5PWWKMJQM1XH739",
    title: "Two Mrs. Carrolls, The",
    genre: "Crime|Drama|Film-Noir|Thriller",
  },
  {
    id: "01HSX5JYAK7Q8VQBCQ6XJMX8DQ",
    title: "Jack Frost",
    genre: "Comedy|Fantasy|Horror",
  },
  {
    id: "01HSX5JYAM0GJYPWSWV480NP3Q",
    title:
      "Godzilla: Tokyo S.O.S. (Gojira tai Mosura tai Mekagojira: Tôkyô S.O.S.)",
    genre: "Action|Fantasy|Sci-Fi",
  },
  {
    id: "01HSX5JYAMJSDNVEW29AZE8749",
    title: "Hercules",
    genre: "Adventure|Animation|Children|Comedy|Musical",
  },
  {
    id: "01HSX5JYAN2Y99T2GSQN47TE0M",
    title: "Les invincibles",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYANNMK7Z4Z1BE3YR36Q",
    title: "On the Silver Globe (Na srebrnym globie)",
    genre: "Sci-Fi",
  },
  {
    id: "01HSX5JYAN144PMTPMCJSQ9YEK",
    title:
      "Nightmares in Red White & Blue: The Evolution of the American Horror Film",
    genre: "Documentary|Horror",
  },
  {
    id: "01HSX5JYAP3XBF51SR5RA5JE8Z",
    title: "Birdemic: Shock and Terror",
    genre: "Romance|Thriller",
  },
  {
    id: "01HSX5JYAPN9K54DF4D5N7VY95",
    title: "The Man Who Shook the Hand of Vicente Fernandez",
    genre: "Comedy|Drama|Western",
  },
  {
    id: "01HSX5JYAQ0QY2ZAD9FS9GE6S5",
    title: "My Science Project",
    genre: "Adventure|Sci-Fi",
  },
  {
    id: "01HSX5JYAR748VKDFDFCTY36YV",
    title: "Invisible Ray, The",
    genre: "Horror|Sci-Fi",
  },
  { id: "01HSX5JYAR5JG0JYTTFK7CBQMV", title: "Muddy River", genre: "Drama" },
  {
    id: "01HSX5JYASM1P8JVEF01QZMHZS",
    title:
      "Empire of Passion (a.k.a. In the Realm of Passion) (a.k.a. Phantom Love) (Ai No Borei)",
    genre: "Crime|Drama|Romance",
  },
  {
    id: "01HSX5JYATVZXHV8FMAZK9RGE5",
    title: "One Night of Love",
    genre: "Romance",
  },
  {
    id: "01HSX5JYATR7E67J50ZV77H289",
    title: "Good Hair",
    genre: "Comedy|Documentary",
  },
  {
    id: "01HSX5JYAVYD8N4CYTV72KBEVH",
    title: "Superman/Doomsday ",
    genre: "Action|Animation",
  },
  { id: "01HSX5JYAV8PPAGFF8ZVRBGV9X", title: "Hammer, The", genre: "Comedy" },
  {
    id: "01HSX5JYAW8W7BJB346YGYDADC",
    title: "Deathmaker, The (Totmacher, Der)",
    genre: "Crime|Drama",
  },
  {
    id: "01HSX5JYAXN6H1Y8EF5PV9NJK4",
    title: "Choose Me",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYAXEKMEVYQNKVDYK8T6",
    title: "Haunted Strangler, The (Grip of the Strangler)",
    genre: "Crime|Horror|Mystery",
  },
  { id: "01HSX5JYAY1QY9CGCZZ538N8HB", title: "Protocol", genre: "Comedy" },
  {
    id: "01HSX5JYAYJGSKSZFD9X1D39NF",
    title: "Joffrey: Mavericks of American Dance",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYAZ7A12R5S3KS66R1TF",
    title: "Till Human Voices Wake Us",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYAZ84W0NEBG5H44D3M5",
    title: "Mr. Untouchable",
    genre: "Crime|Documentary",
  },
  { id: "01HSX5JYB0MXQ6BY84ADQHV6BY", title: "Mass Appeal", genre: "Drama" },
  {
    id: "01HSX5JYB10759HNGGFP955R78",
    title: "Quatermass 2 (Enemy from Space)",
    genre: "Sci-Fi|Thriller",
  },
  {
    id: "01HSX5JYB1FHGMS24SV5YAM4KY",
    title: "Nick Fury: Agent of S.H.I.E.L.D.",
    genre: "Action|Sci-Fi",
  },
  { id: "01HSX5JYB2GEP7HZDVGMHTS7E0", title: "Emitai", genre: "Drama" },
  {
    id: "01HSX5JYB2YP89157NR1ABHAXD",
    title: "Friends, The (Les Amis)",
    genre: "Drama",
  },
  { id: "01HSX5JYB3SHJ2GEZKX5MBWHVQ", title: "Spies Like Us", genre: "Comedy" },
  { id: "01HSX5JYB3PAY8CNEWV8K0R5RF", title: "Carless Love", genre: "Drama" },
  {
    id: "01HSX5JYB4YFVV5XH6MJB1FXEF",
    title: "Good Morning, Miss Dove",
    genre: "Drama",
  },
  {
    id: "01HSX5JYB55T0BXRKX7X6Y60FJ",
    title: "Suspicious River",
    genre: "Drama",
  },
  {
    id: "01HSX5JYB558N8GHREDB3RA4ET",
    title: "Lost Highway",
    genre: "Crime|Drama|Fantasy|Film-Noir|Mystery|Romance",
  },
  {
    id: "01HSX5JYB6M0CC1VBFASH8C5VA",
    title: "PAY 2 PLAY: Democracy's High Stakes",
    genre: "Comedy|Documentary",
  },
  {
    id: "01HSX5JYB6SRXCGKQ7R43BANTV",
    title: "Won't Anybody Listen?",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYB7F8PKM0YR1P5347KZ",
    title: "Anthony Zimmer",
    genre: "Crime|Drama|Romance|Thriller",
  },
  {
    id: "01HSX5JYB7M7S4TP2B2YP5Y7A0",
    title: "Long Voyage Home, The",
    genre: "Drama|War",
  },
  {
    id: "01HSX5JYB8R3CC5M2N8HM20K10",
    title: "Sexual Dependency (Dependencia sexual)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYB83MXCYDX6QX1AZB2F",
    title: "Molière",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYB9XDNHTMDJT0X8855G",
    title: "Bad Luck Love",
    genre: "Crime|Drama",
  },
  {
    id: "01HSX5JYBA7J1J6QBQ2GPFPAGR",
    title: "Knightriders",
    genre: "Action|Adventure|Drama",
  },
  { id: "01HSX5JYBA88NRPY9GQ7YRT7PS", title: "Judge, The", genre: "Drama" },
  {
    id: "01HSX5JYBB7A3T0JW2VJRWHRZH",
    title: "Blood of Heroes, The (Salute of the Jugger, The)",
    genre: "Action|Sci-Fi",
  },
  {
    id: "01HSX5JYBBCMVCTX8H0ZR3TD91",
    title: "Mrs. Palfrey at the Claremont",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYBC8J7YNG3GX2R5TJ9H",
    title:
      "Arthur and the Revenge of Maltazard (Arthur et la vengeance de Maltazard)",
    genre: "Animation|Children|Fantasy",
  },
  {
    id: "01HSX5JYBCRX98WV2Q1JG6X3Q0",
    title: "Hold Back the Dawn",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYBD0AN51WJYZ6GM3HZ6",
    title: "Babylon 5: Thirdspace",
    genre: "Drama|Sci-Fi",
  },
  {
    id: "01HSX5JYBE01PDSE7G1JWEQMC1",
    title: "Zombie Apocalypse",
    genre: "Action|Horror|Sci-Fi",
  },
  { id: "01HSX5JYBE8QJXVFNKKRXG033Q", title: "Wonderland", genre: "Drama" },
  {
    id: "01HSX5JYBFZDS0GN4RG7AEJHXY",
    title: "White Irish Drinkers",
    genre: "Drama",
  },
  {
    id: "01HSX5JYBFC5M1BP4E6Q10JVH6",
    title: "Gosford Park",
    genre: "Comedy|Drama|Mystery",
  },
  {
    id: "01HSX5JYBGGF8MH1K6Y148Y6X5",
    title: "Assassination of a High School President",
    genre: "Comedy|Drama|Mystery",
  },
  {
    id: "01HSX5JYBGQ3P58TZXC4VRSN3Q",
    title: "Fifty-Fifty (a.k.a. Schizo) (Shiza)",
    genre: "Crime|Drama|Romance|Thriller",
  },
  {
    id: "01HSX5JYBH7XSJSGJ27N9S6R10",
    title: "Karate Kid, Part III, The",
    genre: "Action|Adventure|Children|Drama",
  },
  {
    id: "01HSX5JYBJ3MGJQHV62H26V8VF",
    title: "Tin Drum, The (Blechtrommel, Die)",
    genre: "Drama|War",
  },
  {
    id: "01HSX5JYBJ7XXPFY4MGYEF3JD8",
    title: "Jacqueline Susann's Once Is Not Enough",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYBKPWQFRW8R3ZAJH8KF",
    title: "Police Academy: Mission to Moscow",
    genre: "Comedy|Crime",
  },
  {
    id: "01HSX5JYBM5WJACDF89DPPX5RB",
    title: "Driven",
    genre: "Action|Thriller",
  },
  {
    id: "01HSX5JYBMKSHH40DZD27FCZQ6",
    title: "Monsieur Vincent",
    genre: "Drama",
  },
  {
    id: "01HSX5JYBNMWFVS8T115C3251Z",
    title: "Two Ninas",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYBN8NNG876TGGPF3DQW",
    title: "Under the Tuscan Sun",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYBPJPW99WC6ZG59FFPX",
    title: "Fruitvale Station",
    genre: "Drama",
  },
  {
    id: "01HSX5JYBQA3YH127PWS4XFYD2",
    title: "Career Opportunities",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYBQ6GNB31F4PZAN1GEV",
    title: "Walking and Talking",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYBRSR40K7FV9XCWRE3T",
    title: "Littlest Rebel, The",
    genre: "Children|Drama",
  },
  {
    id: "01HSX5JYBR2GJ2DFB9XNWTW24H",
    title: "Shelter",
    genre: "Drama|Romance",
  },
  { id: "01HSX5JYBSG62RKCY282D6N2JZ", title: "Fifty Pills", genre: "Comedy" },
  {
    id: "01HSX5JYBT6HFD0Z5BN9ECQQ83",
    title: "Raisin in the Sun, A",
    genre: "Drama",
  },
  {
    id: "01HSX5JYBTQE6TKJ050VNE3P4T",
    title: "Backfire",
    genre: "Crime|Film-Noir|Mystery|Romance|Thriller",
  },
  { id: "01HSX5JYBVW75PNTCCSS995VEW", title: "Holy Man", genre: "Comedy" },
  { id: "01HSX5JYBV2CJS9FFKRYRSQW9B", title: "Agatha", genre: "Drama|Mystery" },
  {
    id: "01HSX5JYBW34SBC2VRW3N105SV",
    title: "Away We Go",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYBW9TRWYW4B5V1GS00N",
    title: "Joe Strummer: The Future Is Unwritten",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYBXW2KDGEJ47Z7M0F8Z",
    title: "Hell to Eternity",
    genre: "Drama|War",
  },
  {
    id: "01HSX5JYBYKE52F73Q5HARKXAE",
    title: "Iceman",
    genre: "Action|Comedy|Sci-Fi",
  },
  {
    id: "01HSX5JYBYAKT2N4DV7XM82PG6",
    title: "Pokémon Origins",
    genre: "Adventure|Animation",
  },
  { id: "01HSX5JYBZ0Q80V91CAK29HDSF", title: "Yolki", genre: "Comedy" },
  {
    id: "01HSX5JYBZ0N9QTHD36F5Q9TBF",
    title: "Russell Peters: The Green Card Tour - Live from the O2 Arena",
    genre: "Comedy|Documentary",
  },
  {
    id: "01HSX5JYC0Z844JA9M2P4FDANF",
    title: "Pool, The (Swimming Pool - Der Tod feiert mit) ",
    genre: "Horror|Thriller",
  },
  { id: "01HSX5JYC1GA5JAXPADRK6ZDK6", title: "McLibel", genre: "Documentary" },
  {
    id: "01HSX5JYC1Y9922KYD337FY3WK",
    title: "Gumball Rally, The",
    genre: "Adventure|Comedy",
  },
  { id: "01HSX5JYC2E1M3Y9RWS00V6SW5", title: "Wild", genre: "Drama" },
  {
    id: "01HSX5JYC22VRH2M9WKRAB08EV",
    title: "Steel Dawn",
    genre: "Action|Sci-Fi",
  },
  {
    id: "01HSX5JYC3DBBGESD5C6ZHQSYQ",
    title: "Happy Feet",
    genre: "Adventure|Animation|Children|Comedy|IMAX",
  },
  {
    id: "01HSX5JYC3QYJPQ8VE21M68Q72",
    title: "Avenging Angelo",
    genre: "Action|Comedy|Crime",
  },
  {
    id: "01HSX5JYC40K8C8DSC31723S3C",
    title: "Harmonists, The",
    genre: "Drama",
  },
  {
    id: "01HSX5JYC5MYVJNCR17CXZG3JX",
    title: "Hot Coffee",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYC5QXCR47JPW41EFZS4",
    title: "Lady Killer",
    genre: "Comedy|Crime",
  },
  {
    id: "01HSX5JYC6GHXVN06XDS2PB3HW",
    title: "Boogie-Doodle",
    genre: "Animation",
  },
  {
    id: "01HSX5JYC60X9HRFJ39WKB4HMF",
    title: "Scanners III: The Takeover (Scanner Force)",
    genre: "Action|Horror|Sci-Fi",
  },
  {
    id: "01HSX5JYC7GBTY92SX2XGCFDHE",
    title: "Whatever Works",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYC807QHP1ZWGP06EHGD",
    title: "Cercle Rouge, Le (Red Circle, The)",
    genre: "Crime|Thriller",
  },
  {
    id: "01HSX5JYC8RZVMP8T9820W3ZQ5",
    title: "They Call Us Misfits (Dom kallar oss mods)",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYC9F43YDTA8P97EVKER",
    title: "Penelope",
    genre: "Comedy|Crime",
  },
  {
    id: "01HSX5JYC99EMP42KTB9YVTN6Z",
    title: "Soo (Art of Revenge)",
    genre: "Action|Crime|Drama|Thriller",
  },
  {
    id: "01HSX5JYCAJ5XWGG3D7M5610H2",
    title: "Brotherhood, The",
    genre: "Crime|Drama",
  },
  {
    id: "01HSX5JYCA3Q02STGRAZQG8PJH",
    title: "Murder of Fred Hampton, The",
    genre: "Crime|Documentary",
  },
  {
    id: "01HSX5JYCBRS74RXMXPVA87QWF",
    title: "Profession of Arms, The (Il mestiere delle armi)",
    genre: "Adventure|Drama|War",
  },
  {
    id: "01HSX5JYCCY127RA4H20757YVQ",
    title: "Stray Cat Rock: Sex Hunter (Nora-neko rokku: Sekkusu hanta)",
    genre: "Crime",
  },
  { id: "01HSX5JYCC8A34W8JJTNH1S264", title: "My Chauffeur", genre: "Comedy" },
  { id: "01HSX5JYCD01SQ1ZT7X997266M", title: "Jude", genre: "Drama" },
  { id: "01HSX5JYCDS5YMKERJFSYD0XPF", title: "Tulpan", genre: "Comedy|Drama" },
  { id: "01HSX5JYCE96BVPBYHQ68R5YEM", title: "Drömkåken", genre: "Comedy" },
  {
    id: "01HSX5JYCE5YPEVRF32EZ1XGTK",
    title: "Salaam-E-Ishq",
    genre: "Comedy|Drama|Musical|Romance",
  },
  {
    id: "01HSX5JYCFHG44HSW2MYC9HARE",
    title: "Dark Forces (Harlequin)",
    genre: "Drama|Fantasy|Mystery",
  },
  {
    id: "01HSX5JYCGQ64VQB1817R0JMVQ",
    title: "Tora-san's Rise and Fall (Otoko wa tsurai yo: Torajiro aiaigasa)",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYCG4W7NZWGC09T9NFPP",
    title: "Love Crime (Crime d'amour)",
    genre: "Crime|Mystery|Thriller",
  },
  {
    id: "01HSX5JYCHX2HFCRMPF2Q4D5XE",
    title: "Let Fury Have the Hour",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYCH75RKX4SBJ9MK89QR",
    title: "Last Metro, The (Dernier métro, Le)",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYCJ8FHXGSXQ1DNXDDEF",
    title: "Bullet for the General, A (Quién Sabe?)",
    genre: "Western",
  },
  {
    id: "01HSX5JYCK470VNQF5E0H3TNGX",
    title: "Blank City",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYCKP777HSZZHAXKV0CW",
    title: "Little Girl Who Conquered Time, The (Toki o kakeru shôjo)",
    genre: "Romance|Sci-Fi",
  },
  {
    id: "01HSX5JYCMTBE0TCMW170JTWD6",
    title: "Valley Girl",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYCMHTAF9Q8CD0J1P5AA",
    title: "Stavisky...",
    genre: "Crime|Drama",
  },
  {
    id: "01HSX5JYCNMEXD49332681398F",
    title: "Rovaniemen markkinoilla",
    genre: "Comedy|Musical",
  },
  {
    id: "01HSX5JYCPDKRGXGQ0M4TYN5CV",
    title: "Memories of Matsuko (Kiraware Matsuko no isshô)",
    genre: "Comedy|Drama|Musical|Mystery",
  },
  {
    id: "01HSX5JYCPF84N8HKNZA77320D",
    title: "In Gold We Trust (600 kilos d'or pur)",
    genre: "Adventure",
  },
  { id: "01HSX5JYCQP1969FW9QJHSNMXY", title: "Doubt", genre: "Drama|Mystery" },
  { id: "01HSX5JYCQDD6B9974Y67RB5NE", title: "Tomcats", genre: "Comedy" },
  {
    id: "01HSX5JYCRPSQC2AP34K0BQ4VM",
    title: "Cargo 200 (Gruz 200)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYCRVYP034W19KB47PBJ",
    title: "Shenandoah",
    genre: "Drama|War|Western",
  },
  {
    id: "01HSX5JYCS4DSQ675YPDV09CN5",
    title:
      "Ito: A Diary of an Urban Priest (Seitti - kilvoittelijan päiväkirja)",
    genre: "Documentary",
  },
  { id: "01HSX5JYCT8F58WYP72E58RQNT", title: "David and Lisa", genre: "Drama" },
  {
    id: "01HSX5JYCTQQ2TAM4DQNZWA2RY",
    title: "Fine Madness, A",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYCV9R6QECNQ8YA2T5KD",
    title: "My Favorite Year",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYCVF55BT5GTMNBE9X5W",
    title: "Far Cry",
    genre: "Action|Adventure|Drama",
  },
  {
    id: "01HSX5JYCW3TMHEV5WT8ZDZEZM",
    title: "House on Haunted Hill",
    genre: "Horror|Thriller",
  },
  {
    id: "01HSX5JYCXP4SKG5JVKWDK9MJ1",
    title: "Any Questions for Ben?",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYCXWSCXTSG8D7Z1HCWK",
    title: "Where Love Has Gone",
    genre: "Drama",
  },
  {
    id: "01HSX5JYCYF4F75FNF9QDAXR9Q",
    title: "Ricky Rapper (Risto Räppääjä)",
    genre: "Comedy|Musical",
  },
  {
    id: "01HSX5JYCY66BNZV4GRT10THWW",
    title: "Adventures of Picasso, The (Picassos äventyr)",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYCZHN07JZW6SYCCP79N",
    title: "Sign of Four, The",
    genre: "Crime|Mystery",
  },
  {
    id: "01HSX5JYCZMN0ZCG5521SVEG30",
    title: "Bickford Shmeckler's Cool Ideas",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYD065YPTFG8CP8EH776",
    title: "Metropolis",
    genre: "Animation|Sci-Fi",
  },
  {
    id: "01HSX5JYD154CHAY4N9G6DBS8M",
    title: "Weather Underground, The",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYD1D0A7A3PR2YE03EDM",
    title: "French Connection II",
    genre: "Action|Crime|Drama|Thriller",
  },
  {
    id: "01HSX5JYD25XJTSN5Y9EGN5MEH",
    title: "The Last Station",
    genre: "Drama",
  },
  {
    id: "01HSX5JYD2GG5QA17NP49VCPHG",
    title: "Chorus, The (Hamsarayan)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYD3CC4A5ET4XFJYZCG1",
    title: "High Tension (Haute tension) (Switchblade Romance)",
    genre: "Horror|Thriller",
  },
  {
    id: "01HSX5JYD3EWSWYPR3WRDX9RJM",
    title: "Eyjafjallajökull",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYD4RN4P8JJM2ZHFVAX7",
    title: "Leo the Last",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYD5AD66NM5B5J8H72XG",
    title: "Beautiful Ohio",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYD57A5877QVG157G7PF",
    title: "Twelve",
    genre: "Crime|Drama|Thriller",
  },
  { id: "01HSX5JYD66Y57JT0WPTGGNZ32", title: "Paris Trout", genre: "Drama" },
  { id: "01HSX5JYD6FN01XS9QPW3VX78X", title: "Cure, The", genre: "Comedy" },
  {
    id: "01HSX5JYD7S963FM90NA5EHJKE",
    title: "Cheerleader Massacre",
    genre: "Horror|Thriller",
  },
  {
    id: "01HSX5JYD793YMJ27DN2WBA67R",
    title: "King of the Jungle",
    genre: "Drama|Thriller",
  },
  {
    id: "01HSX5JYD8QHXP8K6XPW7NY17R",
    title: "White Palms (Fehér tenyér)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYD9GHYQ0SJE9MVKAXGK",
    title: "St. Valentine's Day Massacre, The",
    genre: "Crime|Drama",
  },
  {
    id: "01HSX5JYD9EXB9GR7WG0KVJCB5",
    title: "Ordinary Decent Criminal",
    genre: "Comedy|Crime",
  },
  { id: "01HSX5JYDATBY2MV8879Y4AB95", title: "Men, The", genre: "Drama" },
  {
    id: "01HSX5JYDAD900XVTEMYFVRYQ4",
    title: "Kiki's Delivery Service",
    genre: "Fantasy",
  },
  {
    id: "01HSX5JYDB76YAQHKAFQ12JAEA",
    title: "Urban Menace",
    genre: "Action|Horror",
  },
  {
    id: "01HSX5JYDCK4VSTA7CJXH2S5DX",
    title: "Flowers in the Attic",
    genre: "Drama|Mystery|Thriller",
  },
  { id: "01HSX5JYDCCQMJRNYFZVNARJVG", title: "Burn", genre: "Documentary" },
  {
    id: "01HSX5JYDDS8XWZZFMW1J81S0B",
    title: "Decoys",
    genre: "Comedy|Horror|Sci-Fi",
  },
  {
    id: "01HSX5JYDD83CD66V7QBBD3NEJ",
    title: "Homecoming",
    genre: "Drama|Thriller",
  },
  {
    id: "01HSX5JYDEEG9WK5H1BGAD2R5J",
    title: "Sinister",
    genre: "Horror|Thriller",
  },
  {
    id: "01HSX5JYDEK115W1F6CZX9GACV",
    title: "Come to the Stable",
    genre: "Drama",
  },
  {
    id: "01HSX5JYDFB8H3NXJ0T7S4W53S",
    title: "Pleasure of Being Robbed, The",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYDGFFYGCP5T7CEC0NW6",
    title: "Prison Terminal: The Last Days of Private Jack Hall",
    genre: "Crime|Documentary",
  },
  {
    id: "01HSX5JYDGH7CHADBMWTE2VR71",
    title: "Open Up to Me (Kerron sinulle kaiken)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYDH75MHGDJSNSJZSV0F",
    title: "Roger & Me",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYDH1Y6MJDCFH0CD65A9",
    title: "Bronies: The Extremely Unexpected Adult Fans of My Little Pony",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYDJM20TATZDN03ARWQN",
    title: "My Forbidden Past",
    genre: "Drama",
  },
  {
    id: "01HSX5JYDK5XWPZ2RKD59P7MYX",
    title: "Very Brady Sequel, A",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYDKC35BQX22HNPAMKGG",
    title: "Raven, The",
    genre: "Comedy|Horror",
  },
  {
    id: "01HSX5JYDMBR8B2AWZN2AWX22H",
    title: "Shooting Dogs (a.k.a. Beyond the Gates)",
    genre: "Documentary|Drama|War",
  },
  {
    id: "01HSX5JYDMP89KF2EA44M4CYF2",
    title: "Confessions of a Superhero",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYDNAQAPBRGPARN7GCB3",
    title: "Confidence",
    genre: "Crime|Thriller",
  },
  {
    id: "01HSX5JYDNN79SA4GBXXAF19SP",
    title: "Incident at Blood Pass (Machibuse) (Ambush)",
    genre: "Action|Drama",
  },
  {
    id: "01HSX5JYDP3BPAP26VPJ87TT8G",
    title: "Wuthering Heights",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYDQGMWSRMXG9SFKQV5H",
    title: "Inspector Bellamy (Bellamy)",
    genre: "Crime|Drama",
  },
  {
    id: "01HSX5JYDQQH2QB3FZ284M2QG8",
    title: "Danger: Diabolik (Diabolik)",
    genre: "Action|Crime|Thriller",
  },
  {
    id: "01HSX5JYDRT9W2PQB8499N30MZ",
    title: "Bright Lights (Adventures in Africa)",
    genre: "Drama|Musical",
  },
  {
    id: "01HSX5JYDR747HBKFHZA3JRMVR",
    title: "And the Ship Sails On (E la nave va)",
    genre: "Comedy|War",
  },
  {
    id: "01HSX5JYDSPZ4KM77K2Z13VXVB",
    title: "Caine (Shark!)",
    genre: "Action|Adventure|Thriller",
  },
  {
    id: "01HSX5JYDSMRYC054QSJZPYY4E",
    title: "Live and Become (Va, vis et deviens)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYDTZ63215460T7GW6EB",
    title: "Minion, The",
    genre: "Action|Fantasy|Horror",
  },
  {
    id: "01HSX5JYDVBFQZ2WBWQGN8MV31",
    title: "North West Mounted Police",
    genre: "Action|Adventure|Drama|Romance|Western",
  },
  {
    id: "01HSX5JYDV4RYK9VR9QKMHYQDY",
    title: "Shinobi No Mono 4: Siege",
    genre: "Drama|War",
  },
  {
    id: "01HSX5JYDWRHPX0SPZE7Y1WKWK",
    title: "America's Heart and Soul",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYDWXDDRA54YJ6136XQ6",
    title: "Dead in Tombstone",
    genre: "Action|Fantasy|Horror",
  },
  {
    id: "01HSX5JYDXKJXSHJYT9Q2M8BHV",
    title: "Broken Circle Breakdown, The",
    genre: "Drama",
  },
  { id: "01HSX5JYDX4D7DRPQMMHYK6JA4", title: "Men in War", genre: "Drama|War" },
  {
    id: "01HSX5JYDYKQCWQ10M0G5G3VHE",
    title: "Bio Zombie (Sun faa sau si)",
    genre: "Comedy|Horror",
  },
  {
    id: "01HSX5JYDY762233P9RX8W0FWY",
    title: "Melody Time",
    genre: "Animation|Children|Musical",
  },
  {
    id: "01HSX5JYDZ3K86C0BD31TP69HX",
    title: "Shall We Kiss? (Un baiser s'il vous plait)",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYDZEJTHAC5G2TXSVXNR",
    title: "Jumanji",
    genre: "Adventure|Children|Fantasy",
  },
  {
    id: "01HSX5JYE0MSA21HY68393B08Q",
    title: "Family Weekend",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYE05TFCQMWRC58KQ3GK",
    title: "Moomins on the Riviera (Muumit Rivieralla)",
    genre: "Animation|Children|Comedy",
  },
  {
    id: "01HSX5JYE1G6N55RK5XFRA1191",
    title: "Abominable Dr. Phibes, The",
    genre: "Horror|Mystery",
  },
  {
    id: "01HSX5JYE1XYYQ3DZZVYM1FSPN",
    title: "Patience Stone, The",
    genre: "Drama|War",
  },
  {
    id: "01HSX5JYE2C6X89ESK52WYW6K6",
    title: "Different for Girls",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYE2P9TDM4SEP0FS7VK4",
    title: "Day a Pig Fell Into the Well, The (Daijiga umule pajinnal)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYE3EBTR0YYAA3M0S6GB",
    title: "Where the Heart Is",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYE4KH2761VNXP8VPE9T",
    title: "My Father the Hero",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYE4D257W0HM1EZBS8B7",
    title: "Theory of Everything, The",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYE58QYYEDPF6F0NJK44",
    title: "Gay Deceivers, The",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYE6M2XZFWXZBS1GE0JR",
    title: "Girl Cut in Two, The (Fille coupée en deux, La)",
    genre: "Drama|Thriller",
  },
  {
    id: "01HSX5JYE6RYDHF6H4XKBEC1KK",
    title: "Kathleen",
    genre: "Comedy|Drama|Romance",
  },
  { id: "01HSX5JYE7CZPT1FP4D260AHF5", title: "Forger, The", genre: "Drama" },
  {
    id: "01HSX5JYE8174345F4XCJYR4AY",
    title: "Russell Brand: Messiah Complex",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYE8NYC7PM1JPTJJ7EFA",
    title: "Bridges at Toko-Ri, The",
    genre: "Drama|Romance|War",
  },
  {
    id: "01HSX5JYE967YYZQG34AWZW22D",
    title: "Final Destination 2",
    genre: "Horror|Thriller",
  },
  { id: "01HSX5JYE9M35QT0DBHK4EATQ5", title: "Slam Dance", genre: "Thriller" },
  {
    id: "01HSX5JYEA9MTC0NHZGK53GK0A",
    title: "Teenage Mutant Ninja Turtles III",
    genre: "Action|Adventure|Children|Comedy|Fantasy",
  },
  {
    id: "01HSX5JYEB3PQYB69Y58P35QCM",
    title: "Knowing",
    genre: "Action|Drama|Mystery|Sci-Fi|Thriller",
  },
  { id: "01HSX5JYEBX2MRDD41Y1HQT9R5", title: "Puncture", genre: "Drama" },
  {
    id: "01HSX5JYEC8ETN5EDYAVHN4SVW",
    title: "California Dreamin' (Nesfarsit)",
    genre: "Comedy|Drama|War",
  },
  {
    id: "01HSX5JYECGES4QM7T2FMMVKZG",
    title: "Journey 2: The Mysterious Island",
    genre: "Action|Adventure|Comedy|Sci-Fi|IMAX",
  },
  {
    id: "01HSX5JYED7PE7GZBDR1359J11",
    title: "Christmas Party, The (Joulubileet)",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYEEFFMAWQ4NV2DXGTY5",
    title: "No Mercy",
    genre: "Action|Crime|Thriller",
  },
  {
    id: "01HSX5JYEEJ61VM3N9QS49G3GC",
    title:
      "Once Upon a Time in China II (Wong Fei-hung Ji Yi: Naam yi dong ji keung)",
    genre: "Action|Romance",
  },
  {
    id: "01HSX5JYEF1G648QTNRPWQ21VJ",
    title: "Assassination Bureau, The",
    genre: "Action|Adventure|Comedy|Crime|Sci-Fi",
  },
  {
    id: "01HSX5JYEGD43DBBK14ANM6EJ2",
    title: "Beethoven's 2nd",
    genre: "Children|Comedy",
  },
  {
    id: "01HSX5JYEGS0Q28TVZC2VAMWS5",
    title: "My Girl",
    genre: "Comedy|Drama|Romance",
  },
  { id: "01HSX5JYEHADKND2YMT96SF38P", title: "That's Life!", genre: "Drama" },
  {
    id: "01HSX5JYEJHMYDBQEQJT9RJWRE",
    title: "Adventure of Sherlock Holmes' Smarter Brother, The",
    genre: "Comedy|Crime|Mystery",
  },
  {
    id: "01HSX5JYEJJFYNF6NDETMV3QDF",
    title: "Childhood of Maxim Gorky, The (Detstvo Gorkogo)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYEKP0998RXJ1K2REJVD",
    title: "Iron Mask, The",
    genre: "Adventure|Drama|Romance",
  },
  {
    id: "01HSX5JYEMPAFMRR0EFJJMCWJG",
    title: "Happy People: A Year in the Taiga",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYENSE98MZ1YY4Q1T37C",
    title: "American Reunion (American Pie 4)",
    genre: "Comedy",
  },
  { id: "01HSX5JYENAT0H4GQ95DJ2H9KD", title: "Out of Bounds", genre: "Drama" },
  {
    id: "01HSX5JYEP88GG65B9BVK5WK84",
    title: "Super 8",
    genre: "Mystery|Sci-Fi|Thriller|IMAX",
  },
  {
    id: "01HSX5JYEQ69DN90AFKBV5YN7D",
    title: "Sherlock Holmes: A Game of Shadows",
    genre: "Action|Adventure|Comedy|Crime|Mystery|Thriller",
  },
  {
    id: "01HSX5JYERFFNPZA0NB0J3K8W8",
    title: "As Good as Dead",
    genre: "Thriller",
  },
  {
    id: "01HSX5JYER1AV8X6HK09WC0NNV",
    title: "Dark Days",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYESRQYMXF54Y642H0F7",
    title: "Speed Of Thought, The",
    genre: "Sci-Fi|Thriller",
  },
  {
    id: "01HSX5JYES77W1T1NR3HQ1CNR7",
    title: "Boxing Helena",
    genre: "Drama|Mystery|Romance|Thriller",
  },
  {
    id: "01HSX5JYESHVV0MP6XFY23ASA7",
    title: "La Soufrière - Warten auf eine unausweichliche Katastrophe",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYETWAZ2A0D6T1AK4TB9",
    title: "House at the End of the Street",
    genre: "Horror|Thriller",
  },
  {
    id: "01HSX5JYETGJBT3QVS6CDSG1CY",
    title: "Baxter, The",
    genre: "Comedy|Drama|Romance",
  },
  { id: "01HSX5JYEVXRBHXK91VBH2S8YE", title: "Nokas", genre: "Crime|Thriller" },
  {
    id: "01HSX5JYEW707T5D0YZDZE7P06",
    title: "Escanaba in da Moonlight",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYEXS4QHZK4520224FR1",
    title: "Darkness/Light/Darkness (Tma/Svetlo/Tma)",
    genre: "Animation|Comedy|Fantasy",
  },
  { id: "01HSX5JYEYB6QNACQZFBJW2BA4", title: "Crowd, The", genre: "Drama" },
  { id: "01HSX5JYEZCJ47HCKZEBNXD8QQ", title: "Stella Dallas", genre: "Drama" },
  {
    id: "01HSX5JYF0TZ05YM4CYB9DP2PA",
    title: "Li'l Abner",
    genre: "Comedy|Musical",
  },
  {
    id: "01HSX5JYF01GA4HZ1NXT06Y3D8",
    title: "King of Kong, The",
    genre: "Documentary",
  },
  { id: "01HSX5JYF15NWV8KCGKJ9K22JG", title: "Detachment", genre: "Drama" },
  {
    id: "01HSX5JYF1JNCZ0QK544GRBCNS",
    title: "With Honors",
    genre: "Comedy|Drama",
  },
  { id: "01HSX5JYF2JWBRAZAXC97AZ7WV", title: "Distant (Uzak)", genre: "Drama" },
  {
    id: "01HSX5JYF36RBEVG6E012GVMGN",
    title:
      "Another Nine & a Half Weeks (Love in Paris) (9 1/2 Weeks II) (Another 9 1/2 Weeks)",
    genre: "Drama|Romance",
  },
  { id: "01HSX5JYF3NZGBS7PX7W99JEXA", title: "Boom!", genre: "Drama" },
  {
    id: "01HSX5JYF466FTDVAQ3551YYA4",
    title: "Blue Lagoon, The",
    genre: "Adventure|Drama|Romance",
  },
  {
    id: "01HSX5JYF5JRXT1SWKDVCPCGTR",
    title: "Toy Story 2",
    genre: "Adventure|Animation|Children|Comedy|Fantasy",
  },
  {
    id: "01HSX5JYF6W6N7ADHMV26BPFMW",
    title: "Day the Sun Turned Cold, The (Tianguo niezi)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYF7Q1PV6BWNPEZ7MCCP",
    title: "Mon oncle d'Amérique",
    genre: "Drama",
  },
  {
    id: "01HSX5JYF84NDYVHDF5ER7KABY",
    title: "Long Night's Journey Into Day",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYF98988X45YCS789GWZ",
    title: "Necessary Roughness",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYFA8D82TMXM0FNNG30Y",
    title: "Aliens of the Deep",
    genre: "Documentary|IMAX",
  },
  {
    id: "01HSX5JYFA593FWPK19Z4QCCM0",
    title: "Buffalo '66 (a.k.a. Buffalo 66)",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYFB6QG0XZ13JFD8QBTV",
    title: "New York Doll",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYFCKW2JN1WC0YHPDBCY",
    title: "Ricky Rapper (Risto Räppääjä)",
    genre: "Comedy|Musical",
  },
  {
    id: "01HSX5JYFC44G947XK8DJ4C5C6",
    title: "Bangkok Dangerous",
    genre: "Action|Crime|Thriller",
  },
  {
    id: "01HSX5JYFDMB6S2RQA52ZTA8AZ",
    title: "McLintock!",
    genre: "Comedy|Western",
  },
  {
    id: "01HSX5JYFEN86R9QTQJZ2C3MAP",
    title: "Human Resources Manager, The",
    genre: "Drama",
  },
  {
    id: "01HSX5JYFFBBVHPJ747ASJXYKG",
    title: "Cousin Angelica (La prima Angélica)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYFG8J9ENWQQGFCQKVZT",
    title: "Americathon",
    genre: "Comedy|Sci-Fi",
  },
  {
    id: "01HSX5JYFHCP68MGM6Y26SRW7F",
    title: "Wankers, The (Les branleuses)",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYFH6FPKEKH8RPPDPK3J",
    title: "Petrified Forest, The",
    genre: "Crime|Drama|Romance",
  },
  {
    id: "01HSX5JYFJVB0D3DQ7E4R0WX2Y",
    title: "Reel Rock 8 ",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYFKHC7C6J0B5V90XTWZ",
    title: "Beyond, The (E tu vivrai nel terrore - L'aldilà)",
    genre: "Horror",
  },
  {
    id: "01HSX5JYFMMGC7YD7SSTCZ5CZ8",
    title: "Regeneration",
    genre: "Drama|War",
  },
  {
    id: "01HSX5JYFN9GGXCDQ38X6G80XK",
    title: "Winter's Tale",
    genre: "Drama|Fantasy|Mystery",
  },
  {
    id: "01HSX5JYFPJPN6KVCK0Z0N84HJ",
    title:
      "Little Brother, Big Trouble: A Christmas Adventure (Niko 2: Lentäjäveljekset)",
    genre: "Adventure|Animation|Children|Comedy",
  },
  {
    id: "01HSX5JYFP9KCAE45WD67G1WWD",
    title: "Best of the Best",
    genre: "Action",
  },
  { id: "01HSX5JYFQAK26ZJSHWPB1C957", title: "Last Dance", genre: "Drama" },
  {
    id: "01HSX5JYFRH72588H0FMXEVFSH",
    title: "Memory",
    genre: "Drama|Horror|Thriller",
  },
  {
    id: "01HSX5JYFST4GDR5P5KE7JFXK2",
    title: "Man Hunt",
    genre: "Crime|Drama|Thriller",
  },
  {
    id: "01HSX5JYFTNGETV09227FMNR76",
    title: "Beautiful People",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYFVH89EY6P718N9TBGG",
    title: "Over Your Cities Grass Will Grow",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYFWSBVTNZWBD0CQFDFJ",
    title: "All the Boys Love Mandy Lane",
    genre: "Horror|Mystery|Thriller",
  },
  {
    id: "01HSX5JYFXAQY5QNKK23QVEJX6",
    title: "Age of the Dragons",
    genre: "Action|Adventure|Fantasy",
  },
  {
    id: "01HSX5JYFX9KF2C8N15MZ4JGQT",
    title: "Seducing Doctor Lewis (Grande séduction, La)",
    genre: "Comedy",
  },
  { id: "01HSX5JYFYSQTH7Z33NT8QEQTS", title: "Trees Lounge", genre: "Drama" },
  {
    id: "01HSX5JYFZWFJWWP11CHWS8WEA",
    title: "Tiptoes",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYG0Z41HRJSTH6SRKF6Q",
    title: "Rawhead Rex",
    genre: "Horror|Thriller",
  },
  {
    id: "01HSX5JYG1HYJN9D0YB0MFPVMV",
    title: "Gun Woman",
    genre: "Action|Thriller",
  },
  {
    id: "01HSX5JYG2A24GJEQA12CR3SZX",
    title: "Me, Myself and Mum (Les garçons et Guillaume, à table!)",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYG2BK341W4A6EQZCWJX",
    title: "Passport to Pimlico",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYG35HN3007NRBPW432E",
    title: "Monty Python: Almost the Truth - Lawyers Cut",
    genre: "Comedy|Documentary",
  },
  {
    id: "01HSX5JYG4Y221HGT0GZDPX71M",
    title: "Mosquito Coast, The",
    genre: "Adventure|Drama|Thriller",
  },
  {
    id: "01HSX5JYG5Q5FW5DKBGT83TGZK",
    title: "Firewall",
    genre: "Crime|Drama|Thriller",
  },
  {
    id: "01HSX5JYG6WJBJY3Q4Z8GN924N",
    title: "Heart of Dragon (Long de xin)",
    genre: "Action|Comedy|Crime|Drama|War",
  },
  {
    id: "01HSX5JYG7SJMG6T1VXZXFBBSQ",
    title: "Highly Dangerous",
    genre: "Action|Thriller",
  },
  {
    id: "01HSX5JYG88D00WMSZR209YXE6",
    title: "Boss of It All, The (Direktøren for det hele)",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYG9FA7K9VKGKRNPVZ42",
    title: "Rich Hill",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYG9CYZ86DYE28Y2MEBH",
    title: "Four Stories of St. Julian ",
    genre: "Crime|Thriller",
  },
  {
    id: "01HSX5JYGAXKR5R6CN2ZN11W61",
    title: "Life in a Day",
    genre: "Documentary|Drama",
  },
  {
    id: "01HSX5JYGBYYPW9S38R76KG8FG",
    title: "Beyond Re-Animator",
    genre: "Horror",
  },
  {
    id: "01HSX5JYGCA6V939T7CFEE45RJ",
    title: "Everything I Can See From Here",
    genre: "Adventure|Animation|Drama|Sci-Fi",
  },
  {
    id: "01HSX5JYGD1VVVATJ7C2N5YHHZ",
    title: "The Cave of the Golden Rose",
    genre: "Adventure|Children|Fantasy",
  },
  {
    id: "01HSX5JYGEG7ZAYBMRDXM2NFQG",
    title: "Women, The",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYGEVBD5BJFVT0S27YGM",
    title: "London - The Modern Babylon ",
    genre: "Documentary",
  },
  { id: "01HSX5JYGEQCMH6S5E6V389KAD", title: "Lucy", genre: "Comedy|Drama" },
  {
    id: "01HSX5JYGFW6ZKNYVVTF9BMK97",
    title: "Marie Antoinette",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYGFJQA4XDJPPTJD9TX7",
    title: "29 Palms",
    genre: "Comedy|Drama|Thriller",
  },
  {
    id: "01HSX5JYGGAZZ1J2CKTXF9FRGF",
    title: "Undisputed III: Redemption",
    genre: "Action|Crime|Drama",
  },
  {
    id: "01HSX5JYGGSQA17A2BZ3ZVN08D",
    title: "Warrior's Way, The",
    genre: "Action|Fantasy|Western",
  },
  {
    id: "01HSX5JYGG7660SNFNJF9JM7Q9",
    title: "Wings",
    genre: "Action|Drama|Romance|War",
  },
  {
    id: "01HSX5JYGHJDC08K6YSERPVTQV",
    title: "Bitch Slap",
    genre: "Action|Comedy|Crime|Thriller",
  },
  {
    id: "01HSX5JYGHCN3VS4BXPNNW8CVZ",
    title: "Atlantic City",
    genre: "Crime|Drama|Romance",
  },
  {
    id: "01HSX5JYGHGVFGWNZ9RHAKQSAH",
    title: "Santa Fe",
    genre: "Action|Romance|Western",
  },
  {
    id: "01HSX5JYGJM25RR960YKXMWHDE",
    title: "Conspiracy of Torture, The (Beatrice Cenci)",
    genre: "Drama",
  },
  { id: "01HSX5JYGJ4DGH83E0X762DK8Z", title: "Night Terrors", genre: "Horror" },
  {
    id: "01HSX5JYGKJ0X12CQ5R3DTAR4F",
    title: "Great Texas Dynamite Chase, The",
    genre: "Action|Comedy|Crime|Drama|Romance",
  },
  {
    id: "01HSX5JYGK5GSH37TFT9AEV19F",
    title: "Big Combo, The",
    genre: "Film-Noir",
  },
  {
    id: "01HSX5JYGKH4BE3TEX60E4BFSK",
    title: "One Man Against the Organization",
    genre: "(no genres listed)",
  },
  {
    id: "01HSX5JYGMK66XXVJWC2YXQS48",
    title: "Bad Blood: A Cautionary Tale ",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYGNEF8G2CC6A3Y91V40",
    title:
      "Outlaw and His Wife, The (a.k.a. You and I) (Berg-Ejvind och hans hustru)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYGNFSWA7681B79V5X00",
    title: "Before the Rains",
    genre: "Drama|Romance|Thriller",
  },
  {
    id: "01HSX5JYGN0MEXEZ31MNT06TS1",
    title: "Captain America: The First Avenger",
    genre: "Action|Adventure|Sci-Fi|Thriller|War",
  },
  {
    id: "01HSX5JYGP2F7VMC5DE11VJ5K9",
    title: "To Begin Again (a.k.a. Starting Over) (Volver a Empezar)",
    genre: "Drama",
  },
  { id: "01HSX5JYGPH2JQN4NBVKKBH8CT", title: "27 Club, The", genre: "Drama" },
  {
    id: "01HSX5JYGPTJ0KKSMVF0QAAFN2",
    title: "Manchurian Candidate, The",
    genre: "Crime|Thriller|War",
  },
  {
    id: "01HSX5JYGQS797RA40TTQK49PX",
    title: "Last of the Mohicans, The",
    genre: "Adventure|Drama|War",
  },
  {
    id: "01HSX5JYGQJ8NFX50032FZ575S",
    title: "Get Smart",
    genre: "Action|Comedy",
  },
  {
    id: "01HSX5JYGQCDJDVVR6RF7K6MHE",
    title: "Delusions of Grandeur (La folie des grandeurs)",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYGRH89WY2G924CKC70C",
    title: "Simpsons Movie, The",
    genre: "Animation|Comedy",
  },
  { id: "01HSX5JYGR45WTG0TQGJ2B4JWS", title: "Clay Pigeons", genre: "Crime" },
  {
    id: "01HSX5JYGSP055RVEXT5GV1AFJ",
    title: "The Woman on Pier 13",
    genre: "Drama|Thriller",
  },
  { id: "01HSX5JYGSKHF6WE2PF9QF8VTE", title: "Too Late Blues", genre: "Drama" },
  {
    id: "01HSX5JYGS55ZSVXZJWDRY677K",
    title: "Other Side of Bollywood, The",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYGT93P1FJ0WFQN2ZS9X",
    title: "Blackmailed",
    genre: "Crime|Drama|Thriller",
  },
  {
    id: "01HSX5JYGTM2TK7QMN2ZN9YHA6",
    title: "Upside of Anger, The",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYGT2NTWK91N4QVTC79F",
    title: "Rust and Bone (De rouille et d'os)",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYGVD87C5NFZPES1XD70",
    title:
      "Without Warning (a.k.a. Alien Warning) (a.k.a. It Came Without Warning)",
    genre: "Horror|Sci-Fi",
  },
  {
    id: "01HSX5JYGVJFGJX6RJ8NCX6YQY",
    title: "Elsewhere",
    genre: "Crime|Drama|Thriller",
  },
  {
    id: "01HSX5JYGV9QYWE17XH28PT8HR",
    title: "Grass: A Nation's Battle for Life",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYGWPSWAJG8JQYEEXXZW",
    title: "Man on High Heels",
    genre: "Action|Comedy",
  },
  {
    id: "01HSX5JYGWXTQDYDD2SN03ZYQS",
    title: "Forest (Rengeteg)",
    genre: "Drama",
  },
  { id: "01HSX5JYGW707RJ91PGKEV855W", title: "King Kelly", genre: "Drama" },
  {
    id: "01HSX5JYGXCVMS42JFR1GR524Y",
    title: "Rocky IV",
    genre: "Action|Drama",
  },
  {
    id: "01HSX5JYGXKS8YXHRMCRVPZW91",
    title: "How Green Was My Valley",
    genre: "Drama|Musical|Romance",
  },
  {
    id: "01HSX5JYGXVFF4D2CFQHGBM6VR",
    title: "Rebirth of Mothra II",
    genre: "Action|Fantasy",
  },
  { id: "01HSX5JYGYN8G1K9S5H914558Y", title: "Enid", genre: "Drama" },
  {
    id: "01HSX5JYGYY13VT726KNQG70J1",
    title: "a/k/a Tommy Chong",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYGYW9BVGVYY43SK96MV",
    title: "Sherlock Holmes: The Woman in Green",
    genre: "Mystery",
  },
  {
    id: "01HSX5JYGZ5PNBMKHSHPRVHZWT",
    title: "Kill by Inches",
    genre: "Fantasy|Horror|Thriller",
  },
  {
    id: "01HSX5JYH0AE3Q7H3ES2E7TB2H",
    title: "Body of Lies",
    genre: "Action|Drama|Thriller",
  },
  {
    id: "01HSX5JYH1SETTEHVBE92BRJEX",
    title: "Caótica Ana",
    genre: "Comedy|Drama|Mystery|Romance",
  },
  {
    id: "01HSX5JYH2QS0QAXMK9GMRPWGQ",
    title: "Pygmalion",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYH3Y0KN1KGZY7RY4391",
    title: "Thoughtcrimes",
    genre: "Action|Crime|Drama",
  },
  {
    id: "01HSX5JYH3ZX3YCQ64QYR01D9X",
    title: "Wayward Bus, The",
    genre: "Drama",
  },
  {
    id: "01HSX5JYH471SH2WWJV5QY5KWE",
    title: "His Brother (Son frère)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYH56GF9VMYMVFS8Y1C5",
    title: "The Hound of the Baskervilles",
    genre: "Adventure|Drama|Horror|Mystery",
  },
  { id: "01HSX5JYH66MTK3YBP1YPE1TGH", title: "Deep End, The", genre: "Drama" },
  {
    id: "01HSX5JYH7RVVACNB6BZRV8SXD",
    title: "Turtle Diary",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYH8E27Y4Y6J1ECK9K1Y",
    title: "Poison Ivy: New Seduction",
    genre: "Drama|Thriller",
  },
  {
    id: "01HSX5JYH8MDSTQD3K7RA1XR5F",
    title: "Elsewhere",
    genre: "Crime|Drama|Thriller",
  },
  {
    id: "01HSX5JYH8WN5VGYQ02GEQ76MS",
    title: "Place Beyond the Pines, The",
    genre: "Crime|Drama",
  },
  { id: "01HSX5JYH923962Y1HDV42ZXN5", title: "Terraferma", genre: "Drama" },
  {
    id: "01HSX5JYHAHMK1EAN6E4CHSQCJ",
    title: "Scott of the Antarctic",
    genre: "Action|Adventure|Drama",
  },
  {
    id: "01HSX5JYHBMNEAGV88X11N4Z84",
    title: "Blue Blood",
    genre: "Documentary",
  },
  { id: "01HSX5JYHC5JDH470V7QPNR35S", title: "Hamsun", genre: "Drama|War" },
  {
    id: "01HSX5JYHCMS66RW8CG4RP21EV",
    title: "C.H.U.D. II - Bud the Chud",
    genre: "Comedy|Horror",
  },
  {
    id: "01HSX5JYHDXVCC48PQKYPCK5BD",
    title:
      "Hotel Terminus: The Life and Times of Klaus Barbie (Hôtel Terminus)",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYHD0BZAAQXGFWAJSNDF",
    title: "Drummer-Crab (Le Crabe-Tambour)",
    genre: "Adventure|Drama|War",
  },
  {
    id: "01HSX5JYHEP4Y9PXT2960NN6XW",
    title: "A Mulher Invisível",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYHENGS8HGXWZ15XGQCC",
    title: "Cuenca Crime, The (Crimen de Cuenca, El)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYHE7ZHAZBNX1DNA6RT7",
    title: "30 Days of Night: Dark Days",
    genre: "Horror|Thriller",
  },
  {
    id: "01HSX5JYHFPXG8HWP37TT8CGF3",
    title: "They Wait",
    genre: "Horror|Mystery|Thriller",
  },
  {
    id: "01HSX5JYHFN2AF7NKASZRAECS4",
    title:
      "More About the Children of Noisy Village (a.k.a. More About the Children of Bullerby Village) (Mer om oss barn i Bullerbyn)",
    genre: "Children",
  },
  {
    id: "01HSX5JYHF4XPKRDZJD4AVKX10",
    title: "Affair in Trinidad",
    genre: "Drama|Film-Noir|Musical|Thriller",
  },
  {
    id: "01HSX5JYHGQAPMZFXBZB0JXSG6",
    title: "Puppet Master II",
    genre: "Horror|Sci-Fi|Thriller",
  },
  { id: "01HSX5JYHGT1ZX8ANZDQ473VV3", title: "Konga", genre: "Horror|Sci-Fi" },
  {
    id: "01HSX5JYHGV4DK0ADVVMTNR4NX",
    title: "Girl with Green Eyes",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYHHG4P2YPPSXE855K11",
    title: "My Week with Marilyn",
    genre: "Drama",
  },
  {
    id: "01HSX5JYHJRGR6F2YQ7S2BMYQ3",
    title: "Bambi",
    genre: "Animation|Children|Drama",
  },
  {
    id: "01HSX5JYHKEXZWVP2J37W8JJZ0",
    title: "Clay Bird, The (Matir moina)",
    genre: "Drama",
  },
  { id: "01HSX5JYHMBTRMR1KW26BAZMB8", title: "Next Friday", genre: "Comedy" },
  {
    id: "01HSX5JYHM6J779G8MJ4JHN1Y2",
    title: "Aziz Ansari: Dangerously Delicious",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYHN8HT21CPJPT3V6JMD",
    title: "4:44 Last Day on Earth",
    genre: "Drama|Fantasy|Sci-Fi",
  },
  {
    id: "01HSX5JYHN39RG0Z0EEB8XQNJ0",
    title: "Wild Thornberrys Movie, The",
    genre: "Animation|Children|Comedy",
  },
  { id: "01HSX5JYHNGZJ50EYAXYR1TA4Z", title: "Renoir", genre: "Drama|Romance" },
  {
    id: "01HSX5JYHNDHBQMP016RGPQM1Y",
    title: "Sweet Karma",
    genre: "Crime|Drama|Thriller",
  },
  {
    id: "01HSX5JYHP34G4TG3991J78MGB",
    title: "Fool's Gold",
    genre: "Action|Adventure|Comedy|Romance",
  },
  {
    id: "01HSX5JYHQSSM3903T25J85F3G",
    title: "Zapped Again!",
    genre: "Comedy|Sci-Fi",
  },
  {
    id: "01HSX5JYHRKMPK84PM2QXRT06D",
    title: "How to Be",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYHSH84NH741NVE0FWXR",
    title: "To Encourage the Others",
    genre: "Drama",
  },
  {
    id: "01HSX5JYHSF6Y0FQDFC8NGFT8N",
    title: "Blackrock",
    genre: "Drama|Thriller",
  },
  {
    id: "01HSX5JYHTC3THYTYZ927ETSCZ",
    title: "From Beijing with Love",
    genre: "Action|Comedy",
  },
  {
    id: "01HSX5JYHVYAQ02AME63EQMC4T",
    title: "Let It Snow",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYHWRWKR0NZJWHXYC7AA",
    title: "Human Experience, The",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYHW4PZ0B497CQ23D19M",
    title: "Rasputin and the Empress",
    genre: "Drama",
  },
  { id: "01HSX5JYHXB1Z9A2MR4EM9794N", title: "C.H.U.D.", genre: "Horror" },
  {
    id: "01HSX5JYHY0Q1DX0K4YAW4C407",
    title: "Life Less Ordinary, A",
    genre: "Romance|Thriller",
  },
  {
    id: "01HSX5JYHZAEHJKF1R7SR5K1GQ",
    title: "Summer of Blood",
    genre: "Comedy|Horror",
  },
  { id: "01HSX5JYHZHTTAJDDJ4BHCVQXJ", title: "Elevator ", genre: "Thriller" },
  { id: "01HSX5JYJ063P2KC9W679KKC69", title: "10 MPH", genre: "Documentary" },
  {
    id: "01HSX5JYJ1K6JB1S5XNEXPPJ5W",
    title: "Young Einstein",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYJ2HSBA6N42FXNFVME4",
    title: "Truth or Consequences, N.M.",
    genre: "Action|Crime|Romance",
  },
  {
    id: "01HSX5JYJ2EFV6NKFBNYWCAEBJ",
    title: "Polite People (Kurteist fólk)",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYJ3YYPCPRF2ZK9SHGKF",
    title: "Barbie: A Fashion Fairytale",
    genre: "Animation|Children",
  },
  {
    id: "01HSX5JYJ4K4EJP692H94A5VN2",
    title: "Last Lions, The",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYJ4CR12W4B28XHXYEV2",
    title: "Pursuit of the Graf Spee (Battle of the River Plate, The)",
    genre: "Action|Adventure|Drama|War",
  },
  { id: "01HSX5JYJ56Z5WEAR5ETVKYRP1", title: "What Is It?", genre: "Drama" },
  {
    id: "01HSX5JYJ6XXHFDC3R8RQVMXC4",
    title: "Metsän tarina",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYJ760S6NRCWRC50SDZA",
    title: "13Hrs",
    genre: "Adventure|Mystery",
  },
  {
    id: "01HSX5JYJ7W2JN338SD09F3FYJ",
    title: "Common Places (a.k.a. Common Ground) (Lugares comunes)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYJ8W8GBYBJYBCJ16FN7",
    title: "Disorderly Orderly, The",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYJ8P3K3D9F038MNFZGG",
    title: "Transcendence",
    genre: "Drama|Sci-Fi|IMAX",
  },
  {
    id: "01HSX5JYJ99KB73TJ2JPZP8NK7",
    title: "Steel Trap, The",
    genre: "Crime|Drama",
  },
  {
    id: "01HSX5JYJA2CE2TPP2ETJ3JHAM",
    title: "Erkan & Stefan 2",
    genre: "Comedy",
  },
  { id: "01HSX5JYJBPQS56PHZ3EYRJXPX", title: "Child's Pose", genre: "Drama" },
  {
    id: "01HSX5JYJCHJQMN9VMAHQD44X1",
    title: "Summer Catch",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYJCPPCM8N4ETNQF247V",
    title:
      "Young Detective Dee: Rise of the Sea Dragon (Di Renjie: Shen du long wang)",
    genre: "Action|Adventure|Drama|Fantasy|Mystery|IMAX",
  },
  {
    id: "01HSX5JYJD52QPN72PG7PZ88JS",
    title: "Failure to Launch",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYJEYMJ2AHCXVJ1TCM0K",
    title: "Knuckleball!",
    genre: "Documentary",
  },
  { id: "01HSX5JYJE1TQHJPDEYXED9T6V", title: "Addicted", genre: "Drama" },
  {
    id: "01HSX5JYJFSS68Q3W1NSSWXSB0",
    title: "Who Am I (Kein System Ist Sicher)",
    genre: "Thriller",
  },
  { id: "01HSX5JYJGDK5C7PHWRA434ZSH", title: "Sylvia", genre: "Drama|Romance" },
  {
    id: "01HSX5JYJHA00KJ8RXBARSHSAY",
    title: "Big Bad Wolf",
    genre: "Comedy|Horror",
  },
  {
    id: "01HSX5JYJJ3SD6GNWDDG96YD63",
    title: "Dead Alive (Braindead)",
    genre: "Comedy|Fantasy|Horror",
  },
  {
    id: "01HSX5JYJKYNWBV833V7JJQ1S7",
    title: "Alien Nation",
    genre: "Crime|Drama|Sci-Fi|Thriller",
  },
  { id: "01HSX5JYJMTJFKE1P54PE0A54J", title: "Whatever", genre: "Drama" },
  { id: "01HSX5JYJMKX3N8KX55A7WW0G9", title: "Kapò", genre: "Drama|War" },
  {
    id: "01HSX5JYJN31BZF062EZPS2AAV",
    title: "First Power, The",
    genre: "Crime|Horror|Thriller",
  },
  {
    id: "01HSX5JYJPVXTTQ8JG0GV9TE61",
    title:
      "Blossoming of Maximo Oliveros, The (Ang pagdadalaga ni Maximo Oliveros)",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYJQDN1A2QC556WJSQJA",
    title: "Prisoner of the Mountains (Kavkazsky plennik)",
    genre: "War",
  },
  {
    id: "01HSX5JYJRNR7JH5A5GNC7SWEW",
    title: "Raven, The",
    genre: "Crime|Horror|Thriller",
  },
  { id: "01HSX5JYJSD6DK4NPJEV98K7XP", title: "No Way Home", genre: "Drama" },
  { id: "01HSX5JYJS1VJJZADCQHW0XKG7", title: "Jakob the Liar", genre: "Drama" },
  {
    id: "01HSX5JYJTQ4A03PXV3ED7NHQR",
    title: "First Love",
    genre: "Comedy|Musical",
  },
  {
    id: "01HSX5JYJTD075EN7WYE5A8Z08",
    title: "Mr. Death: The Rise and Fall of Fred A. Leuchter, Jr.",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYJV8455QHCYY01MB3E3",
    title:
      "Night of the Day of the Dawn of the Son of the Bride of the Return of the Terror",
    genre: "Comedy|Horror",
  },
  {
    id: "01HSX5JYJWEY7EHVHK2ZZDAWD3",
    title: "Temptation (Tentação)",
    genre: "Drama|Romance",
  },
  { id: "01HSX5JYJXBQB2W7SM8GH14VEJ", title: "Modify ", genre: "Documentary" },
  { id: "01HSX5JYJXX1TVZVRAMZVYC6BF", title: "Venus", genre: "Drama|Romance" },
  {
    id: "01HSX5JYJYPZ6WW08G7NET8RKK",
    title: "Equinox Flower (Higanbana)",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYJZ5BDAHFXXJHG1VFEP",
    title: "Fond Kiss, A (Ae Fond Kiss...)",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYK0W1XT0MBMV09M30KM",
    title: "52 Pick-Up",
    genre: "Action|Mystery|Thriller",
  },
  {
    id: "01HSX5JYK10RW5HNHNHPZ3KWSS",
    title: "Itinerary of a Spoiled Child",
    genre: "Adventure|Drama",
  },
  {
    id: "01HSX5JYK1F92T3WTV23T8MYAM",
    title: "The Adventures of Hercules",
    genre: "Comedy|Fantasy",
  },
  {
    id: "01HSX5JYK2SH899RHN7M19S80F",
    title:
      "Who's Singin' Over There? (a.k.a. Who Sings Over There) (Ko to tamo peva)",
    genre: "Comedy",
  },
  { id: "01HSX5JYK31FVTWAP277RD8TNT", title: "Osama", genre: "Drama" },
  {
    id: "01HSX5JYK464BDM33QE2A69KW7",
    title: "Day Without a Mexican, A",
    genre: "Comedy|Drama|Fantasy|Mystery",
  },
  {
    id: "01HSX5JYK5C6BS4G2RBHYP4E4V",
    title: "Barocco",
    genre: "Crime|Drama|Romance|Thriller",
  },
  {
    id: "01HSX5JYK60YFD8BV3H1TF8VY2",
    title: "Suddenly",
    genre: "Crime|Drama|Film-Noir",
  },
  {
    id: "01HSX5JYK7B6CQX8QA6Y0DYMEY",
    title: "Peter Ibbetson",
    genre: "Drama|Fantasy|Romance",
  },
  {
    id: "01HSX5JYK70V7JKTXC84ZJPN73",
    title: "Fly Away Home",
    genre: "Adventure|Children",
  },
  {
    id: "01HSX5JYK8T35FP5J3ANFZ488Y",
    title: "Dakota Skye",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYK8BE2PRFWGC3NHMA0M",
    title:
      "Once Upon a Time in China and America (Wong Fei Hung: Chi sai wik hung see) ",
    genre: "Action|Adventure|Western",
  },
  {
    id: "01HSX5JYK9KF0NM5765G7C55VM",
    title: "Women in Love",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYK9BM1Y24TER3DB9CWR",
    title: "Westfront 1918",
    genre: "Drama|War",
  },
  {
    id: "01HSX5JYK96QQKJPA3W7HSSBRN",
    title: "Wings of the Dove, The",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYKARC6JB703PGGV09VD",
    title: "The Arrival of Joachim Stiller",
    genre: "Drama|Fantasy",
  },
  { id: "01HSX5JYKA13PJY32BW3A5CD1C", title: "Silent Movie", genre: "Comedy" },
  { id: "01HSX5JYKACSEKQP91HF863XWJ", title: "Heima", genre: "Documentary" },
  {
    id: "01HSX5JYKBRYCTD0EE09RTJZPN",
    title: "High Anxiety",
    genre: "Comedy|Thriller",
  },
  {
    id: "01HSX5JYKBGD9DQRZX79FHWF95",
    title: "Shanghai",
    genre: "Crime|Thriller",
  },
  {
    id: "01HSX5JYKC7HSYKGSHFM0JP6F3",
    title: "Hellsing Ultimate OVA Series",
    genre: "Action|Animation|Horror",
  },
  {
    id: "01HSX5JYKCDM4KB65CFKHN9RK3",
    title: "Generale Della Rovere, Il",
    genre: "Drama",
  },
  {
    id: "01HSX5JYKDMCFVZKDYZ3X6WC5E",
    title: "Reef, The",
    genre: "Drama|Horror|Thriller",
  },
  {
    id: "01HSX5JYKD5KGC6HH5QS30ZT2M",
    title: "It",
    genre: "Drama|Fantasy|Horror|Mystery|Thriller",
  },
  { id: "01HSX5JYKDQBF8CABHHEATXEHD", title: "Sleepwalkers", genre: "Horror" },
  {
    id: "01HSX5JYKEBMN6G5A0JWRJ1FMN",
    title: "Just One of the Girls",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYKE1Z2RBHZKANCE7Q3Z",
    title: "Teen Spirit",
    genre: "Comedy|Drama|Fantasy",
  },
  {
    id: "01HSX5JYKF84RW6G5Y1T5G4WZZ",
    title: "Louise Brooks: Looking for Lulu",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYKFQD73BA1ZR35TEVKA",
    title: "A Justified Life: Sam Peckinpah and the High Country",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYKF15KHBY160TZQ8AG7",
    title: "Daughter of the Nile (Ni luo he nu er)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYKGES16VFSFYCXGSS3F",
    title: "Child's Play",
    genre: "Horror|Thriller",
  },
  {
    id: "01HSX5JYKG2ZRR5JQSFTHE66CD",
    title: "Endangered Species",
    genre: "Mystery|Sci-Fi|Thriller",
  },
  {
    id: "01HSX5JYKHYY7TB7K0C94H9AVY",
    title: "Divine Horsemen: The Living Gods of Haiti",
    genre: "Documentary",
  },
  { id: "01HSX5JYKH140EWAVY22Z99H8Z", title: "Garage Olimpo", genre: "Drama" },
  {
    id: "01HSX5JYKHB6NCKQ0W3Y1YVBS1",
    title: "Diary of a Chambermaid",
    genre: "Drama",
  },
  {
    id: "01HSX5JYKJ95GFH83281PJJPHZ",
    title: "Henry's Crime",
    genre: "Comedy|Crime",
  },
  {
    id: "01HSX5JYKJRKKSGRWSCAGMX8SJ",
    title: "Vanishing, The",
    genre: "Mystery|Thriller",
  },
  {
    id: "01HSX5JYKKSQGT7W4YKQD5E38B",
    title: "Organization, The",
    genre: "Crime|Drama|Thriller",
  },
  {
    id: "01HSX5JYKKQAZDEW2PHFEEXF2C",
    title: "Simon Sez",
    genre: "Action|Comedy",
  },
  {
    id: "01HSX5JYKMMJ067BBVTJQVA1RK",
    title: "Get Carter",
    genre: "Action|Drama|Thriller",
  },
  {
    id: "01HSX5JYKNYJ9N60EH7GCFVSTZ",
    title: "Babylon 5: Thirdspace",
    genre: "Drama|Sci-Fi",
  },
  { id: "01HSX5JYKPTQXVQ2D8VAX4XSE9", title: "City Slacker", genre: "Romance" },
  {
    id: "01HSX5JYKPVWHWY3Z2X7FECS5D",
    title: "Savannah",
    genre: "Drama|Romance",
  },
  { id: "01HSX5JYKQKD7S2SQ6AZG5ABRH", title: "Moll Flanders", genre: "Drama" },
  {
    id: "01HSX5JYKRH4XE7PD3KHC3SVHR",
    title: "Beaufort",
    genre: "Action|Drama|War",
  },
  {
    id: "01HSX5JYKRQSR6PSBEVFK1GS22",
    title: "Year of Living Vicariously, The",
    genre: "Documentary",
  },
  { id: "01HSX5JYKRJTG15704ANG2PEM9", title: "Jobs", genre: "Drama" },
  {
    id: "01HSX5JYKSW5T1A6G235QXR3ZB",
    title: "Heartbeats (Les amours imaginaires)",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYKSFEDYXBARPYQADHSH",
    title: "Chizuko's Younger Sister (Futari)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYKS44SG3TW4N59DSGB9",
    title: "Number Two (Numéro deux)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYKTNY3VSSA1ESMAHZYE",
    title: "Strawberries in the Supermarket (Jagoda u supermarketu) ",
    genre: "Action|Adventure|Comedy",
  },
  {
    id: "01HSX5JYKT4NJTDB765GBDGVA4",
    title: "City of Industry",
    genre: "Crime|Thriller",
  },
  {
    id: "01HSX5JYKT7A76FFA6ZXPQT300",
    title: "Fear of Flying",
    genre: "Action|Thriller",
  },
  {
    id: "01HSX5JYKVWQDDNQJ72DJT05BG",
    title: "Kiki's Delivery Service (Majo no takkyûbin)",
    genre: "Adventure|Animation|Children|Drama|Fantasy",
  },
  {
    id: "01HSX5JYKVC7XTW16R8DCMX5BZ",
    title: "Acadia Acadia?!? (L'acadie, l'Acadie)",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYKV69Z64DCGS0YA8WAJ",
    title: "Devil's Double, The",
    genre: "Action|Drama",
  },
  {
    id: "01HSX5JYKW9X06YFYCDVRT48RW",
    title: "Desert Fox, The",
    genre: "Drama|War",
  },
  {
    id: "01HSX5JYKWEGTBJT1NBG3T1RV3",
    title: "Boston Strangler, The",
    genre: "Crime|Drama|Mystery|Thriller",
  },
  {
    id: "01HSX5JYKW7P3DTQ191HY66GZW",
    title: "Saimaa Gesture, The (Saimaa-ilmiö)",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYKWPF5RGEAQJS1SD0D5",
    title: "Waterworld",
    genre: "Action|Adventure|Sci-Fi",
  },
  {
    id: "01HSX5JYKX7GV58PFEDFQSYMTX",
    title: "The Evictors",
    genre: "Crime|Drama|Horror|Mystery|Thriller",
  },
  {
    id: "01HSX5JYKXX681TK3HGVF6SPZV",
    title: "Chocchan's Story (Chocchan monogatari)",
    genre: "Animation|Drama|War",
  },
  {
    id: "01HSX5JYKX6DEV526E1X4Q0H9P",
    title: "Charisma (Karisuma)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYKY8VAH0TN4Y4WXP7DE",
    title: "Repulsion",
    genre: "Drama|Horror",
  },
  { id: "01HSX5JYKYGVD998JER3CN1HSE", title: "Blue Chips", genre: "Drama" },
  {
    id: "01HSX5JYKYY9Z5T18HP5DJYBY8",
    title: "Abduction",
    genre: "Action|Drama|Mystery|Thriller",
  },
  {
    id: "01HSX5JYKY8JAZCC3Z5NSXPQNV",
    title: "My Awkward Sexual Adventure",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYKZTV5VWMK168XW3W5D",
    title: "Nixon by Nixon: In His Own Words",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYKZPCWJQ0Z7ETPDYTKC",
    title: "Land of the Dead",
    genre: "Action|Horror|Thriller",
  },
  {
    id: "01HSX5JYKZARA50V2NCKBRAJDQ",
    title: "All is Bright",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYM0G1JYJ6YKJ0EYZY0T",
    title: "Wolf Children (Okami kodomo no ame to yuki)",
    genre: "Animation|Fantasy",
  },
  {
    id: "01HSX5JYM0V627W8VSCE4HC9AP",
    title: "In Passing",
    genre: "Drama|Fantasy|Mystery",
  },
  { id: "01HSX5JYM060AY2NTXXKZ3ZBSX", title: "Ocean Heaven ", genre: "Drama" },
  {
    id: "01HSX5JYM1EWVR59PAT9A85411",
    title: "The Uncommon Making of Petulia",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYM16FR4MD6EZDEMAH6H",
    title: "Capitalism: A Love Story",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYM123X4FG2XEKHHP8F7",
    title: "House on Telegraph Hill, The",
    genre: "Drama|Film-Noir|Mystery|Thriller",
  },
  {
    id: "01HSX5JYM23JMDX999ZT31HY3A",
    title: "Irene in Time",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYM2HS1RGK1Q9CH0MFCT",
    title: "Look Who's Talking Now",
    genre: "Children|Comedy|Romance",
  },
  {
    id: "01HSX5JYM2J2X4V8HH9BJF9507",
    title: "The New Babylon",
    genre: "Drama",
  },
  {
    id: "01HSX5JYM3S2WATRZA3D0R8GFA",
    title: "Sweet Evil (L'enfance du mal)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYM3J392C9GFT92ZRDND",
    title: "Around the World in 80 Days",
    genre: "Adventure|Children|Comedy",
  },
  {
    id: "01HSX5JYM39M5FQZX8D9J7KZHK",
    title: "Women of the Night (Yoru no onnatachi)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYM4TJNQVJ5HACV15YPG",
    title: "Hitcher, The",
    genre: "Action|Horror|Thriller",
  },
  {
    id: "01HSX5JYM4CWWD3YG9X5KYEQP0",
    title: "Old Yeller",
    genre: "Children|Drama",
  },
  { id: "01HSX5JYM43DGQYN70QZJ8802P", title: "All Over Me", genre: "Drama" },
  {
    id: "01HSX5JYM4V78K2DM207Y7NR8K",
    title: "Bar at the Victoria Station, A (Bar na Victorii)",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYM59839WPTPYANZSFWW",
    title: "Perfect Circle, The (Savrseni krug)",
    genre: "Drama|War",
  },
  {
    id: "01HSX5JYM5BDMKWDPF739PFFJ7",
    title: "Freeze Frame",
    genre: "Crime|Drama|Thriller",
  },
  {
    id: "01HSX5JYM56MDHKTQ6VW4DMF06",
    title: "Into the Wild",
    genre: "Action|Adventure|Drama",
  },
  {
    id: "01HSX5JYM6ENZ5383394S408ZX",
    title: "Marriage Made in Heaven, A (Rab Ne Bana Di Jodi)",
    genre: "Comedy|Drama|Musical|Romance",
  },
  {
    id: "01HSX5JYM62PEM080QE22RJY3K",
    title: "Shooting Dogs (a.k.a. Beyond the Gates)",
    genre: "Documentary|Drama|War",
  },
  {
    id: "01HSX5JYM69VD8SPQ6VP3VZZ8R",
    title: "Hold Back the Dawn",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYM7JNJ50C9YRTH2WEAG",
    title: "Diabolique (Les diaboliques)",
    genre: "Horror|Mystery|Thriller",
  },
  {
    id: "01HSX5JYM7X3F345RAMA92GQQ0",
    title:
      "Dexter the Dragon & Bumble the Bear (a.k.a. Dragon That Wasn't (Or Was He?), The) (Als je begrijpt wat ik bedoel)",
    genre: "Animation|Children|Fantasy",
  },
  {
    id: "01HSX5JYM7TY7RFBKSHPK515W7",
    title: "Dinner for Schmucks",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYM8HPM1HE6X4JD95D9Z",
    title: "Bullet",
    genre: "Action|Crime|Drama",
  },
  {
    id: "01HSX5JYM8RKEX0VJH1PBQ6CHC",
    title: "Snake in the Eagle's Shadow (Se ying diu sau)",
    genre: "Action|Comedy",
  },
  {
    id: "01HSX5JYM8CE5CJRS3EWKKCBKP",
    title: "House of Tolerance",
    genre: "Drama",
  },
  {
    id: "01HSX5JYM995A22R8WZXPXXZTC",
    title: "Artois the Goat",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYM9BRJV4NPSAB6RBP5Z",
    title: "White Sheik, The (Sceicco bianco, Lo)",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYM9DZ3RR67C98VJMWJ4",
    title: "Longest Day, The",
    genre: "Action|Drama|War",
  },
  {
    id: "01HSX5JYMA3K7D3AMWHVSSN9SH",
    title: "Inspector Gadget",
    genre: "Action|Adventure|Children|Comedy",
  },
  {
    id: "01HSX5JYMAZVSQ2J44K4A1S1W5",
    title: "Dragonslayer",
    genre: "Action|Adventure|Fantasy",
  },
  {
    id: "01HSX5JYMAG1WRHMY9Z9C2YDPV",
    title: "Suddenly (Tan de Repente)",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYMBF5NP7TBMTREVNVMR",
    title: "Ballad of the Sad Cafe, The",
    genre: "Drama",
  },
  { id: "01HSX5JYMB3E0PMKVMWAZGA3FX", title: "Vile ", genre: "Horror" },
  { id: "01HSX5JYMBDMVSC2SVE00Q2P85", title: "Ulysses", genre: "Drama" },
  {
    id: "01HSX5JYMCX8ZG25FAXS7Z6XP6",
    title: "I Was a Male War Bride",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYMCQC8C3AQM8KMT778T",
    title: "Guitar, The",
    genre: "Drama|Romance",
  },
  { id: "01HSX5JYMCGHB0FXE2SHMT57V9", title: "Coogan's Bluff", genre: "Crime" },
  { id: "01HSX5JYMDFXC63JKAFE8C0NCX", title: "Arrowsmith", genre: "Drama" },
  {
    id: "01HSX5JYMD08Q7Z8ATMDPYPK3W",
    title: "Way You Wanted Me, The (Sellaisena kuin sinä minut halusit)",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYMD4F9ZGN9YJWM24SDZ",
    title: "Beverly Hills Cop II",
    genre: "Action|Comedy|Crime|Thriller",
  },
  {
    id: "01HSX5JYMDDERWRF9SJAXZNBAP",
    title: "Captive Heart: The James Mink Story",
    genre: "Drama",
  },
  { id: "01HSX5JYME7B30YCN1YBMMVRQV", title: "Broken", genre: "Drama" },
  {
    id: "01HSX5JYMEMPKBF6BMY9DS9X2S",
    title: "Drunken Angel (Yoidore tenshi)",
    genre: "Drama|Film-Noir",
  },
  { id: "01HSX5JYMETF0HZYB3CWNDGF70", title: "Wayne's World", genre: "Comedy" },
  {
    id: "01HSX5JYMF53BMPEHYFZNEJEQB",
    title: "Notre jour viendra",
    genre: "Drama",
  },
  {
    id: "01HSX5JYMFD494WA1SRH7JFRQB",
    title: "Every Day",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYMFPE7MC41TDXQC8M4V",
    title: "Repeaters ",
    genre: "Action|Drama",
  },
  {
    id: "01HSX5JYMGT12AZH4EZD2DNSKV",
    title: "Nothing But the Truth",
    genre: "Drama|Thriller",
  },
  {
    id: "01HSX5JYMGHGQMVAXH203THE6J",
    title: "Letters from a Killer",
    genre: "Crime|Drama|Mystery|Thriller",
  },
  {
    id: "01HSX5JYMG6JSEMRDP992H4SZJ",
    title: "Star Wars: Threads of Destiny",
    genre: "Action|Adventure|Sci-Fi",
  },
  {
    id: "01HSX5JYMHZZZV4GZZFCBZ2NXE",
    title: "Grateful Dead",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYMHAYG64A7AFFDHPX01",
    title: "Gathering, The",
    genre: "Horror|Mystery|Thriller",
  },
  {
    id: "01HSX5JYMH5F080QFETJJ9MT6Q",
    title: "Night Passage",
    genre: "Western",
  },
  {
    id: "01HSX5JYMHC5ZF387MZEJ16CAJ",
    title: "Une étudiante d'aujourd'hui",
    genre: "Documentary",
  },
  { id: "01HSX5JYMJ0N9F408G2HVAFMMC", title: "Meatballs 4", genre: "Comedy" },
  { id: "01HSX5JYMJSE77HRXNHQN0KP8V", title: "Teen Wolf Too", genre: "Comedy" },
  {
    id: "01HSX5JYMJS5QCBY84AKTYD6GR",
    title: "Mike Tyson:  Undisputed Truth",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYMKVAPWRBYHFTKN83VX",
    title: "Mutant Chronicles",
    genre: "Action|Adventure|Sci-Fi",
  },
  { id: "01HSX5JYMKDDVP8DA91J8JPW68", title: "Bucktown", genre: "Crime|Drama" },
  {
    id: "01HSX5JYMK9W1JAMSJZQMV3WB0",
    title: "Pride of St. Louis, The",
    genre: "Drama",
  },
  {
    id: "01HSX5JYMMZC8YCYAJBF7YWFYR",
    title: "One-Eyed Jacks",
    genre: "Western",
  },
  {
    id: "01HSX5JYMMG2VQAGTJENG6SQMV",
    title: "Kiss the Bride",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYMMSQ7DP90W72BNZD9Y",
    title: "Memory Keeper's Daughter, The",
    genre: "Drama",
  },
  { id: "01HSX5JYMNG25ZVKA17756TGNX", title: "Yonkers Joe", genre: "Drama" },
  {
    id: "01HSX5JYMNZS5KS13D8RHD43RF",
    title: "Grand Canyon",
    genre: "Crime|Drama",
  },
  {
    id: "01HSX5JYMNA6JB96TA921PZJX5",
    title: "Caótica Ana",
    genre: "Comedy|Drama|Mystery|Romance",
  },
  {
    id: "01HSX5JYMN8EHMCCME4HFYZJP3",
    title: "Kid for Two Farthings, A",
    genre: "Children|Comedy|Drama|Fantasy",
  },
  {
    id: "01HSX5JYMPYGT5KKTBHARXFKT1",
    title: "Protector, The (a.k.a. Warrior King) (Tom yum goong)",
    genre: "Action|Comedy|Crime|Thriller",
  },
  { id: "01HSX5JYMPF9D8HESHD3WKA53J", title: "My Bodyguard", genre: "Drama" },
  { id: "01HSX5JYMP230XPRMCCZPESYVX", title: "Girl 6", genre: "Comedy|Drama" },
  {
    id: "01HSX5JYMQ2E3JB000TA542WPC",
    title: "Down and Derby",
    genre: "Children|Comedy",
  },
  {
    id: "01HSX5JYMQCW2S0D7FYR4C75KP",
    title: "Katt Williams: The Pimp Chronicles Pt. 1",
    genre: "Comedy|Documentary",
  },
  {
    id: "01HSX5JYMQGZADQB8ANYHNC5B9",
    title: "Misfits, The",
    genre: "Comedy|Drama|Romance|Western",
  },
  {
    id: "01HSX5JYMR3YXNWBNHNJ4Q8ES4",
    title: "Violent Years, The",
    genre: "Drama",
  },
  { id: "01HSX5JYMRQRG7RS7Y7KPTRVNA", title: "Girl 27", genre: "Documentary" },
  {
    id: "01HSX5JYMSNQT6268YJEV434ZT",
    title: "Inspector General, The",
    genre: "Musical",
  },
  {
    id: "01HSX5JYMSG8NCDFZ3WDVXHHZ0",
    title: "Little World of Don Camillo, The (Petit monde de Don Camillo, Le)",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYMTJ8D55MJGMQ4TKJR3",
    title: "Order, The",
    genre: "Action|Adventure|Drama|Thriller",
  },
  {
    id: "01HSX5JYMT3VB8XVKX7T0GAANV",
    title: "Oliver & Company",
    genre: "Adventure|Animation|Children|Comedy|Musical",
  },
  { id: "01HSX5JYMTH9MY8NVHGTX9E4NT", title: "Fandango", genre: "Comedy" },
  {
    id: "01HSX5JYMTQ0X5GJJVPQ5E9Q9J",
    title: "Devil Times Five (a.k.a. Peopletoys)",
    genre: "Horror",
  },
  {
    id: "01HSX5JYMVT5GEX3F7AJT0HDBE",
    title: "Bloodbath at the House of Death",
    genre: "Comedy|Horror",
  },
  {
    id: "01HSX5JYMVE9ZE77XWBF5J37QH",
    title: "Crime and Punishment",
    genre: "Drama",
  },
  {
    id: "01HSX5JYMVJAGKEFHYMDDBRQGY",
    title: "First Grader, The",
    genre: "Drama",
  },
  {
    id: "01HSX5JYMW180H8R2VBEVEESGF",
    title: "Absent (Ausente)",
    genre: "Drama|Thriller",
  },
  {
    id: "01HSX5JYMWFTS9GNTPE5X1WQX4",
    title: "Beauty and the Beast (Belle et la bête, La)",
    genre: "Fantasy|Romance",
  },
  {
    id: "01HSX5JYMXH96NZNXCBK7BGKB0",
    title: "Yes Men, The",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYMXAJA7S29DEWG2E7CD",
    title: "Henry Fool",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYMXW84REYXDBP1GK9QM",
    title: "Tale of Two Cities, A",
    genre: "Drama",
  },
  {
    id: "01HSX5JYMY1ADRBKKWSBJSN0DJ",
    title: "Far from Heaven",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYMY4K078B2TGXZZ7YAD",
    title: "Godzilla vs. Megalon (Gojira tai Megaro)",
    genre: "Action|Sci-Fi",
  },
  {
    id: "01HSX5JYMYSY0EAJTQ7C32A7YE",
    title: "Leaving Las Vegas",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYMZG5VASXYTDXBH2RKJ",
    title: "When the Cat's Away (Chacun cherche son chat)",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYMZWJ9A1J91B4E0B0VD",
    title: "Hollow Crown, The",
    genre: "Drama",
  },
  {
    id: "01HSX5JYMZSVD4NS9KDY2VX6Y4",
    title: "Betrayed",
    genre: "Drama|Thriller",
  },
  {
    id: "01HSX5JYN0RNXRVTMA01X5V5ZF",
    title: "Lorna's Silence (Le silence de Lorna)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYN0817S1TCBH635ZPK6",
    title: "Claymation Christmas Celebration, A",
    genre: "Animation|Children|Comedy|Musical",
  },
  {
    id: "01HSX5JYN0T4F05Y46WRAXH7WY",
    title: "Outfoxed: Rupert Murdoch's War on Journalism",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYN1VJS785T1MQKAC2W7",
    title: "This Is the Night",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYN1EGC6VX9M23TV9S5Y",
    title: "Hospital, The",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYN16CDJYXFVF4GZ3KMW",
    title: "Manhattan Murder Mystery",
    genre: "Comedy|Mystery",
  },
  {
    id: "01HSX5JYN2JEN5CH09NX9FDB5H",
    title: "Harry and the Hendersons",
    genre: "Children|Comedy",
  },
  {
    id: "01HSX5JYN2RWFYVQF457DPD4ZX",
    title: "Godard's Passion (Passion)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYN2H29D4BSJVYNTKT70",
    title: "Godzilla (Gojira)",
    genre: "Drama|Horror|Sci-Fi",
  },
  {
    id: "01HSX5JYN3KTNTMWGWQEPBAPJX",
    title: "Third Person",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYN3HFYXXVB61520ZG2B",
    title: "Italian for Beginners (Italiensk for begyndere)",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYN31NX2F1V2SD7PMGT1",
    title: "Man Who Fell to Earth, The",
    genre: "Drama|Sci-Fi",
  },
  {
    id: "01HSX5JYN3K6MHTCEYDHCTM0WE",
    title: "Shepherd of the Hills, The",
    genre: "Drama",
  },
  {
    id: "01HSX5JYN4HHCTT6264N378EPV",
    title: "Twenty Days Without War (Dvadtsat dney bez voyny)",
    genre: "Drama|Romance|War",
  },
  {
    id: "01HSX5JYN4AWCZQDH445R3CE7E",
    title: "My Left Eye Sees Ghosts (Ngo joh aan gin diy gwai)",
    genre: "Comedy|Fantasy|Romance",
  },
  {
    id: "01HSX5JYN5JV2EAB8G9PXYYZTE",
    title: "Monsterman (Monsterimies)",
    genre: "Documentary|Drama",
  },
  { id: "01HSX5JYN53G0TRVNTK8SAP3HE", title: "Company Man", genre: "Comedy" },
  {
    id: "01HSX5JYN5J0TVJQK9Q2K9JWH5",
    title: "Sea of Love",
    genre: "Crime|Drama|Thriller",
  },
  {
    id: "01HSX5JYN597MBVGHKTV7Z2924",
    title: "There Was a Father (Chichi ariki)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYN6GNBZCVX59P42J72T",
    title: "Rainy Dog (Gokudô kuroshakai)",
    genre: "Crime|Drama",
  },
  {
    id: "01HSX5JYN6CEWCAPJ2XTK7Y2MG",
    title:
      "Asterix in America (a.k.a Asterix Conquers America) (Astérix et les Indiens)",
    genre: "Adventure|Animation|Children|Comedy",
  },
  { id: "01HSX5JYN6XJ285KJDB9B142CH", title: "51", genre: "Horror|Sci-Fi" },
  { id: "01HSX5JYN7HJ0VYF6V39CJ3CJH", title: "Shane", genre: "Drama|Western" },
  {
    id: "01HSX5JYN7QK17GSMMJ8Q5J5DR",
    title: "Tainted",
    genre: "Comedy|Thriller",
  },
  {
    id: "01HSX5JYN73656MX0N9Z8JSNZZ",
    title: "Spider-Man",
    genre: "Action|Adventure|Sci-Fi|Thriller",
  },
  { id: "01HSX5JYN88S078HF2TW7R489F", title: "Coldblooded", genre: "Comedy" },
  { id: "01HSX5JYN8Q3Y2DEQY443C72DH", title: "Studentfesten", genre: "Comedy" },
  {
    id: "01HSX5JYN8BNCC6W93NV27B41T",
    title: "The Divine Move",
    genre: "Action|Crime|Drama",
  },
  { id: "01HSX5JYN86KK1F01XCHTJ4GT6", title: "Vermin", genre: "Comedy" },
  {
    id: "01HSX5JYN9Q3HN05BA3VS60BEY",
    title: "World, The (Shijie)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYN9JB8PFJ3XHBSCB61A",
    title: "Juan of the Dead (Juan de los Muertos)",
    genre: "Comedy|Horror",
  },
  { id: "01HSX5JYN9TQDEJSWEH653TPMM", title: "Diggers", genre: "Comedy|Drama" },
  {
    id: "01HSX5JYNABXT18Y6V0MW9WZVG",
    title: "Resident Evil: Damnation",
    genre: "Action|Animation|Horror",
  },
  {
    id: "01HSX5JYNAV6R3NZZ7NAKQ9N2Y",
    title: "Far Side of the Moon, The (Face cachée de la lune, La)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYNAC74G5F0SN5ZAA5TV",
    title: "13 Fighting Men",
    genre: "Western",
  },
  {
    id: "01HSX5JYNBM7CFZBNNP4C7DNNA",
    title: "Rest Stop",
    genre: "Horror|Thriller",
  },
  {
    id: "01HSX5JYNB767WK28YS49F6RZV",
    title: "Color Wheel, The",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYNB76YD1QZNQ5B63FDW",
    title: "Wild Heritage",
    genre: "Western",
  },
  {
    id: "01HSX5JYNCS7Y1MRQSTQATC4GJ",
    title: "Karlsson on the Roof",
    genre: "Children",
  },
  {
    id: "01HSX5JYNC0D4GT1QDCVCMDM0C",
    title: "Gypsy",
    genre: "Comedy|Drama|Musical",
  },
  {
    id: "01HSX5JYNCJCHHWRBRKXYYQG29",
    title: "Hustlers, The (Veijarit)",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYNDWMVG7KWQ14D77B2K",
    title: "Magical Mystery Tour",
    genre: "Comedy|Musical",
  },
  {
    id: "01HSX5JYND01JR8GEYF6E9Q2PA",
    title: "Mr. Conservative: Goldwater on Goldwater",
    genre: "Documentary",
  },
  { id: "01HSX5JYND2E42YEYCBETSAJZN", title: "Chance", genre: "Comedy|Drama" },
  { id: "01HSX5JYNEXPVJDFZECWX5Z3YK", title: "Secrets", genre: "Western" },
  {
    id: "01HSX5JYNEVA9DBQM41JFXYNB7",
    title: "Day I Became a Woman, The (Roozi khe zan shodam)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYNE3QTR8Q4QWBBDQKAX",
    title: "Transmorphers",
    genre: "Action|Adventure|Sci-Fi",
  },
  {
    id: "01HSX5JYNEW2CBHBZN3QSXR2V4",
    title: "Åsa-Nisse - Wälkom to Knohult",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYNF2S4KNZS4G3M6HNYW",
    title: "Bad Blood: A Cautionary Tale ",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYNF54Y3TSR39V9Z41N6",
    title: "Original Kings of Comedy, The",
    genre: "Comedy|Documentary",
  },
  {
    id: "01HSX5JYNFARH4WABHCS795KX9",
    title: "D.C.H. (Dil Chahta Hai)",
    genre: "Comedy|Drama",
  },
  { id: "01HSX5JYNGREZSHB1HE9Q7NS7Y", title: "Star 80", genre: "Drama" },
  {
    id: "01HSX5JYNGQXPBGQH4KWMR6HQ4",
    title: "Cabaret",
    genre: "Drama|Musical",
  },
  {
    id: "01HSX5JYNGD13MBTT25BJ8NCJH",
    title: "StarStruck",
    genre: "Comedy|Musical",
  },
  {
    id: "01HSX5JYNHHW3JNPCMN9J241E4",
    title: "Pleasantville",
    genre: "Comedy|Drama|Fantasy",
  },
  {
    id: "01HSX5JYNHDQRBS4A0NDH6AEJ3",
    title: "He Said, She Said",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYNH6220HYCK1T8V9R69",
    title: "Tyler Perry's Diary of a Mad Black Woman",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYNJQ83XWG169PFDQ9TK",
    title: "The Road to Glory",
    genre: "Drama|War",
  },
  {
    id: "01HSX5JYNJBVADF3NS1KCK5A9S",
    title: "Oranges, The",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYNKNXRY0NH00PDWX7KM",
    title: "Wilbur Wants to Kill Himself",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYNKT93PDTK4XR2JR551",
    title: "Kevin Nealon: Now Hear Me Out!",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYNMQ544J65QW8RMJ763",
    title: "MVP: Most Valuable Primate",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYNNHFTSVZ8B1HHVZHY1",
    title: "Unfaithfully Yours",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYNNZD2Z7F8G9EB47NCC",
    title: "Favela Rising",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYNPXR0Z8MYV54T05WNY",
    title: "Marilyn: The Untold Story",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYNQNRV701EXSD3RVRFP",
    title: "Letters to God",
    genre: "Children|Drama",
  },
  {
    id: "01HSX5JYNR6PM0DR7X51N9XKAG",
    title: "Big Mommas: Like Father, Like Son",
    genre: "Comedy",
  },
  { id: "01HSX5JYNSWJE0DTM90GPJT9P7", title: "Utopia", genre: "Documentary" },
  {
    id: "01HSX5JYNS7KC3TYW65T32KPX7",
    title: "Donner Party, The",
    genre: "Drama|Western",
  },
  { id: "01HSX5JYNTW6WHXZTDRVZVJDH8", title: "Wordplay", genre: "Documentary" },
  {
    id: "01HSX5JYNV8GXVQWTM0Z542A8E",
    title: "Map of the World, A",
    genre: "Drama",
  },
  {
    id: "01HSX5JYNW2QGV7474GZ7MBRX9",
    title: "Scent of a Woman",
    genre: "Drama",
  },
  {
    id: "01HSX5JYNXB5D9YPHMKJ8EZ904",
    title: "All Access",
    genre: "Documentary|Musical|IMAX",
  },
  {
    id: "01HSX5JYNXCZTND6K29E6EAM04",
    title: "Winter's Bone",
    genre: "Drama|Thriller",
  },
  {
    id: "01HSX5JYNYZ0KH7QAA3VZ15828",
    title: "Nobody Else But You (Poupoupidou)",
    genre: "Comedy|Crime|Mystery",
  },
  {
    id: "01HSX5JYNZCDNH36YNQN0NM126",
    title:
      "Who's Singin' Over There? (a.k.a. Who Sings Over There) (Ko to tamo peva)",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYP03F7E3NMPJD487K57",
    title: "Lost in Space",
    genre: "Action|Adventure|Sci-Fi",
  },
  {
    id: "01HSX5JYP1T6XCHVCA2YSW1WR4",
    title: "The First Men in the Moon",
    genre: "Sci-Fi",
  },
  {
    id: "01HSX5JYP2JTXEZG20ANZSV5AD",
    title: "Switchblade Sisters",
    genre: "Crime",
  },
  { id: "01HSX5JYP253GW00C2Y5JP3GES", title: "Ruby Cairo", genre: "Thriller" },
  { id: "01HSX5JYP3YP241XJAD4Q23KTA", title: "Beauty Prize", genre: "Drama" },
  { id: "01HSX5JYP4MSA3PWKJVW38KP7Q", title: "Iron Lady, The", genre: "Drama" },
  {
    id: "01HSX5JYP52YJDK7WM823GT7KE",
    title: "Dream With the Fishes",
    genre: "Drama",
  },
  {
    id: "01HSX5JYP6PRGQ9S7K4BJTTXTH",
    title: "Norm MacDonald: Me Doing Standup",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYP6994134AVZPKB679D",
    title: "Horse Boy, The",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYP7QJJM6758V4B7B516",
    title: "Sheepman, The",
    genre: "Comedy|Western",
  },
  {
    id: "01HSX5JYP8A62RTX1SS4PXNA8R",
    title: "Mickey One",
    genre: "Crime|Drama",
  },
  {
    id: "01HSX5JYP9KSB1ENJV1WC7CQ3X",
    title: "Babylon 5: Thirdspace",
    genre: "Drama|Sci-Fi",
  },
  {
    id: "01HSX5JYPA3V67NMSZDGX9XEM1",
    title: "El Escarabajo de Oro",
    genre: "(no genres listed)",
  },
  {
    id: "01HSX5JYPBPTPT22XBMBDK6NMC",
    title: "My Bollywood Bride",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYPC0TFJ1W2ZWRB7SKG8",
    title: "Mating Game, The",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYPCGHCKFYKVE26ZHABR",
    title: "Map of the Sounds of Tokyo",
    genre: "Drama|Thriller",
  },
  {
    id: "01HSX5JYPD0PDSAK2XM4YZH9W0",
    title: "Jesus liebt mich",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYPEMWV657HRBY4RQR20",
    title: "Trust Me",
    genre: "(no genres listed)",
  },
  { id: "01HSX5JYPFRFSNDTHF4AARKQF3", title: "Dragonquest", genre: "Fantasy" },
  {
    id: "01HSX5JYPGV1J8HXEP02GCW6JV",
    title: "Longest Yard, The",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYPHW02ZR94RH05BJP3X",
    title: "In the Basement",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYPH5M3APHZR8K4FS3AC",
    title: "Gathering, The",
    genre: "Horror|Mystery|Thriller",
  },
  { id: "01HSX5JYPJF2CVG2QEYH8P8T8D", title: "Distant (Uzak)", genre: "Drama" },
  {
    id: "01HSX5JYPK8H7DC3R9N0KD6DVE",
    title: "Prince & Me II: The Royal Wedding, The",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYPMSS96EK1JQNA2MRAA",
    title: "Children of Invention",
    genre: "Drama",
  },
  {
    id: "01HSX5JYPN9DK77CW17B153YZF",
    title: "Winnebago Man",
    genre: "Comedy|Documentary",
  },
  {
    id: "01HSX5JYPNG67A0CZST1BFR083",
    title: "Life Without Dick",
    genre: "Comedy|Crime|Romance",
  },
  {
    id: "01HSX5JYPPDTYK9K66P75B10GY",
    title: "Toy Story Toons: Partysaurus Rex",
    genre: "Animation|Children|Comedy",
  },
  { id: "01HSX5JYPQX3JMVGD29YN4WBNW", title: "Surf Ninjas", genre: "Comedy" },
  { id: "01HSX5JYPRQT7S34MT8G8N770J", title: "Edward, My Son", genre: "Drama" },
  {
    id: "01HSX5JYPS0BC4AW1NXVEQK0QG",
    title: "Act of Violence",
    genre: "Drama|Film-Noir|Thriller",
  },
  {
    id: "01HSX5JYPTMVWXACADZVEMYCV6",
    title: "We Steal Secrets: The Story of WikiLeaks",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYPV5NEX66YE2E933HHQ",
    title: "Death to Smoochy",
    genre: "Comedy|Crime|Drama",
  },
  {
    id: "01HSX5JYPW37VCJX7JV40P0FE1",
    title: "Rendition",
    genre: "Drama|Thriller",
  },
  { id: "01HSX5JYPXNGVWD0D7KN1A0JMJ", title: "Knight of Cups", genre: "Drama" },
  {
    id: "01HSX5JYPYS0X3DD6GXJS9AMJ4",
    title: "Family Band: The Cowsills Story ",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYPYARSD92MD16JWNYVR",
    title: "Come September",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYPZ14G4N8C781ZNNM92",
    title: "Tony",
    genre: "Drama|Horror|Thriller",
  },
  {
    id: "01HSX5JYQ069BHVPQXXSCN62SN",
    title: "Line of Sight",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYQ17A3MJECXHJR7VPZE",
    title: "Miffo",
    genre: "Comedy|Drama|Romance",
  },
  { id: "01HSX5JYQ2F40M5JAW2WS5XXSR", title: "Sour Grapes", genre: "Comedy" },
  {
    id: "01HSX5JYQ34HPRN135AKX6JK0B",
    title: "Last of England, The",
    genre: "Drama",
  },
  {
    id: "01HSX5JYQ3J0J2MCTBP7DP43EE",
    title: "Here Comes Cookie",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYQ483R3JFK34T3P3E9K",
    title: "American Boy: A Profile of: Steven Prince",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYQ5DS5WMDZA3QT3495T",
    title: "Foo Fighters: Back and Forth",
    genre: "Documentary|Musical",
  },
  {
    id: "01HSX5JYQ6665J9FMQB3RV0WFB",
    title: "Secondhand Lions",
    genre: "Children|Comedy|Drama",
  },
  {
    id: "01HSX5JYQ6FDY2564R57BP3A0C",
    title: "Lair of the White Worm, The",
    genre: "Horror",
  },
  {
    id: "01HSX5JYQ75GQF3ACGCHXN7TBP",
    title: "Hunter, The",
    genre: "Action|Thriller",
  },
  {
    id: "01HSX5JYQ814S7SR1M821YWSEZ",
    title: "Dragons Forever",
    genre: "Action|Comedy|Romance",
  },
  {
    id: "01HSX5JYQ9STWEKB3J4ETGGVJN",
    title: "Abraham's Valley (Vale Abraão)",
    genre: "Drama",
  },
  { id: "01HSX5JYQASZE3242VD2WXN47R", title: "Detroit", genre: "Drama" },
  {
    id: "01HSX5JYQASD40HSSWQVAHFPSF",
    title: "Smart People",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYQB8ZRZWD2SSQEK5XSZ",
    title: "Son, The (Le fils)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYQC04FN5H29S7F80THD",
    title: "Welcome to the Sticks (Bienvenue chez les Ch'tis)",
    genre: "Comedy",
  },
  { id: "01HSX5JYQDEF88PBZGQVFZAGX1", title: "Romero", genre: "Drama" },
  {
    id: "01HSX5JYQD2ATZH6JBAKY5XX2S",
    title: "Fiend Without a Face",
    genre: "Horror|Sci-Fi|Thriller",
  },
  {
    id: "01HSX5JYQEB283B187XWNE9KAE",
    title: "Miffo",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYQFDNWVZJ56DZC7E2QG",
    title: "Home for Christmas (Hjem til jul)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYQG2T2ZVNCF00Y0S0B9",
    title: "Igor",
    genre: "Animation|Comedy",
  },
  {
    id: "01HSX5JYQGNF31FFK2RYNJ46T1",
    title: "Wilderness",
    genre: "Horror|Thriller",
  },
  {
    id: "01HSX5JYQHVZPW25MFTFHBMXN1",
    title: "Natural City",
    genre: "Action|Romance|Sci-Fi",
  },
  {
    id: "01HSX5JYQHJFR6M1KJWDNYHRC1",
    title: "Burma Conspiracy, The (Largo Winch II)",
    genre: "Action|Adventure|Thriller",
  },
  {
    id: "01HSX5JYQJW9NFQ2TMCF539P4Q",
    title: "Green Man, The",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYQKEPF83A2NM5PQKPPC",
    title: "Grandmaster, The (Yi dai zong shi)",
    genre: "Action|Drama|IMAX",
  },
  {
    id: "01HSX5JYQMVFBT8B95T3PMD59G",
    title: "Red Hill",
    genre: "Crime|Thriller|Western",
  },
  {
    id: "01HSX5JYQNT36DRJ6M40H9MXJ6",
    title: "Rachel Getting Married",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYQNN2Q110MVN1F6WMJ2",
    title: "Cocoanuts, The",
    genre: "Comedy|Musical",
  },
  {
    id: "01HSX5JYQPSTYF52Q531ZCSVGT",
    title: "My Amityville Horror",
    genre: "Documentary",
  },
  { id: "01HSX5JYQQ2PCY34WG0KJY6685", title: "Dream Demon", genre: "Horror" },
  { id: "01HSX5JYQRVP21M86567NT7B4F", title: "All Night Long", genre: "Drama" },
  {
    id: "01HSX5JYQRKC4VWV0GWX1Z9RQX",
    title: "War Wagon, The",
    genre: "Action|Western",
  },
  { id: "01HSX5JYQRNT9RCFR95M1RYVAA", title: "Bella", genre: "Drama|Romance" },
  {
    id: "01HSX5JYQS3B2ZEHD6XWVMQ0HQ",
    title: "Curly Sue",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYQS0NJN34YKNEQPG122",
    title: "That Thing You Do!",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYQS466VESXWJGJEFTJ6",
    title: "Purple Gang, The",
    genre: "Crime|Drama",
  },
  {
    id: "01HSX5JYQTEQCW7YNP0W66S8R3",
    title: "My Own Private Idaho",
    genre: "Drama|Romance",
  },
  { id: "01HSX5JYQT9Y71MFHQFAHST0R0", title: "Faces", genre: "Drama" },
  {
    id: "01HSX5JYQVVA0QKF4S102H6PTD",
    title: "2LDK",
    genre: "Drama|Horror|Thriller",
  },
  {
    id: "01HSX5JYQWHX1EDZZE7H7QEJQD",
    title: "Love Without Pity",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYQW3TJV6WDP18AT1GJD",
    title: "Intohimon vallassa",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYQX1WJM8SQWV3279W82",
    title: "Beetlejuice",
    genre: "Comedy|Fantasy",
  },
  {
    id: "01HSX5JYQXGKSNHMMWKW3VXXMC",
    title: "Game of Death",
    genre: "Action|Adventure|Thriller",
  },
  {
    id: "01HSX5JYQYMS1DBAS9Q83N6HPK",
    title: "American Gangster",
    genre: "Crime|Drama|Thriller",
  },
  { id: "01HSX5JYQZG4CT0ETKZXCX329M", title: "Superdad", genre: "Comedy" },
  {
    id: "01HSX5JYR0VR5B26TFW93GYTVE",
    title: "Lines: Horizontal",
    genre: "Animation",
  },
  { id: "01HSX5JYR0DXF064CYDF192MMT", title: "Mickey", genre: "Crime|Drama" },
  {
    id: "01HSX5JYR0EVERXAT3SY3B9BCC",
    title: "Elizabeth: The Golden Age",
    genre: "Drama",
  },
  {
    id: "01HSX5JYR1YQHTZ625W7JVFHEX",
    title: "Song of the Bloodred Flower (Laulu tulipunaisesta kukasta)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYR1PKGFN0ZPYBMMCEPC",
    title: "Digging Up the Marrow",
    genre: "Drama|Fantasy|Horror|Mystery|Thriller",
  },
  {
    id: "01HSX5JYR10R1BXTGZY6JZTPVR",
    title: "Moral Tales, Filmic Issues",
    genre: "Documentary",
  },
  { id: "01HSX5JYR23AC2M8QSG9C0TJHN", title: "Drift", genre: "Drama" },
  {
    id: "01HSX5JYR2TAF7K4D1Q2B7Z08T",
    title: "Camp Rock",
    genre: "Comedy|Musical|Romance",
  },
  { id: "01HSX5JYR3XJ40V3PRP4Q4YNZR", title: "Greed", genre: "Drama" },
  {
    id: "01HSX5JYR3FM6KNZAV9RRKEVWQ",
    title: "Ghost and Mr. Chicken, The",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYR4P90RVMR7W84ZB7KR",
    title: "Iron Man",
    genre: "Action|Adventure|Sci-Fi",
  },
  {
    id: "01HSX5JYR5883A2JB3G6M5K3HZ",
    title: "Sand Sharks",
    genre: "Comedy|Horror|Sci-Fi|Thriller",
  },
  {
    id: "01HSX5JYR56P1RQH256PTJ818G",
    title: "Enemies of Reason, The",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYR6ZEEE8EE632V6TDBV",
    title: "Mighty Aphrodite",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYR6NC2R2QHJFXVTY46A",
    title: "Peanut Butter Solution, The",
    genre: "Children|Fantasy",
  },
  {
    id: "01HSX5JYR6689722GZ3RX9M7QS",
    title: "Taxi Driver",
    genre: "Crime|Drama|Thriller",
  },
  {
    id: "01HSX5JYR7446Y9MJX31474QM3",
    title: "Dark Tower, The",
    genre: "Drama|Thriller",
  },
  {
    id: "01HSX5JYR8K6KSPC3F3CYG4D81",
    title: "Saints and Soldiers",
    genre: "Action|Adventure|Drama|War",
  },
  {
    id: "01HSX5JYR8VZ8R4V44G529GSK9",
    title: "Ewok Adventure, The (a.k.a. Caravan of Courage: An Ewok Adventure)",
    genre: "Adventure|Children|Fantasy|Sci-Fi",
  },
  {
    id: "01HSX5JYR8G0C5KVHBGXZ5H573",
    title: "Christmas Carol, A",
    genre: "Drama|Fantasy",
  },
  {
    id: "01HSX5JYR9S9HRV2ANP3NMH5XP",
    title: "Long Way Round",
    genre: "Adventure|Documentary",
  },
  {
    id: "01HSX5JYR90J5GHFCG2V421Y3B",
    title: "Passing Fancy (Dekigokoro)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYR9SJQ71BS2Y4XN3JX2",
    title: "Elephants Dream",
    genre: "Animation|Fantasy|Sci-Fi",
  },
  {
    id: "01HSX5JYRA8DPZX11ZMH8JRZCV",
    title: "Just a Gigolo",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYRAF4W4WPJPWP6S1T79",
    title: "100 Ways to Murder Your Wife (Sha qi er ren zu)",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYRAP8ZWVQBS0S9HRNYD",
    title: "Sealed Cargo",
    genre: "Thriller|War",
  },
  {
    id: "01HSX5JYRBH6J8ESJQ4V6FBHEW",
    title: "Goal! III",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYRBC50TJYJ3HV2AVH5Q",
    title: "Gray Lady Down",
    genre: "Drama|Thriller",
  },
  {
    id: "01HSX5JYRBYP269T0NK58K9F51",
    title: "Pretty Devils",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYRCPKNHF1V2GC2K3MNF",
    title: "The Wild Bunch: An Album in Montage",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYRC5DWRN3P4VJHJW38R",
    title:
      "City of the Living Dead (a.k.a. Gates of Hell, The) (Paura nella città dei morti viventi)",
    genre: "Horror",
  },
  {
    id: "01HSX5JYRDHWD0QT66TYEPHHYJ",
    title: "Lockout",
    genre: "Action|Sci-Fi|Thriller",
  },
  {
    id: "01HSX5JYRDV4YD59S3PC83S8Z7",
    title: "Knight Without Armor",
    genre: "Adventure|Drama|Romance|Thriller",
  },
  {
    id: "01HSX5JYREN56DTS31J0MXZ7HM",
    title: "Last Real Men, The (Die letzten Männer)",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYRFWPNMXX6GPYNC7JNA",
    title: "Strangler, The",
    genre: "Horror",
  },
  {
    id: "01HSX5JYRFZHQ5HPZW3Y74WW9A",
    title: "Penitentiary II",
    genre: "Drama",
  },
  { id: "01HSX5JYRGK1A40AX1C3GSPGSA", title: "Legacy, The", genre: "Horror" },
  {
    id: "01HSX5JYRH2N9KSXG6VARC5QAB",
    title: "China 9, Liberty 37 (Amore, piombo e furore)",
    genre: "Western",
  },
  {
    id: "01HSX5JYRHKRQ2WWSQTHKSVJTX",
    title: "Family Thing, A",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYRJ1DFTEG6M0DG9812J",
    title: "Quiet American, The",
    genre: "Drama|Thriller|War",
  },
  { id: "01HSX5JYRJX07XASA3204GABKJ", title: "Ride", genre: "Drama" },
  {
    id: "01HSX5JYRKFAZRVQWKFSC4CEH4",
    title: "Core, The",
    genre: "Action|Drama|Sci-Fi|Thriller",
  },
  {
    id: "01HSX5JYRMBZCAAPGCYNYKW816",
    title: "It's Always Fair Weather",
    genre: "Comedy|Drama|Musical",
  },
  { id: "01HSX5JYRM2XP4WK4CBHTD7SC1", title: "Safe Passage", genre: "Drama" },
  { id: "01HSX5JYRNQVBB5SJM7T0CKYRZ", title: "Dakota", genre: "Western" },
  {
    id: "01HSX5JYRNR050H4F2CKYJ3Q9E",
    title: "Holding, The",
    genre: "Horror|Thriller",
  },
  {
    id: "01HSX5JYRP4F0G531SC3Q9F7S2",
    title: "Blood and Roses (Et mourir de plaisir) (To Die with Pleasure)",
    genre: "Horror",
  },
  {
    id: "01HSX5JYRPCD3GFHF7TFZ5QPJQ",
    title: "Narrow Margin",
    genre: "Crime|Thriller",
  },
  {
    id: "01HSX5JYRQHZW633XA96VC5MT1",
    title: "7 Boxes (7 cajas)",
    genre: "Action|Thriller",
  },
  {
    id: "01HSX5JYRQS5T2VGSVQW88GYKG",
    title: "America Before Columbus",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYRR0Z1G4ZCFARVC58ZG",
    title: "Without a Paddle: Nature's Calling",
    genre: "Adventure|Comedy",
  },
  {
    id: "01HSX5JYRSX9SANGJEKWTTKF78",
    title: "Subject Two",
    genre: "Drama|Thriller",
  },
  {
    id: "01HSX5JYRST2MFBEGQYAZG3XZT",
    title: "Dating Games People Play",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYRTT8161K51MV0QF10C",
    title: "Battlefield Earth",
    genre: "Action|Sci-Fi",
  },
  {
    id: "01HSX5JYRTYFQ2QJMTZHKD3T3Y",
    title: "Hannah Montana: The Movie",
    genre: "Comedy|Drama|Musical|Romance",
  },
  { id: "01HSX5JYRV047WP9KBHWT31Q3P", title: "Angels Crest", genre: "Drama" },
  {
    id: "01HSX5JYRWXGW2WW8GCDJH3CN0",
    title: "Hell",
    genre: "Horror|Sci-Fi|Thriller",
  },
  { id: "01HSX5JYRWVV83T77MEQSE4RQM", title: "Árido Movie", genre: "Drama" },
  { id: "01HSX5JYRX6PR9WFTRGF0BMX3G", title: "Raid on Rommel", genre: "War" },
  {
    id: "01HSX5JYRYJBV110AJ0QAE9CPQ",
    title: "Take, The",
    genre: "Crime|Drama",
  },
  { id: "01HSX5JYRYK8C3ESQQC2B2NCXG", title: "Six of a Kind", genre: "Comedy" },
  {
    id: "01HSX5JYRZ22NQ088T3HNZBFV7",
    title: "Pee-wee's Big Adventure",
    genre: "Adventure|Comedy",
  },
  {
    id: "01HSX5JYRZ117RHVBA3ZGA0X7P",
    title: "7th Cavalry (Seventh Cavalry)",
    genre: "Western",
  },
  {
    id: "01HSX5JYS0JHRFAVGJX3VM7GKC",
    title: "Enola Gay and the Atomic Bombing of Japan",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYS0AYBBJPE5CFKSYDMS",
    title: "Slingshot, The (Kådisbellan)",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYS12A9D5T0W86R79ZEE",
    title: "Into the Wild",
    genre: "Action|Adventure|Drama",
  },
  {
    id: "01HSX5JYS2XN6E5YVD1Z9J8V8H",
    title: "Elaine Stritch: Shoot Me",
    genre: "Documentary|Musical",
  },
  {
    id: "01HSX5JYS23FJ7QAGZ3Y08MCWD",
    title: "I Can't Sleep (J'ai pas sommeil)",
    genre: "Drama|Thriller",
  },
  {
    id: "01HSX5JYS330GAK2D1QFC5K3WA",
    title: "Tom, Dick and Harry",
    genre: "Comedy|Fantasy|Romance",
  },
  { id: "01HSX5JYS4700X74DNEYAK1T7X", title: "Sudden Death", genre: "Action" },
  {
    id: "01HSX5JYS4FA03TQE7NZMED2E3",
    title: "Flesh and Bone",
    genre: "Drama|Mystery|Romance",
  },
  {
    id: "01HSX5JYS5NVKZ2TDEJASB6EV5",
    title: "Dona Flor and Her Two Husbands (Dona Flor e Seus Dois Maridos)",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYS5YTCPDPWRNEE1NZEG",
    title: "Very Thought of You, The",
    genre: "Comedy|Romance",
  },
  { id: "01HSX5JYS6XMA0Y2KEFCF7P9CD", title: "Dikkenek", genre: "Comedy" },
  {
    id: "01HSX5JYS7FVVV02HHD7RTH9MX",
    title: "Adventures of Hajji Baba, The",
    genre: "Action|Adventure|Romance",
  },
  {
    id: "01HSX5JYS7W9B8MVGJ0752FXGM",
    title: "Puss in Boots",
    genre: "Adventure|Animation|Comedy|Fantasy|IMAX",
  },
  {
    id: "01HSX5JYS8H234SVVJPSS9XD8S",
    title: "Immigrant, The",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYS80ZAPK15XMQ7ZV6X5",
    title: "The Hanoi Hilton",
    genre: "Drama|War",
  },
  {
    id: "01HSX5JYS9DMV45F9NGP4Q96AC",
    title: "Good Morning, Miss Dove",
    genre: "Drama",
  },
  {
    id: "01HSX5JYSAMBH1X9K9S9NARA25",
    title: "The Baker's Wife",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYSASK3MGDREJ3PRZ8C5",
    title: "Final, The",
    genre: "Drama|Horror|Thriller",
  },
  { id: "01HSX5JYSBVBTZFXA1CWZ01SRS", title: "Ip Man 2", genre: "Action" },
  {
    id: "01HSX5JYSBA6F52XWAPTTBRH4W",
    title: "Bicycle, Spoon, Apple (Bicicleta, cullera, poma)",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYSC9BFHZDBC8KZZ8S36",
    title: "Relic, The",
    genre: "Horror|Thriller",
  },
  { id: "01HSX5JYSDCWXWAWWY3TPAMCA8", title: "Volunteers", genre: "Comedy" },
  {
    id: "01HSX5JYSEPYJ9H36W3R1VRCDX",
    title: "Dark House",
    genre: "Horror|Thriller",
  },
  {
    id: "01HSX5JYSE8N3M6MRBYYZZ5CAH",
    title: "Resident Evil: Apocalypse",
    genre: "Action|Horror|Sci-Fi|Thriller",
  },
  {
    id: "01HSX5JYSFMPCAC5R463A27A4J",
    title: "Little Criminals",
    genre: "Crime|Drama",
  },
  {
    id: "01HSX5JYSGEDD7XERE5AW1K4P8",
    title: "Freedomfighters (Libertarias)",
    genre: "Drama|War",
  },
  {
    id: "01HSX5JYSGPK0D23BHY183DSZ1",
    title: "Trespasser, The",
    genre: "Drama",
  },
  { id: "01HSX5JYSHCV7M1C667118HXHK", title: "Delbaran", genre: "Drama" },
  {
    id: "01HSX5JYSJY1G9GVNRRKW34EYG",
    title: "The Skinny",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYSKFJVZKP9X87VQAYX7",
    title: "White Noise",
    genre: "Drama|Horror|Mystery|Sci-Fi|Thriller",
  },
  { id: "01HSX5JYSK79XG4ZTR4H4VM3JD", title: "Jury Duty", genre: "Comedy" },
  { id: "01HSX5JYSM3JWV4Y8MZNHEE9XE", title: "Moebius", genre: "Drama" },
  {
    id: "01HSX5JYSNKK800GPWGYQ4ASD5",
    title: "Gamera vs. Viras ",
    genre: "Action|Sci-Fi",
  },
  {
    id: "01HSX5JYSPV0W3HEVFR1P157MM",
    title: "Family Jewels, The",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYSPXBF4P79FGH96BCMM",
    title: "Tiger's Tail, The",
    genre: "Comedy|Crime|Drama|Mystery|Thriller",
  },
  {
    id: "01HSX5JYSQAJGGD8NRQ9M32XF8",
    title: "Intended, The",
    genre: "Drama|Thriller",
  },
  { id: "01HSX5JYSRHD3Z7Z6RH0C9H4KQ", title: "Snow Angels", genre: "Drama" },
  {
    id: "01HSX5JYSS5MTHCTTWCWD8MAST",
    title: "Don't Look Back (Ne te retourne pas)",
    genre: "Drama|Horror|Mystery|Thriller",
  },
  {
    id: "01HSX5JYSTTX1344SA5GGWW1BR",
    title: "Family Guy Presents: It's a Trap",
    genre: "Animation|Comedy|Sci-Fi",
  },
  {
    id: "01HSX5JYSVTYCV4S2BCTYZ300E",
    title: "Missile to the Moon",
    genre: "Sci-Fi",
  },
  {
    id: "01HSX5JYSVV76HTPZJBYKMKPE4",
    title: "Death Watch (La Mort en Direct)",
    genre: "Drama|Sci-Fi",
  },
  {
    id: "01HSX5JYSW5RVGRBVECG01ZNFW",
    title: "Entertainer, The",
    genre: "Drama",
  },
  {
    id: "01HSX5JYSX2RHK5AH0Y7PVY0RN",
    title: "GLOW: The Story of the Gorgeous Ladies of Wrestling",
    genre: "Documentary",
  },
  { id: "01HSX5JYSYSB3ST7AWTCE8Z55D", title: "Taxi zum Klo", genre: "Comedy" },
  {
    id: "01HSX5JYSZT5Q0J0G664TDFEW0",
    title: "Emperor and the Assassin, The (Jing ke ci qin wang)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYSZZCHAHM383QD7RPK9",
    title: "And You Thought Your Parents Were Weird",
    genre: "Children|Comedy|Sci-Fi",
  },
  {
    id: "01HSX5JYT0Y8FZ3R2NK5485BZN",
    title: "True Confessions",
    genre: "Crime|Drama",
  },
  { id: "01HSX5JYT1ADNF4BA1HBWZSV10", title: "Gigi", genre: "Comedy" },
  {
    id: "01HSX5JYT2C897FKTQEDF3H31F",
    title: "2010: Moby Dick",
    genre: "Action|Adventure|Thriller",
  },
  {
    id: "01HSX5JYT3WWEH1HK1D75VCCXN",
    title: "Pawnbroker, The",
    genre: "Drama",
  },
  {
    id: "01HSX5JYT3N2W2C9X2ZJFHMACP",
    title: "Love Bites",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYT4VCE5D469SFYFMR5Q",
    title: "Alien Nation: Body and Soul",
    genre: "Sci-Fi",
  },
  {
    id: "01HSX5JYT5NBN14T3AJX5ZEPMK",
    title: "How to Make Love to a Woman",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYT6R0H2EDWXG1YY7KYQ",
    title: "The Gun That Won the West",
    genre: "Action|Adventure|Western",
  },
  {
    id: "01HSX5JYT7X40AF0AWWGYJXDEW",
    title: "Warriors of Virtue",
    genre: "Action|Adventure|Children|Fantasy",
  },
  {
    id: "01HSX5JYT826WTAY8R6NVCFGJ8",
    title: "Surprise",
    genre: "(no genres listed)",
  },
  { id: "01HSX5JYT99BVYTXQ5H5M4WSM4", title: "Shine", genre: "Drama|Romance" },
  {
    id: "01HSX5JYT9BK2JZ1ZSRCVVY97H",
    title: "Pax Americana and the Weaponization of Space",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYTAY6EBSA2JAAC9PSW6",
    title: "Barbarian Queen II: The Empress Strikes Back",
    genre: "Action|Adventure|Fantasy",
  },
  {
    id: "01HSX5JYTBZ4BHPAPZ048EXWT7",
    title:
      "Burial Ground (a.k.a. Zombie Horror) (a.k.a. Zombie 3) (Notti del Terrore, Le)",
    genre: "Horror",
  },
  { id: "01HSX5JYTCKMFS92GP6NBXDCPQ", title: "Fly Away", genre: "Drama" },
  {
    id: "01HSX5JYTDSDC8F9V7RDFHBNS8",
    title: "Elaine Stritch: Shoot Me",
    genre: "Documentary|Musical",
  },
  {
    id: "01HSX5JYTECB2CKTJEPBCTNCNG",
    title: "Once Upon a Warrior (Anaganaga O Dheerudu)",
    genre: "Action|Adventure|Fantasy|Musical|Romance",
  },
  {
    id: "01HSX5JYTEH98AK3K9Z5G516FE",
    title: "About Time",
    genre: "Drama|Fantasy|Romance",
  },
  {
    id: "01HSX5JYTFYJCWDFHM3KMQW8ST",
    title: "Born to Fight (Kerd ma lui)",
    genre: "Action|Adventure|Crime|Thriller",
  },
  {
    id: "01HSX5JYTGPSZD6NGG5GSB3RS3",
    title: "Hitcher, The",
    genre: "Action|Thriller",
  },
  {
    id: "01HSX5JYTGWEKVX1AMQFRDXDCB",
    title: "Leaving (Partir)",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYTHQSDB43Q8YAQ8V5QW",
    title: "Colossus: The Forbin Project",
    genre: "Sci-Fi|Thriller",
  },
  {
    id: "01HSX5JYTJCTSG207CC7MM1TPR",
    title: "Mighty Morphin Power Rangers: The Movie",
    genre: "Action|Children",
  },
  { id: "01HSX5JYTJZWC16NXF7GVMH05Z", title: "Saint Joan", genre: "Drama" },
  {
    id: "01HSX5JYTKXFTCVACS4EGXGVPN",
    title: "My Wife Is a Gangster (Jopog manura)",
    genre: "Action|Comedy|Romance",
  },
  {
    id: "01HSX5JYTM665XP94DNZW8ZX77",
    title: "Wild Things: Diamonds in the Rough",
    genre: "Mystery|Thriller",
  },
  {
    id: "01HSX5JYTNJKPBK682KHVM01P7",
    title: "Weekend",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYTPS14VJ1ZMCPFZ59M4",
    title: "Vengeance: The Story of Tony Cimo",
    genre: "(no genres listed)",
  },
  {
    id: "01HSX5JYTQM3ZMX2BJ2A6139GX",
    title: "The Chumscrubber",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYTRTN1SBD3CXXZ22K4Q",
    title:
      "Scent of Green Papaya, The (Mùi du du xhan - L'odeur de la papaye verte)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYTRVT8HM71G8SHR4PY0",
    title: "I'm Gonna Explode (a.k.a. I'm Going to Explode) (Voy a explotar)",
    genre: "Drama",
  },
  {
    id: "01HSX5JYTRWV7Q18JE4SHT3FE5",
    title: "Ladykillers, The",
    genre: "Comedy|Crime",
  },
  {
    id: "01HSX5JYTS37ER03ST3WPB1279",
    title: "Mask of Fu Manchu, The",
    genre: "Adventure|Horror|Sci-Fi",
  },
  { id: "01HSX5JYTSZK1R3FZGFBV7FXZ3", title: "Attack!", genre: "Drama|War" },
  {
    id: "01HSX5JYTSNNQDQX96HK1JAN78",
    title: "Young & Beautiful",
    genre: "Drama",
  },
  {
    id: "01HSX5JYTT05Z1X0AH58QWYH4Y",
    title: "Theory of Everything, The",
    genre: "Drama|Romance",
  },
  {
    id: "01HSX5JYTT4YSH2PGH2DEEKBHC",
    title: "Shadows (Senki)",
    genre: "Drama|Horror|Mystery|Thriller",
  },
  {
    id: "01HSX5JYTTTXPSDQ2HT5FZXVDK",
    title: "Rushmore",
    genre: "Comedy|Drama",
  },
  {
    id: "01HSX5JYTV1ATNW17D6B3JFN8Z",
    title: "Cotton Club, The",
    genre: "Crime|Musical",
  },
  {
    id: "01HSX5JYTV8GGFMESVDD9KS373",
    title: "Climb, The",
    genre: "Action|Adventure|Drama",
  },
  {
    id: "01HSX5JYTVKVE05VMBYKF5FKFD",
    title: "West of Zanzibar",
    genre: "Drama|Mystery",
  },
  {
    id: "01HSX5JYTWM85XQM1FRZF1BSFJ",
    title: "The Dust Bowl",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYTWV6V64GKFAF2TVA96",
    title: "Happily N'Ever After",
    genre: "Animation|Children|Comedy",
  },
  { id: "01HSX5JYTWN5P9AG3RK2BYG6XQ", title: "Soapdish", genre: "Comedy" },
  {
    id: "01HSX5JYTX5QEPS4DJE34XSNND",
    title: "Last Remake of Beau Geste, The",
    genre: "Adventure|Comedy",
  },
  { id: "01HSX5JYTXHRWPVCY05R4BC206", title: "Fifty Pills", genre: "Comedy" },
  {
    id: "01HSX5JYTX695Z9S7WRKNR5BEC",
    title: "Girl, Interrupted",
    genre: "Drama",
  },
  {
    id: "01HSX5JYTYVVVRCYPC6EP5QJQ4",
    title: "Snatch",
    genre: "Comedy|Crime|Thriller",
  },
  {
    id: "01HSX5JYTZ7YMSTTCSMQ067JA5",
    title: "Lamp in the Dark; The Untold History of the Bible, A",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYV0SAAZ6R6GTD8R2TR6",
    title: "Rum Diary, The",
    genre: "Comedy|Drama|Thriller",
  },
  {
    id: "01HSX5JYV0NATDK2JK34ZCT6FN",
    title: "Silent Night, Deadly Night 5: The Toy Maker",
    genre: "Horror|Sci-Fi",
  },
  { id: "01HSX5JYV0KB2ZRREDCB489ARB", title: "Baxter", genre: "Drama|Horror" },
  {
    id: "01HSX5JYV12T74WT4JC2M16B6T",
    title: "A-Haunting We Will Go",
    genre: "Comedy",
  },
  {
    id: "01HSX5JYV12EDYFV506RF31SE9",
    title: "Predestination",
    genre: "Sci-Fi|Thriller",
  },
  {
    id: "01HSX5JYV16MTD1PRBV12W1F35",
    title: "Magnificent Bodyguards (Fei du juan yun shan)",
    genre: "Action",
  },
  {
    id: "01HSX5JYV2JH6QW59J020WBW1P",
    title: "Born Romantic",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYV2S83P25BWFSGXSQWR",
    title: "Babes in Toyland",
    genre: "Children|Fantasy|Musical",
  },
  {
    id: "01HSX5JYV2HCNZM9AKBDSG03XM",
    title: "Me Myself I",
    genre: "Comedy|Romance",
  },
  {
    id: "01HSX5JYV3WJKFJYKD9KYFD5JT",
    title: "Babylon 5: The Legend of the Rangers: To Live and Die in Starlight",
    genre: "Sci-Fi",
  },
  {
    id: "01HSX5JYV34AFAXW5ARCA8R0YP",
    title: "Live and Let Die",
    genre: "Action|Adventure|Thriller",
  },
  {
    id: "01HSX5JYV351HWF93XMZP21913",
    title: "6 Days to Air: The Making of South Park",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYV4HF7HAPB0G387DR8K",
    title: "Wrestler, The (Painija)",
    genre: "Comedy|Drama|Fantasy",
  },
  {
    id: "01HSX5JYV4GQMMGYRCQGAQ3DEW",
    title: "Last Run, The",
    genre: "Action|Crime|Drama|Thriller",
  },
  { id: "01HSX5JYV4N3PVZDQRYF637QVM", title: "Kes", genre: "Drama" },
  {
    id: "01HSX5JYV4B7C6QBH8M5VXPR5X",
    title: "That Was Then... This Is Now",
    genre: "Drama",
  },
  {
    id: "01HSX5JYV5TYZJ3F04N1DEVPTY",
    title: "Echoes from the Dead (Skumtimmen)",
    genre: "Drama|Mystery",
  },
  {
    id: "01HSX5JYV5FPZFDYBPVVK9RP73",
    title: "Charlie's Angels: Full Throttle",
    genre: "Action|Adventure|Comedy|Crime|Thriller",
  },
  {
    id: "01HSX5JYV5HZ95JWC2PA0ACE02",
    title: "Act of Aggression",
    genre: "Crime|Drama",
  },
  {
    id: "01HSX5JYV6B80QV8P53H2HZS0C",
    title: "The Righteous Thief",
    genre: "Adventure",
  },
  {
    id: "01HSX5JYV67SRQ3A2KF683MZKP",
    title: "Institute, The",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYV78J83YBEMWQER0GYJ",
    title: "Casanova",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYV7PW7XTPP9XCERG60E",
    title: "Little Otik (Otesánek)",
    genre: "Comedy|Drama|Fantasy",
  },
  {
    id: "01HSX5JYV8HJZN2CPB3PKJ63CY",
    title: "Wedding Party, The (Die Bluthochzeit)",
    genre: "Action|Comedy|Drama",
  },
  {
    id: "01HSX5JYV8P5XT2NBQDYYH6CXY",
    title: "Casino Jack and the United States of Money",
    genre: "Documentary",
  },
  {
    id: "01HSX5JYV93CYN2WDBY2QN76EZ",
    title: "Goddess of 1967, The",
    genre: "Comedy|Drama|Romance",
  },
  {
    id: "01HSX5JYV9QXTDCWA23MSMA5KY",
    title: "The Inhabited Island 2: Rebellion",
    genre: "Action|Adventure|Sci-Fi",
  },
  {
    id: "01HSX5JYV97HPBA9ZRDW0MNSDM",
    title: "Bon Cop, Bad Cop",
    genre: "Action|Comedy|Crime|Thriller",
  },
  {
    id: "01HSX5JYVAA8HK2TZV2WXVW3RP",
    title: "Dying Breed",
    genre: "Horror|Thriller",
  },
  { id: "01HSX5JYVA6Q76NWCET6T04M11", title: "Always", genre: "Comedy|Drama" },
  { id: "01HSX5JYVA4F5BJ211ZY3Y09CW", title: "Laila", genre: "Drama|Romance" },
  {
    id: "01HSX5JYVBBBHPN743RVQGE43V",
    title: "Fanny and Alexander (Fanny och Alexander)",
    genre: "Drama|Fantasy|Mystery",
  },
];

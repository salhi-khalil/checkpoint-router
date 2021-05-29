import "./App.css";
import Nav from "./Component/Navbar/NavBar";
import MovieList from "./Component/Movielist/MovieList";
import React, {useState} from "react";
import {Switch, Route} from "react-router-dom";
import DescTrailer from "./Component/DescTrailer/DescTrailer";
import Err from "./Component/Error/Error";
function App() {
  const [movielist, setMovielist] = useState([
    {
      id: Math.random(),
      image:
        "https://images-na.ssl-images-amazon.com/images/I/91wc7yc2R8L._AC_SY445_.jpg",
      rating: 5,
      name: "JHON WICK",

      type: "Action | Crime",
      description:
        "He is portrayed by Keanu Reeves. John Wick is a legendary hitman who retired until a gang invades his house, steals his car, and kills the puppy his late wife Helen had given him.",
      trailer: "https://www.youtube.com/embed/2AUmvWm5ZDQ",
    },
    {
      id: Math.random(),
      image:
        "https://resizing.flixster.com/vXLCFvdBmgV9FYaFwFVoeDc8rNE=/206x305/v2/https://flxt.tmsimg.com/assets/p2803_p_v8_af.jpg",
      rating: 4,
      name: "Once Upon A Time In The west",

      type: "Western",
      description:
        "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
      trailer: "https://www.youtube.com/embed/c8CJ6L0I6W8",
    },
    {
      id: Math.random(),
      image:
        "https://mrcsays.files.wordpress.com/2014/12/taxi-driver-nightcrawler.jpg",
      rating: 3,
      name: "Taxi Driver",

      type: "Crime | Drama",
      description:
        "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.",
      trailer: "https://www.youtube.com/embed/UUxD4-dEzn0",
    },
    {
      id: Math.random(),
      image:
        "https://cdnb.artstation.com/p/assets/images/images/007/296/679/large/jay-mehta-mx-max-poster-wip-35.jpg?1505145364",
      rating: 5,
      name: "Mad Max",

      type: "Action | Adventure",
      description:
        "In a self-destructing world, a vengeful Australian policeman sets out to stop a violent motorcycle gang.",
      trailer: "https://www.youtube.com/embed/hEJnMQG9ev8",
    },
    {
      id: Math.random(),
      image:
        "https://shahidstatic2.akamaized.net/mediaObject/2020/disney/Amjad/thum14/Little_Miss_Sunshine_poster-clean/original/Little_Miss_Sunshine_poster-clean.jpg?height=711&width=480&croppingPoint=&version=1&type=webp",
      rating: 2,
      name: "Little Miss Sunshine",

      type: "Comedy | Drama",
      description:
        "A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.",
      trailer: "https://www.youtube.com/embed/wvwVkllXT80",
    },
    {
      id: Math.random(),
      image:
        "https://alternativemovieposters.com/wp-content/uploads/2021/04/RuizBurgos_KillBill.jpg",
      rating: 1,
      name: "KILL BILL",

      type: "Action",
      description:
        "The lead character, called 'The Bride,' was a member of the Deadly Viper Assassination Squad, led by her lover 'Bill.'The Bride' decided to escape her life as a killer.",
      trailer: "https://www.youtube.com/embed/7kSuas6mRpk",
    },
    {
      id: Math.random(),
      image:
        "https://render.fineartamerica.com/images/rendered/search/poster/images/artworkimages/medium/3/the-wolf-of-wall-street-pixel-nation.jpg",
      rating: 5,
      name: "The Wolf Of Wall Street",

      type: " Biography | Crime | Drama  ",
      description:
        "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      trailer: "https://www.youtube.com/embed/iszwuX1AK6A",
    },
  ]);
  const [searchRating, setsearchRating] = useState(0);
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState({});

  const handleMovie = (x) => {
    setMovie(x);
  };
  return (
    <div>
      <Nav
        setsearchRating={setsearchRating}
        setSearch={setSearch}
        handleMovie={handleMovie}
        setMovielist={setMovielist}
        movielist={movielist}
      />

      <Switch>
        <Route path="/Description/:id" component={DescTrailer} />
        <Route
          exact
          path="/"
          render={(props) => (
            <MovieList
              searchRating={searchRating}
              movielist={movielist}
              search={search}
              {...props}
            />
          )}
        />
        <Route component={Err} />
      </Switch>
    </div>
  );
}

export default App;

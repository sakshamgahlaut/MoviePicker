import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";

export const Home = () => {
    const itemPerPage = 6;
    const [currentPage,setCurrentPage]=useState(1);

    const lastIndex =currentPage*itemPerPage;
    const firstIndex =lastIndex-itemPerPage;




  const navigate = useNavigate();

  const item = [
    <div className="item h-[70vh]" data-value="1">
      <img
        src="/assets/background1.jpg"
        alt=""
        className="h-full w-full object-center object-cover"
      />
    </div>,
    <div className="item h-[70vh]" data-value="2">
      <img
        src="/assets/background2.jpg"
        alt=""
        className="h-full w-full object-center object-cover"
      />
    </div>,
    <div className="item h-[70vh]" data-value="3">
      <img
        src="/assets/background3.jpg"
        alt=""
        className="h-full w-full object-center object-cover"
      />
    </div>,
  ];

  const movies = [
    {
      id: "dark-knight",
      title: "The Dark Knight",
      year: 2008,
      imdb: 9.0,
      section: "Action",
      poster: "https://image.tmdb.org/t/p/w200/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
      id: "avatar",
      title: "Avatar",
      year: 2009,
      imdb: 7.8,
      section: "Adventure",
      poster: "https://image.tmdb.org/t/p/w200/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    },
    {
      id: "toy-story",
      title: "Toy Story",
      year: 1995,
      imdb: 8.3,
      section: "Animation",
      poster: "https://image.tmdb.org/t/p/w200/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    },
    {
      id: "titanic",
      title: "Titanic",
      year: 1997,
      imdb: 7.9,
      section: "Romance",
      poster: "https://image.tmdb.org/t/p/w200/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    },
    {
      id: "avengers-endgame",
      title: "Avengers: Endgame",
      year: 2019,
      imdb: 8.4,
      section: "Action",
      poster: "https://image.tmdb.org/t/p/w200/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    },
    {
      id: "avengers-infinity-war",
      title: "Avengers: Infinity War",
      year: 2018,
      imdb: 8.5,
      section: "Action",
      poster: "https://image.tmdb.org/t/p/w200/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    },
    {
      id: "the-matrix",
      title: "The Matrix",
      year: 1999,
      imdb: 8.7,
      section: "Sci-Fi",
      poster: "https://image.tmdb.org/t/p/w200/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    },
    {
      id: "gladiator",
      title: "Gladiator",
      year: 2000,
      imdb: 8.5,
      section: "Drama",
      poster: "https://image.tmdb.org/t/p/w200/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    },
    {
      id: "joker",
      title: "Joker",
      year: 2019,
      imdb: 8.4,
      section: "Drama",
      poster: "https://image.tmdb.org/t/p/w200/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    },
    {
      id: "john-wick",
      title: "John Wick",
      year: 2014,
      imdb: 7.4,
      section: "Action",
      poster: "https://image.tmdb.org/t/p/w200/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    },
    {
      id: "frozen",
      title: "Frozen",
      year: 2013,
      imdb: 7.4,
      section: "Animation",
      poster: "https://image.tmdb.org/t/p/w200/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg",
    },
    {
      id: "finding-nemo",
      title: "Finding Nemo",
      year: 2003,
      imdb: 8.1,
      section: "Animation",
      poster: "https://image.tmdb.org/t/p/w200/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
    },

    {
      id: "logan",
      title: "Logan",
      year: 2017,
      imdb: 8.1,
      section: "Action",
      poster: "https://image.tmdb.org/t/p/w200/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
    },

    {
      id: "harry-potter-2",
      title: "Harry Potter and the Chamber of Secrets",
      year: 2002,
      imdb: 7.4,
      section: "Fantasy",
      poster: "https://image.tmdb.org/t/p/w200/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
    },
    {
      id: "hobbit",
      title: "The Hobbit: An Unexpected Journey",
      year: 2012,
      imdb: 7.8,
      section: "Fantasy",
      poster: "https://image.tmdb.org/t/p/w200/yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg",
    },
    {
      id: "lord-rings",
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
      imdb: 8.8,
      section: "Fantasy",
      poster: "https://image.tmdb.org/t/p/w200/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    },
    {
      id: "spiderman-1",
      title: "Spider-Man",
      year: 2002,
      imdb: 7.3,
      section: "Action",
      poster: "https://image.tmdb.org/t/p/w200/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
    },
    {
      id: "spiderman-no-way-home",
      title: "Spider-Man: No Way Home",
      year: 2021,
      imdb: 8.3,
      section: "Action",
      poster: "https://image.tmdb.org/t/p/w200/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    },
    {
      id: "black-panther",
      title: "Black Panther",
      year: 2018,
      imdb: 7.3,
      section: "Action",
      poster: "https://image.tmdb.org/t/p/w200/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    },
    {
      id: "iron-man",
      title: "Iron Man",
      year: 2008,
      imdb: 7.9,
      section: "Action",
      poster: "https://image.tmdb.org/t/p/w200/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    },
    {
      id: "fight-club",
      title: "Fight Club",
      year: 1999,
      imdb: 8.8,
      section: "Drama",
      poster: "https://image.tmdb.org/t/p/w200/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    },
    {
      id: "forrest-gump",
      title: "Forrest Gump",
      year: 1994,
      imdb: 8.8,
      section: "Drama",
      poster: "https://image.tmdb.org/t/p/w200/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    },
    {
      id: "shawshank",
      title: "The Shawshank Redemption",
      year: 1994,
      imdb: 9.3,
      section: "Drama",
      poster: "https://image.tmdb.org/t/p/w200/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    },

    {
      id: "godfather",
      title: "The Godfather",
      year: 1972,
      imdb: 9.2,
      section: "Crime",
      poster: "https://image.tmdb.org/t/p/w200/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    },

    {
      id: "terminator-2",
      title: "Terminator 2: Judgment Day",
      year: 1991,
      imdb: 8.6,
      section: "Action",
      poster: "https://image.tmdb.org/t/p/w200/weVXMD5QBGeQil4HEATZqAkXeEc.jpg",
    },
    {
      id: "mad-max",
      title: "Mad Max: Fury Road",
      year: 2015,
      imdb: 8.1,
      section: "Action",
      poster: "https://image.tmdb.org/t/p/w200/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    },
    {
      id: "star-wars",
      title: "Star Wars: A New Hope",
      year: 1977,
      imdb: 8.6,
      section: "Sci-Fi",
      poster: "https://image.tmdb.org/t/p/w200/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    },
    {
      id: "the-lion-king",
      title: "The Lion King",
      year: 1994,
      imdb: 8.5,
      section: "Animation",
      poster: "https://image.tmdb.org/t/p/w200/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    },

    {
      id: "coco",
      title: "Coco",
      year: 2017,
      imdb: 8.4,
      section: "Animation",
      poster: "https://image.tmdb.org/t/p/w200/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    },
    {
      id: "dunkirk",
      title: "Dunkirk",
      year: 2017,
      imdb: 7.8,
      section: "War",
      poster: "https://image.tmdb.org/t/p/w200/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg",
    },
  ];

  const currentMovies =movies.slice(firstIndex,lastIndex);


 

  return (
    <div className=" min-h-screen flex w-full flex-col bg-[linear-gradient(135deg,#020204,#050824,#1c0a3a)]">
      <div className="w-full h-[500px]   justify-center">
        <h2 className="text-2xl text-center text-white py-3">
          {" "}
          PERSONALIZED CINEMA{" "}
        </h2>
        <h3 className="text-4xl font-bold text-white text-center py-4  ">
          Movies that understand you
        </h3>
        <h1 className="text-3xl text-white text-center py-4">
          Our recommendation tailored to your mood
        </h1>

        <div className="flex justify-center mt-6">
          
            <button
             onClick={()=>navigate("/questions")}
              className=" text-white text-2xl
                   px-16 py-3
                  bg-red-700
                   rounded-2xl
                  border-none
                  hover:scale-105" >
              Click here to get
              <br />
              recommendation
            </button>
         
          
         
        </div>
         <h2 className="text-white text-xl flex justify-center py-3">
          Stop Scrolling, Start finding
        </h2>
        
      </div>

      <div className="w-full h-[300px] overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          slidesPerView={2}
        >
          {item.map((slide, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          ))}
        </Swiper>

        {/* <AliceCarousel
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={2000}
          animationDuration={1000}
          animationType="slide"
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          items={item}
        /> */}
      </div>

      <div></div>

      <section className="w-full  p-10">
        <article className="grid  p-5 gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]   ">
          { currentMovies.map((movie) => {
            return (
              <div
                key={movie.id}
                className=" flex flex-col px-3 py-10 rounded-lg shadow-xl border border-gray-200 transition-transform duration-300 opacity-100 ease-out hover:opacity-110    hover:scale-105 hover:shadow-2xl"
              >
                <figure>
                  <img
                    src={movie.poster}
                    loading="lazy"
                    decoding="async"
                    style={{ contentVisibility: "auto" }}
                    className="rounded-lg"
                    alt=""
                  ></img>
                  <figcaption className="text-white">
                    {" "}
                    <b>{movie.title} </b>
                  </figcaption>
                </figure>

                {/* <h3>{category.title}</h3> */}
                <h2 className="text-white">IMDB:{movie.imdb}</h2>
              </div>
            );
          })}
        </article>
      </section>

   <div className="flex text-white text-xl justify-center gap-4 mt-5">
    <button  className=" hover:text-blue-300 p-2" onClick={()=>{setCurrentPage(currentPage-1)}}>Prev</button>

    <span> Page {currentPage}</span>
     <button   className=" hover:text-blue-300" onClick={()=>{setCurrentPage(currentPage + 1)}}>Next</button>

   </div>





      {/* <article className="flex items-center justify-evenly">
          {categories.map((category) => {
            return (
              <div
                key={category.id}
                className="py-3 px-12 rounded-lg bg-white shadow-xl border border-gray-200"
              >
                <figure className="text-6xl p-3">{category.icon}</figure>
                <h3 className="font-bold text-center pt-2">{category.title}</h3>
              </div>
            );
          })}
        </article> */}
    </div>
  );
};

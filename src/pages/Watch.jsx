import MoviesDetails from './MoviesDetails'

const Watch = () => {

   const MoviesCotext = {
    Contenttype:"Watch",
   

    

    Adventure: {
        title: "Adventure",
        mainclass: "bg-[#fff]",
        type: "suggestion",
        movies: [
            {
                id: 1,
                title: "Akshay Kumar Says Success Changed His Career Track: ‘Now I Can Choose Quality’",
                img: "/w3.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 2,
                title: "Deepika Padukone Talks About Mental Health: ‘It’s Okay to Seek Help’",
                img: "/w2.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 3,
                title: "Ranbir Kapoor on His Upcoming Projects: ‘I’m Excited for the New Challenges’",
                img: "/w3.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 4,
                title: "Varun Dhawan on Collaborating with New Directors: ‘Innovation is Key’",
                img: "/w1.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
             {
                id: 5,
                title: "Akshay Kumar Says Success Changed His Career Track: ‘Now I Can Choose Quality’",
                img: "/w2.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 6,
                title: "Deepika Padukone Talks About Mental Health: ‘It’s Okay to Seek Help’",
                img: "/w3.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 7,
                title: "Ranbir Kapoor on His Upcoming Projects: ‘I’m Excited for the New Challenges’",
                img: "/w1.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
            {
                id: 8,
                title: "Varun Dhawan on Collaborating with New Directors: ‘Innovation is Key’",
                img: "/w2.png",
                desc: "Rogue One: A Star Wars Story is a thrilling film set in the Star Wars universe, focusing on a group of rebels who band together to steal the plans."
            },
        ]
    },
   
}
  return (
   <MoviesDetails context={MoviesCotext}/>
  )
}

export default Watch
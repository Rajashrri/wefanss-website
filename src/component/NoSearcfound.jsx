import React from 'react'
import CatogeriesCard from './catogeries/CatogeriesCard';
import SectionHeading from './SectionHeading';

const NoSearcfound = () => {

     const actorsData = [
        {
            id: 1,
            name: "Chris Evans",
            gender: "Politician",
            language: ["English"],
            age: 42,
            totalMovies: 38,
            cardcalss: "md:w-[325px]",
            totalAwards: 15,
            img: "/catogary/cat1.jpg",
        },
        {
            id: 2,
            name: "Florence Pugh",
            gender: "Actor",
            cardcalss: "md:w-[325px]",
            language: ["Hindi", "English"],
            age: 38,
            totalMovies: 30,
            totalAwards: 25,
            img: "/catogary/cat2.jpg",
        },
        {
            id: 3,
            name: "Tom Hiddleston",
            gender: "Politician",
            cardcalss: "md:w-[325px]",
            language: ["Hindi"],
            age: 58,
            totalMovies: 45,
            totalAwards: 40,
            img: "/catogary/cat5.png",
        },
        {
            id: 4,
            name: "Priyanka Chopra",
            gender: "Actor",
            cardcalss: "md:w-[325px]",
            language: ["Hindi", "English"],
            age: 41,
            totalMovies: 35,
            totalAwards: 28,
            img: "/catogary/cat4.jpg",
        },
        

    ];
  return (
    <div className='py-[60px]'>
     <div className='h-[60vh] flex justify-center items-center w-full text-center'>
                                 <h3 className="text-gray-500 text-lg font-medium">
                                No Result Found
                            </h3>
                           </div>
                           <div className='max-w-[1400px] m-auto'>
                            <SectionHeading titleclass="text-left" title="Suggestions for you" />

                            <div className={`flex gap-3 flex-wrap justify-start
                    }`}>
                        {
                            actorsData.map((item) => (
                                <CatogeriesCard key={item.id} data={item} />
                            ))
                        }
                    </div>
                    </div>
                           
                           
    </div>
  )
}

export default NoSearcfound
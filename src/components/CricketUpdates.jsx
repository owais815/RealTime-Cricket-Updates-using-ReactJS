// import { useState, useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import CricketContext from './CricketContext';

// function CricketUpdates() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const { cricketState, setCricketState } = useContext(CricketContext);
//   const [typeMatches, setTypeMatches] = useState(cricketState || []);

//   useEffect(() => {
//     setCricketState(typeMatches);
//   }, [typeMatches, setCricketState]);

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);

//     const url = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent';
//     const options = {
//       method: 'GET',
//       headers: {
//         'x-rapidapi-key': 'ed5c3bb15fmsh19695825d57e787p140af3jsn8d0108bf9cd7',
//         'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
//       }
//     };

//     try {
//       const response = await fetch(url, options);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const result = await response.json();
//       console.log('Fetched data:', result); 
//       if (result.typeMatches) {
//         setTypeMatches(result.typeMatches);
//       } else {
//         console.log('No data found');
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   console.log("typeMatches in CricketUpdates:", typeMatches); 
//   return (
//     <>
//     <header>
//       <nav className="bg-gray-800 border-gray-200  grid grid-cols-3  py-2.5 text-white dark:bg-gray-900">
//       <div className='mx-2'>
//       <button onClick={fetchData} className="px-4 py-2 bg-blue-900  hover:bg-blue-600 text-white rounded-md ">
//         Fetch Data
//       </button></div>
//         <div className="flex flex-wrap items-center justify-center max-w-screen-xl px-4 mx-auto">
//           <span className=" text-4xl font-bold whitespace-nowrap dark:text-white">
//             Live Cricket Updates
//           </span>

//         </div>
//       </nav>
//     </header>
//     <div className="w-full h-auto min-h-screen px-6 py-8 sm:px-8 flex-center bg-cyan-700">
      
//       <div className="relative overflow-x-auto mx-8 bg-gray-800 shadow-md sm:rounded-md">
//         {loading && <p className="text-white">Loading...</p>}
//         {error && <p className="mt-4 text-red-500">Error: {error}</p>}
//         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//           <thead className="text-s text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//               <th scope="col" className="px-6 py-3">Match</th>
//               <th scope="col" className="px-6 py-3">Teams</th>
//               <th scope="col" className="px-6 py-3">Status</th>
//               <th scope="col" className="px-6 py-3">Venue</th>
//             </tr>
//           </thead>
//           <tbody>
//             {typeMatches.length > 0 ? (
//               typeMatches.flatMap((typeMatch) =>
//                 typeMatch.seriesMatches ?
//                   typeMatch.seriesMatches.flatMap((series) =>
//                     series.seriesAdWrapper && series.seriesAdWrapper.matches ?
//                       series.seriesAdWrapper.matches.map((match) => (
//                         <tr key={match.matchInfo.matchId} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                           <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                             <Link to={`/match/${match.matchInfo.matchId}`}
//                             state={
//                               {typeMatches: typeMatches}
//                             }
//                             >
//                               {match.matchInfo.matchDesc}
//                             </Link>
//                           </td>
                          
//                           <td className="px-6 py-8">
//                             {match.matchInfo.team1.teamSName} vs {match.matchInfo.team2.teamSName}
//                           </td>
//                           <td className="px-6 py-8">
//                             {match.matchInfo.status}
//                           </td>
//                           <td className="px-6 py-8">
//                             {match.matchInfo.venueInfo.ground}, {match.matchInfo.venueInfo.city}
//                           </td>
//                         </tr>
//                       ))
//                       : <></>
//                   )
//                   : <tr key="no-series-matches"><td colSpan="4" className="px-6 py-4 text-center">No series matches available</td></tr>
//               )
//             ) : (
//               <tr key="fetch-data"><td colSpan="4" className="px-6 py-4 text-center">Click Fetch Data to load cricket updates</td></tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </>
//   );
// }

// export default CricketUpdates;
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CricketContext from './CricketContext';


function CricketUpdates() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // State to store search query

  const { cricketState, setCricketState } = useContext(CricketContext);
  const [typeMatches, setTypeMatches] = useState(cricketState || []);

  useEffect(() => {
    setCricketState(typeMatches);
  }, [typeMatches, setCricketState]);
//   useEffect(()=>{
// fetchData();

//   },[300000]);


useEffect(() => {
  fetchData();

  const intervalId = setInterval(() => {
    fetchData(); 
  }, 5 * 60 * 1000); 
  return () => clearInterval(intervalId); 
}, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    // const url = 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent';
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'x-rapidapi-key': 'ed5c3bb15fmsh19695825d57e787p140af3jsn8d0108bf9cd7',
    //     'x-rapidapi-host':'cricbuzz-cricket.p.rapidapi.com'
    //   }
    // };

 const url = import.meta.env.VITE_API_URL;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host':import.meta.env.VITE_API_HOST
      }
    };

    // console.log('Fetching data from:', url);
    // console.log('Request options:', options);

//     VITE_API_URL=https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent
// VITE_API_KEY=ed5c3bb15fmsh19695825d57e787p140af3jsn8d0108bf9cd7
// VITE_API_HOST=cricbuzz-cricket.p.rapidapi.com
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log('Fetched data:', result); 
      if (result.typeMatches) {
        setTypeMatches(result.typeMatches);
      } else {
        console.log('No data found');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Filtered matches based on search query
  const filteredMatches = typeMatches.flatMap((typeMatch) =>
    typeMatch.seriesMatches
      ? typeMatch.seriesMatches.flatMap((series) =>
          series.seriesAdWrapper && series.seriesAdWrapper.matches
            ? series.seriesAdWrapper.matches.filter((match) =>
                match.matchInfo.matchDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                match.matchInfo.team1.teamName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                match.matchInfo.team1.teamSName.toLowerCase().includes(searchQuery.toLowerCase()) ||

                match.matchInfo.team2.teamSName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                match.matchInfo.team2.teamName.toLowerCase().includes(searchQuery.toLowerCase())
              )
            : []
        )
      : []
  );

  return (
    <>
      <header>
        <nav className="bg-gray-800 border-gray-200 grid grid-cols-3 py-2.5 text-white dark:bg-gray-900">
          <div className="mx-2">
            {/* <button
              onClick={fetchData}
              className="px-4 py-2 bg-blue-900 hover:bg-blue-600 text-white rounded-md"
            >
              Fetch Data
            </button> */}
          </div>
          <div className="flex flex-wrap items-center justify-center max-w-screen-xl px-4 mx-auto">
            <span className="text-4xl font-bold whitespace-nowrap dark:text-white">
              Live Cricket Updates
            </span>
          </div>
          <div className="mx-2">
            <input
              type="text"
              placeholder="Search by team or match name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
              className="px-4 py-2 w-full text-gray-900 rounded-md"
            />
          </div>
        </nav>
      </header>
      <div className="w-full h-auto min-h-screen px-6 py-8 sm:px-8 flex-center bg-cyan-700">
        <div className="relative overflow-x-auto mx-8 bg-gray-800 shadow-md sm:rounded-md">
          {loading && <p className="text-white">Loading...</p>}
          {error && <p className="mt-4 text-red-500">Error: {error}</p>}
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-s text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Match</th>
                <th scope="col" className="px-6 py-3">Teams</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3">Venue</th>
              </tr>
            </thead>
            <tbody>
              {filteredMatches.length > 0 ? (
                filteredMatches.map((match) => (
                  <tr
                    key={match.matchInfo.matchId}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <Link
                        to={`/match/${match.matchInfo.matchId}`}
                        state={{ typeMatches: typeMatches }}
                      >
                        {match.matchInfo.matchDesc}
                      </Link>
                    </td>
                    <td className="px-6 py-8">
                      {match.matchInfo.team1.teamSName} vs {match.matchInfo.team2.teamSName}
                    </td>
                    <td className="px-6 py-8">{match.matchInfo.status}</td>
                    <td className="px-6 py-8">
                      {match.matchInfo.venueInfo.ground}, {match.matchInfo.venueInfo.city}
                    </td>
                  </tr>
                ))
              ) : (
                <tr key="no-matches">
                  <td colSpan="4" className="px-6 py-4 text-center">
                    No matches found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CricketUpdates;

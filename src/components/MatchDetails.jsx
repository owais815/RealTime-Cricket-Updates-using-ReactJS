import { useParams, Link, useLocation } from "react-router-dom";

const MatchDetails = () => {
  const { matchId } = useParams(); // ID from URL
  const location = useLocation();
  const state = location.state || { typeMatches: [] };
  const { typeMatches } = state;

  // Ensure matchId is a string and trim it for safety
  const normalizedMatchId = String(matchId).trim();

  // Find the match with the given matchId
  const match = typeMatches
    .flatMap((typeMatch) => typeMatch.seriesMatches || [])
    .flatMap((series) => series.seriesAdWrapper?.matches || [])
    .find((match) => {
      const matchId = String(match.matchInfo?.matchId).trim();
      return matchId === normalizedMatchId;
    });

  if (!match) {
    return <div className="text-center py-4">No match selected</div>;
  }

  const { matchInfo, matchScore = {} } = match;

  return (
    <>
      <header>
        <nav className="bg-gray-800 grid grid-cols-3 border-gray-200 py-2.5 text-white dark:bg-gray-900">
          <div className="my-6">
            {" "}
            <Link
              to="/"
             className="px-4 py-2 bg-blue-900 text-white rounded-md "
            >
              Back to Matches
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center max-w-screen-xl px-4 mx-auto">
            <span className=" text-4xl font-bold whitespace-nowrap dark:text-white">
              Complete Match Details
            </span>

          </div>
        </nav>
      </header>

      <div className="w-full h-200 flex items-center justify-center bg-cyan-700   ">
        <div className="w-full max-w-4xl bg-gray-700 text-white shadow-lg my-6 rounded-lg p-6">
          <div className="text-4xl font-bold mb-4">
            {matchInfo.matchDesc || "Match description not available"}
          </div>

          <div className="teams flex mx-16 items-center justify-between my-6">
            <div className="flex items-center space-x-2">
              <div>
                <h3 className="text-2xl font-semibold">
                  {matchInfo.team1.teamName || "Unknown Team 1"}
                </h3>
              </div>
            </div>
            <span className="text-xl font-semibold">vs</span>
            <div className="flex items-center space-x-4">
              <div>
                <h3 className="text-2xl font-semibold">
                  {matchInfo.team2.teamName || "Unknown Team 2"}
                </h3>
              </div>
            </div>
          </div>

          <div className="venue flex space-x-4 justify-center my-6">
            {/* <h3 className="text-l font-semibold">Venue:</h3> */}
            <div>
              {matchInfo.venueInfo?.ground || "Unknown Ground"},{" "}
              {matchInfo.venueInfo?.city || "Unknown City"}
            </div>
          </div>

          <div className="status flex space-x-4 text-xl text-blue-400 justify-center  my-6">
            {/* <h3 className="text-l font-semibold">Status:</h3> */}
            <div>{matchInfo.status || "Status not available"}</div>
          </div>

          <div className="scorecard my-6 p-4 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-white mb-4">ScoreCard</h3>
            <div>
              {matchScore && typeof matchScore === "object" ? (
                <div>
                  {Object.entries(matchScore).map(([key, value]) => {
                    let displayKey = "";
                    if (key === "team1Score") {
                      displayKey = matchInfo?.team1?.teamName || "Team 1";
                    } else if (key === "team2Score") {
                      displayKey = matchInfo?.team2?.teamName || "Team 2";
                    } else {
                      return null;
                    }

                    const inningsDetails = Object.entries(value).map(
                      ([inningKey, inningValue]) => {
                        const inningName =
                          inningKey === "inngs1" ? "First Inning" : inningKey;
                        return (
                          <div
                            key={inningKey}
                            className="flex flex-col mb-4  p-2 bg-gray-700 rounded-lg"
                          >
                            <div className="flex justify-between text-white font-semibold">
                              <span>{inningName}</span>
                            </div>
                            <div className="grid grid-cols-1 mx-4 gap-4 text-gray-300 mt-2">
                              <div className="flex justify-between">
                                <span className="font-medium">Runs:</span>
                                <span>{inningValue.runs}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Wickets:</span>
                                <span>{inningValue.wickets}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Overs:</span>
                                <span>{inningValue.overs}</span>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    );

                    return (
                      <div key={key} className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-100">
                          {displayKey}
                        </h4>
                        {inningsDetails}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-gray-400">No scorecard available</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchDetails;

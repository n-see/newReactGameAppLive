//All our imports we need

import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames, { Game } from "../hooks/useGames"
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";


import { GameQuery } from "../App";

interface Props {
  // selectedGenre: Genre | null
  // selectedPlatform: Platform | null
  gameQuery: GameQuery
}

const GameGrid = ({gameQuery}:Props) => {

const {data, error, isLoading} = useGames(gameQuery);

const skeleton=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


//We other helper function to add, delete or update data

  return (
    <>
    {/* Display our data ul li grid table usually map it with unique key  */}
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} spacing={10} padding={'20px'}> {/* {1} 4px  */}
        {isLoading && skeleton.map(skeleton => 
        
        <GameCardContainer>
          <GameCardSkeleton key={skeleton}/>

        </GameCardContainer>
        )}
        {data?.results.map((game:Game) =>(
          <GameCardContainer>
            <GameCard  key={game.id} game={game}></GameCard>

          </GameCardContainer>
        ) 
        )}
    </SimpleGrid>
    {error && <Text color={'red'}></Text>}
    </>
  )
}

export default GameGrid
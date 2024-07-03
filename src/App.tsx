import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/usePlatforms"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
  searchText: string
}

const App = () => {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)  


  return (
    <>
    {/* Create a responsive layout with Chakra UI Grid */}
    {/* Nav, aside, main _______ responsive fro desktop and mobile */}
    <Grid templateAreas={{
      base:`'nav' 'main'`,
      lg:`'nav nav' 'aside main'`//1024 screen size
    }}>
      <GridItem area="nav">
        <NavBar onSearch={searchText => setGameQuery({...gameQuery, searchText}) }/>
      </GridItem>

      <Show above='lg'>
        <GridItem area='aside' padding={2}>
          {" "}
          <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre}) }/>
        </GridItem>

      </Show>
      <GridItem area="main">
        <Box padding={5}>
          <GameHeading gameQuery={gameQuery}/>
          <HStack spacing={5} marginBottom={5} marginTop={5}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
            <SortSelector onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
    </>
  )
}

export default App
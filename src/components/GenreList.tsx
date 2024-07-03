import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../Services/imageUrl";

interface Props {
    onSelectedGenre: (genre:Genre) => void
    selectedGenre: Genre | null
}

const GenreList = ({onSelectedGenre, selectedGenre}:Props) => {

    ///useStates

    const {data, isLoading} = useData<Genre>('/genres');

    ///use Effect

    //helper function

    return (
        <>
        {/* JSX goes anything render */}
        <List paddingBottom={5}>
            {isLoading && <Spinner/>}
            {data.map((genre)=> <ListItem marginBottom={3} key={genre.id}>
            <HStack>
                <Image objectFit={'cover'} boxSize={16} borderRadius={4} src={getCroppedImageUrl(genre.image_background)}/>
                {/* <Text fontSize={'lg'}>{genre.name}</Text> */}
                <Button color={genre.id === selectedGenre?.id ? 'blue.500' : 'normal'} fontSize={'lg'} variant={'link'} onClick={() => onSelectedGenre(genre)}>{genre.name}</Button>
            </HStack>
            </ListItem>)}
        </List>

        </>
    )
}

export default GenreList
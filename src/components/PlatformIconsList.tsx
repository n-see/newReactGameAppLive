import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'

import { HStack, Icon  } from "@chakra-ui/react"
import { IconType } from 'react-icons'
import { Platform } from '../hooks/useData'

interface Props {
    platforms: Platform[]
}

const PlatformIconsList = ({platforms}:Props) => {

    const iconMap: {[key:string]:IconType} = {
        //name: playstation
        //slug: playstation
        pc:FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid
    }

    return (
        <>
        <HStack marginY ={1}>
            {platforms.map(platform => 
            <Icon key={platform.id} as={iconMap[platform.slug]} color={'gray.500'}/>)}
            
        </HStack>

        </>
    )
}

export default PlatformIconsList
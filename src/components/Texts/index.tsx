import { Text } from "@chakra-ui/react"

interface TextsProps{
    text: string
}

export function Texts({ text }:TextsProps){
    return(
        <Text 
            as = "p" 
            textTransform = {"uppercase"}
            fontWeight = {"700"}
            fontSize = {"24px"}
        >
            {text}
        </Text>
    )
}

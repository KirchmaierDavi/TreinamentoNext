import {HStack, Stack} from "@chakra-ui/react";
import { Texts } from "../Texts";

export function Navbar(){
    return(
        <HStack 
            as = "nav"
            justify = {"space-between"}
            py = {14}
            px = {16}
        >
            <Stack
                as = "section"
            >
                <Texts text={"cowboy*"} />
            </Stack>
            <HStack
                as = "section"
                spacing = {16}
            >
                <Texts text={"bikes"} />
                <Texts text={"sobre nós"} />
                <Texts text={"configurações"} />
            </HStack>
        </HStack>
    )
}
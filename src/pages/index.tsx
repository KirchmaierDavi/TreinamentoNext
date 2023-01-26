import { Button, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <HStack 
      as = "main"
      px = {16}
      mb = {"7%"}
      my = {"7%"}
      
    >
      

      <Stack 
        as = "section"
        w = {"50%"}
        spacing = {14}
        bgGradient ="linear-gradient(45deg, rgba(236,23,100,1) 2%, rgba(27,26,26,1) 44%)"
      >
        <Stack
          as = "aside"
          spacing={10}
        >
          <Heading 
            as = "h1"
            fontWeight = {"700"}
            fontSize = {"64px"}
            lineHeight = {"75px"}
            w = {"70%"}
          >
            Pedale nas Ruas.<Text as="span" fontSize = "24px" color = {"#EC1764"}>Cowboy 3</Text>
          </Heading>

          <Text
            as = "p"
            color = {"#FFFFFF80"}
            fontSize = {"24px"}
           fontWeight = {"700"}
          >
            <Text as = "span" color={"#FFFFFF"}>Mude seu passeio, não as marchas.</Text> 
              Facilite seu caminho para a maneira mais rápida de se mover na cidade. 
              Liberte sua mente enquanto a bicicleta se adapta de forma intuitiva para atingir a velocidade que você precisa.
           </Text>
        </Stack>
        <HStack
          as = "section"
          spacing = {4}
        >
          <Button 
            as ="button"
            bg = {"#EC1764"} 
            p = {8}
            fontSize = {"24px"}
            _hover ={{
              bg: "#EC1764",
            }}
          >
              Agende a sua
          </Button>
          <Link as="a" href={""}>
            Configure a sua
          </Link>
        </HStack>
      </Stack>
      <Stack 
        as = "section"
        w = {"50%"}
      >
        
      </Stack>

    </HStack>
  )
}

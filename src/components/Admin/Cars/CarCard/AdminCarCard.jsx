import { Card, Flex, HStack, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";



export default function AdminCarCard({car}){
    const fontProps = { fontSize: '1rem', fontWeight: '500' };
    const router = useRouter();

    const handleDelete = async () => {
        const response = await fetch(`/api/admin/cars/deleteCar/${car.id}`, { method: "DELETE" });
        if (response.ok) {
       
          router.reload();
            
        } else {
          console.error(response.statusText);
        }
      };

  
    return(
        <Card w={{base: '80%', xl:'60%'}} p={'1rem'}  >
            <Flex alignItems={'center'} justifyContent={'space-between'}>
            <Flex direction={'column'} gap={'10px'}>
                <HStack>
                    <Text style={fontProps}>Marka:</Text>
                    <Text>{car.brand}</Text>
                </HStack>
                <HStack>
                    <Text style={fontProps}>Model:</Text>
                    <Text>{car.model}</Text>
                </HStack>
                <HStack>
                    <Text style={fontProps}>Pojemność:</Text>
                    <Text>{car.capacity}</Text>
                    <Text style={fontProps}>cm3</Text>
                </HStack>
                <HStack>
                    <Text style={fontProps}>Moc:</Text>
                    <Text>{car.power}</Text>
                    <Text style={fontProps}>KM</Text>
                </HStack>
                <HStack>
                    <Text style={fontProps}>Typ:</Text>
                    <Text>{car.type}</Text>
                </HStack>
                <HStack>
                    <Text style={fontProps}>Rocznik:</Text>
                    <Text>{car.year}</Text>
                </HStack>
                <HStack>
                    <Text style={fontProps}>Skrzynia:</Text>
                    <Text>{car.transmission}</Text>
                </HStack>
                <HStack>
                    <Text style={fontProps}>Kolor:</Text>
                    <Text>{car.color}</Text>
                </HStack>
                <HStack>
                    <Text style={fontProps}>Cena za dobę:</Text>
                    <Text>{car.price}</Text>
                    <Text style={fontProps}> ZŁ</Text>
                </HStack>
            </Flex>
            <Flex w={'50%'} overflow={'auto'}>
                <Text>
                    {car.description}
                </Text>
            </Flex>
            <Flex direction={'column'} gap={'10px'}>
                
                <Button >Edytuj</Button>
                <Button  onClick={handleDelete} >Usuń</Button>
            </Flex>
            </Flex>
        </Card>
    )
}


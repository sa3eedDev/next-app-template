import { AmountCal } from "@/components/AmountCal/AmountCal"
import {  Group, Title , Text, Container, NumberInput, Timeline} from "@mantine/core"


interface Props {
    params: Promise<{ recipeid: string}>
}

interface Recipe{
    id: number
    title: string
    Pic: string
    description: string
    coffeeAmount: number
    waterAmount: number
    measurement: string
    steps: step[]
}

interface step{
    title: string
    step: string
}

export default async function Page({params}: Props) {
    // const params = use(props.params);
    const { recipeid } = await params;
    const recipe : Recipe = await fetch(`${process.env.APIURL}/api/${recipeid}`).then((res) => res.json())

    return(
        <>
        <Container>
            <Group justify="center">
                {/* <SimpleGrid cols={3}>
                <div></div>
                <Image
                    radius="md"
                    h="200"
                    src={recpie.Pic}

                />

                </SimpleGrid> */}
                </Group>
                <Group>
                    <Title order={1}>{recipe?.title ? recipe.title : recipeid}</Title>
                    <Text>{recipe.description}</Text>

                    <AmountCal waterAmount={recipe.waterAmount} coffeeAmount={recipe.coffeeAmount} measurement={recipe.measurement} steps={recipe.steps}/>


                </Group>
                

        </Container>
        </>
    )
}
import { AmountCal } from "@/components/AmountCal/AmountCal"
import {  Group, Title , Text, Container, NumberInput, Timeline} from "@mantine/core"


interface Props {
    params: { recipeid: string}
}

interface Recipe{
    id: number
    title: string
    Pic: string
    decs: string
    coffeeAmount: number
    waterAmount: number
    measurement: string
}

export default async function Page({params}: Props) {
    // const params = use(props.params);
    const { recipeid } = await params;
    const data : Recipe[] = await fetch("http://localhost:3000/api/data").then((res) => res.json())

    const recpie : Recipe = await data.find((resc) => resc.id === parseInt(recipeid))!
    
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
                    <Title order={1}>{recpie?.title ? recpie.title : recipeid}</Title>
                    <Text>{recpie.decs}</Text>

                    <AmountCal waterAmount={recpie.waterAmount} coffeeAmount={recpie.coffeeAmount} measurement={recpie.measurement}/>

                    {/* <Timeline active={1} bulletSize={24} lineWidth={2}>
                        <Timeline.Item title="Default bullet">
                            <Text c="dimmed" size="sm">
                            Default bullet without anything
                            </Text>
                        </Timeline.Item>
                    </Timeline> */}
                </Group>
                

        </Container>
        </>
    )
}
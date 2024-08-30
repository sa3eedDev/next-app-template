"use client";
import { Grid, Image, Group, Title , Text} from "@mantine/core"

export default function Page({ params }: { params: { recipeid: string } }){


    return(
        <>
            <Grid>
                <Grid.Col span={12}>
                    <Group justify="center">
                        <Image
                            radius="md"
                            h="200"
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"

                        />
                        
                    </Group>
                </Grid.Col>
                <Grid.Col span={12}>
                    <Group justify="center">
                        <Title order={1}>{params.recipeid}</Title>
                    </Group>
                </Grid.Col>
                <Grid.Col span={8}>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat animi sunt similique. Nostrum maxime laboriosam quidem architecto nulla ipsa magnam qui mollitia, dolore aliquam corporis a officia rerum nihil quibusdam.</Text>
                </Grid.Col>

            </Grid>
        </>
    )
}
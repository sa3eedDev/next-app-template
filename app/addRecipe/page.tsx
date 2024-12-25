"use client";
import { Button, Checkbox, Container, Grid, Group, NumberInput, Space, TagsInput, TextInput, Title } from "@mantine/core";
import { useForm } from '@mantine/form';


export default function addRecipe(){
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
          title: '',
          tags: [] as string[],
          description:"",
          waterAmount:"",
          coffeeAmount:"",
          measurement:"",
          prepTime:"",
          steps:""
        },
    
        validate: {
          
        },
      });

    let tags = []
    return(
        <>
            <Container>
                <Title order={1}>Add Recipe</Title>
                <Space h="md"></Space>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <Grid>
                        <Grid.Col>

                        
                        <TextInput
                            label="Title"
                            placeholder="V60 Coffee"
                            key={form.key('title')}
                            {...form.getInputProps('title')}
                        />
                        </Grid.Col>
                        <Grid.Col>
                        <TagsInput 
                            label="Tags" 
                            placeholder="Enter tag" 
                            key={form.key('tags')}
                            {...form.getInputProps("tags")}/>
                        </Grid.Col>

                        <Grid.Col span={6}>
                        <NumberInput
                            label="Enter water amount"
                            description="Enter water amount for one serving"
                            placeholder="250"
                            key={form.key('waterAmount')}
                            {...form.getInputProps("waterAmount")}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                        <NumberInput
                            label="Enter coffee amount"
                            description="Enter coffee amount for one serving"
                            placeholder="15"
                            key={form.key('coffeeAmount')}
                            {...form.getInputProps("coffeeAmount")}
                            />
                        </Grid.Col>
                        <Grid.Col>
                            <Button 
                                variant="gradient"
                                gradient={{ from: 'blue', to: 'cyan', deg: 261 }}
                                type="submit"
                            >Submit</Button>
                        </Grid.Col>
                    </Grid>
                </form>

            </Container>
        </>
    )
}
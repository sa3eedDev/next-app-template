"use client";
import { Button, Checkbox, Container, Fieldset, Grid, Group, NumberInput, Select, Space, Stack, TagsInput, Textarea, TextInput, Title } from "@mantine/core";
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
          steps:[{title:"", step:""}]
        },
    
        validate: {
          
        },
      });

    const submitForm = (values) =>{
        console.log(values)
        const data = fetch("http://localhost:3000/api/allrecipes", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
          })
        console.log(data)
    }

    return(
        <>
            <Container>
                <Title order={1}>Add Recipe</Title>
                <Space h="md"></Space>
                <form onSubmit={form.onSubmit((values) => submitForm(values))}>
                    <Grid>
                        <Grid.Col>

                        
                        <TextInput
                            label="Title"
                            placeholder="V60 Coffee"
                            key={form.key('title')}
                            {...form.getInputProps('title')}
                        />
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <Textarea
                            label="description"
                            description="add a brief description about the recipe"
                            placeholder="Input placeholder"
                            key={form.key('description')}
                            {...form.getInputProps('description')}
                            />
                        </Grid.Col>
                        <Grid.Col span={8}>
                        <TagsInput 
                            label="Tags" 
                            placeholder="Enter tag" 
                            key={form.key('tags')}
                            {...form.getInputProps("tags")}/>
                        </Grid.Col>
                        <Grid.Col span={4}>
                        <Select
                        label="Measurement"
                        placeholder="Grams"
                        data={['Grams']}
                        key={form.key('measurement')}
                        {...form.getInputProps("measurement")}
                        />
                        </Grid.Col>

                        <Grid.Col span={4}>
                        <NumberInput
                            label="Enter water amount"
                            description="Enter water amount for one serving"
                            placeholder="250"
                            key={form.key('waterAmount')}
                            {...form.getInputProps("waterAmount")}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                        <NumberInput
                            label="Enter coffee amount"
                            description="Enter coffee amount for one serving"
                            placeholder="15"
                            key={form.key('coffeeAmount')}
                            {...form.getInputProps("coffeeAmount")}
                            />
                        </Grid.Col>
                        <Grid.Col span={4}>
                        <NumberInput
                            label="Enter prepation time"
                            description="Enter approxmitly how long it will take"
                            placeholder="2.5"
                            key={form.key('prepTime')}
                            {...form.getInputProps("prepTime")}
                            />
                        </Grid.Col>

                        <Grid.Col span={12}>
                            <Stack>
                                {form.getValues().steps.map((item, index) =>(
                                    <Fieldset legend={`Step ${index+1}`}>
                                        <TextInput label="Title" placeholder="Clean filter" key={form.key(`steps.${index}.title`)} {...form.getInputProps(`steps.${index}.title`)}/>
                                        <TextInput label="Description" placeholder="Description" key={form.key(`steps.${index}.step`)} {...form.getInputProps(`steps.${index}.step`)}/>                                        
                                    </Fieldset>
                                ))}
                                <Button type="button" onClick={() => form.insertListItem('steps', { title: '', step: "" })}>
                                    Add Field
                                </Button>
                            </Stack>
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
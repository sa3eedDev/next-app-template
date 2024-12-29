"use client";
import { NumberInput, Grid, Title, Space, Stepper, Group, Button } from "@mantine/core";
import { useInputState } from '@mantine/hooks';
import { useState } from "react";



export function AmountCal({waterAmount, coffeeAmount, measurement, steps}){

    const [coffeeValue, setcoffeeValue] = useInputState<string | number>(coffeeAmount);
    const [waterValue, setwaterValue] = useInputState<string | number>(waterAmount);

    const [active, setActive] = useState(-1);
    const nextStep = () => setActive((current) => (current < steps.length ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const coffeeChange = ((coffee) =>{
        const ratio = waterAmount / coffeeAmount
        setwaterValue(ratio*coffee)
        setcoffeeValue(coffee)
    })

    const waterChange = ((water) =>{
        const ratio = coffeeAmount / waterAmount
        setwaterValue(water)
        setcoffeeValue(ratio*water)
    })

    console.log(steps)

    return(
        <>
        <Grid>
            <Grid.Col span={6}>
            <NumberInput
                size="lg"
                label="Coffee Amount"
                description={`Input amount of ${measurement} of coffee`}
                placeholder={coffeeAmount}
                value={coffeeValue}
                onChange={(event) => coffeeChange(event.valueOf())}
            />       
            </Grid.Col>
            <Grid.Col span={6}>     
            <NumberInput
            size="lg"
            label="Water Amount"
            description={`Input amount of ${measurement} of water`}
            placeholder={waterAmount}
            value={waterValue}
            onChange={(event) => waterChange(event.valueOf())}
            />
            </Grid.Col>
            <Grid.Col span={12}> 
                <Space h="lg" />
                <Title order={2}>Steps</Title>
                <Space h="md" />

            <Stepper active={active} onStepClick={setActive} orientation="vertical">
                {steps.map((step, index) =>{
                    return(
                    <Stepper.Step label={step.title} description={step.step} />
                    )
                })}
                {/* <Stepper.Step label="Rinse the filter" description="Use hot water to rinse the coffee filter" />
                <Stepper.Step label="Bloom the coffee" description="Use 5th of the hot water to bloom the coffee for 45 seconds"/>
                <Stepper.Step label="Add water" description="Add water after 15 seconds bloom" />
                <Stepper.Step label="Add rest of the water" description="Every 20 seconds add 1/5 of the water" /> */}

            </Stepper>
            <Group justify="center" mt="xl">
                <Button variant="default" onClick={prevStep}>Back</Button>
                <Button onClick={nextStep}>Next step</Button>
            </Group>
            </Grid.Col>
        </Grid>
        </>
    )
}
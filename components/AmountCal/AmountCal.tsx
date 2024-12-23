"use client";
import { NumberInput, Grid, Title, Space, Stepper } from "@mantine/core";
import { useInputState } from '@mantine/hooks';
import { useState } from "react";



export function AmountCal({waterAmount, coffeeAmount, measurement}){

    const [coffeeValue, setcoffeeValue] = useInputState<string | number>(coffeeAmount);
    const [waterValue, setwaterValue] = useInputState<string | number>(waterAmount);
    const [active, setActive] = useState(-1);


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
                <Stepper.Step label="Rinse the filter" description="Use hot water to rinse the coffee filter" />
                <Stepper.Step label="Bloom the coffee" description="Use 5th of the hot water to bloom the coffee for 45 seconds" loading/>
                <Stepper.Step label="Add water" description="Add water after 15 seconds bloom" />
                <Stepper.Step label="Add rest of the water" description="Every 20 seconds add 1/5 of the water" />

            </Stepper>
            </Grid.Col>
        </Grid>
        </>
    )
}
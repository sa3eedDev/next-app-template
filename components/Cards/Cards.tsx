"use client";
import { Grid } from '@mantine/core';
import { RecipeCard } from '../RecipeCard/RecipeCard';
export function Cards({recipes}) {
  return (
    <Grid>
        {recipes.map((recipe,i)=>(
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={i}><RecipeCard info={recipe} /></Grid.Col>
        ))}

    </Grid>
  );
}
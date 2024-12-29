"use client";
import { Card, Image, Text, Button, Group } from '@mantine/core';

export function RecipeCard({info}) {
  const linkRecipe = `/${info.id}`
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        {/* <Image
          src={info.Pic}
          height={160}
          alt="Norway"
        /> */}
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{info.title}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {info.description}
      </Text>

      <Button  component="a" color="blue" fullWidth mt="md" radius="md" href={linkRecipe}>
        View Recipe
      </Button>
    </Card>
  );
}
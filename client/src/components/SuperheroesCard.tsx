import React, { useEffect, useState } from 'react';
import { Box, Card, Flex, Text, Button } from '@radix-ui/themes';
import { Superhero } from '../models/Superhero.model';

interface SuperheroesCardProps {
  onAddSuperhero: () => void;
}

const SuperheroesCard: React.FC<SuperheroesCardProps> = ({ onAddSuperhero }) => {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  const fetchSuperheroes = async () => {
    const response = await fetch('http://localhost:3000/superheroes');
    const data = await response.json();
    setSuperheroes(data);
  };

  const handleAddSuperhero = () => {
    onAddSuperhero();
  };

  return (
    <Box maxWidth="640px">
      <Card size="4">
        <Flex direction="column" gap="5" py="5">
          <Flex justify="between" gap="5" align="center">
            <Text as="p" weight="bold" size="6">
              Superheroes
            </Text>
            <Flex gap="3">
              <Button size="2" variant="soft" onClick={fetchSuperheroes}>
                Fetch Superheroes
              </Button>
              <Button size="2" variant="soft" onClick={handleAddSuperhero}>
                Create a Superhero
              </Button>
            </Flex>
          </Flex>

          {superheroes.length === 0 ? (
            <Text as="p" size="3" color="gray">
              List is empty.
            </Text>
          ) : (
            <Flex direction="column" gap="3">
              {superheroes.map((superhero: Superhero, id) => (
                <Card key={id} size="3" >
                  <Flex justify="between" align="center">
                    <Text as="p" size="4">
                      {superhero.name}
                    </Text>
                    <Text as="p" size="4">
                      Humility Score: {superhero.humilityScore}
                    </Text>
                  </Flex>
                  <Text as="p" size="3" color="gray">
                    Superpower: {superhero.superpower}
                  </Text>
                </Card>
              ))}
            </Flex>
          )}
        </Flex>
      </Card>
    </Box>
  );
};

export default SuperheroesCard;
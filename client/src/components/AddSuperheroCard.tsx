import React, { useState } from 'react';
import { z } from 'zod';

import { Superhero } from '../models/Superhero.model';

import { Flex, Text, Button, Card, Box, TextField } from "@radix-ui/themes";

interface AddSuperheroCardProps {
    onToggleList: () => void;
}

const AddSuperheroCard: React.FC<AddSuperheroCardProps> = ({ onToggleList }) => {
  const [name, setName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humilityScore, setHumilityScore] = useState<number | string>(0);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState<string>('');

  const superheroSchema = z.object({
    name: z.string().nonempty("Name is required"),
    superpower: z.string().nonempty("Superpower is required"),
    humilityScore: z.number().min(1, "Humility must be at least 1").max(10, "Humility must be at most 10"),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = superheroSchema.safeParse({
      name,
      superpower,
      humilityScore: Number(humilityScore)
    });

    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {};
      result.error.errors.forEach((error) => {
        if (error.path.length > 0) {
          fieldErrors[error.path[0]] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    const superhero = result.data;

    await postSuperhero(superhero);
    setErrors({});
    setSuccessMessage('Superhero added successfully!');
    setTimeout(() => setSuccessMessage(''), 3000); // Clear the message after 3 seconds
  }

  const postSuperhero = async (superhero: Superhero) => {
    const response = await fetch('http://localhost:3000/superheroes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(superhero)
    });

    console.log(superhero);

    if (response.ok) {
      console.log('Superhero added successfully');
    } else {
      console.error('Failed to add superhero');
    }
  }

  const handleToggleList = () => {
    onToggleList();
  }

  return (
    <Box maxWidth="440px">
        <Card size="5" >
            <Flex gap="8">
              <Text as="p" weight="bold" size="6">
                  Superheroes
              </Text>  
              <Button className='mx-2' size="2" variant="soft" onClick={handleToggleList} >Superhero List</Button>
            </Flex>
            
            <form onSubmit={handleSubmit}>
            <Flex direction="column" gap="4">
              <label htmlFor="name">Name</label>
              <TextField.Root
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                style={{ borderColor: errors.name ? 'red' : 'inherit' }} />
              {errors.name && <Text color="red">{errors.name}</Text>}


              <label htmlFor="superpower">Superpower</label>
              <TextField.Root id="superpower" value={superpower} onChange={(e) => setSuperpower(e.target.value)} />
              {errors.superpower && <Text color="red">{errors.superpower}</Text>}


              <label htmlFor="humilityScore">humilityScore</label>
              <TextField.Root id="humilityScore" type="number" value={humilityScore} onChange={(e) => setHumilityScore(e.target.value)} />
              {errors.humilityScore && <Text color="red">{errors.humilityScore}</Text>}

              <Button type="submit" variant="soft">Add Superero</Button>
            </Flex>
          </form>
          {successMessage && <Text color="green">{successMessage}</Text>}

        </Card>
    </Box>
  )
}

export default AddSuperheroCard
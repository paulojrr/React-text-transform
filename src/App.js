import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #000;
  text-align: center;
  font-weight: bold;
`;

const SubTitle = styled.h2`
  color: #000;
  text-align: center;
`;

const Text = styled.p`
  color: grey;
`;

const Input = styled.input`
  width: 300px;
  padding: 5px;
  border-radius: 5px;
  color: #000;
`;

function App() {
  const [value, setValue] = useState('');

  function handleInput(e) {
    setValue(e.target.value);
  }

  function handleReverse(value) {
    return value.split('').reverse().join('');
  }

  function handleSlug(value) {
    let newValue = value.replace(/^\s+/, '').replace(/\s+$/, '');
    if (newValue === '') {
      return ' ';
    }
    return value.trim().split(' ').join('-').toLowerCase().trim();
  }

  function handleVogais(value) {
    const vog = /[^aeiou\s]/gi;
    if (value === ' ') {
      return ' ';
    }
    let newValue = value.replace(vog, '');

    return newValue;
  }

  function handleConsoantes(value) {
    const vog = /[aeiou]/gi;
    let newValue = value.replace(vog, '');

    return newValue;
  }

  return (
    <Wrapper>
      <Title>React text transformer</Title>
      <Text>Digite um texto: </Text>
      <Input onChange={handleInput} />
      <hr />

      <SubTitle>Transformações</SubTitle>
      <Text>Texto invertido: </Text>
      <Input readOnly value={handleReverse(value)} />
      <hr />

      <Text>Texto Slug: </Text>
      <Input readOnly value={handleSlug(value)} />
      <hr />

      <Text>Vogais: </Text>
      <Input readOnly value={handleVogais(value)} />
      <hr />

      <Text>Consoantes: </Text>
      <Input readOnly value={handleConsoantes(value)} />
    </Wrapper>
  );
}

export default App;

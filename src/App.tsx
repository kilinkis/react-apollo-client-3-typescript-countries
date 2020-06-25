import React from 'react';
import { gql, useQuery} from '@apollo/client';

interface Country {
  name: string,
  code: string
  emoji: string
}

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
      emoji
    }
  }
`;

function App() {
  const {data, loading, error} = useQuery(LIST_COUNTRIES);

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  return (
    <ol>
      {data.countries.map((country: Country) => (
        <li key={country.code}>
          {country.name} - {country.emoji}
        </li>
      ))}
    </ol>
  );
}

export default App;

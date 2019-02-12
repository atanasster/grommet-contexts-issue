import React from 'react';
import { Box, Grommet, TextInput } from 'grommet';

const App = () => {
  return (
    <Grommet full>
          <Box>
            <TextInput
        placeholder='enter some text'
        suggestions={[
          { label: '1', value: '1'},
          { label: '2', value: '2'},
        ]}
      />
          </Box>
    </Grommet>
  );
}


export default App;

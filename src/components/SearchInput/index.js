import React from 'react';

import { SearchIcon } from '~/svgs';
import { InputArea, InputSearch, Loading } from './styles';

const SearchInput = ({ value, onChangeText, loading, placeholder }) => {
  return (
    <InputArea>
      <SearchIcon width={22} height={22} />
      <InputSearch
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      {loading && <Loading style={{ color: 'red' }} />}
    </InputArea>
  );
};

export default SearchInput;

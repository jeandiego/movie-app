import React from 'react';
import { ActivityIndicator } from 'react-native';
import { SearchIcon } from '~/svgs';
import { InputArea, InputSearch } from './styles';

const SearchInput = ({ value, onChangeText, loading, placeholder }) => {
  return (
    <InputArea>
      <SearchIcon width={22} height={22} />
      <InputSearch
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      {loading && <ActivityIndicator />}
    </InputArea>
  );
};

export default SearchInput;

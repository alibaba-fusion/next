import { Search as MeetSearch } from '@alifd/meet-react';
import NextSearch from '../index';

const Search = MeetSearch ? MeetSearch : NextSearch;

export default Search;

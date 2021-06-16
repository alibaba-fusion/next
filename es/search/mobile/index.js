import { Search as MeetSearch } from '@alifd/meet-react';
import NextSearch from '../index';

var Search = MeetSearch ? MeetSearch : NextSearch;

export default Search;
import React, { useState } from 'react';
import { FlatList } from 'react-native';

// Redux
import { searchRepository } from './thunks';
import { connect } from 'react-redux';

// Components
import ItemRepository from './ItemRepository';

// Style
import { SearchWrapper, SearchInputWrapper } from '../../css/Styles';
import { FormInput } from '../../css/UserLocationStyles';

const SearchComponent = (props) => {

    const [searchQuery, setSearchQuery] = useState('tracktime-react-');
    const { searchLocation, repositories } = props;

    const changeInput = (searchQuery) => {
        setSearchQuery(searchQuery);
        searchLocation(searchQuery);
    }

    const renderItem = ({item}) => {
        return (<ItemRepository item={item}/>)
    }

    return (
        <SearchWrapper>
            <SearchInputWrapper style={{ flexDirection: 'column' }}>        
                <FormInput onChange={e => changeInput(e.nativeEvent.text)} value={searchQuery} placeholder={'Type something...'} />
            </SearchInputWrapper>
            <FlatList
                data={repositories}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.id)}
            />
        </SearchWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        repositories: state.searchData.repositories.items
    }
};

const mapDispatchToProps = (dispatch) => ({
    searchLocation: (searchQuery) => dispatch(searchRepository(searchQuery))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
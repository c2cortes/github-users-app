import React from 'react';

// Redux
import { searchRepository, sortRepository } from './thunks';
import { connect } from 'react-redux';

// Components
import ItemRepository from './ItemRepository';

// Style
import { Logo, SearchWrapper, RepositoriesList } from '../../css/Styles';

const SelectedItems = (props) => {
    const { selectedItems, navigation } = props;

    const renderItem = ({item}) => {
        return (<ItemRepository item={item} icons={false} onPressCallBack={ () => navigation.navigate('WebViewRepositoryScreen', { html_url: item.html_url }) }/>)
    }

    return (
        <SearchWrapper styles={{ flex: 1 }}>
            <Logo source={require('../../assets/images/GitHub-Mark-64px.png')}></Logo>
            <RepositoriesList
                data={selectedItems}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.id)}
            />
        </SearchWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedItems: state.searchData.selectedItems
    }
};

const mapDispatchToProps = (dispatch) => ({
    searchLocation: (searchQuery) => dispatch(searchRepository(searchQuery)),
    sortItems: (searchQuery) => dispatch(sortRepository(searchQuery))
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectedItems);
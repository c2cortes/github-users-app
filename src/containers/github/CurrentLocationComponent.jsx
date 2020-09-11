import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { loadUserLocation } from './thunks';
import { connect } from 'react-redux';

import styled from 'styled-components/native';
import { TextH3 } from '../../css/Styles';
import { FormInput } from '../../css/UserLocationStyles';

import Button from '../../components/Button';


const InputAddressWrapper = styled.View`
    margin-top: 5px;
    width: 100%;
    height: auto;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 1px 1px 4px #333;
`;

const LocationIcon = styled.Image`  
    margin-top: 15px;
    margin-left: 10px;
    margin-right: 10px;
`;

const EditPencilButton = styled.TouchableOpacity`  
    margin-top: 15px;
`;
const EditPencilIcon = styled.Image`  
    
`;

const CurrentLocationComponent = (props: any) => {
    
    const { setSearchLocationComponent } = props;

    return (
        <View>
            <TextH3>Actualmente te encuentras en esta dirección:</TextH3>
            <InputAddressWrapper style={{ flexDirection: 'row' }}>
                <LocationIcon source={require('../../assets/svg/location.png')} />
                <FormInput onClick={() => console.log('click text')} value={props.currentLocation.currentLocation.address} />
                <EditPencilButton onPress={() => setSearchLocationComponent(true)}>
                    <EditPencilIcon source={require('../../assets/svg/edit-pencil.png')} />
                </EditPencilButton>
            </InputAddressWrapper>
            <Button onPressCallBack={() => aceptFoundAddress()} Label={'Si, quiero mi pedido a esta dirección'} />
        </View>
    )
}

const mapStateToProps = (state: any) => {
    return {
        currentLocation: state.user.currentLocation
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    fetchUserLocation: (coords: Object) => dispatch(loadUserLocation(coords))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentLocationComponent);
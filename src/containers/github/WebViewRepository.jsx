import React from 'react';
import { WebView } from 'react-native-webview';

const WebViewRepository = (props) => {
    const { html_url } = props.route.params;
    return (
        <WebView source={{ uri: html_url }} />
    )
}

export default WebViewRepository;
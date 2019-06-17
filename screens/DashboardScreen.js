import React, { Component } from "react";
import{ View, Text, StyleSheet, Button, Alert, FlatList, StackNavigator} from "react-native";
import firebase from 'firebase';
import UserItem from '../components/UserItem';
import { ListItem } from 'react-native-elements';

const list = [
    {
        name: 'Amy Farha',
        subtitle: 'Vice President'
    },
    {
        name: 'Kim suhanmu',
        subtitle: 'turttle & crane '
    },
]



class DashboardScreen extends Component {

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem
          title={item.name}
          subtitle={item.subtitle}
          leftAvatar={{ source: { uri: item.avatar_url } }}
        />
    )
    renderHeader = () => {
        //View to set in Header
        return (
          <View style={styles.header_footer_style}>
            <Text style = {styles.textStyle}>Welcome, {firebase.auth().currentUser.displayName}! </Text>
          </View>
        );
    };

    ListViewItemSeparator = () => {
        return (
          //List Item separator View
          <View
            style={{ height: 0.5, width: '100%', backgroundColor: '#606070' }}
          />
        );
    };

    renderFooter = () => {
        //View to set in Footer
        return (
          <View style={styles.header_footer_style}>
            <Button title = "Sign out" onPress={() => firebase.auth().signOut()} />
          </View>
        );
    };

    render() {
        console.log(firebase.auth().currentUser);
        <View style = {styles.navbar} />
        return(
            <FlatList 
                style = {{marginTop: 20}}
                keyExtractor={this.keyExtractor}
                data={list}
                ListHeaderComponent = {this.renderHeader}
                ItemSeparatorComponent = {this.ListViewItemSeparator}
                ListFooterComponent={this.renderFooter}
                renderItem={this.renderItem}
            ></FlatList>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_footer_style: {
        width: '100%',
        height: 45,
        backgroundColor: '#606070',
    },
    textStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        padding: 7,
    },
});
export default DashboardScreen;


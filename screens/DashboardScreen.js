import React, { Component } from "react";
import{ View, Text, StyleSheet, Button, Alert, FlatList, TouchableOpacity} from "react-native";
import firebase from 'firebase';
import UserItem from '../components/UserItem';
import { ListItem } from 'react-native-elements';


const UserListItem = ({ user, onPress}) => {
    return(
        <TouchableOpacity onPress = {onPress}>
            <UserItem user = {user} chevron = {true} />
        </TouchableOpacity>
    );
};


class DashboardScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                    {
                        id: 0,
                        name: 'hohoho',
                        subtitle: 'ho~~~~~~'
                    },
                    {
                        id: 1,
                        name: 'Kim suhanmu',
                        subtitle: 'turttle & crane '
                    },
                    {   
                        id: 2,
                        name: 'Amy Farha',
                        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        subtitle: 'Vice President'
                    },
                    {
                        id: 3,
                        name: 'Chris Jackson',
                        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                        subtitle: 'Vice Chairman'
                    },
                ]
        };
    }

    
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
                keyExtractor={(item) => `${item.id}`}
                data={this.state.list}
                ListHeaderComponent = {this.renderHeader}
                ItemSeparatorComponent = {this.ListViewItemSeparator}
                ListFooterComponent={this.renderFooter}
                renderItem={({item}) => {
                    return(
                        <UserListItem user = {item}
                        onPress={() => Alert.alert(`${item.name} selected`)}
                    />
                    );
                }}

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


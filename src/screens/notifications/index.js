import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import Empty from '../../common/emptyScreen';
import NotificationFlatListComponent from '../../common/notificationFlatList';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: null,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.notifications ? (
          <Empty icon="bell" text="No notifications" />
        ) : (
          <View style={{flex: 1}}>
            <NotificationFlatListComponent
              notifications={this.state.notifications}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default withNavigation(Notifications);

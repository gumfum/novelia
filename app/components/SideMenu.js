import React, { Component, PropTypes } from 'react';
import { Text, ListView } from 'react-native';

class SideMenu extends Component {
  constructor() {
  	super();
  	const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  	this.state = {
  	  dataSource: ds.cloneWithRows(['row 1', 'row 2']),
  	}
  }

  render () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    );
  }
}

export default SideMenu;
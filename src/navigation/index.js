import React from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import Home from 'screens/public/HomeScreen';
import Article from 'screens/public/ArticleScreen';

import {actionCreator, types} from 'ducks';

const Stack = createStackNavigator();

const RootNavigator = ({...props}) => {
  return (
    <Stack.Navigator headerMode="none" mode="modal">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          cardStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
      <Stack.Screen
        name="Article"
        component={Article}
        options={{
          cardStyle: {
            backgroundColor: 'transparent',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = ({articles}) => ({articles});
export default connect(mapStateToProps, {actionCreator})(RootNavigator);

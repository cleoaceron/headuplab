import React from 'react';
import {connect} from 'react-redux';
import {actionCreator, types} from 'ducks';
import {View} from 'react-native';
import {ScrollContainer, ArticleCard} from 'components';

import styles from './style';

const HomeScreen = ({articles, ...props}) => {
  React.useEffect(() => {
    !articles.data.length && props.actionCreator({type: types.GET_ARTICLES});
  }, [articles, props]);

  return (
    <>
      <ScrollContainer>
        <View style={[styles.container]}>
          {articles.data.length > 0 &&
            articles.data.map((item, key) => (
              <ArticleCard
                key={key}
                title={item.title}
                description={item.description}
                urlToImage={item.urlToImage}
                url={item.url}
                author={item.author}
                publishedAt={item.publishedAt}
                navigation={props.navigation}
              />
            ))}
        </View>
      </ScrollContainer>
    </>
  );
};

const mapStateToProps = ({articles}) => ({articles});

export default connect(mapStateToProps, {actionCreator})(HomeScreen);

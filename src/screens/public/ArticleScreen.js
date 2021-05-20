import React from 'react';
import {connect} from 'react-redux';
import {actionCreator} from 'ducks';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import {ScrollContainer} from 'components';

import styles from './style';

const ArticleScreen = ({articles, ...props}) => {
  const [article, setArticle] = React.useState([]);
  React.useEffect(() => {
    filterArticles();
  }, []);

  const filterArticles = () =>
    articles.data
      .filter(item => item.author === props.route.params.author)
      .map(item => setArticle(item));

  return (
    <>
      <ScrollContainer>
        <View style={[styles.container]}>
          <Text style={styles.title}>{article.title}</Text>
          <Image
            source={{uri: article.urlToImage}}
            resizeMode="cover"
            style={styles.image}
          />
          <View
            style={{
              alignContent: 'flex-start',
            }}>
            <Text
              style={[
                styles.marginText,
              ]}>{`Published: ${article.publishedAt}`}</Text>
            <Text
              style={[
                styles.marginText,
              ]}>{`Website Link: ${article.url}`}</Text>
            <Text
              style={[
                styles.marginText,
              ]}>{`Description: ${article.description}`}</Text>
            <Text
              style={[styles.marginText]}>{`Content: ${article.content}`}</Text>
          </View>
        </View>
      </ScrollContainer>
    </>
  );
};

ArticleScreen.propTypes = {
  articles: PropTypes.any,
};

const mapStateToProps = ({articles}) => ({articles});

export default connect(mapStateToProps, {actionCreator})(ArticleScreen);

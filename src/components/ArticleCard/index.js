import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Card, Button} from 'react-native-elements';
import styles from './style';

const ArticleCard = ({
  title,
  description,
  urlToImage,
  url,
  author,
  publishedAt,
  navigation,
}) => {
  const handleNavigate = () => {
    console.log(navigation);
    navigation.navigate('Article', {
      author,
    });
  };

  return (
    <>
      <Card>
        <Card.Title>{title}</Card.Title>
        <Card.Divider />
        <Card.Image source={{uri: urlToImage}} />
        <View style={styles.author}>
          <Text style={[styles.boldText, {fontSize: 14}]}>{author}</Text>
          <Text style={styles.boldText}>{publishedAt}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity onPress={handleNavigate} style={styles.cardButton}>
          <Text style={[styles.boldText, {fontSize: 16}]}>Learn More</Text>
        </TouchableOpacity>
      </Card>
    </>
  );
};

export default ArticleCard;

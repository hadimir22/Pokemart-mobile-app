import React, {Component} from 'react';
import StarRating from 'react-native-star-rating';

class StarRatingComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StarRating
        disabled={this.props.disabled}
        maxStars={5}
        rating={this.props.rating}
        fullStarColor={'gold'}
        starSize={20}
      />
    );
  }
}

export default StarRatingComponent;

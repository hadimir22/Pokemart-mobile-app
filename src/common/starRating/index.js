import React, {Component} from 'react';
import StarRating from 'react-native-star-rating';

class StarRatingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  render() {
    return (
      <StarRating
        disabled={this.props.disabled}
        maxStars={5}
        rating={this.props.rating}
        fullStarColor={'gold'}
        starSize={20}
        selectedStar={rating => this.onStarRatingPress(rating)}
      />
    );
  }
}

export default StarRatingComponent;

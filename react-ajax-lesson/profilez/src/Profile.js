import React, { Component } from 'react';
import './Profile.css';
import getRandomUser from './services/randomuser';
import getRandomString from './services/hipsum';
const truncate = (str, words) => str.split(" ").splice(0, words).join(" ");
const randInt = (min, max) => Math.floor(Math.random() * max) + min;
class Profile extends Component {
  constructor() {
    super();
    this.nextButton = React.createRef();
    this.state = {
      username: '...',
      bio: '...',
      description: '...',
      avatar: require('./avatar-blank.png'),
      likes: '...',
      followers: '...',
      friends: '...',
    }
  }
  componentDidMount() {
    this.newUser();
  }
  newUser = async () => {
    const u = await getRandomUser();
    const bio = await getRandomString(1);
    const description = await getRandomString(2);
    this.setState( (prevState) => ({
      username: `${u.name.title} ${u.name.first} ${u.name.last}`,
      avatar: u.picture.large,
      bio: truncate(bio, 3),
      description: truncate(description, 6),
      likes: randInt(50, 200),
      followers: randInt(100, 300),
      friends: randInt(150, 400),
    }) );
  }
  handleNext = () => {
    this.nextButton.current.innerText = 'Again!';
    this.newUser();
  }
  render() {
    return (
      <div className="user-profile">
        <img className="avatar" src={this.state.avatar} alt="Avatar" />
        <div className="username">{this.state.username}</div>
        <div className="bio">{this.state.bio}</div>
        <div className="description">{this.state.description}</div>
        <ul className="data">
          <li>
            <span className="entypo-heart"> {this.state.likes}</span>
          </li>
          <li>
            <span className="entypo-eye"> {this.state.followers}</span>
          </li>
          <li>
            <span className="entypo-user"> {this.state.friends}</span>
          </li>
        </ul>
        <div>
          <button ref={this.nextButton} onClick={this.handleNext}>Next</button>
        </div>
      </div>
    )
  }
}
export default Profile;
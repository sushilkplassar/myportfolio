import React from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "../components/Card";

import gitHub from "../assets/images/gitHub.png";
import youTube from "../assets/images/youTube.jpeg";
import linkedIn from "../assets/images/linkedIn.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "LinkedIn",
          subTitle: "LinkedIn profile",
          imgSrc: linkedIn,
          link: "https://www.linkedin.com/in/sushilkplassar/",
          selected: "false"
        },
        {
          id: 1,
          title: "GitHub",
          subTitle: "GitHub profile",
          imgSrc: gitHub,
          link: "https://github.com/sushilkplassar",
          selected: "false"
        },
        {
          id: 2,
          title: "YouTube",
          subTitle: "YouTube profile",
          imgSrc: youTube,
          link: "https://www.youtube.com/channel/UC0aaLRIJnWiqOT7jTYMNAiw",
          selected: "false"
        }
      ]
    };
  }

  handleCardClick = (id, card) => {
    console.log(id);
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;

import React, { Component } from "react";
import {
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Carousel,
} from "reactstrap";

const items = [
    {
        src: 'https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304d44e087a2.50487834583.jpg&w=2048&h=1536',
        altText: 'Clubhouse1'
    },
    {
        src: 'https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304d444090b1.02296129191.jpg&w=2048&h=1536',
        altText: 'Clubhouse2'
    },
    {
        src: 'https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304d165ad882.78160614438.jpg&w=2048&h=1536',
        altText: 'Clubhouse3'
    },
    {
        src: 'https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304176294345.83205057554.jpg&w=2048&h=1536',
        altText: 'Bike Room'
    },
    {
        src: 'https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304ce3b9ba04.54911116474.jpg&w=2048&h=1536',
        altText: 'Gym1'
    },
    {
        src: 'https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/15273/60304ce37f4372.10003018832.jpg&w=2048&h=1536',
        altText: 'Gym2'
    }
];

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length -1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
                    <img className="d-block w-100" src={item.src} alt={item.altText} />
                </CarouselItem>
            );
        });

        return (
            <div>
                <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
                    <CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
                </Carousel>
            </div>
        );
    }
}

export default Home;
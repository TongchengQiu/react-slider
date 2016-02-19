var Slider = React.createClass({
    getInitialState: function() {
        return {
            nowLocal: 0,
        };
    },
    getDefaultProps: function() {
        return {
            speed: 2,
            delay: 2,
            pause: true,
            autoplay: true,
            dots: true,
            arrows: true,
        };
    },
    turn: function(n) {
        var _n = this.state.nowLocal+n;
        if(_n < 0) {
            _n = _n + this.props.src.length;
        }
        if(_n >= this.props.src.length) {
            _n = _n - this.props.src.length;
        }
        this.setState({nowLocal: _n} , function() {
            var SliderUl = this.refs.SliderUl.getDOMNode();
            SliderUl.style.left = -100*this.state.nowLocal + "%";
        });
    },
    _style: {

    },
    autoPlay: null,
    goPlay: function() {
        if(this.props.autoplay) {
            var delay = this.props.delay*1000;
            this.autoPlay = setInterval(function() {
                // alert('.');
                this.turn(1);
            }.bind(this) , delay);
        }
    },
    componentDidMount: function() {
        this.goPlay();
    },
    pausePlay: function() {
        clearInterval(this.autoPlay);
    },
    render: function() {
        this._style.transitionDuration = this.props.speed + "s";
        this._style.width = this.props.src.length*100 + "%";
        var itemKey = 0;
        var itemNodes = this.props.src.map(function (src) {
            return (
                <SliderItem src={src} count={this.props.src.length} key={itemKey++} />
            );
        }.bind(this));
        var arrows = [];
        arrows[0] = <SliderArrows option={-1} click={this.turn} >&lt;</SliderArrows>;
        arrows[1] = <SliderArrows option={1} click={this.turn} >&gt;</SliderArrows>;
        var dots = [];
        dots[0] = <SliderDots click={this.turn} count={this.props.src.length} nowLocal={this.state.nowLocal} />;
        return (
            <div className="Slider" onMouseOver={this.props.pause?this.pausePlay:null} onMouseOut={this.props.pause?this.goPlay:null}>
                <ul style={this._style} ref="SliderUl">
                    {itemNodes}
                </ul>
                {this.props.arrows?arrows:null}
                {this.props.dots?dots:null}
            </div>
        );
    }
});

var SliderItem = React.createClass({
    _style: {

    },
    render: function() {
        var count = this.props.count;
        this._style.width = 100/count + "%";
        return (
            <li className="SliderItem" style={this._style}>
                <img src={this.props.src} alt="pic" />
            </li>
        );
    }
});

var SliderArrows = React.createClass({
    handleClick: function() {
        this.props.click(this.props.option);
    },
    _style: {

    },
    render: function() {
        this._style.right = this.props.option==1?"0":null;
        this._style.left = this.props.option==1?null:"0";
        return (
            <span className="SliderArrows" style={this._style} onClick={this.handleClick}>{this.props.children}</span>
        );
    }
});

var SliderDots = React.createClass({
    _style: {

    },
    handleClick: function(event) {
        var len = event.target.className.substring(4,6) - this.props.nowLocal;
        this.props.click(len);
    },
    render: function() {
        var dotNodes = [];
        for(var i = 0; i < this.props.count; i++) {
            if(i == this.props.nowLocal) {
                dotNodes[i] = <span key={i} className={"dots"+i+" dotSlect"} onClick={this.handleClick}></span>;
            } else {
                dotNodes[i] = <span key={i} className={"dots"+i} onClick={this.handleClick}></span>;
            }
        }
        return (
            <div className="DotsWrap">
                {dotNodes}
            </div>
        );
    }
});

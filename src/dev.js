import './dev.scss';
import ReactVideo from './main';


class App extends React.Component {
  componentDidMount() {

  }

  _click1() {
    this.refs.rv._playVideo();
  }

  render() {
    let videoSource = "http://zhulogic-formal.oss-cn-hangzhou.aliyuncs.com/market_video/%E5%88%86%E4%BA%AB%E5%AE%B6%E8%A7%86%E9%A2%91.mp4";
    return (
      <div className="hello-react-video">
        <button onClick={this._click1.bind(this)}>play video</button>
        <ReactVideo ref="rv" source={videoSource}/>
      </div>
    );
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

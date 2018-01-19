/**
 * Created by tony on 2017/5/11.
 */
import './style.scss';
import documentAppend from 'react-document-append';
import calcStyle from 'calc-style';
import {ReactBackdrop} from 'react-backdrop';
import noop from 'noop';

export default class reactComponentsTemplate extends React.Component {
  static propTypes = {
    source: PropTypes.string,
    position: PropTypes.string,
  };
  state = {
    hasLoad: false
  };

  static defaultProps = {
    source: '',
    position: 'middle'

  };

  componentWillMount() {

  }

  _playVideo() {
    this.setState({
      hasLoad: true
    });
    const {source} = this.props;
    document.getElementById('dcSource').src = source;
    document.getElementById('dcVideo').load();
    document.getElementById('dcVideo').play();
    setTimeout(() => {
      this.setState({
        hasLoad: false
      });
    }, 500);
  }

  render() {
    const {className} = this.props;
    const {hasLoad} = this.state;
    return (
      <div className={classNames('react-video-container', className)}>
        <video id="dcVideo" className="dc-video" preload="auto" controls="controls">
          <source id="dcSource" src="" type="video/mp4"/>
        </video>
        {
          hasLoad && <div className="video-play loading">
            <img src="http://zhulogic-formal.oss-cn-hangzhou.aliyuncs.com/market_icon/loading2.gif" alt=""/>
          </div>
        }

      </div>

    )
  }
}

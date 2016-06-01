export default class Icon extends React.Component {

    static displayName = 'Icon';

    static defaultProps = {
        width: 32,
        height: 32
    };

    static propTypes = {
        id: React.PropTypes.string.isRequired,
        width: React.PropTypes.number,
        height: React.PropTypes.number
    };

    render() {
        const { id, width, height } = this.props;

        return (
            <svg className="svg-icon" width={width} height={height}>
                <use xlinkHref={`#icon-${id}`}></use>
            </svg>
        );
    }
}

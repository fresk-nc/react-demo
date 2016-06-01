import Icon from 'components/Icon';

export default class App extends React.Component {

    static displayName = 'App';

    render() {
        return (
            <div>
                <button>
                    <Icon id="MainToolbar-Compose" />
                </button>
                <button>
                    <Icon id="MainToolbar-Archive" />
                </button>
                <button>
                    <Icon id="MainToolbar-AddTemplate" />
                </button>
                <button>
                    <Icon id="MainToolbar-Delete" />
                </button>
                <button>
                    <Icon id="MainToolbar-Edit" />
                </button>
            </div>
        );
    }
}

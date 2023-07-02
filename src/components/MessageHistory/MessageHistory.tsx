export interface MessageDTO {
    id: string;
    from: {name: string};
    type: 'response' | 'message' | 'typing';
    time: string;
    text?: string;
}

type MessageProps = MessageDTO;

interface MessageHistoryProps {
    list: MessageDTO[];
}

export function MessageHistory({list}: MessageHistoryProps) {
    return (
        <ul>
            {list.map((item) => {
                if (item.type === 'message') {
                    return <Message key={item.id} {...item} />;
                } else if (item.type === 'response') {
                    return <Response key={item.id} {...item} />;
                } else {
                    return <Typing key={item.id} {...item} />;
                }
            })}
        </ul>
    );
}

function Message({from, time, text}: MessageProps) {
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name">
                    <i className="fa fa-circle online"></i> {from.name}
                </span>
                <span className="message-data-time">{time}</span>
            </div>
            {text && <div className="message my-message">{text}</div>}
        </li>
    );
}
function Response({from, time, text}: MessageProps) {
    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">{time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{from.name}</span>
                <i className="fa fa-circle me"></i>
            </div>
            {text && <div className="message other-message float-right">{text}</div>}
        </li>
    );
}
function Typing() {
    return <div>Typing</div>;
}

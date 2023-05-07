import '../style/Collapse.css';

function Collapse(props) {
    return (
        <div className="housing-page__collapse">
            <p className="housing-page__collapse__title">
                <span>{props.title}</span>
                <i className="fa fa-chevron-up"></i>
            </p>
            <p className="housing-page__collapse__content">
                {props.content}
            </p>
        </div>
    );
}
    
export default Collapse;
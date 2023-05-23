export default function Card(props) {

    return(
        <div>
            <h2>{props.value.title}</h2>
            <div>
                <h2>{props.value.date}</h2>
            </div>
        </div>
    )
}
import { Container } from './cardStyle'

const Card = (props) => {
    return (
        <Container>
            <img src={props.img}/>
            <h1>{props.text}</h1>
            <p>{props.price}</p>
            {/*<button>Saiba mais</button>*/}
            {props.children}
        </Container>
    )
}

export default Card


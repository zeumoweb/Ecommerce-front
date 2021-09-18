const Card = (props) => {
    return ( 
        <div className='rounded-lg bg-white shadow-xl'>
            { props.children }
        </div>
     );
}
 
export default Card;
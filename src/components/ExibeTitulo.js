export default function ExibeTitulo ({posterURL, title, date, name}) {

    return (
        <div className='box-bot'>
            <div className='box-title'>
                    <img src={posterURL} alt={title} /></div>
                <div>
                    {!!date ? <><h3>{title}</h3><h3>{date} - {name}</h3></> : <h3>{title}</h3>}
                </div>
        </div>
    );
}
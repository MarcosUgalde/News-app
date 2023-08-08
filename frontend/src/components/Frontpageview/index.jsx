function Frontpageview({ url }) { 
    console.log('url que llega al Frontpagevie: ', url)

    return (
        <>
            Aquí se renderiza la pantalla
            <div>
                <iframe src={url} title='External site'></iframe>                
            </div>
        </>
    )
}

export default Frontpageview
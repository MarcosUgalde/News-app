function Frontpageview({ url }) { 
    console.log('url que llega al Frontpagevie: ', url)

    return (
        <>
            <div>
                <iframe src={url} title='External site' width='500px' height='300px'></iframe>                
            </div>
        </>
    )
}

export default Frontpageview
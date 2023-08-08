function Frontpageview({ url }) { 
    console.log('url que llega al Frontpagevie: ', url)

    return (
        <>
            <div>
                <iframe src={url} title='External site'></iframe>                
            </div>
        </>
    )
}

export default Frontpageview
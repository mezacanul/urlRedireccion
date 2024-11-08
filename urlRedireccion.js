function obtenerURL(termino) {
    var urlPrefijo = "https://www.google.com/search?q="
    var busquedaArray = termino.split(" ")
    var busquedaFormateada = ""

    busquedaArray.forEach(palabra => {
        busquedaFormateada += palabra + "+"
    })

    var url = urlPrefijo + busquedaFormateada

    return url 
}
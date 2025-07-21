export const recibirNotificacion = (req, res) => {
    try {
        const body = req.body
        return res.json({
            "message": "Se recibió la data",
            "data": body
        })
    } catch (error) {
        return res.json({
            "message": "Ocurrió un error",
            "error": e
        })
    }
}
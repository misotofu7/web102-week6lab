import { useEffect, useState } from "react"
import { useParams } from "react-router"
const API_KEY = import.meta.env.VITE_APP_API_KEY

function CoinDetail() {
    const { symbol } = useParams()
    const [fullDetails, setFullDetails] = useState(null)

    useEffect(() => {
        const fetchCoinDetail = async () => {
            const details = await fetch(
                `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD,JPY,EUR&api_key=${API_KEY}`
                // https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR
            )
        
            const description = await fetch(
                `https://min-api.cryptocompare.com/data/all/coinlist?fsym=${symbol}&tsyms=USD,JPY,EUR&api_key=${API_KEY}`
            )

            // continue code here
            const detailsJson = await details.json()
            const descripJson = await description.json()

            setFullDetails({
                numbers: detailsJson.DISPLAY,
                textData: descripJson.Data
            })
        }
    })

    return (

    )
}

export default CoinDetail
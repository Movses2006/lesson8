import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import Favorite from "../Favorites";
import "./style.css"

const Home = () => {
    const API = "https://online-shop-react.vercel.app/cardsList.json";
    const [petHome, setPetHome] = useState([]);
    const [favorite, setFavorite] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            setPetHome(data);
        } catch (error) {
            console.error("Error", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    const isFavorite = (articul) =>{
        setFavorite(favorite)
    }

    return (
        <Layout>
            <div className="cardPage">
                {petHome.map(({ title, price, articul, color, imgSrc }) => (
                    <div className="Card" key={articul}>
                        <img src={"https://online-shop-react.vercel.app/" + imgSrc} alt={title} />
                        <button onClick={() => isFavorite(articul)}>
                        Favorite
                        </button>
                        <h3>{title}</h3>
                        <h4>Color: {color}</h4>
                        <h4>Articul: {articul}</h4>
                        <h5>{price} UAH</h5>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Home;

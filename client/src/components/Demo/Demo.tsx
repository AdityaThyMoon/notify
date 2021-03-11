import React, { useState } from 'react'

import "./Demo.scss";

import axios from "axios";

interface IProps {
    phoneSrc: string
}

function Demo({ phoneSrc }: IProps) {
    const [keyword, setKeyword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [articles, setArticles] = useState([{title: "", description: ""}]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [visibility, setVisibility] = useState(0);
    const [visibility1, setVisibility1] = useState(0);

    const handleSubmit = async (evt: any) => {
        evt.preventDefault();
        setVisibility(1);

        let article = {
            title: "Searching for news articles about " + keyword + "...",
            description: ""
        }
        setArticles([article]);

        const options = {
            q: keyword,
            category: '',
            language: 'en',
            country: 'us',
            number: phoneNumber
        };
        await axios.get('https://notify-sms-server.herokuapp.com/news', { params: options }).then(res => {
            setVisibility1(1);
            setTitle("Title: ");
            setDescription("Summary: ");
            setArticles(res.data.articles);
        }).catch(err => {
            setVisibility1(1);
            let article = {
                title: "No articles were found",
                description: "Please try again"
            }
            setArticles([article]);
            console.log(err);
        });
        setKeyword("");
        setPhoneNumber("");
    }

    return (
        <div id = "demo" className = "demo">
            <div className = "form">
                <h2>Try It Out!</h2>
                <p>
                    <b className = "bold-text">Instructions for use:</b> <br/>
                    Enter the desired keyword that you want to receive a news update about. <br/>
                    You can also enter your phone number if you want this news update to go straight to your phone!
                </p>
                <form onSubmit = {handleSubmit}>
                    <table>
                        <tr>
                            <td align = "right">Enter your desired news keyword:</td>
                            <td align = "left">
                                <input type = "text" value = {keyword} onChange = {e => setKeyword(e.target.value)} required/>
                            </td>    
                        </tr>
                        <tr>
                            <td align = "right">Enter your phone number (Optional):</td>
                            <td>
                                <input type = "text" value = {phoneNumber} onChange = {e => setPhoneNumber(e.target.value)}/>
                            </td>
                        </tr>
                            <td>

                            </td>
                    </table>
                    <input id = "submit" type = "submit" value = "Submit"/>
                </form>
            </div>
            {/*<img src = {phoneSrc} alt = "phone"/>*/}
            <div className="container">
                <div className="center-col">
                    <ul>
                        {articles.map(article => (
                            <div>
                                <li className="li" key={``} style={{opacity: visibility}}>{ `${title} ${article.title}`}</li>
                                <li className="li1"key={``} style={{opacity: visibility1}}>{ `${description} ${article.description}`}</li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Demo;

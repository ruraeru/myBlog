import { useEffect, useState } from "react";
import Contents from "../Contents-json";
import styled from "../App.module.css";
import { Link } from "react-router-dom";
const ContentsCard = ({ select }) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(Contents);
    }, []);

    const mapToComponents = (datas) => {
        datas.sort();
        datas = datas.filter((data) => {
            if (select === "") {
                return data;
            }
            else if (data.tags.indexOf(select) > -1) {
                return true;
            }
            return null;
        });
        return datas.map((data, index) => (
            <Link to={data.link && data.link ? data.link : ""} key={index}>
                <div className={styled.solid}>
                    <div>
                        <img className={styled.img} src={data.Imgurl} alt={`${data.title} 이미지`} />
                    </div>
                    <div>
                        <div className={styled.DayDiv}>
                            <ul className="tags">
                                {data.tags.map((tag, index) => (
                                    <li style={{ fontSize: "10px", fontWeight: "bold", border: "solid 3px #fbcb43" }} key={index}>#{tag}</li>
                                ))}
                            </ul>
                            <div>
                                <p>2022-08-11</p>
                            </div>
                        </div>
                        <div className={styled.title}>
                            <div>
                                <h1>{data.title}</h1>
                            </div>
                            <div>
                                <h4 className={styled.description}>{data.description}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        ))
    }
    return (
        <div className={styled.Div}>
            {mapToComponents(list)}
        </div>
    );
};

export default ContentsCard;
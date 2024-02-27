import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function BoardView() {
    let { id } = useParams();
    const [board, setBoard] = useState({});
    const [boardview, setBoardview] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let url = process.env.REACT_APP_HOST_IP + "board/view/" + id;

        axios.get(url)
            .then((res) => {
                setBoard(res.data);
            })
            .catch((error) => {
                console.error("Error fetching board data: ", error);
            });
    }, [id]);

    useEffect(() => {
        const getData = async () => {
            let url = process.env.REACT_APP_HOST_IP + "/board/list/view/" + id;
            let result = await axios.get(url);
            setBoardview(result.data);
            setLoading(true);
        }

        getData();
    }, [id]);

    return (
        <div className="container" style={{ marginTop: "80px" }}>
            <h2>게시판 상세보기</h2>
            {loading ? (
                <table className="table table-hover" style={{ marginTop: "30px" }}>
                    <tbody>
                        <tr className="table-secondary">
                            <th>제목</th>
                            <td colSpan="5">{boardview.title}</td>
                        </tr>
                        <tr>
                            <th>작성자</th>
                            <td>{boardview.title}</td>
                            <th>작성일</th>
                            <td>{boardview.date}</td>
                            <th>조회수</th>
                            <td>12</td>
                        </tr>
                        <tr>
                            <th colSpan="6" className="table-secondary">내용</th>
                        </tr>
                        <tr>
                            <td colSpan="6">
                                {boardview.contents}
                            </td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>Loading...</p>
            )}

            <div className="container mt-3" style={{ textAlign: "right" }}>
                <a href="#" className="btn btn-secondary">Link Button</a>
                <button type="button" className="btn btn-secondary">Button</button>
                <input type="button" className="btn btn-secondary" value="Input Button" />
                <input type="submit" className="btn btn-secondary" value="Submit Button" />
                <input type="reset" className="btn btn-secondary" value="Reset Button" />
            </div>

            <div className="container mt-3" style={{ textAlign: "right" }}>
                <Link to="/board/list" className="btn btn-secondary">Back to List</Link>
            </div>
        </div>
    );
}

export default BoardView;

import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BoardList() {
    //최소한 배열이 필요 
    const [boardList, setBoardList] = useState([]); 
    const [loading, setLoading] = useState(false); 
    const hosturl = process.env.REACT_APP_HOST_IP;

    //데이터 통신 - 데이터바인딩, mount 할때, unmount할때 변수값들이 바뀔때 
    //호출된다. 두번째 매개변수인 배열에 내가 감시하고자 하는 변수 
    //배열의 경우에는 참조의 참조가 되서 
    //무한 렌더링 
    let loadData=async()=>{
      let url = hosturl+"/board/list"; //backend api url 
    
      let result = await axios.get(url);
      console.log( result.data );
      setBoardList(result.data);
      setLoading(true); //
    }

    //useEffect( ()=>{}); //계속 렌더링 
    // useEffect( ()=>{}, []); 처음에 콤포넌트 나타날때, 사라질때 
    // useEffect( ()=>{}, [변수명]); //해당 변수값이 바뀔때 마다 호출 
    // useEffect( ()=>{}, [배열]); X - 배열은 참조의 참조라서 데이터 통신해서 
    //                                배열주소가 바뀐다. 무한 렌더링 상태 
    // loading -> 맨처음 컴포넌트가 나타날때  boardList.map 함수가 boardList
    // 객체가 만들어지지않아서 map 함수가 undefined 가 되는 상태가 발생 
    // loading = false로 놓고 네트워크 통신 성공할때 true로 넣고 
    // boardList.map 을 사용할때 loading 을 true일때 출력하면 항상 성공 
    useEffect( ()=>{
      //1.ajax통신수단( fetch, axios, xmlhttprequest)
      /*axios.get(url)
      .then((res)=>{
        setLoading(!loading); //토글시킴 
      })
      .catch((error)=>{})
      */
      //await 를 사용할때 주의점 await 를 사용하는 함수에 반드시 async가 있어야한다
      loadData();
    }, [loading])

    return (     
    <div className="container" style={{"marginTop":"20px"}}>
    <h2>게시판 목록</h2>

    <div className="input-group mb-3" style={{"marginTop":"20px"}}>
        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
            선택하세요
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">제목</a></li>
          <li><a className="dropdown-item" href="#">내용</a></li>
          <li><a className="dropdown-item" href="#">제목+내용</a></li>
        </ul>
        <input type="text" className="form-control" placeholder="Search"/>
        <button className="btn btn-secondary" type="submit">Go</button>
      </div>

    <table className="table table-hover ">
        <colgroup>
          <col width="8%"></col>
          <col width="*"></col>
          <col width="12%"></col>
          <col width="12%"></col>
        </colgroup>
        <thead className="table-secondary">
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {
            loading==true?
            boardList.map( (boardItem, key)=>{
              return(              
                <tr key={key}>
                  <td>{boardItem.id}</td>
                  <td><Link to={"/board/view/"+boardItem.id}>{boardItem.title}</Link></td>
                  <td>{boardItem.writer}</td>
                  <td>{boardItem.wdate}</td>
                </tr>
              )
             })
          :
          <tr><td colSpan="4">데이터가 없습니다.</td></tr>
          }
        </tbody>
      </table>


      <ul className="pagination  justify-content-center">
        <li className="page-item disabled"><a className="page-link" href="#">first</a></li>
        <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">4</a></li>
        <li className="page-item"><a className="page-link" href="#">5</a></li>
        <li className="page-item"><a className="page-link" href="#">Next</a></li>
        <li className="page-item"><a className="page-link" href="#">last</a></li>
      </ul>
   
      <div className="container mt-3" style={{"textAlign":"right"}}>
        <a href="#" className="btn btn-secondary">Link Button</a>
        <button type="button" className="btn btn-secondary">Button</button>
        <input type="button" className="btn btn-secondary" value="Input Button"/>
        <input type="submit" className="btn btn-secondary" value="Submit Button"/>
        <input type="reset" className="btn btn-secondary" value="Reset Button"/>
      </div>
      
</div> );
}

export default BoardList;
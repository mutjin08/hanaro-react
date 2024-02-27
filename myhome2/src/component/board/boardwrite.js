import axios from 'axios';
import { useState } from 'react';
function BoardWrite() {
    const [title, setTitle] = useState("");
    const [writer, setWriter] = useState("");
    const [contents, setContents] = useState("");

    const onChange = e => {
      switch(e.target.id){
        case "title": setTitle(e.target.value); break;
        case "writer": setTitle(e.target.value); break;
        case "contents": setTitle(e.target.value); break;
      }
    }

    const btnSave = () => {
      let url = process.env.REACT_APP_HOST_IP+"/board/save";
      axios.post(
        url, {title:title, writer:writer, contents:contents, wdate:"2024-02-23"}
      ).then((res)=>{
        //등록 후 이동을 해야 한다 (list page로 이동)
        //location.href = "/board/list"
        //anchor tag
        //스택구조임 useNavigate
        history("/board/list");
      })
    }

    return (
        <div className="container" style={{marginTop:"80px"}}>
        <h2>게시판 쓰기</h2>

        <table className="table table-hover " style={{marginTop:"30px"}}>
            <colgroup>
                <col width="25%"/>
                <col width="*"/>
            </colgroup>
        
            <tbody>
              <tr>
                <td>제목</td>
                <td>
                    <div className="mb-3" style={{marginTop:"13px"}}>
                        <input type="text" className="form-control" id="title" name="title" 
                        placeholder="제목을 입력하세요" />
                    </div>
                </td>
              </tr>       
              <tr>
                <td>작성자</td>
                <td>
                    <div className="mb-3"style={{marginTop:"13px"}}>
                        <input type="text" className="form-control" id="writer" name="writer" 
                        placeholder="이름을 입력하세요" />
                    </div>
                </td>
              </tr>      
              <tr>
                <td>내용</td>
                <td>
                    <div className="mb-3" style={{marginTop:"13px"}}>
                      <textarea onChange={onChange} className="form-control" rows="5" id="contents" name="contents"></textarea>
                    </div>
                </td>
              </tr>          
            </tbody>
          </table>
       
          <div className="container mt-3" style={{textAlign:"right"}}>
                <a href="#" className="btn btn-secondary">Link Button</a>
                <button type="button" className="btn btn-secondary">Button</button>
                <input type="button" className="btn btn-secondary" value="Input Button"/>
                <input type="submit" className="btn btn-secondary" value="Submit Button"/>
                <input type="reset" className="btn btn-secondary" value="Reset Button"/>
            </div> 

          <div className="container mt-3" style={{textAlign:"right"}}>
            <button type="button" className='btn btn-secondary'></button>
          </div>
    </div>
        );
}

export default BoardWrite;
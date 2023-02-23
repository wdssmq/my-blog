/*
 * @Author: Mowang
 * @Date: 2023-02-10 15:49:36
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\web\src\views\home\index.tsx
 */
import { HttpGetResp, PageResult } from '../../../src/typings/global'
import { useQuery, UseQueryResult } from "react-query"
import { getPostPage } from '../../BlogFetch/home'
const userPic: string = "https://www.avatar.bio/avatar/1531780018@qq.com?bc=DAF1FF&tc=555555&t=AU&s=48"
const cover: string = "https://www.wdssmq.com/zb_users/theme/acgMora/var/noimg/3.webp"


// 文章列表
function index() {
  const { data, isLoading, error }: UseQueryResult<HttpGetResp<PageResult>> = useQuery('page', getPostPage)
  console.log(data, 111);
  if (data?.code == 200) {
    return (
      <div className="postList">
        {data?.data?.result?.map((item: any, index: number) => {
          return (
            <div className="post-list-item mb-3 rounded-lg shadow-lg bg-white p-4" key={index}>
              <div className="post-item-user flex flex-row  items-center mb-2">
                <div className="pic">
                  <img src={userPic} className="rounded-full border-2 border-white shadow-md w-50 h-50" />
                </div>
                <div className="info ml-4">
                  <div className="user text-lg text-gray-500	"> 魔王 </div>
                  <div className="user-date text-xs	text-gray-400	"> 3天前 </div>
                </div>
              </div>
              <div className="post-list-cover rounded-lg border-2 ">
                <div className="cover border-2 border-white shadow-md h-24 w-full bg-cover bg-center " style={{ backgroundImage: `url(${cover})` }}>
                </div>
                <div className="post-list-box pl-2">
                  <div className="title  text-gray-500  text-lg leading-10	cursor-pointer	 hover:text-pink-300"> {item.content} </div>
                  <div className="desc flex ">
                    <div className="tag  mb-2 cursor-pointer text-sm text-blue-300	hover:text-pink-300 mr-2 pl-2">#TAG</div>
                    <div className="desc-content   mb-2 text-gray-400 text-sm">{item.desc}</div>
                  </div>
                </div>
              </div>
              <div className="">

              </div>
            </div>
          )
        })}

      </div>
    )
  } else {

  }
}


export default index
